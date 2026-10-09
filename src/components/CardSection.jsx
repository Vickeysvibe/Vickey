import React from "react";
import "../css/sections.css";
import eye from "../svgs/eye.svg";
import { Reveal } from "./Reveal";

// Every card has the same fixed rows (2-line title, 1-line tech, 4-line
// description, link row) so all cards render at the same size.
const Card = ({ title, tech, desc, link }) => (
  <article className="card lift">
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
    <Reveal>
      <h1 className="topic">{title}</h1>
    </Reveal>
    <div className="section-body card-grid">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 0.08}>
          <Card {...item} />
        </Reveal>
      ))}
    </div>
  </section>
);
