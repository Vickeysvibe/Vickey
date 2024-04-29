import React from "react";
import "../styles/skills.css";
import react from "../svgs/react.svg";
import node from "../images/node.png";
export const Skills = () => {
  return (
    <div className="skills">
      <h1 className="topic">Skills</h1>
      <div class="wrapper">
        <div class="gallery">
          <ul>
            <li>
              <img src={react} alt="edho" />
            </li>
            <li>
              <img
                src="https://asset.brandfetch.io/id2alue-rx/id9K4_Y8_G.jpeg"
                alt="edho"
              />
            </li>
            <li>
              <img
                src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
                alt="edho"
              />
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/1.png"
                alt="edho"
              />
            </li>
            <li>
              <img src={node} alt="edho" />
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="edho"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/41N4YPqlxfL._AC_UF1000,1000_QL80_.jpg"
                alt="edho"
              />
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/8.png"
                alt="edho"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
