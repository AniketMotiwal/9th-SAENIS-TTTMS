'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Dodecahedron3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.007;
      meshRef.current.rotation.y += 0.011;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[2, 0]} />
      <meshPhongMaterial
        color="#ec4899"
        emissive="#be185d"
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
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ec4899" distance={100} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" distance={100} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
    </>
  );
}

export default function Patrons() {
  const patrons = [
    { name: 'Thermal Energy Systems Inc.', category: 'Platinum Patron', logo: '🏢' },
    { name: 'Global Cooling Technologies', category: 'Platinum Patron', logo: '❄️' },
    { name: 'Heat Management Solutions', category: 'Gold Patron', logo: '🔥' },
    { name: 'Advanced Thermal Devices', category: 'Gold Patron', logo: '⚡' },
    { name: 'Sustainable Energy Corp', category: 'Silver Patron', logo: '🌱' },
    { name: 'Innovation Thermal Labs', category: 'Silver Patron', logo: '🔬' },
  ];

  return (
    <section id="patrons" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-16">Conference Patrons</h2>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* 3D Model */}
          <div className="rounded-2xl border-2 border-pink-500/50 overflow-hidden bg-gradient-to-b from-slate-900 to-black h-80 shadow-2xl shadow-pink-500/20">
            <Canvas>
              <Lights3D />
              <Dodecahedron3D />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>

          {/* Patrons Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {patrons.map((patron, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-2 border-pink-500/40 rounded-xl p-6 hover:border-pink-400/80 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {patron.logo}
                </div>
                <h3 className="text-base font-bold text-pink-300 group-hover:text-pink-200 transition-colors mb-2">
                  {patron.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-full px-3 py-1 inline-block">
                  {patron.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
