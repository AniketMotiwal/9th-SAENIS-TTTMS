import Image from 'next/image';
import { Camera } from 'lucide-react';

export default function Glimpses() {
  return (
    <section id="glimpses" className="section-shell bg-slate-50">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <span className="eyebrow">
            <Camera className="h-4 w-4" /> Past Editions
          </span>
          <h2 className="section-title mt-4 mb-3">Glimpses from Past Editions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Moments from previous SAENIS TTTMS conferences</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 sm:p-3 shadow-xl shadow-sky-900/10">
          <Image
            src="/glimpses/past-editions.jpg?v=2"
            alt="Glimpses from past SAENIS TTTMS conference editions"
            width={4000}
            height={1873}
            quality={100}
            unoptimized
            className="h-auto w-full object-contain rounded-2xl"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}
