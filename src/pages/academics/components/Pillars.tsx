import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { academicPillars } from "@/mocks/academics";

export default function Pillars() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Areas of Study"
            title="Four pillars of learning"
            description="Our curriculum balances scientific rigour, humanistic depth, digital fluency and practical skill."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {academicPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6 transition-all duration-300 hover:border-accent-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 text-2xl text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <i className={pillar.icon} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-600">
                  {pillar.description}
                </p>
                <p className="mt-4 border-t border-background-200 pt-3 font-label text-xs uppercase tracking-[0.1em] text-accent-700">
                  {pillar.subjects}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 flex justify-center">
          <Link to="/departments" className="btn-primary">
            <i className="ri-layout-grid-line" />
            Explore Departments
          </Link>
        </Reveal>
      </div>
    </section>
  );
}