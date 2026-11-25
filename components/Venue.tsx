import Image from 'next/image';
import { MapPin, Navigation } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="section-shell bg-white">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <span className="eyebrow">
            <MapPin className="h-4 w-4" /> Venue
          </span>
          <h2 className="section-title mt-4">Venue at a Glance</h2>
        </div>

        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-cyan-700 px-6 py-6 text-center text-white shadow-xl sm:flex-row sm:gap-6 sm:px-8 sm:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-2 ring-white/40">
            <MapPin className="h-8 w-8 text-cyan-200" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">Conference Venue</p>
            <p className="text-2xl sm:text-3xl font-black">Pradeep Kapse Auditorium</p>
            <p className="mt-1 text-base font-semibold text-white/95">Department of Mechanical &amp; Industrial Engineering</p>
            <p className="text-sm text-cyan-100">IIT Roorkee, Uttarakhand, India</p>
          </div>
          <a
            href="https://maps.google.com/?q=Department+of+Mechanical+and+Industrial+Engineering+IIT+Roorkee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-navy-900 shadow-md transition-transform hover:scale-105"
          >
            <Navigation className="h-4 w-4" /> Directions
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 sm:p-3 shadow-xl shadow-sky-900/10">
          <Image
            src="/venue/venue-at-a-glance.jpg?v=5"
            alt="Venue at a Glance — IIT Roorkee campus: James Thomason Building, auditorium, aerial view and campus greenery"
            width={6000}
            height={3375}
            quality={100}
            unoptimized
            className="h-auto w-full object-contain rounded-2xl"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}
