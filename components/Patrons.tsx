'use client';

const tiers = [
  {
    name: 'Principal Sponsor',
    price: 'INR 5,00,000',
    accent: 'from-amber-400 to-yellow-500',
    border: 'border-amber-400/50',
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
    name: 'Platinum Sponsor',
    price: 'INR 4,00,000',
    accent: 'from-slate-200 to-slate-400',
    border: 'border-slate-300/40',
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
    name: 'Gold Sponsor',
    price: 'INR 3,00,000',
    accent: 'from-yellow-500 to-orange-400',
    border: 'border-yellow-500/40',
    benefits: [
      'Side Backdrop Logo & Welcome Standee Logo (Small, Bottom Space)',
      '4 Complimentary Delegates',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Inclusion of Company Logo on Event Guide',
      'Promotion on “Thank You Sponsors” Panel',
    ],
  },
  {
    name: 'Silver Sponsor',
    price: 'INR 2,00,000',
    accent: 'from-gray-300 to-gray-500',
    border: 'border-gray-400/40',
    benefits: [
      'Small Logo on Standees',
      '3 Complimentary Delegates',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Inclusion of Company Logo on Event Guide',
      'Promotion on “Thank You Sponsors” Panel',
    ],
  },
  {
    name: 'Bronze Sponsor',
    price: 'INR 1,00,000',
    accent: 'from-orange-600 to-amber-700',
    border: 'border-orange-600/40',
    benefits: [
      '2 Complimentary Delegates',
      'Inclusion of Company Brochures in the Welcome Kit',
      'Inclusion of Company Logo on Event Guide',
    ],
  },
  {
    name: 'Startup & Knowledge Partner',
    price: 'INR 50,000',
    accent: 'from-cyan-400 to-purple-500',
    border: 'border-cyan-400/40',
    benefits: [
      '2m × 2m Space with one table & three chairs (one standee in background)',
      '1 Complimentary Delegate',
      'Technical Session for Event Participants/Students',
    ],
  },
];

export default function Patrons() {
  return (
    <section id="patrons" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-4">Sponsorship Opportunities</h2>
        <p className="text-center text-gray-400 mb-3 max-w-2xl mx-auto">
          Partner with the 9th SAENIS TTTMS International Conference’26
        </p>
        <p className="text-center text-cyan-400/80 text-sm mb-14">
          All amounts + GST as applicable
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group rounded-2xl border ${tier.border} bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col`}
            >
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${tier.accent} mb-5`} />
              <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
              <p className="text-2xl font-black text-cyan-400 mb-5">{tier.price}</p>
              <ul className="space-y-2.5 flex-1">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm text-gray-300 leading-snug">
                    <span className="text-cyan-500 shrink-0 mt-0.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center card-dark border border-purple-500/30 max-w-2xl mx-auto">
          <p className="text-gray-300 text-sm mb-2">Interested in sponsoring?</p>
          <p className="text-white font-semibold">
            Contact:{' '}
            <a href="mailto:Shekhar.Bhangale@maruti.co.in" className="text-cyan-400 hover:underline">
              Shekhar.Bhangale@maruti.co.in
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-1">
            or{' '}
            <a href="mailto:s.jaybhay@tatamotors.com" className="text-cyan-400 hover:underline">
              s.jaybhay@tatamotors.com
            </a>
            {' · '}
            <a href="mailto:Bijral.Gurpreet@mahindra.com" className="text-cyan-400 hover:underline">
              Bijral.Gurpreet@mahindra.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
