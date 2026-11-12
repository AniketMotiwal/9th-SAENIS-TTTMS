'use client';

import { useEffect, useState } from 'react';

const LOAD_MS = 3200;

export default function LoaderScreen({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setLeaving(true);
      const hide = setTimeout(() => setLeaving(false), 700);
      return () => clearTimeout(hide);
    }

    setLeaving(false);
    setProgress(0);
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / LOAD_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isLoading]);

  if (!isLoading && !leaving) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#030712] transition-opacity duration-700 ease-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-busy={isLoading}
      aria-label="Loading conference site"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-cyan-500/25 blur-[100px] animate-float" />
        <div
          className="absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-violet-600/25 blur-[110px] animate-float"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[90px] animate-float"
          style={{ animationDelay: '0.6s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_70%)]" />
      </div>

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center gap-8 px-6 text-center sm:gap-10">
        {/* Brand chip */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300 sm:text-xs">
            9th SAENIS TTTMS
          </p>
        </div>

        {/* Spinning orbital ring + progress */}
        <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
          <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
          <div className="loader-ring absolute inset-1 rounded-full border-2 border-transparent border-t-cyan-400 border-r-violet-500" />
          <div className="loader-ring-reverse absolute inset-4 rounded-full border-2 border-transparent border-b-fuchsia-400 border-l-cyan-300/80" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/15 to-violet-600/15 backdrop-blur-sm" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-3xl font-black tabular-nums text-white sm:text-4xl">
              {progress}
              <span className="text-lg text-cyan-400 sm:text-xl">%</span>
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
              Loading
            </span>
          </div>
        </div>

        {/* Titles */}
        <div className="space-y-2 sm:space-y-3">
          <p className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Emerging Thermal
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text pb-1 text-transparent">
              Technologies
            </span>
          </p>
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-slate-400 sm:max-w-sm sm:text-base">
            International Conference · IIT Roorkee
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs space-y-2 sm:max-w-sm">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_16px_rgba(34,211,238,0.55)] transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
            <span>Dec 3–5, 2026</span>
            <span className="text-cyan-400/80">SAEINDIA</span>
          </div>
        </div>
      </div>

      <style>{`
        .loader-ring {
          animation: loader-spin 1.4s linear infinite;
        }
        .loader-ring-reverse {
          animation: loader-spin-rev 2.2s linear infinite;
        }
        @keyframes loader-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes loader-spin-rev {
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
