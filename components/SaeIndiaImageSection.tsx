import Image from 'next/image';

type SaeIndiaImageSectionProps = {
  id: string;
  title: string;
  imageSrc: string;
};

export default function SaeIndiaImageSection({ id, title, imageSrc }: SaeIndiaImageSectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-36 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/90 sm:text-sm">
          SAEINDIA
        </p>
        <h2 className="section-title mb-8 text-center sm:mb-10">{title}</h2>

        <div className="overflow-hidden rounded-2xl border-2 border-cyan-500/35 bg-gradient-to-br from-slate-900/90 to-black shadow-2xl shadow-cyan-500/15 transition-shadow duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/25">
          <Image
            src={imageSrc}
            alt={`${title} — 9th SAENIS TTTMS International Conference 2026 (SAEINDIA)`}
            width={1920}
            height={1920}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
