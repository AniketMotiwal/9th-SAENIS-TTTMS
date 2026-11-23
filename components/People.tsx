'use client';

import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import ZoomViewer from '@/components/ZoomViewer';
import { MENTORS, OC_COMMITTEES, OC_CORE, type Person } from '@/lib/people';

/* ---------- shared bits ---------- */

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/90 sm:text-sm">SAEINDIA</p>
      <h2 className="section-title mb-3">{title}</h2>
      <p className="mx-auto max-w-2xl text-sm text-slate-400 sm:text-base">{subtitle}</p>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </div>
  );
}

function Avatar({ src, alt, size }: { src: string; alt: string; size: 'lg' | 'md' }) {
  const dim = size === 'lg' ? 'h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36' : 'h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24';
  return (
    <div
      className={`${dim} shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[3px] shadow-lg shadow-cyan-500/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={480}
        height={480}
        loading="lazy"
        decoding="async"
        className="h-full w-full rounded-full bg-white object-cover ring-2 ring-slate-950"
      />
    </div>
  );
}

function PersonCard({ p }: { p: Person }) {
  return (
    <article className="group flex h-full flex-col items-center rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/90 to-slate-950/90 px-3 pb-5 pt-6 text-center shadow-xl backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-cyan-500/15 sm:px-4">
      <Avatar src={p.photo} alt={p.name} size="lg" />
      <h3 className="mt-5 text-base font-extrabold leading-snug tracking-tight text-white sm:text-lg">{p.name}</h3>
      {p.lines && (
        <div className="mt-2 space-y-0.5">
          {p.lines.map((l) => (
            <p key={l} className="text-[13px] font-semibold leading-snug text-slate-300 sm:text-sm">
              {l}
            </p>
          ))}
        </div>
      )}
      {p.role && (
        <p className="mt-3 inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-bold leading-snug text-cyan-300 sm:text-[13px]">
          {p.role}
        </p>
      )}
    </article>
  );
}

function MemberCard({ p }: { p: Person }) {
  return (
    <article className="group flex flex-col items-center rounded-xl px-2 py-3 text-center transition-colors duration-300 hover:bg-white/[0.04]">
      <Avatar src={p.photo} alt={p.name} size="md" />
      <h4 className="mt-3 text-[13px] font-extrabold leading-snug text-white sm:text-[15px]">{p.name}</h4>
      {p.org && <p className="mt-1 text-[11px] font-semibold text-cyan-300/90 sm:text-[13px]">{p.org}</p>}
    </article>
  );
}

function PosterButton({ src, title }: { src: string; title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:text-white"
      >
        <Maximize2 className="h-4 w-4" /> View official poster
      </button>
      {open && <ZoomViewer src={src} alt={`${title} poster`} title={title} onClose={() => setOpen(false)} />}
    </div>
  );
}

const shell = 'section-shell bg-gradient-to-b from-black via-slate-950 to-black';
const glow = (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
  </div>
);

/* ---------- sections ---------- */

export function Mentors() {
  return (
    <section id="mentors" className={shell}>
      {glow}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Mentors"
          subtitle="Distinguished industry leaders guiding the 9th SAENIS TTTMS International Conference 2026"
        />
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {MENTORS.map((p) => (
            <div key={p.name} className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.9375rem)] xl:w-[calc(20%-1rem)]">
              <PersonCard p={p} />
            </div>
          ))}
        </div>
        <PosterButton src="/sareindia/mentors-9th-tttms26-full.jpg?v=6" title="Mentors" />
      </div>
    </section>
  );
}

export function OrganizingCommittee() {
  return (
    <section id="oc-members" className={shell}>
      {glow}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Organizing Committee"
          subtitle="The team from industry and academia driving TTTMS’26"
        />

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {OC_CORE.map((p) => (
            <div key={p.name} className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.9375rem)] xl:w-[calc(20%-1rem)]">
              <PersonCard p={p} />
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {OC_COMMITTEES.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/60 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 border-b border-slate-700/70 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 px-4 py-3 sm:px-6 sm:py-4">
                <span className="h-6 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
                <h3 className="text-base font-extrabold tracking-tight text-white sm:text-xl">{c.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-x-1 gap-y-1 p-2 sm:gap-x-2 sm:p-5 lg:grid-cols-6">
                {c.members.map((p) => (
                  <MemberCard key={p.name} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <PosterButton src="/sareindia/organizing-committee-tttms26-full.jpg?v=4" title="Organizing Committee" />
      </div>
    </section>
  );
}
