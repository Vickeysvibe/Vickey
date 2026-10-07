import React from "react";
import me from "../images/meee.png";
import { Bio } from "./Bio";
import { Quote } from "./Quote";
import { SocialLinks } from "./SocialLinks";

// Left column of the desktop layout.
export const Home = () => (
  <div className="home">
    <div className="about">
      <h1>Hello There,</h1>
      <h1>I'm Vigneshwaran</h1>
      <Bio />
    </div>
    <div className="thoughts">
      <Quote />
    </div>
    <div className="links">
      <img src={me} alt="Vigneshwaran" />
      <SocialLinks />
    </div>
  </div>
);
