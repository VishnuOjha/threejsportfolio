import { useState } from "react";

export default function useAlert() {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  const showAlert = (show = true, text, type) =>
    setAlert({
      show: show,
      text,
      type,
    });

  const hideAlert = () =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });

  return {
    alert,
    showAlert,
    hideAlert,
  };
}
