"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh rotation={[0.3, 0.2, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function ThreeD() {
  return (
    <section className="section fade-in">
      <Canvas style={{ height: "400px" }}>
        <ambientLight />
        <Box />
        <OrbitControls />
      </Canvas>
    </section>
  );
}