'use client';

import { useMemo, useState } from 'react';
import {
  CalendarDays,
  Clock,
  Coffee,
  Download,
  Flame,
  Mic2,
  Search,
  Sparkles,
  UserCheck,
  Users,
  UtensilsCrossed,
  X,
  Award,
  Megaphone,
  Info,
} from 'lucide-react';
import { AGENDA, type Slot, type SlotType } from '@/lib/agenda';

const TYPE: Record<SlotType, { label: string; icon: typeof Clock; dot: string; chip: string }> = {
  registration: { label: 'Registration', icon: UserCheck, dot: 'bg-teal-500', chip: 'bg-teal-50 text-teal-700 ring-teal-200' },
  ceremony: { label: 'Ceremony', icon: Award, dot: 'bg-navy-900', chip: 'bg-blue-50 text-navy-900 ring-blue-200' },
  theme: { label: 'Theme Talk', icon: Flame, dot: 'bg-orange-500', chip: 'bg-orange-50 text-orange-700 ring-orange-200' },
  recap: { label: 'Recap', icon: Clock, dot: 'bg-teal-500', chip: 'bg-teal-50 text-teal-700 ring-teal-200' },
  talk: { label: 'Technical Paper', icon: Mic2, dot: 'bg-sky-500', chip: 'bg-sky-50 text-sky-700 ring-sky-200' },
  panel: { label: 'Panel Discussion', icon: Users, dot: 'bg-violet-500', chip: 'bg-violet-50 text-violet-700 ring-violet-200' },
  sponsor: { label: 'Sponsor Session', icon: Megaphone, dot: 'bg-amber-500', chip: 'bg-amber-50 text-amber-700 ring-amber-200' },
  break: { label: 'Break', icon: Coffee, dot: 'bg-slate-300', chip: '' },
  lunch: { label: 'Lunch', icon: UtensilsCrossed, dot: 'bg-slate-300', chip: '' },
  closing: { label: 'Evening', icon: Sparkles, dot: 'bg-pink-500', chip: '' },
};

function Person({ line }: { line: string }) {
  const [name, ...rest] = line.split('|').map((s) => s.trim());
  return (
    <li className="flex gap-2 text-sm leading-snug">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
      <span>
        <span className="font-semibold">{name}</span>
        {rest.length > 0 && <span className="opacity-80"> · {rest.join(' · ')}</span>}
      </span>
    </li>
  );
}

