import React from "react";
import "../css/blog.css";
import axios from "axios";
import { Resend } from "resend";

export const Contact = () => {
  console.log(process.env.REACT_APP_RESEND);
  const resend = new Resend(process.env.REACT_APP_RESEND);
  const [message, setMessage] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://66448e866c6a6565870b0f9b.mockapi.io/messages", {
      message: message,
      time: new Date().toLocaleString(),
    });

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vickeydvk4@gmail.com",
      subject: "from portfolio",
      body: message,
    });

    alert("Message sent!");
    setMessage("");
  };
  return (
    <div className="BlogList">
      <h1 className="topic">Contact me</h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Message"
          rows={10}
          cols={50}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
