'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SECTION_IDS, SCROLL_SPY_OFFSET } from '@/lib/sections';

const SCROLL_OFFSET = SCROLL_SPY_OFFSET;

export default function ScrollControls() {
  const [visible, setVisible] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const getCurrentSectionIndex = useCallback(() => {
    const scrollPosition = window.scrollY + SCROLL_OFFSET;
    let currentIndex = 0;

    SECTION_IDS.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPosition) {
        currentIndex = index;
      }
    });

    return currentIndex;
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(SECTION_IDS[index]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollUp = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < SECTION_IDS.length - 1) {
      scrollToSection(currentIndex + 1);
    }
  };

  useEffect(() => {
    const updateState = () => {
      const currentIndex = getCurrentSectionIndex();
      setVisible(window.scrollY > 120);
      setCanScrollUp(currentIndex > 0 || window.scrollY > 80);
      setCanScrollDown(currentIndex < SECTION_IDS.length - 1);
    };

    updateState();
    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    return () => {
      window.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [getCurrentSectionIndex]);

  return (
    <div
      className={`scroll-controls fixed right-3 sm:right-6 top-1/2 z-40 flex -translate-y-1/2 flex-col overflow-hidden rounded-full border border-cyan-500/30 bg-black/75 shadow-[0_0_24px_rgba(6,182,212,0.2)] backdrop-blur-md transition-all duration-300 ${
        visible ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'
      }`}
      aria-label="Page scroll controls"
    >
      <button
        type="button"
        onClick={scrollUp}
        disabled={!canScrollUp}
        className="scroll-control-btn rounded-t-full"
        aria-label="Scroll up to previous section"
      >
        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
      </button>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <button
        type="button"
        onClick={scrollDown}
        disabled={!canScrollDown}
        className="scroll-control-btn rounded-b-full"
        aria-label="Scroll down to next section"
      >
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
      </button>
    </div>
  );
}
