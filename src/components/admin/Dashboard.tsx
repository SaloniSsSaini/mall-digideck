"use client";

import StatsCard from "./StatsCard";
import Chart from "./Chart";

export default function Dashboard() {
  return (
    <div className="flex-1 p-10 fade-in">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats */}
      <div className="flex gap-6 mt-6">
        <StatsCard title="Visitors" value="50M+" />
        <StatsCard title="Revenue" value="₹120Cr" />
        <StatsCard title="Stores" value="250+" />
      </div>

      {/* Chart */}
      <div className="mt-10 glass p-6">
        <Chart />
      </div>
    </div>
  );
}