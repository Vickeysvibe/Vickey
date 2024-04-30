import React from "react";
import "../css/info.css";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export const Info = () => {
  return (
    <div className="info">
      <Skills />
      <Projects />
    </div>
  );
};
