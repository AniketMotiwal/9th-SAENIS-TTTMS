/* eslint-disable @next/next/no-img-element */
import { CalendarDays, MapPin, Lightbulb, Trophy, Users, Target, Layers } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Trophy, title: 'Flagship Event', text: 'Annual flagship conference of SAE Northern India Section, in collaboration with SAE International.' },
    { icon: Users, title: 'Premier Platform', text: 'Brings together industry leaders, policymakers, academia, and innovators under one roof.' },
    { icon: Target, title: 'Focused Agenda', text: 'Contemporary challenges, technological trends, and advances in automotive thermal management.' },
    { icon: Layers, title: '9th Edition', text: 'TTTMS 2026 is the ninth edition — among India’s most sought-after thermal management conferences.' },
  ];

  const organizers = [
    {
      name: 'SAE India Northern Section',
      logo: '/saeindia-northern-logo.png',
      text: 'One of five SAEINDIA sections promoting membership and mobility engineering across Northern India through lectures, expositions, training, scholarships, and awards.',
    },
    {
      name: 'SAEINDIA',
      logo: '/organizers/saeindia.png',
      text: 'Premier professional society for the mobility engineering community — 4,000+ professional and 40,000+ student members; largest strategic alliance partner of SAE International.',
    },
    {
      name: 'SAE International',
      logo: '/organizers/sae-international.png',
      text: 'Global association of 1,28,000+ engineers and technical experts from 100+ countries across aerospace, automotive, and commercial vehicle industries.',
    },
  ];

  return (
    <section id="about" className="section-shell bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="eyebrow">
            <Lightbulb className="h-4 w-4" /> Think Tank for Thermal Management Systems
          </span>
          <h2 className="section-title mt-4">About the Conference</h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6 items-start mb-12">
          <div className="card-dark !p-6 sm:!p-8">
            <h3 className="text-xl sm:text-2xl font-black text-navy-900 mb-4">Conference Overview</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-navy-900">SAENIS TTTMS</strong> (Think Tank for Thermal Management Systems) Conference is the
                annual flagship event of SAE Northern India Section, organized in collaboration with SAE International.
              </p>
              <p>
                It serves as a premier platform bringing together industry leaders, policymakers, academia, and innovators.
                The conference focuses on contemporary challenges, latest technological trends, and advancements in automotive
                thermal management systems.
              </p>
              <p>
                Recognized as one of the most unique and sought-after conferences in India dedicated to thermal management
                systems, it is aligned with the global conference on Automotive Thermal Management Systems — ensuring global
                relevance.
              </p>
              <p className="rounded-xl border-l-4 border-cyan-500 bg-cyan-50 px-4 py-3 font-semibold text-navy-900">
                TTTMS 2026 will be the ninth edition of this prestigious conference.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-cyan-700 p-6 sm:p-7 text-white shadow-xl">
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10" />
              <h3 className="relative text-lg font-black uppercase tracking-widest text-cyan-200 mb-5">Event Snapshot</h3>
              <ul className="relative space-y-4">
                <li className="flex gap-3">
                  <CalendarDays className="h-6 w-6 shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-xl font-black">December 3–5, 2026</p>
                    <p className="text-sm text-cyan-100">Thursday – Saturday</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-6 w-6 shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-xl font-black">Pradeep Kapse Auditorium</p>
                    <p className="text-sm text-cyan-100">Department of Mechanical &amp; Industrial Engineering, IIT Roorkee, Uttarakhand</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Lightbulb className="h-6 w-6 shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-xl font-black italic">“Emerging Thermal Technologies”</p>
                    <p className="text-sm text-cyan-100">Conference Theme</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card-dark !p-5">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="font-bold text-navy-900 mb-1">{title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Organized by</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {organizers.map((org) => (
            <div key={org.name} className="card-dark text-center">
              <div className="mb-4 flex h-16 items-center justify-center">
                <img src={org.logo} alt={org.name} className="max-h-16 w-auto object-contain" loading="lazy" />
              </div>
              <h4 className="text-lg font-black text-navy-900 mb-2">{org.name}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{org.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
