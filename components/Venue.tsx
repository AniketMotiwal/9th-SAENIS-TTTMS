import Image from 'next/image';

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
        <p className="mb-2 text-center text-cyan-400/90 font-semibold tracking-wide">
          IIT Roorkee, Roorkee, Uttarakhand, India
        </p>
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
