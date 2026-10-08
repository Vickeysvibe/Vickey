import React from "react";
import "../css/info.css";
import projects from "../data/projects";
import { BlogList } from "./BlogList";
import { CardSection } from "./CardSection";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Navbar } from "./Navbar";
import { Reveal } from "./Reveal";
import { Skills } from "./Skills";
import { SocialLinks } from "./SocialLinks";

// Embedded as the scrolling right column on desktop ("/"), or rendered as its
// own page with nav + footer on "/works".
export const Info = ({ standalone = false }) => (
  <div className={standalone ? "info info-page" : "info"}>
    {standalone && <Navbar />}
    <Reveal>
      <Skills />
    </Reveal>
    <CardSection title="Projects" items={projects} />
    <Experience />
    <BlogList />
    <Contact />
    {standalone && (
      <footer className="social-icons">
        <SocialLinks icons />
      </footer>
    )}
  </div>
);
