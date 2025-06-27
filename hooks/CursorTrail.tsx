"use client";
import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const trail = document.createElement("div");
    trail.id = "cursor-trail";
    document.body.appendChild(trail);

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const updatePosition = () => {
      // Easing movement
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(trail);
    };
  }, []);

  return null;
}
