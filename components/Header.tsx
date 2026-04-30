'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

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
    { name: 'Register', href: '#register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20' : 'bg-black/40'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Logo - IIT Roorkee */}
        <div className="flex-shrink-0 group cursor-pointer">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 border-cyan-400 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 bg-white">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iit_logo-eieQN2fUkXi1NU7FlB4FxOBYyZpsn0.webp"
              alt="IIT Roorkee Logo"
              fill
              className="object-contain p-1"
              sizes="(max-width: 640px) 48px, 64px"
            />
          </div>
          <p className="text-xs text-center text-cyan-400 mt-1 hidden sm:block group-hover:text-purple-400 transition-colors">IIT Roorkee</p>
        </div>

        {/* Center Title */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="text-center">
            <h1 className="text-sm font-bold text-cyan-400 animate-glow-pulse">9th SAENIS TTTMS</h1>
            <p className="text-xs text-gray-400">International Conference 2026</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Logo - IIT Roorkee */}
        <div className="flex-shrink-0 group cursor-pointer">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 border-cyan-400 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 bg-white">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iit_logo-eieQN2fUkXi1NU7FlB4FxOBYyZpsn0.webp"
              alt="IIT Roorkee Logo"
              fill
              className="object-contain p-1"
              sizes="(max-width: 640px) 48px, 64px"
            />
          </div>
          <p className="text-xs text-center text-cyan-400 mt-1 hidden sm:block group-hover:text-purple-400 transition-colors">IIT Roorkee</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-cyan-400" />
          ) : (
            <Menu className="w-6 h-6 text-cyan-400" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20 animate-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
