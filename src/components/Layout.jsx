import React from "react";
import { Link } from "react-router-dom";
import "../css/layout.css";
import me from "../images/meee.png";
import { Bio } from "./Bio";
import { ContributionCalendar } from "./ContributionCalendar";
import { Home } from "./Home";
import { Info } from "./Info";
import { Navbar } from "./Navbar";
import { SocialLinks } from "./SocialLinks";

export function Layout() {
  return (
    <>
      <div className="layout">
        <Home />
        <Info />
      </div>
      <div className="mobileLayout">
        <Navbar />
        <main className="hero">
          <img src={me} alt="Vigneshwaran" />
          <h2>
            Hello, I'm <span>vickey</span>
          </h2>
          <Bio />
          <Link to="/works" className="explore">
            Explore {">"}
          </Link>
        </main>
        <div className="qt">
          <ContributionCalendar />
        </div>
        <div className="social-icons">
          <SocialLinks icons />
        </div>
      </div>
    </>
  );
}
