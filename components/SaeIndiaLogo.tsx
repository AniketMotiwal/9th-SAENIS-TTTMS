/* eslint-disable @next/next/no-img-element */
type SaeIndiaLogoProps = {
  className?: string;
};

export default function SaeIndiaLogo({ className = '' }: SaeIndiaLogoProps) {
  return (
    <div
      className={`max-w-[30vw] hidden min-[380px]:flex shrink-0 items-center rounded-lg bg-white px-2 py-1  select-none sm:max-w-none sm:rounded-xl sm:px-3 sm:py-1.5 ${className}`}
    >
      <img
        src="/organizers/saeindia.png"
        alt="SAEINDIA"
        width={320}
        height={59}
        className="h-5 w-auto max-w-full object-contain sm:h-7 xl:h-7 2xl:h-9"
      />
    </div>
  );
}
