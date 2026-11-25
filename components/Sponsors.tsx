/* eslint-disable @next/next/no-img-element */
import { Sparkles, Handshake } from 'lucide-react';
import { SPONSOR_TIERS, ORGANIZERS, type Sponsor } from '@/lib/sponsors';

const H = { xl: 'h-16 sm:h-20', lg: 'h-12 sm:h-16', md: 'h-10 sm:h-12' };

function Logo({ s, size }: { s: Sponsor; size: keyof typeof H }) {
  const img = <img src={s.logo} alt={s.name} title={s.name} loading="lazy" className={`${H[size]} w-auto max-w-full object-contain`} />;
  return s.url ? (
    <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform duration-300 hover:scale-105">
      {img}
    </a>
  ) : (
    <div className="flex items-center justify-center transition-transform duration-300 hover:scale-105">{img}</div>
  );
}

function TierCard({ tier, className = '' }: { tier: (typeof SPONSOR_TIERS)[number]; className?: string }) {
  return (
    <div className={`flex flex-col rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-sky-900/10 ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <span className={`h-1 w-8 rounded-full bg-gradient-to-r ${tier.accent}`} />
        <h3 className={`bg-gradient-to-r ${tier.accent} bg-clip-text text-transparent text-sm sm:text-base font-black uppercase tracking-[0.2em]`}>
          {tier.tier}
        </h3>
      </div>
      <div className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10">
        {tier.sponsors.map((s) => (
          <Logo key={s.name} s={s} size={tier.size} />
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  const [principal, gold, silver, bronze, knowledge] = SPONSOR_TIERS;
  return (
    <section id="sponsors" className="section-shell bg-gradient-to-b from-sky-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="eyebrow">
            <Sparkles className="h-4 w-4" /> Thank You
          </span>
          <h2 className="section-title mt-4 mb-3">Our Sponsors</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Proudly supported by leading organisations driving the future of automotive thermal technologies
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <TierCard tier={principal} />
          <TierCard tier={gold} />
          <TierCard tier={silver} className="md:col-span-2" />
          <TierCard tier={bronze} />
          <TierCard tier={knowledge} />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <p className="mb-6 text-center text-xs font-black uppercase tracking-[0.3em] text-slate-500">Organizers</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {ORGANIZERS.map((o) => (
              <img key={o.name} src={o.logo} alt={o.name} title={o.name} loading="lazy" className="h-14 sm:h-16 w-auto object-contain" />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#patrons" className="btn-register inline-flex items-center gap-2 !px-8 !py-3.5 text-base">
            <Handshake className="h-5 w-5" /> Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
