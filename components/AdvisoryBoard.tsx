import {
  UsersRound,
  Users,
  Zap,
  Lightbulb,
  BatteryCharging,
  Landmark,
  Snowflake,
  FileText,
  Mic2,
  TrendingUp,
  Handshake,
  Globe,
  Trophy,
  Sparkles,
} from 'lucide-react';

const attendees = [
  {
    icon: Users,
    title: 'Senior Automotive & Mobility Leadership',
    text: 'CEOs, VPs, Senior Managers, Product Directors, and Vehicle Architecture Leaders.',
  },
  {
    icon: Zap,
    title: 'Electrification & Powertrain Experts',
    text: 'Chief Engineers, Lead Engineers, Project Leads, and Specialists in BEVs, Hybrid Systems, and Electrified Powertrains.',
  },
  {
    icon: Lightbulb,
    title: 'Research, Innovation & Technical Leaders',
    text: 'Technical Managers, Innovation Leaders, R&D Engineers, Chief Scientists, and Research Heads.',
  },
  {
    icon: BatteryCharging,
    title: 'Energy Storage & Charging Infrastructure Professionals',
    text: 'Technical Leads and Decision-Makers focused on Battery Systems, Energy Storage, and Charging Infrastructure.',
  },
  {
    icon: Landmark,
    title: 'Government, Policy & Academic Community',
    text: 'Government Authorities, Policymakers, Research Institutions, Faculty Members, Researchers, and Students.',
  },
  {
    icon: Snowflake,
    title: 'Thermal Management & Refrigeration Ecosystem',
    text: 'Thermal Management Engineers, Refrigerant Manufacturers, Solution Providers, and Service Organizations.',
  },
];

const reasons = [
  {
    icon: Users,
    title: 'Learn from Industry Experts',
    text: 'Through keynote sessions, panel discussions, and technical paper presentations focused on thermal technologies, sustainability, and future mobility.',
  },
  {
    icon: Lightbulb,
    title: 'Collaborate and Build Partnerships',
    text: 'Through knowledge exchange, discussions on industry trends, and opportunities to explore strategic business collaborations.',
  },
  {
    icon: FileText,
    title: 'Technical Paper Presentations',
    text: 'Explore cutting-edge research and innovations presented by industry experts, academicians and R&D professionals.',
  },
  {
    icon: Handshake,
    title: 'Build Strategic Partnerships',
    text: 'Collaborate with potential partners, explore business opportunities and strengthen your ecosystem.',
  },
  {
    icon: Mic2,
    title: 'Networking and Partnership',
    text: 'By connecting with OEMs, Tier-1 suppliers, start-ups, academia, government representatives, and other industry leaders.',
  },
  {
    icon: Globe,
    title: 'Recognition and Award',
    text: 'Gain visibility and contribute to the industry by showcasing research, earning recognition through awards, and supporting innovation and sustainable solutions for the future.',
  },
  {
    icon: TrendingUp,
    title: 'Stay Updated on Innovations',
    text: 'In thermal management solutions for ICE, EV, hybrid, and emerging mobility platforms.',
  },
  {
    icon: Trophy,
    title: 'Be Part of a Purpose',
    text: 'Contribute to a platform that drives knowledge, innovation and sustainable solutions for a better tomorrow.',
  },
];

export default function AdvisoryBoard() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {attendees.map((a, index) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-900 to-cyan-600 flex items-center justify-center text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-black text-sky-700">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-navy-900 text-[0.95rem] sm:text-base font-black uppercase leading-snug tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{a.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why You Should Attend */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" /> 3 Days · Endless Opportunities · Lasting Impact
            </span>
            <h2 className="section-title mt-4 mb-3">Why You Should Attend</h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-semibold">
              Connect. Learn. Collaborate. <span className="text-sky-700">Lead the Future.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 border-l-4 border-l-sky-500 bg-slate-50 p-5 sm:p-6 hover:border-sky-300 hover:bg-sky-50 transition-colors"
                >
                  <span className="shrink-0 w-11 h-11 rounded-full bg-navy-900 flex items-center justify-center text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-navy-900 text-[0.95rem] sm:text-base font-black uppercase tracking-tight">{r.title}</h3>
                    <p className="mt-1 text-slate-600 text-sm leading-relaxed">{r.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
