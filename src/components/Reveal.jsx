import React from "react";
import { motion } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1]; // keep in sync with --ease-out in index.css

// Fades + lifts its children in the first time they scroll into view.
// It wraps rather than animates the child, so the child's own hover
// transforms keep working. `as` sets the wrapper element (e.g. "li").
export const Reveal = ({ children, delay = 0, className, as = "div" }) => {
  const Wrapper = motion[as];
  return (
    <Wrapper
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </Wrapper>
  );
};
