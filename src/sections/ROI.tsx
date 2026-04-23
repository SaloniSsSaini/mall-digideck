"use client";
import { useState } from "react";

export default function ROI() {
  const [size, setSize] = useState(1000);
  const [result, setResult] = useState(0);

  return (
    <section id="roi" className="section">
      <h2>Revenue Calculator</h2>

      <input type="number" value={size} onChange={(e) => setSize(+e.target.value)} />
      <button onClick={() => setResult(size * 5000)}>Calculate</button>

      <h3>₹ {result}</h3>
    </section>
  );
}