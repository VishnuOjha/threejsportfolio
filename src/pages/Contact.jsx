import { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../component/Loader";
import Fox from "../models/Fox";
import useAlert from "../hook/useAlert";
import Alert from "../component/Alert";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleNameChange = (e) => {
    setForm((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleFocus = () => setCurrentAnimation("walk");

  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e?.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vishnu",
          form_email: form.email,
          to_email: "ojhav0064@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        //TODO : Show Success Message
        //TODO : Hide an alert
        showAlert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((error) => {
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
        setLoading(false);
        console.log(error);
        //TODO : Show Error Message
        setCurrentAnimation("idle");
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-50 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="john"
            className="input"
            required
            value={form.name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          <label className="text-black-50 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="input"
            required
            value={form.email}
            onChange={handleNameChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          <label className="text-black-50 font-semibold">Message</label>
          <textarea
            name="message"
            placeholder="Let me know how can i help you!"
            rows={4}
            className="textarea"
            required
            value={form.message}
            onChange={handleNameChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="btn"
            onBlur={handleBlur}
            onFocus={handleBlur}
          >
            {isLoading ? "Sending...." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
