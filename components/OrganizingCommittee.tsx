import Image from 'next/image';

export default function OrganizingCommittee() {
  return (
    <section
      id="organizing"
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Light panel so original dark text + original photo colors stay intact */}
        <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-3 sm:p-5 shadow-2xl shadow-cyan-500/10">
          <Image
            src="/Organzing-commitee/1.png"
            alt="Organising Committee — Prof. Akshay Dvivedi, Prof. Varun Sharma, Prof. Amit Choudhary, IIT Roorkee"
            width={1000}
            height={500}
            quality={100}
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 1024px"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
