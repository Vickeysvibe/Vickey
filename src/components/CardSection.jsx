import React from "react";
import "../css/sections.css";
import eye from "../svgs/eye.svg";

const Card = ({ title, tech, desc, link }) => (
  <article className="card">
    <header>
      <h3>{title}</h3>
      <h6>{tech}</h6>
    </header>
    <p>{desc}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={eye} alt="" />
        <span>link</span>
      </a>
    )}
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
