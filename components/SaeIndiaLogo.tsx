type SaeIndiaLogoProps = {
  className?: string;
};

export default function SaeIndiaLogo({ className = '' }: SaeIndiaLogoProps) {
  return (
    <div
      className={`flex max-w-[42vw] flex-col items-end text-right leading-tight select-none sm:max-w-none ${className}`}
      aria-label="SAEINDIA — Society of Automotive Engineers INDIA"
    >
      <p className="font-black italic tracking-tight text-[1.35rem] sm:text-[2.5rem] lg:text-[2.85rem]">
        <span className="text-[#2f6ebf] drop-shadow-[0_0_18px_rgba(47,110,191,0.55)]">S</span>
        <span className="text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">A</span>
        <span className="text-[#2f6ebf] drop-shadow-[0_0_18px_rgba(47,110,191,0.55)]">EINDIA</span>
      </p>
      <p className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.06em] text-white/85 sm:mt-1.5 sm:block sm:text-[10px] lg:text-[11px] sm:max-w-[14rem] lg:max-w-none sm:whitespace-normal lg:whitespace-nowrap leading-snug">
        Society of Automotive Engineers INDIA
      </p>
    </div>
  );
}
