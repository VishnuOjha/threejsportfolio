import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setForm((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e?.preventDefault();
    setLoading(true);
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
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        //TODO : Show Error Message
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
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
    </section>
  );
};

export default Contact;
