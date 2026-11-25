import { Thermometer, BookOpenCheck } from 'lucide-react';

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
    <section id="theme" className="section-shell bg-gradient-to-b from-sky-50/70 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="eyebrow">
            <Thermometer className="h-4 w-4" /> Conference Theme
          </span>
          <h2 className="section-title mt-4 mb-3">Emerging Thermal Technologies</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
            Theme of the 9th SAENIS TTTMS International Conference’26
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-cyan-700 p-5 text-center text-white shadow-lg">
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10" />
              <p className="text-3xl md:text-4xl font-black mb-1">{stat.value}</p>
              <p className="text-cyan-100 text-xs md:text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="card-dark !p-6 sm:!p-8 mb-12 max-w-5xl mx-auto space-y-4 text-slate-700 leading-relaxed">
          <p>
            India is among the world&apos;s Top 3 automobile markets, with 28.3 million vehicles sold and 6.6 million vehicles
            exported in FY2025–26, reinforcing its position as a global automotive manufacturing hub.
          </p>
          <p>
            The automotive sector contributes ~7% of India&apos;s GDP, supports ~30 million jobs, and remains a key driver of
            industrial growth and exports. Government initiatives, including the ₹25,938 crore Production Linked Incentive (PLI)
            Scheme, are accelerating investments in EVs, hydrogen mobility, and advanced automotive technologies.
          </p>
          <p>
            The rapid adoption of Electric Vehicles, Software-Defined Vehicles (SDVs), and Advanced Driver Assistance Systems
            (ADAS) is significantly increasing the demand for next-generation thermal management solutions.
          </p>
          <p>
            Emerging thermal technologies — including heat pumps, integrated thermal management systems (iTMS), battery liquid
            cooling, AI-driven thermal control, and lightweight heat exchangers — are becoming critical for improving vehicle
            efficiency, safety, range, and passenger comfort.
          </p>
          <p className="rounded-xl border-l-4 border-cyan-500 bg-cyan-50 px-4 py-3 font-semibold text-navy-900">
            Thermal Management is evolving into a strategic technology, playing a pivotal role in enabling the future of
            sustainable, connected, and intelligent mobility.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-center text-navy-900 mb-2">Technical Sessions</h3>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          Papers and presentations span these focus areas across the three-day conference.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
          {sessions.map((title, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-900 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="text-3xl font-black text-sky-100 group-hover:text-sky-200 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-1 text-sm sm:text-base font-bold text-navy-900 leading-snug">{title}</h4>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-3xl gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <BookOpenCheck className="h-6 w-6 shrink-0 text-amber-600" />
          <ul className="text-slate-700 text-sm sm:text-base space-y-1.5 leading-relaxed">
            <li>Selected technical papers will be published through <strong>My Tech Zone, SAE International</strong>.</li>
            <li>Selected papers will be presented at the 9th SAENIS TTTMS International Conference – 2026.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
