"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", users: 4000 },
  { name: "Feb", users: 7000 },
  { name: "Mar", users: 9000 },
  { name: "Apr", users: 12000 },
];

export default function Chart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#4ade80" />
    </LineChart>
  );
}