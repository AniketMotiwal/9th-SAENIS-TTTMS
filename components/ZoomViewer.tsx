'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Minus, Plus, RotateCcw, X } from 'lucide-react';

const MIN_SCALE = 1;
const MAX_SCALE = 6;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

type ZoomViewerProps = { src: string; alt: string; title: string; onClose: () => void };

/** Full-screen image viewer with wheel / pinch / double-click zoom and drag-to-pan. */
export default function ZoomViewer(props: ZoomViewerProps) {
  if (typeof document === 'undefined') return null;
  return createPortal(<Viewer {...props} />, document.body);
}

function Viewer({ src, alt, title, onClose }: ZoomViewerProps) {
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
