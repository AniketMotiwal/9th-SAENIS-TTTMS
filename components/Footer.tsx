import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-2 border-cyan-500/50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
              9th SAENIS TTTMS
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              International Conference on Emerging Thermal Technologies
            </p>
            <div className="border-t border-slate-700 pt-4">
              <p className="text-cyan-300 font-bold text-lg mb-2">December 3–5, 2026</p>
              <p className="text-gray-400 text-sm">IIT Roorkee, Uttarakhand, India</p>
              <a
                href="https://www.saenis.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-sm hover:underline mt-2 inline-block"
              >
                www.saenis.org
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border-2 border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
            <h4 className="text-xl font-black text-purple-300 mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '#hero', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#schedule', label: 'Schedule' },
                { href: '#patrons', label: 'Sponsorship' },
                { href: '#register', label: 'Register' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm flex items-center gap-2"
                  >
                    <span>→</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
            <h4 className="text-xl font-black text-cyan-300 mb-6">Connect With Us</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Paper / Accommodation
                </p>
                <p className="text-white font-semibold">Saurabh Suman</p>
                <a href="tel:+918433235236" className="text-cyan-400 hover:underline block">
                  (+91) 8433235236
                </a>
                <a href="mailto:saenis.tttms@saenis.org" className="text-cyan-400 hover:underline block">
                  saenis.tttms@saenis.org
                </a>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Sponsorship & Registration
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="mailto:Shekhar.Bhangale@maruti.co.in" className="hover:text-cyan-400 transition-colors">
                      Shekhar.Bhangale@maruti.co.in
                    </a>
                  </li>
                  <li>
                    <a href="mailto:s.jaybhay@tatamotors.com" className="hover:text-cyan-400 transition-colors">
                      s.jaybhay@tatamotors.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Bijral.Gurpreet@mahindra.com" className="hover:text-cyan-400 transition-colors">
                      Bijral.Gurpreet@mahindra.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-cyan-500/30 py-12">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 mb-6 font-semibold tracking-wide">
              Organized by SAENIS | Hosted by IIT Roorkee | In collaboration with SAE International
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="relative w-20 h-20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iit_logo-eieQN2fUkXi1NU7FlB4FxOBYyZpsn0.webp"
                  alt="IIT Roorkee"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-gray-500 text-2xl font-light">×</span>
              <div className="text-center">
                <p className="text-cyan-400 font-bold text-lg">SAENIS</p>
                <p className="text-gray-400 text-xs">TTTMS’26</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-300 mb-2">Venue</p>
              <p className="text-gray-400">IIT Roorkee</p>
              <p className="text-gray-400">Roorkee, Uttarakhand, India</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-300 mb-2">Conference Info</p>
              <p className="text-gray-400">Dates: Dec 3–5, 2026</p>
              <p className="text-gray-400">Emerging Thermal Technologies</p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-semibold text-gray-300 mb-2">Website</p>
              <a
                href="https://www.saenis.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                www.saenis.org
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-t-2 border-cyan-500/40 bg-gradient-to-r from-black via-cyan-950/20 to-black px-4 py-5">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm font-semibold text-gray-300 mb-2">
              9th SAENIS TTTMS International Conference — Emerging Thermal Technologies
            </p>
            <p className="text-center text-xs text-gray-500">
              © {currentYear} 9th SAENIS TTTMS International Conference. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
