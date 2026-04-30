export default function Theme() {
  const themes = [
    {
      title: 'Thermal Management Systems',
      description: 'Advanced cooling and heating solutions for industrial and consumer applications',
      color: 'from-cyan-500 to-blue-500',
      icon: '❄️',
    },
    {
      title: 'Waste Heat Recovery',
      description: 'Innovative techniques for capturing and utilizing thermal energy from industrial processes',
      color: 'from-orange-500 to-red-500',
      icon: '♻️',
    },
    {
      title: 'Thermal Energy Storage',
      description: 'Next-generation storage systems for thermal energy management and grid stability',
      color: 'from-purple-500 to-pink-500',
      icon: '⚡',
    },
    {
      title: 'Materials & Characterization',
      description: 'Novel thermal materials and advanced characterization techniques for thermal applications',
      color: 'from-green-500 to-cyan-500',
      icon: '🔬',
    },
  ];

  return (
    <section id="theme" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="section-title text-center mb-4">Emerging Thermal Technologies</h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto text-justify md:text-center">
            Discover the key areas of focus for this year&apos;s conference, covering the latest innovations and breakthroughs in thermal engineering and applied physics.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Card content */}
                <div className="relative z-10 p-8 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:from-slate-800 group-hover:to-slate-700 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{theme.icon}</span>
                    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 leading-snug">
                      {theme.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {theme.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${theme.color} w-0 group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info box */}
          <div className="mt-16 card-dark border-2 border-cyan-500/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-400 mb-2">50+</h4>
                <p className="text-gray-400">Research Papers Expected</p>
              </div>
              <div className="text-center border-l border-r border-slate-700">
                <h4 className="text-3xl font-bold text-purple-400 mb-2">30+</h4>
                <p className="text-gray-400">Expert Speakers</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-400 mb-2">500+</h4>
                <p className="text-gray-400">Expected Participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
