type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

/** Shared editorial section heading so every section reads consistently. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span
          className={`eyebrow ${tone === "light" ? "text-accent-400" : "text-accent-700"} ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-accent-500" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-4xl ${
          tone === "light" ? "text-background-50" : "text-foreground-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-sm leading-relaxed md:text-base ${
            tone === "light" ? "text-background-100/75" : "text-foreground-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}