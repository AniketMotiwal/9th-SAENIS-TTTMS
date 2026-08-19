'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
};

export default function ZoomableImage({ src, alt, width, height, sizes }: ZoomableImageProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const stateRef = useRef({ scale: 1, x: 0, y: 0 });

  stateRef.current = { scale, x: pos.x, y: pos.y };

  const clampScale = (value: number) => Math.min(4, Math.max(1, value));

  const zoomAt = useCallback((clientX: number, clientY: number, nextScale: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const { scale: current, x, y } = stateRef.current;
    const ns = clampScale(nextScale);
    const rect = el.getBoundingClientRect();
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const worldX = (px - cx - x) / current;
    const worldY = (py - cy - y) / current;

    if (ns <= 1) {
      setScale(1);
      setPos({ x: 0, y: 0 });
      return;
    }

    setScale(ns);
    setPos({
      x: px - cx - worldX * ns,
      y: py - cy - worldY * ns,
    });
  }, []);

  const onDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (stateRef.current.scale > 1.05) {
      setScale(1);
      setPos({ x: 0, y: 0 });
      return;
    }
    zoomAt(e.clientX, e.clientY, 2.5);
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const { scale: current } = stateRef.current;
      if (current <= 1 && e.deltaY > 0) return;
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.14 : 0.88;
      zoomAt(e.clientX, e.clientY, current * factor);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomAt]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (stateRef.current.scale <= 1) return;
    e.preventDefault();
    dragRef.current = { active: true, lastX: e.clientX, lastY: e.clientY };
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.lastX;
    const dy = e.clientY - dragRef.current.lastY;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    setPos((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const endDrag = (e: React.PointerEvent) => {
    dragRef.current.active = false;
    setDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const zoomed = scale > 1.02;

  return (
    <div
      ref={viewportRef}
      className={`relative overflow-hidden rounded-2xl border-2 border-cyan-500/35 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-1.5 shadow-2xl shadow-cyan-500/15 sm:p-3 ${
        zoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
      }`}
      onDoubleClick={onDoubleClick}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      role="img"
      aria-label={`${alt}. Double-click to zoom`}
    >
      <div
        className="origin-center will-change-transform select-none"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${scale})`,
          transition: dragging ? 'none' : 'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={100}
          priority
          unoptimized
          draggable={false}
          className="pointer-events-none h-auto w-full object-contain"
          sizes={sizes}
        />
      </div>
    </div>
  );
}
