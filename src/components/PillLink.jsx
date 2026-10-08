import React from "react";
import { Link } from "react-router-dom";

// Outlined call-to-action used for "Explore" and "Off the clock".
export const PillLink = ({ to, children }) => (
  <Link to={to} className="pill">
    {children}
    <span className="pill-arrow" aria-hidden="true">
      →
    </span>
  </Link>
);
