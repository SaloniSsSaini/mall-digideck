"use client";

import { useEffect } from "react";

export const useAnalytics = () => {
  useEffect(() => {
    console.log("User visited page");

    window.addEventListener("click", () => {
      console.log("User interaction tracked");
    });
  }, []);
};