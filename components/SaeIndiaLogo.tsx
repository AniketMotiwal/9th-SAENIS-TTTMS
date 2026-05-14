type SaeIndiaLogoProps = {
  className?: string;
};

export default function SaeIndiaLogo({ className = '' }: SaeIndiaLogoProps) {
  return (
    <div
      className={`flex flex-col items-end text-right leading-none select-none ${className}`}
      aria-label="SAEINDIA — Society of Automotive Engineers INDIA"
    >
      <p className="font-black italic tracking-tight text-[2rem] sm:text-[2.75rem] lg:text-[3.1rem]">
        <span className="text-[#2f6ebf] drop-shadow-[0_0_18px_rgba(47,110,191,0.55)]">S</span>
        <span className="text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">A</span>
        <span className="text-[#2f6ebf] drop-shadow-[0_0_18px_rgba(47,110,191,0.55)]">EINDIA</span>
      </p>
      <p className="mt-2 whitespace-nowrap text-[8px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.08em] text-white/90">
        Society of Automotive Engineers INDIA
      </p>
    </div>
  );
}
