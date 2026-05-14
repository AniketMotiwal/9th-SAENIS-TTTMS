'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RotatingModel() {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const spheres = useRef<THREE.Mesh[]>([]);

  useFrame(() => {
    if (groupRef.current) {
      // Anti-gravity floating effect - smooth wave motion
      groupRef.current.position.y = Math.sin(Date.now() * 0.0008) * 0.8;
      groupRef.current.position.x = Math.cos(Date.now() * 0.0006) * 0.6;
      groupRef.current.rotation.z += 0.003;
    }

    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.012;
      cubeRef.current.rotation.y += 0.018;
      cubeRef.current.rotation.z += 0.009;
    }

    // Animate orbiting spheres
    spheres.current.forEach((sphere, index) => {
      if (sphere) {
        const angle = (Date.now() * 0.001) + (index * (Math.PI * 2 / 3));
        const orbitRadius = 3.5;
        sphere.position.x = Math.cos(angle) * orbitRadius;
        sphere.position.y = Math.sin(angle) * orbitRadius * 0.5;
        sphere.position.z = Math.sin(angle * 0.5) * orbitRadius;
        sphere.rotation.x += 0.015;
        sphere.rotation.y += 0.015;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Central rotating cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial
          color="#06b6d4"
          emissive="#0891b2"
          shininess={120}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe edge */}
      <mesh>
        <boxGeometry args={[2.1, 2.1, 2.1]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe={true}
          opacity={0.6}
          transparent
        />
      </mesh>

      {/* Orbiting thermal energy spheres */}
      {[0, 1, 2].map((index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) spheres.current[index] = el;
          }}
        >
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshPhongMaterial
            color={index === 0 ? '#7c3aed' : index === 1 ? '#06b6d4' : '#ec4899'}
            emissive={index === 0 ? '#6d28d9' : index === 1 ? '#0891b2' : '#be185d'}
            shininess={100}
          />
        </mesh>
      ))}

      {/* Central glow sphere */}
      <mesh scale={0.8}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#0891b2"
          wireframe={true}
          opacity={0.15}
          transparent
        />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#06b6d4" distance={100} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#7c3aed" distance={100} />
      <pointLight position={[0, 15, 0]} intensity={0.8} color="#ec4899" distance={80} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
      <pointLight position={[0, -10, 0]} intensity={0.6} color="#0891b2" distance={80} />
    </>
  );
}

export default function Hero3D() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [particles] = useState(() =>
    [...Array(15)].map(() => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
      animationDelay: Math.random() * 2,
    }))
  );

  useEffect(() => {
    // Mark component as hydrated
    setIsHydrated(true);
    
    // Client-side check for mobile
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    setIsMobile(mobile);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-cyan-600/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Particle effect layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isHydrated && particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20 animate-pulse"
            style={{
              width: particle.width + 'px',
              height: particle.height + 'px',
              left: particle.left + '%',
              top: particle.top + '%',
              animationDuration: particle.animationDuration + 's',
              animationDelay: particle.animationDelay + 's',
            }}
          ></div>
        ))}
      </div>

      {/* 3D Canvas */}
      <div ref={canvasRef} className="w-full h-full" style={{ minHeight: '100%' }}>
        <Canvas 
          gl={{ antialias: true, alpha: true }}
          dpr={isMobile ? 1 : 2}
          performance={{ min: 0.5, max: 1 }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 7 : 6]} fov={isMobile ? 50 : 75} />
          <Lights />
          <RotatingModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={isMobile ? 0.5 : 1}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-4 sm:px-6 py-8 sm:py-12 rounded-2xl bg-transparent">
          <div className="mb-4 text-cyan-400 text-lg sm:text-2xl font-bold tracking-wider">
            ✨ INTERNATIONAL CONFERENCE ✨
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl animate-glow-pulse leading-tight">
            9th SAENIS TTTMS
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 drop-shadow-lg leading-tight">
            International Conference
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl font-bold text-cyan-100 mb-8 drop-shadow-lg max-w-3xl mx-auto tracking-wide leading-relaxed">
            Emerging Thermal Technologies
          </p>
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500/70 to-purple-500/70 border-2 border-cyan-300 mb-6 backdrop-blur-md shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105">
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-lg">
              📅 December 3-5, 2026
            </p>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 drop-shadow-lg">
            🌍 IIT Roorkee, India
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs sm:text-sm text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
