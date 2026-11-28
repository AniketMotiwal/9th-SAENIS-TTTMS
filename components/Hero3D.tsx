'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Countdown from '@/components/Countdown';
import { MapPin, CalendarDays, ArrowRight, Download } from 'lucide-react';

const REGISTRATION_URL =
  'https://saenis.glueup.com/event/9th-saenis-tttms-international-conference-2026-189169/';

const ORGANIZER_LOGOS = [
  { src: '/organizers/sae-international.png', alt: 'SAE International' },
  { src: '/organizers/saeindia.png', alt: 'SAEINDIA' },
  { src: '/saeindia-northern-logo.png', alt: 'SAEINDIA Northern Section' },
  { src: '/organizers/iit-roorkee.png', alt: 'IIT Roorkee', square: true },
  { src: '/organizers/tttms.png', alt: 'TTTMS', square: true },
];

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
    <div className="relative w-full min-h-[100svh] min-h-[100dvh] overflow-hidden bg-[radial-gradient(ellipse_at_top,#123a73_0%,#0b2a55_45%,#061733_100%)]">
      {/* Diagonal teal accents (from the conference poster) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 bottom-[-10%] h-[140%] w-40 rotate-[35deg] bg-gradient-to-b from-cyan-400/0 via-cyan-400/40 to-teal-300/0 blur-sm" />
        <div className="absolute -right-10 bottom-[-20%] h-[140%] w-10 rotate-[35deg] bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
        <div className="absolute -left-32 top-[-10%] h-[80%] w-24 rotate-[35deg] bg-gradient-to-b from-cyan-400/0 via-cyan-300/25 to-cyan-400/0 blur-sm" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-sky-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Particle effect layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isHydrated && particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-300/30 animate-pulse"
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
      <div ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20 sm:opacity-25">
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
      <div className="relative z-10 flex min-h-[100svh] min-h-[100dvh] flex-col items-center justify-center px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-32 pointer-events-none">
        <div className="w-full max-w-5xl text-center">
          {/* Organizer logos */}
          <div className="hero-enter mx-auto mb-6 sm:mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 sm:gap-3">
            {ORGANIZER_LOGOS.map((o) => (
              <span key={o.alt} className={`flex h-12 sm:h-16 items-center rounded-xl bg-white shadow-lg shadow-black/20 ${o.square ? 'px-1' : 'px-2.5 sm:px-3'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.src} alt={o.alt} className={`${o.square ? 'h-11 sm:h-[3.75rem]' : 'h-7 sm:h-10'} w-auto object-contain`} />
              </span>
            ))}
          </div>

          <div className="hero-enter mx-auto mb-4 flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-cyan-300 bg-navy-950/60 shadow-[0_0_30px_rgba(34,211,238,0.6)]" style={{ animationDelay: '0.08s' }}>
            <span className="text-2xl sm:text-4xl font-black text-white">9<sup className="text-xs sm:text-base">th</sup></span>
          </div>
          <p className="hero-enter text-[2.2rem] sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-2xl leading-[1.02]" style={{ animationDelay: '0.14s' }}>
            SAENIS TTTMS
          </p>
          <h2 className="hero-enter mt-1 text-lg sm:text-3xl md:text-[2.6rem] font-black uppercase tracking-wide text-white/95 leading-tight" style={{ animationDelay: '0.22s' }}>
            International Conference <span className="text-cyan-300">2026</span>
          </h2>

          <div className="hero-enter mx-auto mt-5 sm:mt-6 mb-5 sm:mb-7 inline-flex max-w-full -skew-x-12 items-center bg-[#fdf8ef] px-5 sm:px-10 py-2 sm:py-3 shadow-xl" style={{ animationDelay: '0.3s' }}>
            <p className="skew-x-12 text-xs sm:text-lg md:text-xl font-extrabold uppercase tracking-wide text-navy-900">
              Theme: Emerging Thermal Technologies
            </p>
          </div>

          <div className="hero-enter flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-2.5 rounded-2xl border border-cyan-300/60 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <CalendarDays className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
              <p className="text-sm sm:text-lg font-black uppercase tracking-wide text-white whitespace-nowrap">3–5 December, 2026</p>
            </div>
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-2xl border border-cyan-300/60 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <MapPin className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
              <p className="text-xs sm:text-base leading-snug text-left text-white">
                <span className="font-extrabold">Pradeep Kapse Auditorium</span>
                <span className="text-cyan-100"> · MIED, IIT Roorkee</span>
              </p>
            </div>
          </div>

          <div className="hero-enter mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 pointer-events-auto" style={{ animationDelay: '0.5s' }}>
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-black uppercase tracking-wide text-navy-950 shadow-[0_10px_30px_rgba(34,211,238,0.45)] transition-transform hover:scale-105">
              Register Now <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#schedule" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/70 bg-white/5 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white hover:text-navy-900">
              View Agenda
            </a>
          </div>

          <div className="hero-enter mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 pointer-events-auto" style={{ animationDelay: '0.55s' }}>
            <a href="/agenda-tttms26.pdf" download className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white ring-1 ring-white/40 backdrop-blur-md transition-colors hover:bg-white hover:text-navy-900">
              <Download className="h-4 w-4" /> Agenda PDF
            </a>
            <a href="/sponsorship-deck-tttms26.pdf" download className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white ring-1 ring-white/40 backdrop-blur-md transition-colors hover:bg-white hover:text-navy-900">
              <Download className="h-4 w-4" /> Sponsorship Deck PDF
            </a>
          </div>

          <div className="hero-enter mt-7 sm:mt-9 pointer-events-auto" style={{ animationDelay: '0.6s' }}>
            <Countdown />
          </div>
          <p className="hero-enter mt-5 text-sm sm:text-lg font-black tracking-widest text-cyan-200/90" style={{ animationDelay: '0.7s' }}>#TTTMS2026</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden sm:flex">
        <div className="w-6 h-10 border-2 border-cyan-300 rounded-full flex items-start justify-center p-2 animate-scroll-hint">
          <div className="w-1 h-2 bg-cyan-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
