/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "../css/home.css";
import me from "../images/image.png";
export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h1>Hello There,</h1>
        <h1>I'm Vigneshwaran</h1>
        <p>
          Hey there! I'm your <span>friendly neighbourhood</span> full-stack{" "}
          <span>JavaScript </span> junkie, always hungry for new challenges!
          Whether I'm crushing code as a <span>full-stack developer</span>,
          soaking up knowledge as a <span>student</span>, or crafting
          conversational magic with <span>chatbots</span>, one thing's for sure
          – I live, breathe, <span>hate and love JS</span>
        </p>
      </div>
      <div className="thoughts"></div>
      <div className="links">
        <img src={me} />
        <div>github</div>
        <div>linkedin</div>
        <div>instagram</div>
      </div>
    </div>
  );
};
