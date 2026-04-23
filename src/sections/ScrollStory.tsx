"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
  const ref = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3000",
      },
    });
  }, []);

  return (
    <section ref={ref} className="h-screen overflow-hidden">
      <div className="flex w-[300%] h-full">

        {/* PANEL 1 */}
        <div className="panel w-full flex items-center justify-center bg-black text-white">
          <h1 className="text-6xl">Luxury Retail</h1>
        </div>

        {/* PANEL 2 */}
        <div className="panel w-full flex items-center justify-center bg-gray-900 text-white">
          <h1 className="text-6xl">Global Brands</h1>
        </div>

        {/* PANEL 3 */}
        <div className="panel w-full flex items-center justify-center bg-gray-800 text-white">
          <h1 className="text-6xl">Massive Footfall</h1>
        </div>

      </div>
    </section>
  );
}