'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const meshes = useRef<THREE.Mesh[]>([]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }

    // Animate individual elements
    meshes.current.forEach((mesh, index) => {
      if (mesh) {
        mesh.position.y = Math.sin(clock.getElapsedTime() + index) * 1.5;
        mesh.rotation.x += 0.01;
        mesh.rotation.z += 0.015;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Central pulsing sphere */}
      <mesh ref={(el) => { if (el) meshes.current[0] = el; }}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color="#06b6d4"
          emissive="#0891b2"
          shininess={100}
        />
      </mesh>

      {/* Orbiting cubes */}
      {[0, 1, 2, 3].map((index) => (
        <mesh
          key={`cube-${index}`}
          ref={(el) => { if (el) meshes.current[index + 1] = el; }}
          position={[
            Math.cos((index / 4) * Math.PI * 2) * 2.5,
            Math.sin((index / 4) * Math.PI * 2) * 2.5,
            0,
          ]}
        >
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshPhongMaterial
            color={
              index === 0 ? '#7c3aed' : 
              index === 1 ? '#06b6d4' : 
              index === 2 ? '#ec4899' : 
              '#06b6d4'
            }
            emissive={
              index === 0 ? '#6d28d9' : 
              index === 1 ? '#0891b2' : 
              index === 2 ? '#be185d' : 
              '#0891b2'
            }
          />
        </mesh>
      ))}

      {/* Wireframe sphere */}
      <mesh scale={3}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe={true}
          opacity={0.2}
          transparent
        />
      </mesh>
    </group>
  );
}

function LoaderLights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" distance={150} />
      <pointLight position={[-10, -10, -10]} intensity={1.2} color="#7c3aed" distance={150} />
      <pointLight position={[0, 15, 0]} intensity={1} color="#ec4899" distance={120} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
    </>
  );
}

export default function LoaderScreen({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-screen bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden flex items-center justify-center">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Bottom right orbs */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Top right thermal accent */}
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Center bottom accent */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Additional glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-600/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent"></div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          gl={{ antialias: true, alpha: true }}
          dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2}
          performance={{ min: 0.5, max: 1 }}
        >
          <PerspectiveCamera 
            makeDefault 
            position={[0, 0, 5]} 
            fov={typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 75} 
          />
          <LoaderLights />
          <FloatingGeometry />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
          />
        </Canvas>
      </div>

      {/* Loading content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Conference branding */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 backdrop-blur-sm">
              <p className="text-xs sm:text-sm font-bold text-cyan-300 tracking-widest">9th SAENIS TTTMS</p>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 drop-shadow-lg leading-tight">
              EMERGING THERMAL
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-400 drop-shadow-lg leading-tight">
              TECHNOLOGIES
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-cyan-200/90 max-w-xs sm:max-w-sm font-medium tracking-wide">
              Initializing Next Generation Conference Platform
            </p>
          </div>

          {/* Thermal energy indicator */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-b from-cyan-400/20 to-transparent border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-cyan-300">100%</p>
                <p className="text-xs text-cyan-400/70 mt-1">READY</p>
              </div>
            </div>
          </div>

          {/* Loading dots animation - thermal energy */}
          <div className="flex gap-3 items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-full animate-bounce shadow-lg shadow-cyan-500/50" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full animate-bounce shadow-lg shadow-pink-500/50" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* Progress bar with enhanced design */}
          <div className="w-56 sm:w-72 md:w-96 space-y-3">
            <div className="h-2 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full overflow-hidden backdrop-blur-sm border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
              <div className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-cyan-500/60 glow-animation" style={{
                animation: 'progress 5s ease-in-out forwards'
              }}></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-cyan-400/70 font-medium">Platform Status</div>
              <div className="text-xs font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Event details */}
          <div className="text-center space-y-2 mt-4">
            <p className="text-xs sm:text-sm text-cyan-300/70 font-mono tracking-wider">📅 December 3-5, 2026</p>
            <p className="text-xs sm:text-sm text-purple-300/70 font-mono tracking-wider">📍 IIT Roorkee, India</p>
          </div>

          {/* Loading phase indicator */}
          <div className="text-xs text-gray-400/60 mt-2 font-medium">
            Loading thermal energy data...
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '1.2s' }}></div>

      <style>{`
        @keyframes progress {
          0% {
            width: 0%;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes glow-animation {
          0% {
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.4), inset 0 0 10px rgba(6, 182, 212, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), inset 0 0 15px rgba(168, 85, 247, 0.3);
          }
          100% {
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.4), inset 0 0 10px rgba(6, 182, 212, 0.2);
          }
        }

        .glow-animation {
          animation: glow-animation 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
