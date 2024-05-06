/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../css/layout.css";
import { Home } from "./Home";
import { Info } from "./Info";
import github from "../svgs/github.svg";
import insta from "../svgs/insta.svg";
import linkedin from "../svgs/linkedin.svg";
import fiverr from "../svgs/fiverr.svg";
import me from "../images/image.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Quote } from "./Quote";

export function Layout() {
  return (
    <>
      <div className="layout">
        <Home />
        <Info />
      </div>
      <div className="mobileLayout">
        <nav>
          <h1>Vibe</h1>
          <img src={logo} alt="logo" />
        </nav>
        <div className="container">
          <div className="content">
            <div className="image">
              <img src={me} alt="moonji" />
            </div>
            <h2>Hello, I'm Vigneshwaran</h2>
            <p>
              Hey there! I'm your <span>friendly neighbourhood</span> full-stack{" "}
              <span>JavaScript </span> junkie, always hungry for new challenges!
              Whether I'm crushing code as a <span>full-stack developer</span>,
              soaking up knowledge as a <span>student</span>, or crafting
              conversational magic with <span>chatbots</span>, one thing's for
              sure – I live, breathe, <span>hate and love JS</span>
            </p>
            <div className="but">
              <Link to={"/works"}>
                <button>Explore {">"}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="qt">
          <Quote />
        </div>
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
    </>
  );
}
