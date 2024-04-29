import React from "react";
import "../styles/skills.css";
import react from "../svgs/react.svg";
import js from "../svgs/js.svg";
import node from "../svgs/node.svg";
import mongodb from "../svgs/mongodb.svg";
import next from "../svgs/next.svg";
import python from "../svgs/python.svg";
export const Skills = () => {
  return (
    <div className="skills">
      <h1 className="topic">Skills</h1>
      <div className="boxxxx">
        <div class="grid">
          <div>
            <img src={react} alt="react" />
          </div>
          <div>
            <img src={node} alt="react" />
          </div>
          <div>
            <img src={next} alt="react" />
          </div>
          <div>
            <img src={python} alt="react" />
          </div>
          <div>
            <img src={mongodb} alt="react" />
          </div>

          <div>
            <img src={js} alt="react" />
          </div>
        </div>
      </div>
    </div>
  );
};
