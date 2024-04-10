import React from "react";
import "../styles/home.css";
import image from "../images/image.png";
import { Thoughts } from "./Thoughts";
export const Home = () => {
  return (
    <div className="home">
      <div className="logo">Vibe</div>
      <div className="intro">
        <div className="image">
          <img src={image} alt="moonji" />
        </div>
        <h3>Hello there !</h3>
        <h4>I'm Vigneshwaran</h4>
        <p>
          Hey there! I'm your friendly neighborhood full-stack JavaScript
          junkie, always hungry for new challenges! Whether I'm crushing code as
          a full-stack developer, soaking up knowledge as a student, or crafting
          conversational magic with chatbots, one thing's for sure – I live,
          breathe, hate and love JS
        </p>
      </div>
      <div className="butt">
        <a
          class="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
          href="/"
        >
          <div class="flex text-lg tracking-tighter">
            <span class="justify-center">Explore </span>
          </div>
        </a>
      </div>
      <Thoughts />
      <div></div>
    </div>
  );
};
