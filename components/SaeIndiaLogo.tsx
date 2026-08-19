type SaeIndiaLogoProps = {
  className?: string;
};

export default function SaeIndiaLogo({ className = '' }: SaeIndiaLogoProps) {
  return (
    <div
      className={`flex max-w-[38vw] shrink-0 flex-col items-end text-right leading-none select-none sm:max-w-none ${className}`}
      aria-label="SAEINDIA — Society of Automotive Engineers INDIA"
    >
      <p className="font-black italic tracking-tight text-[1.25rem] sm:text-[1.75rem] xl:text-[1.65rem] 2xl:text-[2.35rem]">
        <span className="text-[#2f6ebf] drop-shadow-[0_0_18px_rgba(47,110,191,0.55)]">S</span>
        <span className="text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">A</span>
        <span className="text-[#2f6ebf] drop-shadow-[0_0_18px_rgba(47,110,191,0.55)]">EINDIA</span>
      </p>
      <p className="mt-1 hidden max-w-[11rem] text-[8px] font-semibold uppercase leading-snug tracking-[0.05em] text-white/85 2xl:mt-1.5 2xl:block 2xl:max-w-none 2xl:whitespace-nowrap 2xl:text-[11px]">
        Society of Automotive Engineers INDIA
      </p>
    </div>
  );
}
