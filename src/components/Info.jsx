import React from "react";
import "../css/info.css";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import logo from "../images/logo.png";
import github from "../svgs/github.svg";
import insta from "../svgs/insta.svg";
import linkedin from "../svgs/linkedin.svg";
import { BlogList } from "./BlogList";
import fiverr from "../svgs/fiverr.svg";
import { Link } from "react-router-dom";
import { Contact } from "./Contact";
import { motion } from "framer-motion";

export const Info = () => {
  return (
    <div className="info">
      <nav>
        <Link to={"/"}>
          <h1>Vibe</h1>
        </Link>
        <img src={logo} alt="logo" />
      </nav>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Skills />
      </motion.div>
      <Projects />
      <BlogList />
      <Contact />
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
        <a href="https://www.fiverr.com/vickeyss?up_rollout=true">
          <img src={fiverr} alt="" />
        </a>
      </div>
    </div>
  );
};
