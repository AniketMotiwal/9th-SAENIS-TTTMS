'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import SaeIndiaLogo from '@/components/SaeIndiaLogo';
import { NAV_LINKS, SECTION_IDS, SCROLL_SPY_OFFSET, SectionId } from '@/lib/sections';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'bg-black/55 backdrop-blur-sm'
      }`}
    >
      <nav className="w-full px-3 sm:px-5 lg:px-6 xl:px-8 h-[6.5rem] sm:h-[8.5rem] flex lg:grid lg:grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4 lg:gap-4 xl:gap-6">
        {/* Left — IIT logo (flush left on desktop) */}
        <div className="flex shrink-0 justify-start animate-anti-gravity">
          <div className="relative h-[4.5rem] w-[4.5rem] sm:h-[6.5rem] sm:w-[6.5rem] lg:h-32 lg:w-32">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iit_logo-eieQN2fUkXi1NU7FlB4FxOBYyZpsn0.webp"
              alt="IIT Roorkee"
              fill
              className="object-contain mix-blend-lighten drop-shadow-[0_0_28px_rgba(34,211,238,0.45)]"
              sizes="(max-width: 640px) 72px, 128px"
              priority
            />
          </div>
        </div>

        {/* Center — navigation fills space between logos */}
        <div className="hidden lg:flex w-full min-w-0 items-center justify-self-stretch px-2 xl:px-4">
          <div className="flex w-full flex-nowrap items-center justify-evenly">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link nav-link-desktop whitespace-nowrap ${
                  activeSection === link.id ? 'nav-link-active' : ''
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              className={`btn-register btn-register-desktop shrink-0 whitespace-nowrap ${
                activeSection === 'register' ? 'btn-register-active' : ''
              }`}
              aria-current={activeSection === 'register' ? 'page' : undefined}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right — SAEINDIA branding (flush right on desktop) */}
        <div className="ml-auto lg:ml-0 flex shrink-0 items-center justify-end gap-2 sm:gap-3 justify-self-end">
          <SaeIndiaLogo className="animate-anti-gravity-delayed" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-cyan-400" />
            ) : (
              <Menu className="h-6 w-6 text-cyan-400" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-cyan-500/20 bg-black/95 backdrop-blur-md lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-4 py-2.5 transition-colors duration-200 hover:bg-white/5 hover:text-cyan-400 ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-300 border-l-2 border-cyan-400'
                    : 'text-gray-200'
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              className={`btn-register mt-2 block text-center ${
                activeSection === 'register' ? 'btn-register-active' : ''
              }`}
              onClick={() => setIsOpen(false)}
              aria-current={activeSection === 'register' ? 'page' : undefined}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
