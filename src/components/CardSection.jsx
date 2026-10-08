import React from "react";
import "../css/sections.css";
import eye from "../svgs/eye.svg";

// Every card has the same fixed rows (2-line title, 1-line tech, 4-line
// description, link row) so all cards render at the same size.
const Card = ({ title, tech, desc, link }) => (
  <article className="card">
    <h3 title={title}>{title}</h3>
    <h6 title={tech}>{tech}</h6>
    <p title={desc}>{desc}</p>
    <div className="card-link">
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={eye} alt="" />
          <span>link</span>
        </a>
      )}
    </div>
  </article>
);

export const CardSection = ({ title, items }) => (
  <section>
    <h1 className="topic">{title}</h1>
    <div className="section-body card-grid">
      {items.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  </section>
);
