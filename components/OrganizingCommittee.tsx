import Image from 'next/image';

export default function OrganizingCommittee() {
  return (
    <section id="organizing" className="py-10 md:py-14 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#ff9a3c] via-[#ffb347] to-[#ffd36b] p-4 sm:p-6 shadow-2xl">
          
          {/* Soft glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

          {/* Mandala texture */}
          <div className="absolute inset-0 opacity-[0.06] bg-[url('/patterns/mandala.svg')] bg-cover bg-center" />

          {/* Content */}
          <div className="relative z-10">
            <Image
              src="/Organzing-commitee/1.png"
              alt="Organising Committee"
              width={3840}
              height={2160}
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}