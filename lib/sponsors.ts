/**
 * Conference sponsors & organizers (logos in /public/sponsors and /public/organizers).
 * To add a sponsor: drop the logo file in /public/sponsors/ and add { name, logo } to the right tier.
 */
export type Sponsor = { name: string; logo: string; url?: string };

export type SponsorTier = {
  tier: string;
  accent: string; // tailwind gradient for the tier label
  size: 'xl' | 'lg' | 'md';
  sponsors: Sponsor[];
};

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    tier: 'Principal Sponsor',
    accent: 'from-amber-500 to-yellow-600',
    size: 'xl',
    sponsors: [{ name: 'Subros', logo: '/sponsors/subros.png', url: 'https://www.subros.com' }],
  },
  {
    tier: 'Gold Sponsor',
    accent: 'from-yellow-500 to-orange-500',
    size: 'xl',
    sponsors: [{ name: 'Tata Motors — Tata.Cars', logo: '/sponsors/tata-cars.png', url: 'https://cars.tatamotors.com' }],
  },
  {
    tier: 'Silver Sponsors',
    accent: 'from-slate-400 to-slate-600',
    size: 'md',
    sponsors: [
      { name: 'MAHLE', logo: '/sponsors/mahle.png', url: 'https://www.mahle.com' },
      { name: 'Vikas Group', logo: '/sponsors/vikas-group.png' },
      { name: 'Sanden', logo: '/sponsors/sanden.png' },
      { name: 'Pranav Vikas', logo: '/sponsors/pranav-vikas.png' },
      { name: 'SRF', logo: '/sponsors/srf.png', url: 'https://www.srf.com' },
    ],
  },
  {
    tier: 'Bronze Sponsor',
    accent: 'from-orange-600 to-amber-700',
    size: 'lg',
    sponsors: [{ name: 'bp refcool', logo: '/sponsors/bp-refcool.png' }],
  },
  {
    tier: 'Knowledge Partner',
    accent: 'from-sky-500 to-cyan-600',
    size: 'lg',
    sponsors: [{ name: 'Gamma Technologies', logo: '/sponsors/gamma-technologies.png', url: 'https://www.gtisoft.com' }],
  },
];

export const ORGANIZERS: Sponsor[] = [
  { name: 'SAE International', logo: '/organizers/sae-international.png' },
  { name: 'SAEINDIA', logo: '/organizers/saeindia.png' },
  { name: 'SAEINDIA Northern Section', logo: '/saeindia-northern-logo.png' },
  { name: 'IIT Roorkee', logo: '/organizers/iit-roorkee.png' },
  { name: 'TTTMS — Think Tank for Thermal Management Systems', logo: '/organizers/tttms.png' },
];

export const ALL_SPONSORS: Sponsor[] = SPONSOR_TIERS.flatMap((t) => t.sponsors);
