import {
  Crown,
  Gem,
  Medal,
  Award,
  Shield,
  Rocket,
  Users,
  Image as ImageIcon,
  BookOpen,
  Presentation,
  Film,
  Megaphone,
  Share2,
  Tag,
  Store,
  FileText,
  Layers,
  Check,
  Mail,
} from 'lucide-react';

type Tier = {
  name: string;
  price: string;
  icon: typeof Crown;
  wide?: boolean;
  panel: string;
  border: string;
  glow: string;
  title: string;
  chip: string;
  benefits: string[];
};

const tiers: Tier[] = [
  {
    name: 'Principal',
    price: '5,00,000',
    icon: Crown,
    wide: true,
    panel: 'from-amber-100 via-yellow-50 to-white',
    border: 'border-amber-300',
    glow: 'hover:shadow-amber-500/25',
    title: 'from-amber-600 via-yellow-600 to-amber-700',
    chip: 'bg-amber-100 text-amber-700 ring-amber-300',
    benefits: [
      'Backdrop & Welcome Standee Logo (Top Space & Large Size)',
      '6 Complimentary Delegates',
      'Complimentary Exhibition Space for Demo Vehicle/System',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Prominent Display of Company Logo on Event Guide',
      'Company Logo on All Conference Collaterals (Top Space)',
      'Company Name on Lanyard',
      'Complimentary Presentation on Technical Topics',
      'Promotional Film of 3–5 minutes in Breaks',
      'Promotion on “Thank You Sponsors” Panel',
      'Exclusive bytes for Social Media Marketing',
    ],
  },
  {
    name: 'Platinum',
    price: '4,00,000',
    icon: Gem,
    wide: true,
    panel: 'from-slate-200 via-sky-50 to-white',
    border: 'border-slate-300',
    glow: 'hover:shadow-sky-300/20',
    title: 'from-slate-600 via-slate-500 to-sky-700',
    chip: 'bg-slate-100 text-slate-700 ring-slate-300',
    benefits: [
      'Side Backdrop Logo & Welcome Standee Logo at Top Space',
      '5 Complimentary Delegates',
      'Complimentary Exhibition Space for Demo Vehicle/System',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Inclusion of Company Logo on Event Guide',
      'Company Logo on All Conference Collaterals (Top Space)',
      'Complimentary Presentation on Technical Topics',
      'Promotional Film of 3–5 minutes in Breaks',
      'Promotion on “Thank You Sponsors” Panel',
      'Exclusive bytes for Social Media Marketing',
    ],
  },
  {
    name: 'Gold',
    price: '3,00,000',
    icon: Medal,
    panel: 'from-yellow-100 via-orange-50 to-white',
    border: 'border-yellow-300',
    glow: 'hover:shadow-yellow-500/20',
    title: 'from-yellow-600 via-amber-600 to-orange-600',
    chip: 'bg-yellow-100 text-yellow-700 ring-yellow-300',
    benefits: [
      'Side Backdrop Logo & Welcome Standee Logo (Small, Bottom Space)',
      '4 Complimentary Delegates',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Inclusion of Company Logo on Event Guide',
      'Promotion on “Thank You Sponsors” Panel',
    ],
  },
  {
    name: 'Silver',
    price: '2,00,000',
    icon: Award,
    panel: 'from-gray-200 via-gray-50 to-white',
    border: 'border-gray-300',
    glow: 'hover:shadow-gray-300/20',
    title: 'from-gray-500 via-gray-600 to-gray-700',
    chip: 'bg-gray-100 text-gray-700 ring-gray-300',
    benefits: [
      'Small Logo on Standees',
      '3 Complimentary Delegates',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Inclusion of Company Logo on Event Guide',
      'Promotion on “Thank You Sponsors” Panel',
    ],
  },
  {
    name: 'Bronze',
    price: '1,00,000',
    icon: Shield,
    panel: 'from-orange-100 via-amber-50 to-white',
    border: 'border-orange-300',
    glow: 'hover:shadow-orange-600/20',
    title: 'from-orange-600 via-orange-700 to-amber-800',
    chip: 'bg-orange-100 text-orange-700 ring-orange-300',
    benefits: [
      '2 Complimentary Delegates',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Inclusion of Company Logo on Event Guide',
    ],
  },
  {
    name: 'Startup & Knowledge Partner',
    price: '50,000',
    icon: Rocket,
    panel: 'from-cyan-100 via-sky-50 to-white',
    border: 'border-cyan-300',
    glow: 'hover:shadow-cyan-500/25',
    title: 'from-cyan-700 via-sky-700 to-navy-900',
    chip: 'bg-cyan-100 text-cyan-700 ring-cyan-300',
    benefits: [
      '2m × 2m Space with one table & three chairs (one standee in background)',
      '1 Complimentary Delegate',
      'Technical Session for Event Participants/Students',
    ],
  },
];

