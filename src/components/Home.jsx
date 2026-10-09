import React from "react";
import me from "../images/meee.png";
import { Bio } from "./Bio";
import { ContributionCalendar } from "./ContributionCalendar";
import { PillLink } from "./PillLink";
import { SocialLinks } from "./SocialLinks";

// Left column of the desktop layout.
export const Home = () => (
  <div className="home">
    <div className="about stagger">
      <h1>Hello There,</h1>
      <h1>
        I'm <span className="name">Vigneshwaran</span>
      </h1>
      <Bio />
      <div>
        <PillLink to="/personal">Off the clock</PillLink>
      </div>
    </div>
    <div className="thoughts rise-late">
      <ContributionCalendar />
    </div>
    <div className="links rise-late">
      <img src={me} alt="Vigneshwaran" className="avatar" />
      <SocialLinks />
    </div>
  </div>
);
