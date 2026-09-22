type FilterTabsProps = {
  options: string[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
  "aria-label"?: string;
};

/** Reusable pill-style filter control used for categories, departments and tabs. */
export default function FilterTabs({
  options,
  active,
  onChange,
  className = "",
  "aria-label": ariaLabel = "Filter",
}: FilterTabsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`.trim()} role="tablist" aria-label={ariaLabel}>
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
            className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
              isActive
                ? "bg-primary-600 text-background-50"
                : "border border-background-300 bg-background-50 text-foreground-600 hover:border-primary-300 hover:text-primary-600"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}