function benefitIcon(text: string) {
  const t = text.toLowerCase();
  if (t.includes('delegate')) return Users;
  if (t.includes('exhibition') || t.includes('space with')) return Store;
  if (t.includes('brochure')) return BookOpen;
  if (t.includes('lanyard')) return Tag;
  if (t.includes('film')) return Film;
  if (t.includes('presentation') || t.includes('session')) return Presentation;
  if (t.includes('thank you')) return Megaphone;
  if (t.includes('social')) return Share2;
  if (t.includes('collateral')) return Layers;
  if (t.includes('event guide')) return FileText;
  if (t.includes('logo') || t.includes('backdrop')) return ImageIcon;
  return Check;
}

function TierCard({ tier }: { tier: Tier }) {
  const Icon = tier.icon;
  const isPartner = tier.name.includes('Partner');
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border-2 ${tier.border} bg-white shadow-lg transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-2xl ${tier.glow} ${
        tier.wide ? 'lg:grid lg:grid-cols-[minmax(0,340px)_1fr]' : 'flex flex-col'
      }`}
    >
      {/* Tier panel */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${tier.panel} p-6 sm:p-8 ${
          tier.wide ? 'lg:border-r lg:border-slate-200 lg:flex lg:flex-col lg:justify-center' : ''
        }`}
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/60 blur-2xl" />
        <div className={`relative flex items-center gap-5 ${tier.wide ? 'lg:flex-col lg:items-start' : ''}`}>
          <span className={`flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl ring-2 ${tier.chip}`}>
            <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              {isPartner ? 'Partner' : 'Sponsor'}
            </p>
            <h3
              className={`bg-gradient-to-r ${tier.title} bg-clip-text text-transparent font-black uppercase leading-[1.05] tracking-tight pb-1 ${
                isPartner ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'
              }`}
            >
              {tier.name}
            </h3>
          </div>
        </div>

        <div className="relative mt-6 inline-flex flex-col rounded-2xl bg-navy-900 px-5 py-3 shadow-md">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            <span className="mr-1 text-xl sm:text-2xl text-cyan-300">₹</span>
            {tier.price}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-200">INR · + GST</span>
        </div>
      </div>

      {/* Benefits */}
      <div className="flex-1 p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-full bg-gradient-to-r from-navy-900 to-cyan-600 px-4 py-1 text-xs font-black uppercase tracking-[0.25em] text-white shadow-md">
            Benefits
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-sky-300 to-transparent" />
        </div>
        <ul className={`grid gap-3 ${tier.wide ? 'md:grid-cols-2' : ''}`}>
          {tier.benefits.map((b) => {
            const BIcon = benefitIcon(b);
            return (
              <li
                key={b}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition-colors hover:border-sky-300 hover:bg-sky-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-sky-200 shadow-sm">
                  <BIcon className="h-[18px] w-[18px] text-sky-600" />
                </span>
                <span className="text-sm sm:text-[0.95rem] font-medium leading-snug text-slate-800">{b}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

export default function Patrons() {
  const wide = tiers.filter((t) => t.wide);
  const rest = tiers.filter((t) => !t.wide);

  return (
    <section id="patrons" className="section-shell bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="eyebrow !border-amber-200 !bg-amber-50 !text-amber-700">
            Partner With Us
          </span>
          <h2 className="section-title mt-4 mb-3">
            Sponsorship Opportunities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Showcase your brand to OEMs, Tier-1 suppliers, researchers and policymakers at the
            9th SAENIS TTTMS International Conference’26
          </p>
          <p className="mt-2 text-sky-700 text-sm font-semibold">All amounts + GST as applicable</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {wide.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {rest.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-cyan-700 p-6 shadow-xl sm:p-8 text-center">
          <p className="text-lg sm:text-xl font-bold text-white">Interested in sponsoring?</p>
          <p className="mt-1 text-sm text-cyan-100">Reach out to our sponsorship team</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {['Shekhar.Bhangale@maruti.co.in', 's.jaybhay@tatamotors.com', 'Bijral.Gurpreet@mahindra.com'].map((m) => (
              <a
                key={m}
                href={`mailto:${m}`}
                className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow transition-transform hover:scale-105"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">{m}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
