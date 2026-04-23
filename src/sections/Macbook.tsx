"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Macbook() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      ".laptop",
      { rotateX: 80, scale: 0.8 },
      {
        rotateX: 0,
        scale: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-black text-white">
      <div className="laptop w-[500px] h-[300px] bg-gray-800 rounded-xl flex items-center justify-center">
        <p>MacBook Experience</p>
      </div>
    </section>
  );
}