import React from "react";
import "../css/experience.css";
import experiences from "../data/experiences";
import { formatDuration, formatMonth, monthsBetween } from "../lib/duration";
import { Reveal } from "./Reveal";

const Company = ({ name, url }) =>
  url ? (
    <a
      className="xp-company"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
      <span className="xp-company-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  ) : (
    <span className="xp-company">{name}</span>
  );

const Dates = ({ start, end }) => {
  if (!start) return null;
  return (
    <div className="xp-when">
      <span>
        <time dateTime={start}>{formatMonth(start)}</time>
        {" – "}
        {end ? <time dateTime={end}>{formatMonth(end)}</time> : "Present"}
      </span>
      <span className="xp-duration">
        {formatDuration(monthsBetween(start, end))}
      </span>
    </div>
  );
};

// Timeline of roles: role, linked company, date range and computed duration.
export const Experience = () => (
  <section>
    <Reveal>
      <h1 className="topic">Professional Experiences</h1>
    </Reveal>
    <ol className="section-body timeline">
      {experiences.map(({ role, company, companyUrl, start, end, desc }, i) => {
        const current = Boolean(start) && !end;
        return (
          <Reveal
            as="li"
            key={`${company}-${role}`}
            className={current ? "xp xp-current" : "xp"}
            delay={i * 0.06}
          >
            <span className="xp-dot" aria-hidden="true" />
            <article className="xp-card">
              <header className="xp-head">
                <h3>{role}</h3>
                <Company name={company} url={companyUrl} />
                <Dates start={start} end={end} />
              </header>
              <p>{desc}</p>
            </article>
          </Reveal>
        );
      })}
    </ol>
  </section>
);
