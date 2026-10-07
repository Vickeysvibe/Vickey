import React, { useEffect, useRef } from "react";

const SPEED = 0.1; // lower = smoother and slower

// Animates via a ref instead of state so the dot doesn't re-render React on
// every frame. Disabled on touch devices, where there is no cursor to follow.
const CursorFollower = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const dot = dotRef.current;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let frameId;

    const handleMouseMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      dot.style.opacity = "1";
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * SPEED;
      pos.y += (target.y - pos.y) * SPEED;
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frameId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
};

export default CursorFollower;
