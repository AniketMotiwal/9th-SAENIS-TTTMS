export default function AdvisoryBoard() {
  const attendees = [
    'CEOs, VPs and Senior Managers at OEMs',
    'Group Product Directors for Hybrid and Electric Systems',
    'Chief Engineers – BEVs',
    'Govt. Authorities, Policy Makers & Govt. Research Associates',
    'Heads of Vehicle Architecture',
    'Lead Engineers, Electrified Powertrains',
    'Technical and Innovation Managers',
    'Head of Research, Materials and Manufacturing',
    'Chief Scientists – Energy and Systems',
    'Heads of Charging Infrastructure',
    'Project Leads – Electrification',
    'R&D Engineers – Thermal Management',
    'Technical Leads – Energy Storage and Systems',
    'Engineering Students, Faculty Members, Academic Researchers & Scholars',
    'Refrigerant Manufacturers and Service Providers',
  ];

  return (
    <section id="advisory" className="section-shell bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-4">Who Should Attend?</h2>
        <p className="text-center text-gray-400 text-lg mb-14 max-w-2xl mx-auto">
          Ideal for leaders and practitioners shaping the future of automotive thermal management
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {attendees.map((role, index) => (
            <div
              key={role}
              className="group flex gap-4 items-start rounded-xl border border-purple-500/30 bg-gradient-to-r from-slate-900/80 to-slate-800/60 p-5 hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-bold text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-gray-200 text-sm font-medium leading-snug pt-1.5 group-hover:text-white transition-colors">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
