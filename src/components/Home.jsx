import React from "react";
import "../styles/home.css";
import image from "../images/image.png";
import { Thoughts } from "./Thoughts";
import { Link } from "react-router-dom";
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
          Hey there! I'm your <span>friendly neighborhood</span> full-stack{" "}
          <span>JavaScript </span> junkie, always hungry for new challenges!
          Whether I'm crushing code as a <span>full-stack developer</span>,
          soaking up knowledge as a <span>student</span>, or crafting
          conversational magic with <span>chatbots</span>, one thing's for sure
          – I live, breathe, <span>hate and love JS</span>
        </p>
      </div>
      <div className="butt">
        <Link
          class="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
          to={"/explore"}
        >
          <div class="flex text-lg tracking-tighter">
            <span class="justify-center">Explore </span>
          </div>
        </Link>
      </div>
      <Thoughts />
      <div></div>
    </div>
  );
};
