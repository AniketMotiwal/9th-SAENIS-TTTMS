export default function Theme() {
  const sessions = [
    'Vehicle Climate Control & Automotive Power-Train Cooling',
    'Vehicle Underhood Thermal Management',
    'Control Units for Thermal Management Systems',
    'Human Comfort Including Thermal Comfort & Cabin Air Quality',
    'Alternative Refrigerants',
    'Thermal Systems for Electric, Hybrid, Hydrogen Fuel Cell & Hydrogen ICE Vehicles',
    'Thermal System & Components',
    'Thermal Systems for Heavy & Off-road Vehicles',
    'Waste Heat Recovery & Regulatory Topics',
    'Thermal Simulation / Analysis / Modeling',
  ];

  const stats = [
    { value: 'Top 3', label: 'Automobile markets worldwide' },
    { value: '28.3M', label: 'Vehicles sold in FY2025–26' },
    { value: '~7%', label: 'of India’s GDP from auto sector' },
    { value: '30M+', label: 'Jobs supported by the sector' },
  ];

  return (
    <section id="theme" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="section-title text-center mb-4">Emerging Thermal Technologies</h2>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Theme of the 9th SAENIS TTTMS International Conference’26
          </p>

          <div className="card-dark border border-cyan-500/20 mb-12 max-w-5xl mx-auto space-y-5 text-gray-300 leading-relaxed">
            <p>
              India is among the world&apos;s Top 3 automobile markets, with 28.3 million vehicles sold
              and 6.6 million vehicles exported in FY2025–26, reinforcing its position as a global
              automotive manufacturing hub.
            </p>
            <p>
              The automotive sector contributes ~7% of India&apos;s GDP, supports ~30 million jobs, and
              remains a key driver of industrial growth and exports. Government initiatives, including
              the ₹25,938 crore Production Linked Incentive (PLI) Scheme, are accelerating investments
              in EVs, hydrogen mobility, and advanced automotive technologies.
            </p>
            <p>
              The rapid adoption of Electric Vehicles, Software-Defined Vehicles (SDVs), and Advanced
              Driver Assistance Systems (ADAS) is significantly increasing the demand for
              next-generation thermal management solutions.
            </p>
            <p>
              Emerging thermal technologies — including heat pumps, integrated thermal management
              systems (iTMS), battery liquid cooling, AI-driven thermal control, and lightweight heat
              exchangers — are becoming critical for improving vehicle efficiency, safety, range, and
              passenger comfort.
            </p>
            <p className="text-cyan-300 font-medium">
              Thermal Management is evolving into a strategic technology, playing a pivotal role in
              enabling the future of sustainable, connected, and intelligent mobility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-xl border border-slate-700 bg-slate-900/60"
              >
                <p className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">{stat.value}</p>
                <p className="text-gray-400 text-xs md:text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            Technical Sessions
          </h3>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Papers and presentations will span these focus areas across the three-day conference.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {sessions.map((title, index) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 bg-gradient-to-br from-slate-900 to-slate-800 p-5"
              >
                <span className="text-cyan-500/40 font-mono text-xs font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-2 text-base font-semibold text-cyan-300 group-hover:text-purple-300 transition-colors leading-snug">
                  {title}
                </h4>
              </div>
            ))}
          </div>

          <div className="card-dark border border-purple-500/30 max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wider">Note</p>
            <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
              <li>
                Selected technical papers will be published through My Tech Zone, SAE International.
              </li>
              <li>
                Selected papers will be presented at the 9th SAENIS TTTMS International Conference – 2026.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
