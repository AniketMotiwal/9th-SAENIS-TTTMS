import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function Venue() {
  return (
    <section
      id="venue"
      className="section-shell bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="section-title mb-3 text-center">Venue at a Glance</h2>
        <div className="relative mx-auto mb-5 mt-6 max-w-3xl rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[2px] shadow-[0_0_40px_rgba(34,211,238,0.35)]">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-slate-950/95 px-5 py-6 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 ring-2 ring-cyan-400/60">
              <MapPin className="h-7 w-7 text-cyan-300 animate-pulse" aria-hidden="true" />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Conference Venue</p>
              <p className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent sm:text-3xl">
                Pradeep Kapse Auditorium
              </p>
              <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                Department of Mechanical &amp; Industrial Engineering
              </p>
              <p className="text-sm text-cyan-400/90 sm:text-base">IIT Roorkee, Uttarakhand, India</p>
            </div>
          </div>
        </div>
        <p className="mb-6 text-center text-gray-400 max-w-2xl mx-auto">
          Host campus for the 9th SAENIS TTTMS International Conference’26
        </p>

        {/* Full high-res collage — same layout as brochure/screenshot */}
        <div className="overflow-hidden rounded-2xl border border-cyan-500/25 bg-white p-2 sm:p-3 shadow-2xl shadow-cyan-500/10">
          <Image
            src="/venue/venue-at-a-glance.jpg?v=5"
            alt="Venue at a Glance — IIT Roorkee campus: James Thomason Building, auditorium, aerial view and campus greenery"
            width={6000}
            height={3375}
            quality={100}
            priority
            unoptimized
            className="h-auto w-full object-contain rounded-xl"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}
