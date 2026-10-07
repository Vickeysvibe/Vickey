import React from "react";
import { motion } from "framer-motion";
import "../css/info.css";
import experiences from "../data/experiences";
import projects from "../data/projects";
import { BlogList } from "./BlogList";
import { CardSection } from "./CardSection";
import { Contact } from "./Contact";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import { SocialLinks } from "./SocialLinks";

// Embedded as the scrolling right column on desktop ("/"), or rendered as its
// own page with nav + footer on "/works".
export const Info = ({ standalone = false }) => (
  <div className={standalone ? "info info-page" : "info"}>
    {standalone && <Navbar />}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Skills />
    </motion.div>
    <CardSection title="Projects" items={projects} />
    <CardSection title="Professional Experiences" items={experiences} />
    <BlogList />
    <Contact />
    {standalone && (
      <footer className="social-icons">
        <SocialLinks icons />
      </footer>
    )}
  </div>
);
