import React from "react";
import "../css/layout.css";
import me from "../images/meee.png";
import { Bio } from "./Bio";
import { ContributionCalendar } from "./ContributionCalendar";
import { Home } from "./Home";
import { Info } from "./Info";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";
import { PillLink } from "./PillLink";
import { SocialLinks } from "./SocialLinks";

export function Layout() {
  return (
    <>
      <Loader />
      <div className="layout">
        <Home />
        <Info />
      </div>
      <div className="mobileLayout">
        <Navbar />
        <main className="hero stagger">
          <img src={me} alt="Vigneshwaran" className="avatar" />
          <h2>
            Hello, I'm <span className="name">Vickey</span>
          </h2>
          <Bio />
          <div className="hero-actions">
            <PillLink to="/works">Explore</PillLink>
            <PillLink to="/personal">Off the clock</PillLink>
          </div>
        </main>
        <div className="qt rise-late">
          <ContributionCalendar />
        </div>
        <div className="social-icons">
          <SocialLinks icons />
        </div>
      </div>
    </>
  );
}
