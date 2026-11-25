import { UsersRound } from 'lucide-react';

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
    <section id="advisory" className="section-shell bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="eyebrow">
            <UsersRound className="h-4 w-4" /> Audience
          </span>
          <h2 className="section-title mt-4 mb-3">Who Should Attend?</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Ideal for leaders and practitioners shaping the future of automotive thermal management
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {attendees.map((role, index) => (
            <div
              key={role}
              className="group flex gap-4 items-center rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-navy-900 to-cyan-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-slate-800 text-sm sm:text-[0.95rem] font-semibold leading-snug">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
