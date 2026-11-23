'use client';

import { useState } from 'react';
import { Download, Maximize2, ZoomIn } from 'lucide-react';
import ZoomViewer from '@/components/ZoomViewer';

type SaeIndiaImageSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  /** Optimized image shown on the page */
  imageSrc: string;
  /** Full-resolution image used in the zoom viewer + download */
  fullSrc?: string;
  width: number;
  height: number;
};

export default function SaeIndiaImageSection({
  id,
  title,
  subtitle,
  imageSrc,
  fullSrc,
  width,
  height,
}: SaeIndiaImageSectionProps) {
  const [open, setOpen] = useState(false);
  const full = fullSrc ?? imageSrc;
  const alt = `${title} — 9th SAENIS TTTMS International Conference 2026 (SAEINDIA)`;

  return (
    <section id={id} className="section-shell bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/90 sm:text-sm">
          SAEINDIA
        </p>
        <h2 className="section-title mb-2 text-center">{title}</h2>
        {subtitle ? (
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm text-slate-400 sm:text-base">{subtitle}</p>
        ) : (
          <div className="mb-6" />
        )}

        {/* Glowing frame */}
        <div className="group relative rounded-3xl bg-gradient-to-br from-cyan-400/60 via-blue-500/40 to-purple-500/60 p-[2px] shadow-[0_0_60px_-15px_rgba(34,211,238,0.45)] transition-shadow duration-500 hover:shadow-[0_0_80px_-10px_rgba(34,211,238,0.6)]">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Open ${title} in zoom viewer`}
            className="relative block w-full cursor-zoom-in overflow-hidden rounded-[calc(1.5rem-2px)] bg-slate-950 p-1.5 sm:p-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-2xl object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
            />
            <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 p-2 sm:px-3 sm:py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 sm:bottom-6 sm:right-6 sm:translate-y-2 sm:text-sm sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              <ZoomIn className="h-4 w-4" /> <span className="hidden sm:inline">Click to zoom</span>
            </span>
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:text-white"
          >
            <Maximize2 className="h-4 w-4" /> View full screen
          </button>
          <a
            href={full}
            download
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300 transition hover:bg-purple-500/20 hover:text-white"
          >
            <Download className="h-4 w-4" /> Download HD
          </a>
        </div>
      </div>

      {open && <ZoomViewer src={full} alt={alt} title={title} onClose={() => setOpen(false)} />}
    </section>
  );
}
