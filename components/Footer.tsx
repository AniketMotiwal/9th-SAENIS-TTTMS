import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-2 border-cyan-500/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section - Conference Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Conference Info Card */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">9th SAENIS TTTMS</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              International Conference on Emerging Thermal Technologies
            </p>
            <div className="border-t border-slate-700 pt-4">
              <p className="text-cyan-300 font-bold text-lg mb-2">📅 December 3-5, 2026</p>
              <p className="text-gray-400 text-sm">📍 IIT Roorkee, India</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border-2 border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
            <h4 className="text-xl font-black text-purple-300 mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#hero" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm flex items-center gap-2">
                  <span>→</span> Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm flex items-center gap-2">
                  <span>→</span> About
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm flex items-center gap-2">
                  <span>→</span> Schedule
                </Link>
              </li>
              <li>
                <Link href="#register" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm flex items-center gap-2">
                  <span>→</span> Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
            <h4 className="text-xl font-black text-cyan-300 mb-6">Get In Touch</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:info@saenisttms2026.org" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-semibold">
                  ✉️ info@saenisttms2026.org
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-semibold">
                  📱 +91 9876 543 210
                </a>
              </li>
            </ul>
            <div className="border-t border-slate-700 pt-4">
              <p className="text-gray-400 text-xs mb-3 font-semibold">Follow Us</p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm font-bold" title="Twitter">X</a>
                <a href="#" className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-xs font-bold" title="LinkedIn">in</a>
                <a href="#" className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm font-bold" title="Facebook">f</a>
                <a href="#" className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm" title="Instagram">📷</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Important Links */}
        <div className="border-t-2 border-cyan-500/30 py-12">
          {/* Organized by Section */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 mb-6 font-semibold tracking-wide">
              Organized by SAENIS | Hosted by IIT Roorkee
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
                <p className="text-gray-400 text-xs">International</p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-300 mb-2">Important Links</p>
              <div className="space-y-1">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors block">Terms & Conditions</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors block">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors block">Code of Conduct</a>
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-300 mb-2">Conference Info</p>
              <div className="space-y-1">
                <p className="text-gray-400">Dates: Dec 3-5, 2026</p>
                <p className="text-gray-400">Location: IIT Roorkee</p>
                <p className="text-gray-400">Thermal Technologies</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="font-semibold text-gray-300 mb-2">Contact Info</p>
              <div className="space-y-1">
                <p className="text-gray-400">Phone: +91 9876 543 210</p>
                <p className="text-gray-400">Email: info@saenisttms2026.org</p>
                <p className="text-gray-400">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with premium styling */}
        <div className="relative border-t-2 border-cyan-500/40 bg-gradient-to-r from-black via-cyan-950/20 to-black px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm font-semibold text-gray-300 mb-2">
              🏆 International Conference on Emerging Thermal Technologies
            </p>
            <p className="text-center text-xs text-gray-500 mb-3">
              © {currentYear} 9th SAENIS TTTMS International Conference. All rights reserved.
            </p>
            <p className="text-center text-xs text-cyan-400 font-semibold">
              Website Design & Development by Aniket Motiwal | Made with innovation for advancing thermal technology research
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
