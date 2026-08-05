export default function About() {
  const highlights = [
    {
      title: 'Flagship Event',
      text: 'Annual flagship conference of SAE Northern India Section, in collaboration with SAE International.',
    },
    {
      title: 'Premier Platform',
      text: 'Brings together industry leaders, policymakers, academia, and innovators under one roof.',
    },
    {
      title: 'Focused Agenda',
      text: 'Contemporary challenges, technological trends, and advances in automotive thermal management.',
    },
    {
      title: '9th Edition',
      text: 'TTTMS 2026 is the ninth edition — among India’s most sought-after thermal management conferences.',
    },
  ];

  const organizers = [
    {
      name: 'SAE India Northern Section',
      short: 'SAENIS',
      text: 'One of five SAEINDIA sections promoting membership and mobility engineering across Northern India through lectures, expositions, training, scholarships, and awards.',
    },
    {
      name: 'SAEINDIA',
      short: 'SAEINDIA',
      text: 'Premier professional society for the mobility engineering community — 4,000+ professional and 40,000+ student members; largest strategic alliance partner of SAE International.',
    },
    {
      name: 'SAE International',
      short: 'SAE',
      text: 'Global association of 1,28,000+ engineers and technical experts from 100+ countries across aerospace, automotive, and commercial vehicle industries.',
    },
  ];

  return (
    <section id="about" className="section-shell bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="section-title text-center mb-4">About the Conference</h2>
          <p className="text-center text-cyan-400/90 font-semibold tracking-wide mb-12">
            SAENIS TTTMS — Think Tank for Thermal Management Systems
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
            <div className="space-y-6">
              <div className="card-dark border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Conference Overview</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    SAENIS TTTMS (Think Tank for Thermal Management Systems) Conference is the
                    annual flagship event of SAE Northern India Section, organized in collaboration
                    with SAE International.
                  </p>
                  <p>
                    It serves as a premier platform bringing together industry leaders, policymakers,
                    academia, and innovators. The conference focuses on contemporary challenges,
                    latest technological trends, and advancements in automotive thermal management systems.
                  </p>
                  <p>
                    Recognized as one of the most unique and sought-after conferences in India
                    dedicated to thermal management systems, it is aligned with the global conference
                    on Automotive Thermal Management Systems — ensuring global relevance.
                  </p>
                  <p className="text-cyan-300 font-medium">
                    TTTMS 2026 will be the ninth edition of this prestigious conference.
                  </p>
                </div>
              </div>

              <div className="card-dark border-2 border-cyan-400/40 bg-gradient-to-br from-slate-900 to-slate-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Event Snapshot</h3>
                <ul className="text-gray-300 space-y-3">
                  <li>
                    <span className="text-gray-500 text-sm uppercase tracking-wider block mb-1">Dates</span>
                    <span className="text-cyan-300 font-bold text-lg">December 3–5, 2026</span>
                    <span className="text-gray-400 text-sm ml-2">(Thursday – Saturday)</span>
                  </li>
                  <li>
                    <span className="text-gray-500 text-sm uppercase tracking-wider block mb-1">Venue</span>
                    <span className="text-cyan-400 font-semibold">Indian Institute of Technology, Roorkee</span>
                    <span className="text-gray-400 block text-sm">Roorkee, Uttarakhand, India</span>
                  </li>
                  <li>
                    <span className="text-gray-500 text-sm uppercase tracking-wider block mb-1">Theme</span>
                    <span className="text-white font-semibold italic">&ldquo;Emerging Thermal Technologies&rdquo;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="card-dark hover:shadow-lg hover:shadow-cyan-500/15 transition-all duration-300 border border-slate-700/80"
                >
                  <h4 className="font-bold text-cyan-400 mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center text-white mb-8">Organizers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {organizers.map((org) => (
                <div
                  key={org.name}
                  className="card-dark border border-purple-500/25 hover:border-purple-400/50 transition-colors duration-300"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
                    {org.short}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-3">{org.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{org.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
