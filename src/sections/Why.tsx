"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { mallData } from "@/data/mallData";

export default function Why() {
  const ref = useRef(null);
  useScrollAnimation(ref);

  return (
    <section
      ref={ref}
      className="py-32 text-center max-w-5xl mx-auto px-4"
    >
      <h2 className="text-5xl mb-8 font-semibold">
        Why {mallData.name}
      </h2>

      <p className="text-xl text-gray-400 mb-10">
        {mallData.annualVisitors} annual visitors
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {mallData.highlights.map((item, i) => (
          <span key={i} className="glass px-4 py-2 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}