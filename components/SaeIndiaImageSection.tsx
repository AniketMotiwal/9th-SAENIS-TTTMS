import ZoomableImage from '@/components/ZoomableImage';

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
        <h2 className="section-title mb-3 text-center">{title}</h2>
        <p className="mb-4 text-center text-sm text-gray-400">
          Double-click to zoom · scroll to zoom in/out · drag to move
        </p>

        <ZoomableImage
          src={imageSrc}
          alt={`${title} — 9th SAENIS TTTMS International Conference 2026 (SAEINDIA)`}
          width={2542}
          height={2476}
          sizes="(max-width: 640px) 100vw, (max-width: 1536px) 96vw, 1472px"
        />
      </div>
    </section>
  );
}
