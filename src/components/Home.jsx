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
          Your <span>friendly neighbourhood</span> full-stack{" "}
          <span>JavaScript </span> junkie, always hungry for new challenges!
          Whether I'm crushing code as a <span>full-stack developer</span>,
          soaking up knowledge as a <span>student</span>, or crafting
          conversational magic with <span>chatbots</span>, one thing's for sure
          – I live, breathe, <span>hate and love JS</span>
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
