import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { alumniSpotlight } from "@/mocks/studentLife";

export default function AlumniShowcase() {
  return (
    <section id="alumni" className="relative overflow-hidden bg-primary-950 py-16 md:py-24">
      <div className="bg-crest-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Alumni"
            title="A legacy that reaches across generations"
            description="For a century, Mangu alumni have gone on to lead in government, science, business, education and public service — carrying the school's values into the world."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {alumniSpotlight.map((alum, index) => (
            <Reveal key={alum.name} delay={index * 90} variant="scale">
              <article className="h-full rounded-lg border border-background-50/12 bg-background-50/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent-500/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-500/15 text-2xl text-accent-400">
                  <i className="ri-user-star-line" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-background-50">
                  {alum.name}
                </h3>
                <p className="mt-1 font-label text-xs uppercase tracking-[0.14em] text-accent-400">
                  {alum.field}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-background-100/70">{alum.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10">
          <p className="max-w-3xl text-xs leading-relaxed text-background-100/45">
            Alumni spotlights reflect information that is publicly available. We are proud of every
            Mangu graduate and welcome contributions for a fuller alumni showcase.
          </p>
        </Reveal>
      </div>
    </section>
  );
}