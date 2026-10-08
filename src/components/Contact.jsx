import React, { useState } from "react";
import "../css/contact.css";
import { Reveal } from "./Reveal";

const FORM_ENDPOINT = "https://formspree.io/f/xvgrpnan";
const EMPTY_FORM = { email: "", message: "" };

const STATUS_TEXT = {
  sending: "Sending…",
  sent: "Message sent! I'll get back to you soon.",
  error: "Failed to send message. Please try again.",
};

export const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact">
      <Reveal>
        <h1 className="topic">Contact me</h1>
      </Reveal>
      <Reveal>
        <form onSubmit={handleSubmit} className="contactForm">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            aria-label="Your email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            aria-label="Message"
            rows={5}
            required
          />
          <button type="submit" disabled={status === "sending"}>
            Submit
          </button>
          <p className="form-status" role="status">
            {STATUS_TEXT[status]}
          </p>
        </form>
      </Reveal>
    </section>
  );
};
