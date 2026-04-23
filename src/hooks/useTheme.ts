"use client";

import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  return { theme, setTheme };
};