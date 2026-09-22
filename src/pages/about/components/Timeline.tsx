import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { milestones, schoolHistory } from "@/mocks/about";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = milestones[activeIndex];

  return (
    <section id="history" className="bg-primary-950 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Our Journey"
            title="Milestones across a century"
            description="Trace the story of Mangu High School, from its founding at Kabaa to the modern national school of today."
          />
        </Reveal>

        {/* Year selector */}
        <Reveal delay={100} className="mt-12">
          <div className="flex flex-wrap items-center gap-2">
            {milestones.map((milestone, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={milestone.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive
                      ? "bg-accent-500 text-primary-950"
                      : "border border-background-50/20 text-background-100/70 hover:border-accent-500/60 hover:text-background-50"
                  }`}
                >
                  {milestone.year}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active milestone detail */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-7">
            <article className="rounded-lg border border-background-50/12 bg-background-50/5 p-7 backdrop-blur-sm md:p-9">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-accent-500 text-3xl text-primary-950">
                  <i className={active.icon} />
                </span>
                <div>
                  <p className="font-heading text-3xl font-semibold text-accent-400">{active.year}</p>
                  <p className="font-label text-xs uppercase tracking-[0.18em] text-background-100/60">
                    Milestone {String(activeIndex + 1).padStart(2, "0")} of {milestones.length}
                  </p>
                </div>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-background-50 md:text-2xl">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-background-100/75 md:text-base">
                {active.description}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1))
                  }
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-background-50/20 text-lg text-background-100 transition-colors hover:border-accent-500 hover:text-accent-400"
                  aria-label="Previous milestone"
                >
                  <i className="ri-arrow-left-line" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1))
                  }
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-background-50/20 text-lg text-background-100 transition-colors hover:border-accent-500 hover:text-accent-400"
                  aria-label="Next milestone"
                >
                  <i className="ri-arrow-right-line" />
                </button>
              </div>
            </article>
          </Reveal>

          {/* Vertical rail */}
          <div className="lg:col-span-5">
            <ol className="relative flex flex-col gap-1 border-l border-background-50/15 pl-6">
              {milestones.map((milestone, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={milestone.year}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group flex w-full cursor-pointer items-start gap-4 rounded-md py-3 text-left transition-colors"
                    >
                      <span
                        className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-accent-500" : "bg-background-50/25 group-hover:bg-accent-500/60"
                        }`}
                      />
                      <span>
                        <span
                          className={`block font-label text-xs uppercase tracking-[0.16em] transition-colors ${
                            isActive ? "text-accent-400" : "text-background-100/50"
                          }`}
                        >
                          {milestone.year}
                        </span>
                        <span
                          className={`mt-0.5 block font-heading text-sm font-semibold transition-colors ${
                            isActive ? "text-background-50" : "text-background-100/70"
                          }`}
                        >
                          {milestone.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <Reveal delay={120} className="mt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-background-100/45">
            {schoolHistory.timelineNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}