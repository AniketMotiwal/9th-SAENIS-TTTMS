'use client';

import { useEffect, useRef } from 'react';

export default function SmoothEffects() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('section[id]:not(#hero), footer')
    );

    if (reduce) {
      nodes.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((el) => {
      el.classList.add('will-reveal');
      io.observe(el);
    });

    const failsafe = window.setTimeout(() => {
      nodes.forEach((el) => el.classList.add('is-revealed'));
    }, 8000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const el = spotRef.current;
    if (reduce || coarse || !el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.07;
      y += (targetY - y) * 0.07;
      el.style.transform = `translate3d(${x - 280}px, ${y - 280}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[4] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.1),transparent_70%)] blur-3xl md:block"
    />
  );
}
