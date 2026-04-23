"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", visitors: 4000 },
  { name: "Feb", visitors: 6000 },
  { name: "Mar", visitors: 8000 },
  { name: "Apr", visitors: 10000 },
];

export default function Dashboard() {
  return (
    <section className="section">
      <h2>Analytics Dashboard</h2>

      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="visitors" stroke="#fff" />
      </LineChart>
    </section>
  );
}