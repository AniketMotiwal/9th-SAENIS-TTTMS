import { Building2, GraduationCap, BookOpenCheck, Globe2, BadgeCheck, ArrowRight } from 'lucide-react';

type Price = { label: string; value: string };
type Group = {
  title: string;
  subtitle: string;
  icon: typeof Building2;
  header: string;
  ring: string;
  priceText: string;
  member: Price[];
  nonMember: Price[];
};

const groups: Group[] = [
  {
    title: 'Industry',
    subtitle: 'Professionals & OEMs',
    icon: Building2,
    header: 'from-cyan-500 to-blue-600',
    ring: 'border-sky-200 hover:border-sky-400 hover:shadow-sky-500/20',
    priceText: 'text-sky-700',
    member: [
      { label: 'Delegate', value: '8,500' },
      { label: 'Author', value: '7,500' },
    ],
    nonMember: [
      { label: 'Delegate', value: '9,500' },
      { label: 'Author', value: '8,500' },
    ],
  },
  {
    title: 'Academia',
    subtitle: 'Faculty & Researchers',
    icon: GraduationCap,
    header: 'from-violet-500 to-purple-700',
    ring: 'border-violet-200 hover:border-violet-400 hover:shadow-violet-500/20',
    priceText: 'text-violet-700',
    member: [
      { label: 'Delegate', value: '3,500' },
      { label: 'Author', value: '2,500' },
    ],
    nonMember: [
      { label: 'Delegate', value: '4,500' },
      { label: 'Author', value: '4,000' },
    ],
  },
  {
    title: 'Student',
    subtitle: 'UG / PG / PhD Scholars',
    icon: BookOpenCheck,
    header: 'from-emerald-500 to-teal-600',
    ring: 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/20',
    priceText: 'text-emerald-700',
    member: [
      { label: 'Delegate', value: '1,500' },
      { label: 'Author', value: '1,000' },
    ],
    nonMember: [
      { label: 'Delegate', value: '2,000' },
      { label: 'Author', value: '1,500' },
    ],
  },
  {
    title: 'Abroad',
    subtitle: 'International Participants',
    icon: Globe2,
    header: 'from-amber-400 to-orange-600',
    ring: 'border-amber-200 hover:border-amber-400 hover:shadow-amber-500/20',
    priceText: 'text-amber-700',
    member: [{ label: 'Fee', value: '100' }],
    nonMember: [{ label: 'Fee', value: '150' }],
  },
];

function PriceRow({ tag, prices, color, currency }: { tag: string; prices: Price[]; color: string; currency: string }) {
  return (
    <div>
      <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
        <BadgeCheck className="h-3.5 w-3.5" /> {tag}
      </p>
      <div className={`grid gap-2 ${prices.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {prices.map((p) => (
          <div key={p.label} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{p.label}</p>
            <p className={`mt-0.5 text-xl sm:text-2xl font-black leading-tight ${color}`}>
              <span className="mr-0.5 text-sm font-bold opacity-80">{currency}</span>
              {p.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConferenceFee() {
  return (
    <section id="fees" className="section-shell bg-gradient-to-b from-sky-50/70 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="eyebrow">
            Registration
          </span>
          <h2 className="section-title mt-4 mb-3">
            Conference Fee
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Join the 9th SAENIS TTTMS International Conference’26 · All fees are exclusive of taxes
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map((g) => {
            const Icon = g.icon;
            const currency = g.title === 'Abroad' ? '$' : '₹';
            return (
              <div
                key={g.title}
                className={`group flex flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-lg transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-2xl ${g.ring}`}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${g.header} px-5 py-5`}>
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15" />
                  <div className="absolute -right-2 bottom-0 h-12 w-12 rounded-full bg-white/10" />
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/40 backdrop-blur">
                      <Icon className="h-6 w-6 text-white" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-wide text-white">{g.title}</h3>
                      <p className="text-xs font-medium text-white/85">{g.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-5">
                  <PriceRow tag="SAE Member" prices={g.member} color={g.priceText} currency={currency} />
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <PriceRow tag="Non-SAE Member" prices={g.nonMember} color={g.priceText} currency={currency} />
                  <p className="mt-auto pt-1 text-center text-[11px] text-slate-500">
                    {g.title === 'Abroad' ? 'USD' : 'INR'} · + Taxes as applicable
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#register" className="btn-register inline-flex items-center gap-2 !px-8 !py-3.5 text-base">
            Register Now <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
