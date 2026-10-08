import React from "react";
import { Link } from "react-router-dom";
import me from "../images/meee.png";
import { Bio } from "./Bio";
import { ContributionCalendar } from "./ContributionCalendar";
import { SocialLinks } from "./SocialLinks";

// Left column of the desktop layout.
export const Home = () => (
  <div className="home">
    <div className="about">
      <h1>Hello There,</h1>
      <h1>
        I'm <span className="name">Vigneshwaran</span>
      </h1>
      <Bio />
      <Link to="/personal" className="personal-link">
        Off the clock: photography →
      </Link>
    </div>
    <div className="thoughts">
      <ContributionCalendar />
    </div>
    <div className="links">
      <img src={me} alt="Vigneshwaran" />
      <SocialLinks />
    </div>
  </div>
);
