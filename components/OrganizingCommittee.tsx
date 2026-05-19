'use client';

import Image from 'next/image';

const committee = [
  {
    name: 'Prof. Akshay Dwivedi',
    affiliation: 'IIT Roorkee',
    department: 'Department of Mechanical and Industrial Engineering',
    image: '/Organzing-commitee/1.png',

  },
  {
    name: 'Prof. Varun Sharma',
    affiliation: 'IIT Roorkee',
    department: 'Department of Mechanical and Industrial Engineering',
    image: '/Organzing-commitee/2.png',

  },
  {
    name: 'Prof. Amit Choudhary',
    affiliation: 'IIT Roorkee',
    department: 'Department of Mechanical and Industrial Engineering',
    image: '/Organzing-commitee/3.png',

  },
];

export default function OrganizingCommittee() {
  return (
    <section
      id="organizing"
      className="relative scroll-mt-36 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Organizing Committee</h2>
          <p className="text-lg text-cyan-300/90 font-semibold tracking-wide">
            IIT Roorkee Organizing Committee Team
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {committee.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col items-center text-center bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-2 border-cyan-500/40 rounded-2xl p-8 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 border border-cyan-500/40">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority={member.name === 'Prof. Akshay Dwivedi'}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-purple-400">{member.affiliation}</p>
              <p className="mt-3 text-sm text-white leading-relaxed whitespace-nowrap">{member.department}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}