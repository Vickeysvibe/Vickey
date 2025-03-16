import React from "react";
import "../css/blog.css";
import axios from "axios";
export const Contact = () => {
  const [message, setMessage] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://66448e866c6a6565870b0f9b.mockapi.io/messages", {
      message: message,
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
