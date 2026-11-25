import {
  FileText,
  Handshake,
  User,
  Phone,
  Mail,
  Globe,
  Cpu,
  Wifi,
  Server,
  Smartphone,
  Monitor,
  Network,
  MessagesSquare,
} from 'lucide-react';

type Person = { name: string; phone: string; email: string };

const groups: { title: string; icon: typeof FileText; people: Person[] }[] = [
  {
    title: 'For Paper / Presentations / Accommodation',
    icon: FileText,
    people: [{ name: 'Saurabh Suman', phone: '8433235236', email: 'saenis.tttms@saenis.org' }],
  },
  {
    title: 'For Sponsorship & Registration',
    icon: Handshake,
    people: [
      { name: 'Mr. Shekhar Bhangale', phone: '9022931309', email: 'Shekhar.Bhangale@maruti.co.in' },
      { name: 'Mr. Sambhaji Jaybhay', phone: '7276097172', email: 's.jaybhay@tatamotors.com' },
      { name: 'Mr. Gurpreet Singh Bijral', phone: '9940105654', email: 'Bijral.Gurpreet@mahindra.com' },
    ],
  },
];

const hexIcons = [Monitor, Cpu, Wifi, Smartphone, Server, Network];

function Hex({ Icon, className = '' }: { Icon: typeof Cpu; className?: string }) {
  return (
    <div
      className={`flex h-16 w-14 sm:h-20 sm:w-[4.5rem] items-center justify-center bg-gradient-to-br from-cyan-400/40 to-blue-700/40 p-[2px] [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)] ${className}`}
    >
      <div className="flex h-full w-full items-center justify-center bg-slate-950/90 [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <section id="contact" className="section-shell bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl shadow-sky-900/15 lg:grid lg:grid-cols-[5fr_7fr]">
          {/* Visual panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-[#071a4a] to-black p-8 sm:p-10 flex flex-col justify-between min-h-[22rem]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.25),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(rgba(59,130,246,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.25)_1px,transparent_1px)] bg-[size:36px_36px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                <MessagesSquare className="h-4 w-4" /> Get in touch
              </span>
              <h2 className="mt-5 text-5xl sm:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight text-white">
                Connect
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">With Us</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm sm:text-base text-blue-100/70">
                Questions about papers, sponsorship, registration or your stay at IIT Roorkee? Our team is happy to help.
              </p>
            </div>

            <div className="relative my-8 grid w-fit grid-cols-3 gap-x-3 gap-y-1">
              {hexIcons.map((Icon, i) => (
                <Hex key={i} Icon={Icon} className={`${i >= 3 ? 'translate-x-[calc(50%+0.375rem)]' : ''} animate-[anti-gravity_6s_ease-in-out_infinite]`} />
              ))}
            </div>

            <a
              href="https://www.saenis.org"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-cyan-300 hover:bg-cyan-500/10"
            >
              <Globe className="h-4 w-4 text-cyan-300" /> www.saenis.org
            </a>
          </div>

          {/* Contacts panel */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-5 sm:p-8 lg:p-10 flex flex-col justify-center gap-8">
            {groups.map((g) => {
              const GIcon = g.icon;
              return (
                <div key={g.title} className="relative rounded-2xl border border-blue-200 bg-white p-5 pt-9 sm:pl-16 shadow-lg shadow-blue-900/10">
                  <div className="absolute -top-4 left-4 right-4 sm:left-16 flex">
                    <span className="rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-2 text-[11px] sm:text-sm font-black uppercase tracking-wide text-white shadow-md">
                      {g.title}
                    </span>
                  </div>
                  <span className="absolute -left-3 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-900 text-white ring-4 ring-white shadow-lg sm:flex">
                    <GIcon className="h-7 w-7" />
                  </span>

                  <ul className="divide-y divide-blue-100">
                    {g.people.map((p) => (
                      <li key={p.name} className="py-3 first:pt-0 last:pb-0">
                        <p className="flex items-center gap-2 text-base sm:text-lg font-bold text-slate-900">
                          <User className="h-5 w-5 shrink-0 text-blue-700" /> {p.name}
                        </p>
                        <div className="mt-1.5 flex flex-col gap-1.5 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
                          <a href={`tel:+91${p.phone}`} className="flex items-center gap-2 font-medium text-slate-700 hover:text-blue-700">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                              <Phone className="h-3.5 w-3.5" />
                            </span>
                            (+91) {p.phone}
                          </a>
                          <a href={`mailto:${p.email}`} className="flex min-w-0 items-center gap-2 font-medium text-slate-700 hover:text-blue-700">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                              <Mail className="h-3.5 w-3.5" />
                            </span>
                            <span className="break-all">{p.email}</span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
