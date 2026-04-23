"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Phone() {
  const ref = useRef<any>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // slow spin
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      {/* body */}
      <boxGeometry args={[1.5, 3, 0.15]} />
      <meshStandardMaterial color="#111" />

      {/* screen (slightly in front) */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[1.3, 2.6]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </mesh>
  );
}

export default function Iphone3D() {
  return (
    <section className="h-screen bg-black flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <Phone />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}