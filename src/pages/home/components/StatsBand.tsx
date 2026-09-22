import Reveal from "@/components/base/Reveal";
import StatCounter from "@/components/base/StatCounter";
import { schoolStats, schoolInfo } from "@/mocks/site";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-16 md:py-20">
      <div className="bg-crest-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-accent-500/15" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full border border-background-50/10" />

      <div className="container-site relative">
        <Reveal className="text-center">
          <span className="eyebrow justify-center text-accent-400">
            <span className="h-px w-6 bg-accent-500" />
            School at a Glance
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-heading text-2xl font-semibold leading-tight text-background-50 md:text-4xl">
            A century of excellence, in numbers
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {schoolStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90} variant="scale">
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-10 text-center text-xs leading-relaxed text-background-100/50">
            Founded {schoolInfo.founded} · {schoolInfo.county} · Motto: {schoolInfo.motto}. Activity and
            department figures are indicative and will be confirmed by the school.
          </p>
        </Reveal>
      </div>
    </section>
  );
}