import React from "react";
import "../css/blog.css";

export const Contact = () => {
  console.log(process.env.REACT_APP_RESEND);
  const [message, setMessage] = React.useState("");

  return (
    <div className="BlogList">
      <h1 className="topic">Contact me</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://formspree.io/f/xvgrpnan", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
          })
            .then(() => {
              alert("Message sent!");
              setMessage("");
            })
            .catch((err) => alert("Failed to send message."));
        }}
        className="contactForm"
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          rows={10}
          cols={50}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
