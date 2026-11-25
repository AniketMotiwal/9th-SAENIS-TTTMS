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
    <section id={id} className="section-shell bg-white">

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="text-center">
          <span className="eyebrow">SAEINDIA · TTTMS’26</span>
        </div>
        <h2 className="section-title mt-4 mb-2 text-center">{title}</h2>
        {subtitle ? (
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm text-slate-600 sm:text-base">{subtitle}</p>
        ) : (
          <div className="mb-6" />
        )}

        {/* Glowing frame */}
        <div className="group relative rounded-3xl bg-gradient-to-br from-navy-900 via-sky-500 to-cyan-400 p-[2px] shadow-xl shadow-sky-900/15 transition-shadow duration-500 hover:shadow-2xl">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Open ${title} in zoom viewer`}
            className="relative block w-full cursor-zoom-in overflow-hidden rounded-[calc(1.5rem-2px)] bg-white p-1.5 sm:p-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 transition hover:bg-sky-100"
          >
            <Maximize2 className="h-4 w-4" /> View full screen
          </button>
          <a
            href={full}
            download
            className="inline-flex items-center gap-2 rounded-full border border-navy-900 bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            <Download className="h-4 w-4" /> Download HD
          </a>
        </div>
      </div>

      {open && <ZoomViewer src={full} alt={alt} title={title} onClose={() => setOpen(false)} />}
    </section>
  );
}
