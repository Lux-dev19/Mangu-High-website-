type CrestProps = {
  className?: string;
  tone?: "light" | "dark";
};

const SHIELD = "polygon(50% 0, 100% 16%, 100% 66%, 50% 100%, 0 66%, 0 16%)";

/** A CSS-drawn heraldic shield carrying the Mangu monogram and founding year. */
export default function Crest({ className = "h-10 w-9", tone = "light" }: CrestProps) {
  const outerBg = tone === "light" ? "bg-accent-500" : "bg-accent-600";
  const innerBg = tone === "light" ? "bg-primary-600" : "bg-background-50";
  const letterColor = tone === "light" ? "text-accent-400" : "text-primary-600";

  return (
    <span className={`relative inline-block shrink-0 ${className}`} aria-hidden="true">
      <span className={`absolute inset-0 ${outerBg}`} style={{ clipPath: SHIELD }} />
      <span
        className={`absolute inset-[2px] flex items-center justify-center ${innerBg}`}
        style={{ clipPath: SHIELD }}
      >
        <span className={`font-heading text-[15px] font-bold leading-none ${letterColor}`}>M</span>
      </span>
      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 font-label text-[7px] font-bold tracking-[0.14em] text-accent-500">
        1925
      </span>
    </span>
  );
}