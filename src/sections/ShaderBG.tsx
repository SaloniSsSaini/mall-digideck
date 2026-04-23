"use client";

import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function ShaderPlane() {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    ref.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          void main() {
            vec3 color = vec3(
              0.5 + 0.5 * sin(uTime),
              0.5 + 0.5 * sin(uTime + 2.0),
              0.5 + 0.5 * sin(uTime + 4.0)
            );
            gl_FragColor = vec4(color,1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function ShaderBG() {
  return (
    <section className="h-screen">
      <Canvas>
        <ShaderPlane />
      </Canvas>
    </section>
  );
}