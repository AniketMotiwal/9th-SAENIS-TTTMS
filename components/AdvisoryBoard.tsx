'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Octahedron3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.rotation.z += 0.006;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[2, 0]} />
      <meshPhongMaterial
        color="#7c3aed"
        emissive="#6d28d9"
        shininess={100}
        wireframe={false}
      />
    </mesh>
  );
}

function Lights3D() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#7c3aed" distance={100} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" distance={100} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
    </>
  );
}

export default function AdvisoryBoard() {
  const advisors = [
    { name: 'Prof. Dr. Hans Mueller', title: 'Chief Advisor', org: 'ETH Zurich, Switzerland' },
    { name: 'Dr. Yuki Tanaka', title: 'International Advisor', org: 'Tokyo Tech, Japan' },
    { name: 'Prof. Jean Dupont', title: 'European Advisor', org: 'Sorbonne, France' },
    { name: 'Dr. Chen Wei', title: 'Asia-Pacific Advisor', org: 'Tsinghua University, China' },
    { name: 'Prof. Maria Santos', title: 'Americas Advisor', org: 'MIT, USA' },
  ];

  return (
    <section id="advisory" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-16">Advisory Board</h2>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Advisors List */}
          <div className="lg:col-span-2 space-y-4">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-slate-900/80 to-slate-800/60 border-2 border-purple-500/40 rounded-xl p-5 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-x-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                      {advisor.name}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold">{advisor.title}</p>
                    <p className="text-xs text-gray-400">{advisor.org}</p>
                  </div>
                  <div className="text-4xl text-purple-500/30 group-hover:text-purple-500/60 transition-colors">
                    ◆
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3D Model */}
          <div className="rounded-2xl border-2 border-purple-500/50 overflow-hidden bg-gradient-to-b from-slate-900 to-black h-80 shadow-2xl shadow-purple-500/20">
            <Canvas>
              <Lights3D />
              <Octahedron3D />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
