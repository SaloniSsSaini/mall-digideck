"use client";

import { useEffect } from "react";

export default function PhysicsCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "physics-cursor";
    document.body.appendChild(cursor);

    let x = 0, y = 0;

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
    });

    const loop = () => {
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return null;
}