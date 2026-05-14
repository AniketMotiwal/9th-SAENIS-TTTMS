'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import SaeIndiaLogo from '@/components/SaeIndiaLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Theme', href: '#theme' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Organizing Committee', href: '#organizing' },
    { name: 'Advisory Board', href: '#advisory' },
    { name: 'Patrons', href: '#patrons' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'bg-black/55 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-[6.5rem] sm:h-[8.5rem] flex items-center gap-4 lg:gap-8">
        {/* Left — IIT logo */}
        <div className="flex-shrink-0 animate-anti-gravity">
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

        {/* Center — navigation */}
        <div className="hidden min-w-0 flex-1 lg:flex lg:justify-center">
          <nav className="flex flex-nowrap items-center justify-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link whitespace-nowrap text-xs xl:text-sm">
                {link.name}
              </Link>
            ))}
            <Link href="#register" className="btn-register ml-1 whitespace-nowrap px-4 py-2 text-xs xl:text-sm xl:px-5">
              Register
            </Link>
          </nav>
        </div>

        {/* Right — SAEINDIA branding */}
        <div className="ml-auto flex flex-shrink-0 items-center gap-2 sm:gap-3">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-2.5 text-gray-200 transition-colors duration-200 hover:bg-white/5 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              className="btn-register mt-2 block text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
