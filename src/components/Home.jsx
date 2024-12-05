/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "../css/home.css";
import me from "../images/image.png";
import { Quote } from "./Quote.jsx";
export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h1>Hello There,</h1>
        <h1>I'm Vigneshwaran</h1>
        <p>
          Your friendly neighborhood <span>full-stack developer</span>, always
          up for a challenge! Whether I’m <span>coding</span> as a full-stack
          dev, learning something new as a <span>student</span>, or crafting{" "}
          <span>chatbots </span>, I live and breathe <span>JavaScript </span>
          with all the <span>ups</span> and <span>downs</span> that come with
          it!.
        </p>
      </div>
      <div className="thoughts">
        <Quote />
      </div>
      <div className="links">
        <img src={me} alt="moonji" />
        <a href="https://github.com/Vickeysvibe">Github</a>
        <a href="https://www.instagram.com/vickeys_vibe/">Instagram</a>
        <a href="https://www.linkedin.com/in/vigneshwaran-l-0b9004257/">
          Linkedin
        </a>
        <a href="https://www.fiverr.com/vickeyss?up_rollout=true">Fiverr</a>
      </div>
    </div>
  );
};
