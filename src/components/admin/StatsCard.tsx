"use client";

export default function StatsCard({ title, value }: any) {
  return (
    <div className="glass p-5 w-48 fade-in hover:scale-105 transition">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}