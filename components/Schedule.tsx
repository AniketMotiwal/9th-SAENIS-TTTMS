export default function Schedule() {
  const scheduleData = [
    {
      day: 'December 3, 2026',
      dayNumber: 'Day 1',
      events: [
        { time: '08:00 AM', event: 'Registration & Welcome', type: 'registration' },
        { time: '09:00 AM', event: 'Opening Ceremony', type: 'ceremony' },
        { time: '10:00 AM', event: 'Keynote Address: Dr. Raj Kumar', type: 'keynote' },
        { time: '11:00 AM', event: 'Coffee Break', type: 'break' },
        { time: '11:30 AM', event: 'Technical Sessions - Track A & B', type: 'technical' },
        { time: '01:00 PM', event: 'Lunch Break', type: 'break' },
        { time: '02:00 PM', event: 'Parallel Sessions Continued', type: 'technical' },
        { time: '05:00 PM', event: 'Welcome Reception', type: 'social' },
      ],
    },
    {
      day: 'December 4, 2026',
      dayNumber: 'Day 2',
      events: [
        { time: '09:00 AM', event: 'Technical Sessions - Track C & D', type: 'technical' },
        { time: '11:00 AM', event: 'Coffee Break', type: 'break' },
        { time: '11:30 AM', event: 'Keynote Address: Prof. Anna Schmidt', type: 'keynote' },
        { time: '12:30 PM', event: 'Lunch Break', type: 'break' },
        { time: '01:30 PM', event: 'Poster Sessions & Demonstrations', type: 'poster' },
        { time: '03:30 PM', event: 'Coffee Break', type: 'break' },
        { time: '04:00 PM', event: 'Workshop Sessions', type: 'workshop' },
        { time: '06:00 PM', event: 'Gala Dinner', type: 'social' },
      ],
    },
    {
      day: 'December 5, 2026',
      dayNumber: 'Day 3',
      events: [
        { time: '09:00 AM', event: 'Technical Sessions - Track E & F', type: 'technical' },
        { time: '11:00 AM', event: 'Coffee Break', type: 'break' },
        { time: '11:30 AM', event: 'Panel Discussion: Future of Thermal Technologies', type: 'panel' },
        { time: '12:30 PM', event: 'Lunch Break', type: 'break' },
        { time: '01:30 PM', event: 'Awards & Closing Ceremony', type: 'ceremony' },
        { time: '03:00 PM', event: 'Conference Ends', type: 'end' },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      registration: 'border-cyan-500 bg-cyan-500/5',
      ceremony: 'border-purple-500 bg-purple-500/5',
      keynote: 'border-pink-500 bg-pink-500/5',
      break: 'border-gray-600 bg-gray-600/5',
      technical: 'border-cyan-500 bg-cyan-500/5',
      social: 'border-purple-500 bg-purple-500/5',
      poster: 'border-blue-500 bg-blue-500/5',
      workshop: 'border-cyan-500 bg-cyan-500/5',
      panel: 'border-pink-500 bg-pink-500/5',
      end: 'border-gray-600 bg-gray-600/5',
    };
    return colors[type] || 'border-cyan-500 bg-cyan-500/5';
  };

  return (
    <section id="schedule" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="section-title text-center mb-4">Conference Schedule</h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Three days of inspiring talks, networking, and collaboration
          </p>

          <div className="space-y-12">
            {scheduleData.map((daySchedule, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {dayIndex + 3}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">{daySchedule.dayNumber}</h3>
                    <p className="text-gray-400">{daySchedule.day}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-4 ml-6 md:ml-12 border-l-2 border-gradient-to-b border-slate-700 pl-8">
                  {daySchedule.events.map((item, eventIndex) => (
                    <div key={eventIndex} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-black"></div>

                      {/* Event card */}
                      <div className={`border rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${getTypeColor(item.type)}`}>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-cyan-400">{item.time}</p>
                            <p className="text-gray-200 font-medium">{item.event}</p>
                          </div>
                          <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 w-fit capitalize">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Download schedule button */}
          <div className="mt-16 text-center">
            <button className="btn-register">
              📥 Download Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
