import React from "react";
import "../styles/home.css";
import image from "../images/image.png";
import { Thoughts } from "./Thoughts";
export const Home = () => {
  return (
    <div className="home">
      <div className="logo">VIBE</div>
      <div className="intro">
        <div className="image">
          <img src={image} alt="moonji" />
        </div>
        <h4>I'm Vigneshwaran</h4>
        <h3>Full-Stack developer</h3>
        <p>
          Hey there! I'm your friendly neighborhood full-stack JavaScript
          junkie, always hungry for new challenges! Whether I'm crushing code as
          a full-stack developer, soaking up knowledge as a student, or crafting
          conversational magic with chatbots, one thing's for sure – I live,
          breathe, hate and love JS
        </p>
      </div>
      <Thoughts />
      <div></div>
    </div>
  );
};
