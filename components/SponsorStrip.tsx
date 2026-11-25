/* eslint-disable @next/next/no-img-element */
import { ALL_SPONSORS } from '@/lib/sponsors';

export default function SponsorStrip() {
  const row = [...ALL_SPONSORS, ...ALL_SPONSORS];
  return (
    <section aria-label="Conference sponsors" className="relative border-y border-slate-200 bg-white py-5 sm:py-6">
      <p className="mb-4 text-center text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
        Supported by our Sponsors &amp; Partners
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16 hover:[animation-play-state:paused]">
          {row.map((s, i) => (
            <a key={i} href="#sponsors" className="shrink-0" aria-hidden={i >= ALL_SPONSORS.length} tabIndex={i >= ALL_SPONSORS.length ? -1 : 0}>
              <img src={s.logo} alt={s.name} className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
