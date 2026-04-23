"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Netflix() {

  useEffect(() => {
    gsap.from(".card", {
      x: 200,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  return (
    <section className="py-32 bg-black text-white">
      <h2 className="text-4xl text-center mb-10">Trending</h2>

      <div className="flex gap-6 overflow-x-auto px-10">
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="card min-w-[200px] h-[300px] bg-gray-800 rounded-lg flex items-center justify-center">
            Card {i}
          </div>
        ))}
      </div>
    </section>
  );
}