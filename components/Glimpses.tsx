import Image from 'next/image';

export default function Glimpses() {
  return (
    <section
      id="glimpses"
      className="relative scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="section-title mb-4 text-center">Glimpses from Past Editions</h2>
        <p className="mb-10 text-center text-gray-400 max-w-2xl mx-auto">
          Moments from previous SAENIS TTTMS conferences
        </p>

        <div className="overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 p-2 sm:p-3 shadow-2xl shadow-cyan-500/10">
          <Image
            src="/glimpses/past-editions.jpg?v=2"
            alt="Glimpses from past SAENIS TTTMS conference editions"
            width={4000}
            height={1873}
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
