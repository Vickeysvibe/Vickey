import React from "react";
import "../css/project.css";
import { Div } from "./Div";
import projectList from "../assets/projectList";
export const Projects = () => {
  return (
    <div className="project">
      <h1 className="topic">Projects</h1>
      <div className="boxxxx">
        <div className="grid">
          {projectList.map((items) => (
            <Div key={Math.random()} props={items} />
          ))}
        </div>
      </div>
    </div>
  );
};
