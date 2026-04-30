'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Tetrahedron3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh ref={meshRef}>
      <tetrahedronGeometry args={[2, 0]} />
      <meshPhongMaterial
        color="#06b6d4"
        emissive="#0891b2"
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
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#06b6d4" distance={100} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#7c3aed" distance={100} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
    </>
  );
}

export default function OrganizingCommittee() {
  const committee = [
    { name: 'Dr. Rajesh Kumar', title: 'Chairperson', dept: 'Thermal Engineering' },
    { name: 'Prof. Amit Singh', title: 'Co-Chairperson', dept: 'Mechanical Engineering' },
    { name: 'Dr. Priya Sharma', title: 'Secretary', dept: 'Applied Physics' },
    { name: 'Prof. Vikram Patel', title: 'Treasurer', dept: 'Energy Science' },
    { name: 'Dr. Neha Gupta', title: 'Publications Chair', dept: 'Thermal Sciences' },
    { name: 'Prof. Arjun Verma', title: 'Events Coordinator', dept: 'Mechanical Dept' },
  ];

  return (
    <section id="organizing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-16">Organizing Committee</h2>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* 3D Model */}
          <div className="rounded-2xl border-2 border-cyan-500/50 overflow-hidden bg-gradient-to-b from-slate-900 to-black h-80 shadow-2xl shadow-cyan-500/20">
            <Canvas>
              <Lights3D />
              <Tetrahedron3D />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>

          {/* Committee Members */}
          <div className="lg:col-span-2 space-y-4">
            {committee.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-slate-900/80 to-slate-800/60 border-2 border-cyan-500/40 rounded-xl p-5 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-purple-400 font-semibold">{member.title}</p>
                    <p className="text-xs text-gray-400">{member.dept}</p>
                  </div>
                  <div className="text-4xl text-cyan-500/30 group-hover:text-cyan-500/60 transition-colors">
                    ◆
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
