export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="section-title text-center mb-12">About the Conference</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <div className="card-dark">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Conference Details</h3>
                <p className="text-gray-300 leading-relaxed">
                  The 9th SAENIS TTTMS International Conference brings together leading researchers, engineers, and industry professionals to discuss cutting-edge advances in thermal technologies and their applications.
                </p>
              </div>

              <div className="card-dark border-2 border-cyan-400 bg-gradient-to-br from-slate-900 to-slate-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Key Dates</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="text-lg">
                    📅 <span className="text-cyan-300 font-bold text-xl bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">December 3-5, 2026</span>
                  </li>
                  <li>📍 <span className="text-cyan-400 font-semibold">IIT Roorkee, India</span></li>
                  <li>🌍 <span className="text-cyan-400 font-semibold">International Participation</span></li>
                </ul>
              </div>

              <div className="card-dark">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Theme</h3>
                <p className="text-gray-300 italic">
                  &quot;Emerging Thermal Technologies&quot;
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Exploring innovative solutions in thermal management, waste heat recovery, and sustainable energy conversion.
                </p>
              </div>
            </div>

            {/* Right side - Highlights */}
            <div className="space-y-4">
              <div className="card-dark hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h4 className="font-bold text-cyan-400 mb-1">Expert Speakers</h4>
                    <p className="text-gray-400 text-sm">World-renowned researchers and industry leaders</p>
                  </div>
                </div>
              </div>

              <div className="card-dark hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🔬</div>
                  <div>
                    <h4 className="font-bold text-purple-400 mb-1">Research Papers</h4>
                    <p className="text-gray-400 text-sm">Cutting-edge research presentations and discussions</p>
                  </div>
                </div>
              </div>

              <div className="card-dark hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-cyan-400 mb-1">Networking</h4>
                    <p className="text-gray-400 text-sm">Connect with professionals from across the globe</p>
                  </div>
                </div>
              </div>

              <div className="card-dark hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="font-bold text-purple-400 mb-1">Awards & Recognition</h4>
                    <p className="text-gray-400 text-sm">Outstanding papers and presentations recognized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
