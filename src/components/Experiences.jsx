import React from "react";
import "../css/project.css";
import { Div } from "./Div";
import experienceList from "../assets/experienceList";
export const Experiences = () => {
  return (
    <div className="project">
      <h1 className="topic">Professional Experiences</h1>
      <div className="boxxxx">
        <div className="grid">
          {experienceList.map((items) => (
            <Div key={Math.random()} props={items} />
          ))}
        </div>
      </div>
    </div>
  );
};
