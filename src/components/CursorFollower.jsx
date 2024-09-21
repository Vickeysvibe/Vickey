import React, { useEffect, useState } from "react";

const CursorFollower = () => {
  // Store mouse position and dot position as state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on mouse move
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const speed = 0.1; // Adjust the smoothness factor (lower = smoother and slower)

    const updateDotPosition = () => {
      setDotPos((prevPos) => ({
        x: prevPos.x + (mousePos.x - prevPos.x) * speed,
        y: prevPos.y + (mousePos.y - prevPos.y) * speed,
      }));

      animationFrameId = requestAnimationFrame(updateDotPosition);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(updateDotPosition);

    // Cleanup on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        zIndex: 1000,
        borderRadius: "50%",
        transform: `translate(${dotPos.x}px, ${dotPos.y}px)`,
        pointerEvents: "none", // Prevent interaction with the dot
      }}
    />
  );
};

export default CursorFollower;
