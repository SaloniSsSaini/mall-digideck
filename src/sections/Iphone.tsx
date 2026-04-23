"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Iphone() {

  useEffect(() => {
    gsap.fromTo(".iphone", {
      scale: 0.6,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".iphone",
        start: "top 80%",
        scrub: true,
      }
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-white text-black">
      <div className="iphone w-[250px] h-[500px] bg-black rounded-[40px] flex items-center justify-center">
        <p className="text-white">iPhone UI</p>
      </div>
    </section>
  );
}