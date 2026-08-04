'use client';

const REGISTRATION_URL =
  'https://saenis.glueup.com/event/9th-saenis-tttms-international-conference-2026-189169/';

const feeRows = [
  {
    category: 'SAE Member',
    industryDelegate: 'INR 8,500',
    industryAuthor: 'INR 7,500',
    academiaDelegate: 'INR 3,500',
    academiaAuthor: 'INR 2,500',
    studentDelegate: 'INR 1,500',
    studentAuthor: 'INR 1,000',
    abroad: 'USD 100',
  },
  {
    category: 'Non-SAE Member',
    industryDelegate: 'INR 9,500',
    industryAuthor: 'INR 8,500',
    academiaDelegate: 'INR 4,500',
    academiaAuthor: 'INR 4,000',
    studentDelegate: 'INR 2,000',
    studentAuthor: 'INR 1,500',
    abroad: 'USD 150',
  },
];

export default function Register() {
  return (
    <section id="register" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="section-title mb-4 text-center">Conference Fee</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the 9th SAENIS TTTMS International Conference’26. All fees are exclusive of taxes.
          </p>

          {/* Fee table */}
          <div className="mb-16 overflow-x-auto rounded-2xl border border-slate-700 shadow-xl shadow-cyan-500/5">
            <table className="w-full min-w-[900px] text-sm text-left">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border-b border-slate-600">
                  <th className="px-4 py-4 text-cyan-300 font-bold">Category</th>
                  <th className="px-3 py-4 text-gray-300 font-semibold">Industry<br /><span className="text-xs text-gray-500 font-normal">(Delegate)</span></th>
                  <th className="px-3 py-4 text-gray-300 font-semibold">Industry<br /><span className="text-xs text-gray-500 font-normal">(Author)</span></th>
                  <th className="px-3 py-4 text-gray-300 font-semibold">Academia<br /><span className="text-xs text-gray-500 font-normal">(Delegate)</span></th>
                  <th className="px-3 py-4 text-gray-300 font-semibold">Academia<br /><span className="text-xs text-gray-500 font-normal">(Author)</span></th>
                  <th className="px-3 py-4 text-gray-300 font-semibold">Student<br /><span className="text-xs text-gray-500 font-normal">(Delegate)</span></th>
                  <th className="px-3 py-4 text-gray-300 font-semibold">Student<br /><span className="text-xs text-gray-500 font-normal">(Author)</span></th>
                  <th className="px-3 py-4 text-purple-300 font-semibold">Fee<br /><span className="text-xs text-gray-500 font-normal">(Abroad)</span></th>
                </tr>
              </thead>
              <tbody>
                {feeRows.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-slate-800 bg-slate-900/60 hover:bg-slate-800/60 transition-colors"
                  >
                    <td className="px-4 py-4 font-bold text-white whitespace-nowrap">{row.category}</td>
                    <td className="px-3 py-4 text-cyan-300 whitespace-nowrap">{row.industryDelegate}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300 whitespace-nowrap">{row.industryAuthor}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300 whitespace-nowrap">{row.academiaDelegate}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300 whitespace-nowrap">{row.academiaAuthor}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300 whitespace-nowrap">{row.studentDelegate}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300 whitespace-nowrap">{row.studentAuthor}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-purple-300 font-semibold whitespace-nowrap">{row.abroad}<span className="text-gray-500 text-xs block font-normal">+ Taxes</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="card-dark border border-cyan-500/20">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">What you get</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Access to all technical sessions & panel discussions</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Networking with OEMs, researchers & policymakers</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Conference materials and participation certificate</li>
                  <li className="flex gap-2"><span className="text-cyan-400">✓</span> Opportunity to present and publish via SAE International</li>
                </ul>
              </div>

              <div className="card-dark border border-purple-500/25">
                <h3 className="text-lg font-bold text-purple-400 mb-4">Need help registering?</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Paper / Presentations / Accommodation</p>
                    <p className="font-semibold text-white">Saurabh Suman</p>
                    <a href="tel:+918433235236" className="text-cyan-400 hover:underline">(+91) 8433235236</a>
                    <br />
                    <a href="mailto:saenis.tttms@saenis.org" className="text-cyan-400 hover:underline">saenis.tttms@saenis.org</a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Sponsorship & Registration</p>
                    <ul className="space-y-2">
                      <li>
                        <span className="text-white font-medium">Mr. Shekhar Bhangale</span>
                        {' · '}
                        <a href="tel:+919022931309" className="text-cyan-400 hover:underline">+91 9022931309</a>
                      </li>
                      <li>
                        <span className="text-white font-medium">Mr. Sambhaji Jaybhay</span>
                        {' · '}
                        <a href="tel:+917276097172" className="text-cyan-400 hover:underline">+91 7276097172</a>
                      </li>
                      <li>
                        <span className="text-white font-medium">Mr. Gurpreet Singh Bijral</span>
                        {' · '}
                        <a href="tel:+919940105654" className="text-cyan-400 hover:underline">+91 9940105654</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-dark border-2 border-cyan-500/30 flex flex-col items-center p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Scan to Register</h3>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-72 h-72 sm:w-80 sm:h-80 mb-6 bg-white rounded-xl p-6 flex items-center justify-center hover:ring-2 hover:ring-cyan-400 transition-shadow"
                aria-label="Open registration form"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/registration-qr.svg"
                  alt="Registration QR Code — scan to open form"
                  width={280}
                  height={280}
                  className="w-full h-full object-contain"
                />
              </a>
              <p className="text-center text-gray-300 mb-6 text-sm">
                Scan the QR code with your phone to open the registration form. You can also tap or click the QR code.
              </p>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-register w-full text-center"
              >
                Open Registration Form
              </a>
              <p className="text-center text-xs text-gray-500 mt-4 break-all">
                {REGISTRATION_URL}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
