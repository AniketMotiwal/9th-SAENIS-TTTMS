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

const feeFields = [
  { key: 'industryDelegate', label: 'Industry (Delegate)' },
  { key: 'industryAuthor', label: 'Industry (Author)' },
  { key: 'academiaDelegate', label: 'Academia (Delegate)' },
  { key: 'academiaAuthor', label: 'Academia (Author)' },
  { key: 'studentDelegate', label: 'Student (Delegate)' },
  { key: 'studentAuthor', label: 'Student (Author)' },
  { key: 'abroad', label: 'Fee (Abroad)' },
] as const;

export default function Register() {
  return (
    <section id="register" className="section-shell bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="section-title mb-3 text-center">Conference Fee</h2>
          <p className="text-center text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-1">
            Join the 9th SAENIS TTTMS International Conference’26. All fees are exclusive of taxes.
          </p>

          {/* Mobile fee cards */}
          <div className="mb-10 space-y-4 md:hidden">
            {feeRows.map((row) => (
              <div
                key={row.category}
                className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 shadow-lg shadow-cyan-500/5"
              >
                <h3 className="mb-3 text-base font-bold text-white">{row.category}</h3>
                <dl className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {feeFields.map((field) => (
                    <div
                      key={field.key}
                      className="rounded-lg bg-black/35 px-3 py-2.5 border border-white/5"
                    >
                      <dt className="text-[11px] uppercase tracking-wide text-gray-500 mb-0.5">
                        {field.label}
                      </dt>
                      <dd className={`text-sm font-semibold ${field.key === 'abroad' ? 'text-purple-300' : 'text-cyan-300'}`}>
                        {row[field.key]}
                        <span className="ml-1 text-[10px] font-normal text-gray-500">+ Taxes</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Desktop fee table */}
          <div className="mb-8 hidden md:block overflow-x-auto rounded-2xl border border-slate-700 shadow-xl shadow-cyan-500/5">
            <table className="w-full min-w-[820px] text-sm text-left">
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
                    <td className="px-4 py-4 font-bold text-white">{row.category}</td>
                    <td className="px-3 py-4 text-cyan-300">{row.industryDelegate}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300">{row.industryAuthor}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300">{row.academiaDelegate}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300">{row.academiaAuthor}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300">{row.studentDelegate}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-cyan-300">{row.studentAuthor}<span className="text-gray-500 text-xs block">+ Taxes</span></td>
                    <td className="px-3 py-4 text-purple-300 font-semibold">{row.abroad}<span className="text-gray-500 text-xs block font-normal">+ Taxes</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="space-y-5 sm:space-y-6">
              <div className="card-dark border border-cyan-500/20">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">What you get</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-2"><span className="text-cyan-400 shrink-0">✓</span> <span>Access to all technical sessions & panel discussions</span></li>
                  <li className="flex gap-2"><span className="text-cyan-400 shrink-0">✓</span> <span>Networking with OEMs, researchers & policymakers</span></li>
                  <li className="flex gap-2"><span className="text-cyan-400 shrink-0">✓</span> <span>Conference materials and participation certificate</span></li>
                  <li className="flex gap-2"><span className="text-cyan-400 shrink-0">✓</span> <span>Opportunity to present and publish via SAE International</span></li>
                </ul>
              </div>

              <div className="card-dark border border-purple-500/25">
                <h3 className="text-lg font-bold text-purple-400 mb-4">Need help registering?</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Paper / Presentations / Accommodation</p>
                    <p className="font-semibold text-white">Saurabh Suman</p>
                    <a href="tel:+918433235236" className="text-cyan-400 hover:underline break-all">(+91) 8433235236</a>
                    <br />
                    <a href="mailto:saenis.tttms@saenis.org" className="text-cyan-400 hover:underline break-all">saenis.tttms@saenis.org</a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Sponsorship & Registration</p>
                    <ul className="space-y-3">
                      <li className="flex flex-col gap-0.5 sm:block">
                        <span className="text-white font-medium">Mr. Shekhar Bhangale</span>
                        <a href="tel:+919022931309" className="text-cyan-400 hover:underline sm:ml-2">+91 9022931309</a>
                      </li>
                      <li className="flex flex-col gap-0.5 sm:block">
                        <span className="text-white font-medium">Mr. Sambhaji Jaybhay</span>
                        <a href="tel:+917276097172" className="text-cyan-400 hover:underline sm:ml-2">+91 7276097172</a>
                      </li>
                      <li className="flex flex-col gap-0.5 sm:block">
                        <span className="text-white font-medium">Mr. Gurpreet Singh Bijral</span>
                        <a href="tel:+919940105654" className="text-cyan-400 hover:underline sm:ml-2">+91 9940105654</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-dark border-2 border-cyan-500/30 flex flex-col items-center p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 text-center">Scan to Register</h3>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-[18rem] aspect-square mb-5 sm:mb-6 bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center hover:ring-2 hover:ring-cyan-400 transition-shadow"
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
              <p className="text-center text-gray-300 mb-5 sm:mb-6 text-sm leading-relaxed">
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
              <p className="text-center text-xs text-gray-500 mt-4 break-all px-1">
                {REGISTRATION_URL}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
