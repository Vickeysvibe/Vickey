import React from "react";
import socials from "../data/socials";

// Renders bare anchors so the parent controls the layout.
export const SocialLinks = ({ icons = false }) =>
  socials.map(({ name, url, icon }) => (
    <a
      key={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icons ? name : undefined}
    >
      {icons ? <img src={icon} alt="" /> : name}
    </a>
  ));
