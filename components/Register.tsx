import { CheckCircle2, ArrowRight, Receipt, Headphones, QrCode } from 'lucide-react';

const REGISTRATION_URL =
  'https://saenis.glueup.com/event/9th-saenis-tttms-international-conference-2026-189169/';

const perks = [
  'Access to all technical sessions & panel discussions',
  'Networking with OEMs, researchers & policymakers',
  'Conference materials and participation certificate',
  'Opportunity to present and publish via SAE International',
];

export default function Register() {
  return (
    <section id="register" className="section-shell bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-cyan-800 shadow-2xl shadow-sky-900/25">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="relative p-6 sm:p-10 text-white">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200 ring-1 ring-white/20">
                Registrations Open
              </span>
              <h2 className="relative mt-4 text-4xl sm:text-5xl font-black uppercase leading-[1.02] tracking-tight">
                Register <span className="text-cyan-300">Now</span>
              </h2>
              <p className="relative mt-3 max-w-lg text-cyan-50/90">
                Secure your seat at the 9th SAENIS TTTMS International Conference’26 · December 3–5, 2026 · IIT Roorkee
              </p>

              <ul className="relative mt-6 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 flex flex-wrap gap-3">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-7 py-3.5 font-black uppercase tracking-wide text-navy-950 shadow-[0_10px_30px_rgba(34,211,238,0.4)] transition-transform hover:scale-105"
                >
                  Open Registration Form <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#fees" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/60 px-5 py-3 font-bold text-white transition-colors hover:bg-white hover:text-navy-900">
                  <Receipt className="h-5 w-5" /> View Fees
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/60 px-5 py-3 font-bold text-white transition-colors hover:bg-white hover:text-navy-900">
                  <Headphones className="h-5 w-5" /> Need Help?
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white/5 p-6 sm:p-10 lg:border-l lg:border-white/10">
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                <QrCode className="h-5 w-5" /> Scan to Register
              </p>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-[16rem] aspect-square rounded-2xl bg-white p-4 sm:p-5 shadow-xl ring-4 ring-cyan-300/40 transition-transform hover:scale-[1.03]"
                aria-label="Open registration form"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/registration-qr.svg" alt="Registration QR Code — scan to open form" width={280} height={280} className="h-full w-full object-contain" />
              </a>
              <p className="mt-4 max-w-xs text-center text-sm text-cyan-50/80">
                Scan the QR code with your phone, or tap it to open the registration form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
