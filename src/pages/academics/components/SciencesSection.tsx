import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { subjectGuides, sciencesIntro } from "@/mocks/academics";

export default function SciencesSection() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow={sciencesIntro.eyebrow}
            title={sciencesIntro.headline}
            description={sciencesIntro.body}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {subjectGuides.map((subject, index) => (
            <Reveal key={subject.name} delay={index * 80}>
              <article className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6 transition-colors duration-300 hover:border-accent-300 md:p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-100 text-2xl text-accent-800">
                    <i className={subject.icon} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground-950">
                    {subject.name}
                  </h3>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-600">
                  {subject.overview}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {subject.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-secondary-100 px-3 py-1 font-label text-[11px] text-secondary-900"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <p className="mt-5 border-t border-background-200 pt-4 text-xs leading-relaxed text-foreground-500">
                  <span className="font-label uppercase tracking-[0.12em] text-accent-700">
                    Careers:{" "}
                  </span>
                  {subject.careers}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <div className="grid gap-6 rounded-lg border border-background-200 bg-background-50 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {sciencesIntro.facilities.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600">
                  <i className={item.icon} />
                </span>
                <span>
                  <span className="block font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-foreground-900">
                    {item.value}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}