import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { departments } from "@/mocks/academics";

export default function Curriculum() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Curriculum"
            title="Subjects across every department"
            description="Students study a broad core of subjects and specialise as they progress toward national examinations, supported by experienced subject specialists."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => (
            <Reveal key={department.slug} delay={index * 50}>
              <article className="flex h-full items-start gap-4 rounded-lg border border-background-200 bg-background-50 p-5 transition-colors duration-300 hover:border-primary-300">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-background-100 text-lg text-primary-600">
                  <i className={department.icon} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground-950">
                    {department.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground-600">
                    {department.subjects.join(" · ")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}