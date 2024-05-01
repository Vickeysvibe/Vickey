import React from "react";
import "../css/info.css";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import logo from "../images/logo.png";
import github from "../svgs/github.svg";
import insta from "../svgs/insta.svg";
import linkedin from "../svgs/linkedin.svg";

export const Info = () => {
  return (
    <div className="info">
      <nav>
        <h1>Vibe</h1>
        <img src={logo} alt="logo" />
      </nav>
      <Skills />
      <Projects />
      <div className="link">
        <a href="https://github.com/Vickeysvibe">
          <img src={github} alt="" />
        </a>
        <a href="https://www.instagram.com/vickeys_vibe/">
          <img src={insta} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/vigneshwaran-l-0b9004257/">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};
