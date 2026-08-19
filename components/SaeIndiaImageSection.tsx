'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

type SaeIndiaImageSectionProps = {
  id: string;
  title: string;
  imageSrc: string;
};

export default function SaeIndiaImageSection({ id, title, imageSrc }: SaeIndiaImageSectionProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  return (
    <section
      id={id}
      className="section-shell bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[92rem]">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/90 sm:text-sm">
          SAEINDIA
        </p>
        <h2 className="section-title mb-4 text-center sm:mb-6">{title}</h2>
        <p className="mb-6 text-center text-sm text-gray-400 sm:mb-8">
          Click the image to view full size — names and titles stay sharp
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full cursor-zoom-in rounded-2xl border-2 border-cyan-500/35 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-1.5 shadow-2xl shadow-cyan-500/15 transition-shadow duration-300 hover:border-cyan-400/60 hover:shadow-cyan-500/30 sm:p-3"
          aria-label={`View ${title} in full size`}
        >
          <Image
            src={imageSrc}
            alt={`${title} — 9th SAENIS TTTMS International Conference 2026 (SAEINDIA)`}
            width={2542}
            height={2476}
            quality={100}
            priority
            unoptimized
            className="h-auto w-full object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1536px) 96vw, 1472px"
          />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-auto bg-black/90 p-3 sm:p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} full size`}
        >
          <button
            type="button"
            onClick={close}
            className="fixed right-4 top-4 z-[81] rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            Close
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={`${title} — full size`}
            className="mx-auto h-auto w-full max-w-[2400px] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
