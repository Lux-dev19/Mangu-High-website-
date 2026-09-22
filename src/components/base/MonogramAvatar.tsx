const NAME_TITLES = [
  "mr.",
  "mrs.",
  "ms.",
  "miss",
  "dr.",
  "rev.",
  "prof.",
  "mwalimu",
  "sir",
  "madam",
];

export function initialsFromName(name: string): string {
  const words = name
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length > 0 && !NAME_TITLES.includes(word.toLowerCase()));

  const letters = words.map((word) => word[0]).filter(Boolean);
  const chosen = letters.length > 1 ? [letters[0], letters[letters.length - 1]] : letters;
  return chosen.join("").toUpperCase();
}

type MonogramAvatarProps = {
  name: string;
  className?: string;
};

export default function MonogramAvatar({ name, className = "" }: MonogramAvatarProps) {
  const initials = initialsFromName(name);

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 ${className}`}
      aria-hidden="true"
    >
      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-accent-400/20" />
      <span className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full border border-accent-400/10" />
      <span className="pointer-events-none absolute right-6 bottom-6 h-2 w-2 rounded-full bg-accent-400/40" />

      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-accent-400/40 bg-primary-950/40">
        <span className="font-heading text-3xl font-semibold tracking-[0.08em] text-accent-300">
          {initials}
        </span>
      </div>
    </div>
  );
}