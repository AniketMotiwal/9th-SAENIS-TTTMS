'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import SaeIndiaLogo from '@/components/SaeIndiaLogo';
import { NAV_LINKS, SECTION_IDS, SCROLL_SPY_OFFSET, SectionId } from '@/lib/sections';

const REGISTRATION_URL =
  'https://saenis.glueup.com/event/9th-saenis-tttms-international-conference-2026-189169/';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + SCROLL_SPY_OFFSET;
      let current: SectionId = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_8px_30px_rgba(11,42,85,0.12)]'
          : 'bg-white/90 backdrop-blur-md border-b border-white/40'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] w-full max-w-[100vw] items-center gap-2 overflow-hidden px-3 sm:h-[5.25rem] sm:px-4 xl:grid xl:h-[5.5rem] xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-3 xl:px-4 2xl:h-[6.25rem] 2xl:gap-5 2xl:px-8">
        {/* Left — IIT logo */}
        <div className="flex shrink-0 justify-start animate-anti-gravity">
          <div className="relative h-12 w-12 sm:h-16 sm:w-16 xl:h-[3.75rem] xl:w-[3.75rem] 2xl:h-24 2xl:w-24">
            <Image
              src="/organizers/iit-roorkee.png"
              alt="IIT Roorkee"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 48px, (max-width: 1536px) 64px, 96px"
              priority
            />
          </div>
        </div>

        {/* Center — desktop nav only from xl (MacBook+) so logos never collide */}
        <div className="hidden min-w-0 items-center xl:flex">
          <div className="flex w-full min-w-0 flex-nowrap items-center justify-center gap-x-0 2xl:justify-evenly">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.name}
                className={`nav-link nav-link-desktop ${
                  activeSection === link.id ? 'nav-link-active' : ''
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="2xl:hidden">{link.short}</span>
                <span className="hidden 2xl:inline">{link.name}</span>
              </Link>
            ))}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register btn-register-desktop ml-1 shrink-0 2xl:ml-2"
            >
              Register
            </a>
          </div>
        </div>

        {/* Right — SAEINDIA + hamburger below xl */}
        <div className="ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-3 xl:ml-0">
          <SaeIndiaLogo className="animate-anti-gravity-delayed" />
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-register !px-3 !py-2 text-xs sm:!px-4 sm:text-sm xl:hidden"
          >
            Register
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-slate-100 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-navy-900" />
            ) : (
              <Menu className="h-6 w-6 text-navy-900" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="max-h-[min(70vh,28rem)] overflow-y-auto border-t border-slate-200 bg-white/98 backdrop-blur-md shadow-lg xl:hidden">
          <div className="space-y-1 px-3 py-3 sm:px-4 sm:py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 sm:px-4 ${
                  activeSection === link.id
                    ? 'bg-sky-50 text-navy-900 font-semibold border-l-2 border-sky-600'
                    : 'text-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register mt-2 block text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
