import React from "react";
import "../css/sections.css";
import skills from "../data/skills";

export const Skills = () => (
  <section>
    <h1 className="topic">Skills</h1>
    <ul className="section-body skill-grid">
      {skills.map(({ name, icon }) => (
        <li key={name} title={name}>
          <img src={icon} alt={name} />
        </li>
      ))}
    </ul>
  </section>
);
