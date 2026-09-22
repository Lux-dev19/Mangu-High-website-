import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { choiceSteps, pathwayTracks, subjectChoicesIntro } from "@/mocks/academics";

export default function SubjectChoices() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow={subjectChoicesIntro.eyebrow}
            title={subjectChoicesIntro.headline}
            description={subjectChoicesIntro.body}
          />
        </Reveal>

        {/* How the choice is made — a four-step journey */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {choiceSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <article className="relative flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-6 transition-colors duration-300 hover:border-primary-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-500 font-heading text-sm font-semibold text-background-50">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-foreground-950">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-600">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* The three elective pathways */}
        <Reveal className="mt-16">
          <h3 className="font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
            The three elective pathways
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground-600 md:text-base">
            Each pathway pairs a shared core of subjects with a set of popular electives. Students
            may blend across pathways where their ambitions call for it.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pathwayTracks.map((track, index) => (
            <Reveal key={track.slug} delay={index * 90}>
              <article className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6 transition-colors duration-300 hover:border-accent-300 md:p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-100 text-2xl text-accent-800">
                    <i className={track.icon} />
                  </span>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground-950">
                      {track.name}
                    </h4>
                    <p className="mt-0.5 font-label text-[11px] uppercase tracking-[0.12em] text-accent-700">
                      {track.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground-600">
                  {track.description}
                </p>

                <div className="mt-5">
                  <span className="font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                    Core subjects
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {track.core.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full bg-secondary-100 px-3 py-1 font-label text-[11px] text-secondary-900"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <span className="font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                    Popular electives
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {track.electives.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full bg-accent-100 px-3 py-1 font-label text-[11px] text-accent-900"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-1 flex-col gap-3 border-t border-background-200 pt-4">
                  <p className="text-xs leading-relaxed text-foreground-600">
                    <span className="font-label uppercase tracking-[0.12em] text-primary-700">
                      Best for:{" "}
                    </span>
                    {track.bestFor}
                  </p>
                  <p className="text-xs leading-relaxed text-foreground-500">
                    <span className="font-label uppercase tracking-[0.12em] text-accent-700">
                      Leads to:{" "}
                    </span>
                    {track.pathways}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <div className="flex items-start gap-4 rounded-lg border border-primary-200 bg-primary-100/70 p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-500 text-xl text-background-50">
              <i className="ri-compass-3-line" />
            </span>
            <p className="text-sm leading-relaxed text-foreground-700">
              {subjectChoicesIntro.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}