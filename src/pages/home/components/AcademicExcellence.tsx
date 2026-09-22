import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { academicPillars } from "@/mocks/academics";

export default function AcademicExcellence() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Academic Excellence"
            title="A rigorous curriculum, taught by a devoted faculty"
            description="Our academic programme blends the national syllabus with competition work, research, technology and mentorship — preparing students for university and for life."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {academicPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80}>
              <article className="group flex h-full gap-5 rounded-lg border border-background-200 bg-background-50 p-6 transition-all duration-300 hover:border-accent-300 hover:bg-background-100 md:p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-accent-100 text-2xl text-accent-800">
                  <i className={pillar.icon} />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                    {pillar.description}
                  </p>
                  <p className="mt-3 font-label text-xs uppercase tracking-[0.14em] text-primary-600">
                    {pillar.subjects}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/academics" className="btn-primary">
            Explore Academics
            <i className="ri-arrow-right-line" />
          </Link>
          <Link to="/departments" className="btn-outline">
            View Departments
          </Link>
        </Reveal>
      </div>
    </section>
  );
}