function SlotCard({ s, no }: { s: Slot; no?: number }) {
  const t = TYPE[s.type];
  const Icon = t.icon;

  if (s.type === 'break' || s.type === 'lunch') {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-100/70 px-4 py-3 text-slate-600">
        <Icon className="h-5 w-5 shrink-0 text-slate-400" />
        <span className="font-semibold">{s.title}</span>
      </div>
    );
  }

  if (s.type === 'closing') {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-4 text-white shadow-md">
        <Sparkles className="h-5 w-5 shrink-0" />
        <span className="text-base font-bold">{s.title}</span>
      </div>
    );
  }

  if (s.type === 'ceremony') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-cyan-700 p-5 sm:p-6 text-white shadow-lg">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest ring-1 ring-white/30">
            <Award className="h-3.5 w-3.5" /> {t.label}
          </span>
          <h4 className="mt-3 text-xl sm:text-2xl font-black">{s.title}</h4>
          {s.note && <p className="mt-2 text-sm text-cyan-100">{s.note}</p>}
          {s.people && (
            <ul className="mt-4 grid gap-2 text-white md:grid-cols-2">
              {s.people.map((p) => (
                <Person key={p} line={p} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  const accent =
    s.type === 'panel'
      ? 'border-l-violet-500'
      : s.type === 'theme'
        ? 'border-l-orange-500'
        : s.type === 'sponsor'
          ? 'border-l-amber-500'
          : s.type === 'registration' || s.type === 'recap'
            ? 'border-l-teal-500'
            : 'border-l-sky-500';

  return (
    <div
      className={`rounded-2xl border border-slate-200 border-l-4 ${accent} bg-white p-4 sm:p-5 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ring-1 ${t.chip}`}>
          <Icon className="h-3.5 w-3.5" /> {t.label}
        </span>
        {no !== undefined && <span className="text-[11px] font-bold text-slate-400">Paper #{String(no).padStart(2, '0')}</span>}
      </div>
      <h4 className={`font-bold leading-snug text-slate-900 ${s.type === 'registration' ? 'text-lg' : 'text-base sm:text-[1.05rem]'}`}>
        {s.type === 'panel' && <span className="text-violet-600">Topic: </span>}
        {s.title}
      </h4>
      {s.speaker && (
        <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
          <Mic2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
          <span>
            <span className="font-semibold text-slate-800">{s.speaker.split(' — ')[0]}</span>
            {s.speaker.includes(' — ') && <span className="text-slate-500"> · {s.speaker.split(' — ')[1]}</span>}
          </span>
        </p>
      )}
      {s.note && <p className="mt-2 text-sm text-slate-600">{s.note}</p>}
      {s.people && (
        <ul className="mt-3 grid gap-1.5 text-slate-700">
          {s.people.map((p) => (
            <Person key={p} line={p} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Schedule() {
  const [active, setActive] = useState(0);
  const [q, setQ] = useState('');

  const stats = useMemo(
    () =>
      AGENDA.map((d) => ({
        talks: d.slots.filter((s) => s.type === 'talk').length,
        panels: d.slots.filter((s) => s.type === 'panel').length,
      })),
    [],
  );
  const totalTalks = stats.reduce((a, b) => a + b.talks, 0);
  const totalPanels = stats.reduce((a, b) => a + b.panels, 0);

  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!query) return [];
    return AGENDA.flatMap((d) =>
      d.slots
        .filter((s) => [s.title, s.speaker, s.note, ...(s.people ?? [])].join(' ').toLowerCase().includes(query))
        .map((s) => ({ ...s, day: d.day, weekday: d.weekday })),
    );
  }, [query]);

  const day = AGENDA[active];
  let paperNo = 0;
  const offset = stats.slice(0, active).reduce((a, b) => a + b.talks, 0);

  return (
    <section id="schedule" className="section-shell bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="eyebrow">
            <CalendarDays className="h-4 w-4" /> Conference Programme
          </span>
          <h2 className="section-title mt-4 mb-3">Agenda · TTTMS’26</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Three days of inaugural addresses, panel discussions and {totalTalks} technical paper presentations at
            Pradeep Kapse Auditorium, IIT Roorkee
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { v: '3', l: 'Days' },
            { v: String(totalTalks), l: 'Technical Papers' },
            { v: String(totalPanels), l: 'Panel Discussions' },
            { v: '9th', l: 'Edition' },
          ].map((x) => (
            <div key={x.l} className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm">
              <p className="text-3xl font-black text-navy-900">{x.v}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{x.l}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="sticky top-[4.5rem] sm:top-[5.25rem] xl:top-[5.5rem] 2xl:top-[6.25rem] z-20 -mx-4 mb-6 border-y border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md sm:mx-0 sm:rounded-2xl sm:border sm:shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="grid grid-cols-3 gap-2 lg:flex-1" role="tablist" aria-label="Conference days">
              {AGENDA.map((d, i) => {
                const on = active === i && !query;
                return (
                  <button
                    key={d.day}
                    role="tab"
                    aria-selected={on}
                    onClick={() => {
                      setActive(i);
                      setQ('');
                    }}
                    className={`rounded-xl px-2 py-2 text-center transition-all ${
                      on
                        ? 'bg-gradient-to-br from-navy-900 to-cyan-700 text-white shadow-lg shadow-blue-900/20'
                        : 'bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:ring-sky-300'
                    }`}
                  >
                    <span className="block text-sm sm:text-base font-black">{d.day}</span>
                    <span className={`block text-[11px] sm:text-xs ${on ? 'text-cyan-100' : 'text-slate-500'}`}>
                      {d.weekday.slice(0, 3)}, {d.date.replace(' 2026', '')}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex gap-2">
              <label className="relative flex-1 lg:w-72">
                <span className="sr-only">Search agenda</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search talk, speaker or company…"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-9 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                {q && (
                  <button onClick={() => setQ('')} className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 hover:text-slate-700" aria-label="Clear search">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </label>
              <a
                href="/agenda-tttms26.pdf"
                download
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-navy-900 px-3 sm:px-4 text-sm font-semibold text-white hover:bg-navy-800"
                title="Download agenda PDF"
              >
                <Download className="h-4 w-4" /> <span className="hidden sm:inline">Agenda PDF</span>
              </a>
            </div>
          </div>
        </div>

        {query ? (
          <div>
            <p className="mb-4 text-sm text-slate-600">
              <span className="font-bold text-slate-900">{results.length}</span> result{results.length === 1 ? '' : 's'} for “{q}”
            </p>
            <div className="space-y-3">
              {results.map((s, i) => (
                <div key={i} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-4">
                  <div className="text-sm sm:pt-4">
                    <p className="font-bold text-navy-900">{s.day} · {s.weekday}</p>
                    <p className="text-slate-500">{s.time}</p>
                  </div>
                  <SlotCard s={s} />
                </div>
              ))}
              {results.length === 0 && (
                <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">No sessions match your search.</p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col gap-3 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-cyan-700 p-5 sm:p-7 text-white shadow-xl sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-white text-navy-900 shadow-md">
                  <span className="text-2xl font-black leading-none">{day.date.split(' ')[0]}</span>
                  <span className="text-[10px] font-bold uppercase">Dec</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">{day.day}</p>
                  <h3 className="text-2xl sm:text-3xl font-black">{day.weekday}, {day.date}</h3>
                </div>
              </div>
              <div className="flex gap-2 sm:ml-auto">
                <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold ring-1 ring-white/25">{stats[active].talks} Papers</span>
                {stats[active].panels > 0 && (
                  <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold ring-1 ring-white/25">
                    {stats[active].panels} Panel{stats[active].panels > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>

            <ol className="relative space-y-4 sm:space-y-5">
              <span className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-sky-300 via-slate-200 to-pink-300 sm:left-[167px]" aria-hidden />
              {day.slots.map((s, i) => {
                const no = s.type === 'talk' ? offset + ++paperNo : undefined;
                return (
                  <li key={i} className="relative grid gap-1.5 pl-7 sm:grid-cols-[150px_1fr] sm:gap-8 sm:pl-0">
                    <span className={`absolute left-0 top-1 h-4 w-4 rounded-full border-[3px] border-white ${TYPE[s.type].dot} shadow ring-1 ring-slate-200 sm:left-[160px] sm:top-5`} aria-hidden />
                    <div className="flex items-center gap-1.5 text-sm font-bold text-navy-900 sm:justify-end sm:pt-4 sm:text-right">
                      <Clock className="h-3.5 w-3.5 text-sky-500 sm:hidden" />
                      {s.time}
                    </div>
                    <SlotCard s={s} no={no} />
                  </li>
                );
              })}
            </ol>
          </>
        )}

        <p className="mt-8 flex items-start justify-center gap-2 text-center text-xs sm:text-sm text-slate-500">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          Organizers reserve the right to change the presentation schedule and speakers without any prior notice.
        </p>
      </div>
    </section>
  );
}
