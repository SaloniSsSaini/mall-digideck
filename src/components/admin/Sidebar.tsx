"use client";

import { useTheme } from "@/hooks/useTheme";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-64 h-screen p-5 glass">
      <h2 className="text-xl font-bold">Admin</h2>

      <div className="mt-6 space-y-3">
        <p className="cursor-pointer hover:text-gray-400">📊 Dashboard</p>
        <p className="cursor-pointer hover:text-gray-400">📅 Events</p>
        <p className="cursor-pointer hover:text-gray-400">🏢 Stores</p>
      </div>

      {/* 🌗 Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mt-10 px-4 py-2 bg-white text-black rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}