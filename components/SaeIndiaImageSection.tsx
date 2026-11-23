'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Maximize2, Minus, Plus, RotateCcw, X, ZoomIn } from 'lucide-react';

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

const MIN_SCALE = 1;
const MAX_SCALE = 6;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

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

      {open &&
        typeof document !== 'undefined' &&
        createPortal(<ZoomViewer src={full} alt={alt} title={title} onClose={() => setOpen(false)} />, document.body)}
    </section>
  );
}

function ZoomViewer({ src, alt, title, onClose }: { src: string; alt: string; title: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const last = useRef<{ x: number; y: number; dist: number } | null>(null);
  const state = useRef({ scale: 1, x: 0, y: 0 });
  state.current = { scale, x: pos.x, y: pos.y };

  // Zoom keeping point (cx, cy) — relative to stage center — fixed on screen
  const zoomAt = useCallback((next: number, cx = 0, cy = 0) => {
    const { scale: s, x, y } = state.current;
    const ns = clamp(next, MIN_SCALE, MAX_SCALE);
    if (ns <= MIN_SCALE + 0.001) {
      state.current = { scale: 1, x: 0, y: 0 };
      setScale(1);
      setPos({ x: 0, y: 0 });
      return;
    }
    const k = ns / s;
    const np = { x: cx - (cx - x) * k, y: cy - (cy - y) * k };
    state.current = { scale: ns, ...np };
    setScale(ns);
    setPos(np);
  }, []);

  const reset = useCallback(() => zoomAt(1), [zoomAt]);

  const center = (clientX: number, clientY: number) => {
    const r = stageRef.current!.getBoundingClientRect();
    return { cx: clientX - r.left - r.width / 2, cy: clientY - r.top - r.height / 2 };
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') zoomAt(state.current.scale * 1.4);
      else if (e.key === '-' || e.key === '_') zoomAt(state.current.scale / 1.4);
      else if (e.key === '0') reset();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, zoomAt, reset]);

  // Non-passive wheel listener so trackpad pinch / wheel zooms the image, not the page
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { cx, cy } = center(e.clientX, e.clientY);
      const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0025));
      zoomAt(state.current.scale * factor, cx, cy);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomAt]);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    last.current = null;
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = [...pointers.current.values()];
    if (pts.length === 2) {
      const [a, b] = pts;
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (last.current && last.current.dist > 0) {
        const dx = mid.x - last.current.x;
        const dy = mid.y - last.current.y;
        const { cx, cy } = center(mid.x, mid.y);
        zoomAt(state.current.scale * (dist / last.current.dist), cx, cy);
        if (state.current.scale > 1) {
          const np = { x: state.current.x + dx, y: state.current.y + dy };
          state.current = { ...state.current, ...np };
          setPos(np);
        }
      }
      last.current = { x: mid.x, y: mid.y, dist };
    } else if (pts.length === 1 && state.current.scale > 1) {
      const p = pts[0];
      if (last.current) {
        const np = { x: state.current.x + (p.x - last.current.x), y: state.current.y + (p.y - last.current.y) };
        state.current = { ...state.current, ...np };
        setPos(np);
      }
      last.current = { x: p.x, y: p.y, dist: 0 };
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    last.current = null;
    if (pointers.current.size === 0) setDragging(false);
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    const { cx, cy } = center(e.clientX, e.clientY);
    if (state.current.scale > 1.05) reset();
    else zoomAt(2.5, cx, cy);
  };

  const btn =
    'grid h-10 w-10 place-items-center rounded-full text-slate-200 transition hover:bg-white/15 hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-35';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} zoom viewer`}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <p className="truncate text-sm font-semibold sm:text-base">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{title}</span>
          <span className="ml-2 hidden text-slate-400 sm:inline">· 9th SAENIS TTTMS&apos;26</span>
        </p>
        <button type="button" onClick={onClose} aria-label="Close viewer" className={btn}>
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Stage */}
      <div
        ref={stageRef}
        className={`relative flex-1 touch-none select-none overflow-hidden ${
          scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
        }`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
      >
        {!loaded && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 grid place-items-center p-2 sm:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            draggable={false}
            onLoad={() => setLoaded(true)}
            style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${scale})`,
              transition: dragging ? 'none' : 'transform 180ms ease-out, opacity 300ms',
            }}
            className={`max-h-full max-w-full rounded-lg object-contain shadow-2xl will-change-transform ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-slate-900/90 p-1 shadow-xl backdrop-blur">
          <button type="button" onClick={() => zoomAt(scale / 1.4)} disabled={scale <= MIN_SCALE} aria-label="Zoom out" className={btn}>
            <Minus className="h-5 w-5" />
          </button>
          <span className="w-14 text-center text-sm font-semibold tabular-nums text-cyan-300">{Math.round(scale * 100)}%</span>
          <button type="button" onClick={() => zoomAt(scale * 1.4)} disabled={scale >= MAX_SCALE} aria-label="Zoom in" className={btn}>
            <Plus className="h-5 w-5" />
          </button>
          <div className="mx-1 h-6 w-px bg-white/15" />
          <button type="button" onClick={reset} aria-label="Reset zoom" className={btn}>
            <RotateCcw className="h-5 w-5" />
          </button>
          <a href={src} download aria-label="Download HD image" className={btn}>
            <Download className="h-5 w-5" />
          </a>
        </div>
        <p className="text-center text-[11px] text-slate-500 sm:text-xs">
          <span className="sm:hidden">Pinch to zoom · drag to move · double-tap to zoom</span>
          <span className="hidden sm:inline">Scroll to zoom · drag to move · double-click to zoom · Esc to close</span>
        </p>
      </div>
    </div>
  );
}
