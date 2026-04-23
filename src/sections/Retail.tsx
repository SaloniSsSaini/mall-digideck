"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ✅ IMPORTANT
import { brandsData } from "@/data/brandsData";

gsap.registerPlugin(ScrollTrigger); // ✅ MUST

export default function Retail() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.querySelectorAll(".brand-item"), {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="py-32 bg-white text-black text-center"
    >
      <h2 className="text-4xl mb-10">Retail Experience</h2>

      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        {brandsData.map((brand, i) => (
          <div
            key={i}
            className="brand-item p-4 border rounded hover:scale-105 transition"
          >
            {brand.name}
          </div>
        ))}
      </div>
    </section>
  );
}