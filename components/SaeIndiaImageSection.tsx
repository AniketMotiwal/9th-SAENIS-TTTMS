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
      className="section-shell bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[92rem]">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/90 sm:text-sm">
          SAEINDIA
        </p>
        <h2 className="section-title mb-4 text-center">{title}</h2>

        <div className="overflow-hidden rounded-2xl border-2 border-cyan-500/35 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-1.5 shadow-2xl shadow-cyan-500/15 sm:p-3">
          <Image
            src={imageSrc}
            alt={`${title} — 9th SAENIS TTTMS International Conference 2026 (SAEINDIA)`}
            width={2542}
            height={2476}
            quality={100}
            priority
            unoptimized
            className="h-auto w-full object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1536px) 96vw, 1472px"
          />
        </div>
      </div>
    </section>
  );
}
