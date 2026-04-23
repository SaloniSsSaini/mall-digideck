"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ScrollStory from "@/sections/ScrollStory";
import ThreeD from "@/sections/ThreeD";
import Why from "@/sections/Why";
import Retail from "@/sections/Retail";
import Events from "@/sections/Events";
import Map from "@/sections/Map";
import ROI from "@/sections/ROI";
import CTA from "@/sections/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const video = document.querySelector("#scroll-video") as HTMLVideoElement;

    if (video) {
      const setup = () => {
        gsap.to(video, {
          currentTime: video.duration,
          ease: "none",
          scrollTrigger: {
            trigger: "#video-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      };

      if (video.readyState >= 1) {
        setup();
      } else {
        video.onloadedmetadata = setup;
      }
    }

    // ✨ fade animation
    gsap.utils.toArray(".fade-section").forEach((el: any) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      {/* 🎬 VIDEO SCROLL */}
      <section id="video-section" className="h-[200vh] relative">
        <video
          id="scroll-video"
          className="w-full h-screen object-cover sticky top-0"
          muted
          playsInline
          preload="auto"
          src="https://cdn.coverr.co/videos/coverr-shopping-mall-people-walking-5176/1080p.mp4"
        />
      </section>

      {/* 🍎 APPLE STORY */}
      <ScrollStory />

      {/* 🎮 3D */}
      <div className="fade-section">
        <ThreeD />
      </div>

      <div className="fade-section"><Why /></div>
      <div className="fade-section"><Retail /></div>
      <div className="fade-section"><Events /></div>
      <div className="fade-section"><Map /></div>
      <div className="fade-section"><ROI /></div>
      <div className="fade-section"><CTA /></div>
    </>
  );
}