import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";

import { Container } from "./styles";
import "react-toastify/dist/ReactToastify.css";

export function Form() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isHuman, setIsHuman] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID as string,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY,
      );
      toast.success("Message sent successfully!");
      setFormData({
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
      setIsHuman(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset(); // Reset reCAPTCHA
      }
    }
  };

  return (
    <Container>
      <h2>Get in touch using the form below</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY ? (
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY as string}
            onChange={(_) => setIsHuman(true)}
          />
        ) : null}
        <button type="submit" disabled={!isHuman || loading}>
          {loading ? (
            <div className="spinner"></div>
          ) : (
            "Send"
          )}
        </button>
      </form>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
}
