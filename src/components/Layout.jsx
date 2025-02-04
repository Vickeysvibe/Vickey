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
import meee from "../images/meee.png";
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
              <img src={meee} alt="moonji" />
            </div>
            <h2>Hello, I'm Vigneshwaran</h2>
            <p>
              Your friendly neighborhood <span>full-stack developer</span>,
              always up for a challenge! Whether I’m <span>coding</span> as a
              full-stack dev, learning something new as a <span>student</span>,
              or crafting <span>chatbots </span>, I live and breathe{" "}
              <span>JavaScript </span>
              with all the <span>ups</span> and <span>downs</span> that come
              with it!.
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
