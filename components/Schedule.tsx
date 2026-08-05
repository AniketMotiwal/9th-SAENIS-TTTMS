export default function Schedule() {
  const days = [
    {
      date: 'December 3, 2026',
      dayNumber: 'Day 1',
      note: 'Inauguration by Esteemed Chief Guest & Guest of Honour',
      sessions: [
        {
          slot: 'Morning',
          items: [
            'Theme Presentation: Invited Speakers (Emerging Thermal Technologies)',
            'Technical Paper Presentations',
          ],
        },
        {
          slot: 'Afternoon',
          items: [
            'Panel Discussion: Corporate Average Fuel Economy (Impact on Vehicle Thermal Management Systems) — Challenges & Opportunities: Invited Speakers',
            'Technical Paper Presentations',
          ],
        },
      ],
    },
    {
      date: 'December 4, 2026',
      dayNumber: 'Day 2',
      note: null,
      sessions: [
        {
          slot: 'Morning',
          items: [
            'Panel Discussion: Emerging Challenges & Awareness Session on ‘Phasing out Hydrofluorocarbons Under Kigali Amendment to the Montreal Protocol’: Invited Speakers',
            'Technical Paper Presentations',
          ],
        },
        {
          slot: 'Afternoon',
          items: [
            'Panel Discussion: Sustainable Mobility Solutions for India — Future Roadmap: Invited Speakers',
            'Technical Paper Presentations',
          ],
        },
      ],
    },
    {
      date: 'December 5, 2026',
      dayNumber: 'Day 3',
      note: 'Valedictory — Best Paper & Best Presentation Awards along with Sponsors’ Felicitation',
      sessions: [
        {
          slot: 'Morning',
          items: [
            'Session for Students',
            'Technical Paper Presentations',
          ],
        },
        {
          slot: 'Afternoon',
          items: [
            'Session for Students',
            'Technical Paper Presentations',
          ],
        },
      ],
    },
  ];

  return (
    <section id="schedule" className="section-shell bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="section-title text-center mb-4">Event at a Glance</h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            December 3–5, 2026 · IIT Roorkee
          </p>

          <div className="space-y-10">
            {days.map((day, dayIndex) => (
              <div
                key={day.date}
                className="rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900/90 to-slate-800/50 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 border-b border-slate-700/80 bg-black/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold shrink-0">
                      {dayIndex + 3}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{day.dayNumber}</h3>
                      <p className="text-gray-400 text-sm">{day.date}</p>
                    </div>
                  </div>
                  {day.note && (
                    <p className="sm:ml-auto text-sm text-purple-300 font-medium max-w-xl sm:text-right">
                      {day.note}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/80">
                  {day.sessions.map((session) => (
                    <div key={session.slot} className="p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-4">
                        {session.slot} Session
                      </p>
                      <ul className="space-y-3">
                        {session.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
