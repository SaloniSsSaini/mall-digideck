"use client";

import { useEffect } from "react";
import gsap from "gsap";

export const useGSAPAnimation = () => {
  useEffect(() => {
    gsap.from(".hero h1", {
      y: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".hero p", {
      y: 50,
      opacity: 0,
      delay: 0.3,
    });

    gsap.from(".btn", {
      scale: 0.8,
      opacity: 0,
      delay: 0.6,
    });
  }, []);
};