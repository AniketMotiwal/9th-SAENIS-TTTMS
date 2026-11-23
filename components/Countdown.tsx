'use client';

import { useEffect, useState } from 'react';

// Conference: December 3–5, 2026 (IST)
const START = new Date('2026-12-03T09:00:00+05:30').getTime();
const END = new Date('2026-12-05T18:00:00+05:30').getTime();

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Minutes: Math.floor((s % 3600) / 60),
    Seconds: s % 60,
  };
}

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (now !== null && now >= START) {
    const live = now < END;
    return (
      <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-300/50 bg-black/50 px-5 py-2.5 backdrop-blur-md">
        {live && (
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
          </span>
        )}
        <span className="text-sm font-bold text-white sm:text-base">
          {live ? 'The conference is LIVE at IIT Roorkee' : 'Thank you for making TTTMS’26 a success!'}
        </span>
      </div>
    );
  }

  const p = parts(now === null ? 0 : START - now);

  return (
    <div aria-live="off">
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300/90 sm:mb-3 sm:text-sm">
        Conference begins in
      </p>
      <div className="flex justify-center gap-2 sm:gap-4">
        {Object.entries(p).map(([label, v]) => (
          <div
            key={label}
            className="w-[4.1rem] rounded-xl border border-cyan-400/40 bg-gradient-to-b from-slate-900/80 to-black/80 px-1 py-2 shadow-lg shadow-cyan-500/20 backdrop-blur-md sm:w-24 sm:rounded-2xl sm:py-3"
          >
            <div className="text-2xl font-black tabular-nums leading-none text-white sm:text-4xl">
              {now === null ? '--' : String(v).padStart(2, '0')}
            </div>
            <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300/80 sm:text-xs">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
