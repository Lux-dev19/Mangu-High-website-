import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import Modal from "@/components/base/Modal";
import { departments, type Department } from "@/mocks/academics";

export default function DepartmentExplorer() {
  const [active, setActive] = useState<Department | null>(null);

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
              Explore our departments
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-foreground-600 md:text-base">
              Select any department to see its subjects, activities, achievements and the staff who
              lead it.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => (
            <Reveal key={department.slug} delay={index * 50}>
              <button
                type="button"
                onClick={() => setActive(department)}
                className="group flex h-full w-full cursor-pointer flex-col items-start rounded-lg border border-background-200 bg-background-100 p-6 text-left transition-all duration-300 hover:border-accent-300 hover:bg-background-50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 text-2xl text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <i className={department.icon} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-950">
                  {department.name}
                </h3>
                <p className="mt-1 font-label text-xs uppercase tracking-[0.1em] text-accent-700">
                  {department.tagline}
                </p>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-foreground-600">
                  {department.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.12em] text-primary-600">
                  View details
                  <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        label={active ? `${active.name} department` : "Department"}
      >
        {active ? (
          <div>
            <div className="relative h-40 overflow-hidden bg-primary-950 md:h-48">
              <div className="bg-crest-grid absolute inset-0 opacity-30" aria-hidden="true" />
              <div className="relative flex h-full items-center gap-5 px-6 pt-4 md:px-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-md bg-accent-500 text-3xl text-primary-950">
                  <i className={active.icon} />
                </span>
                <div>
                  <p className="font-label text-[11px] uppercase tracking-[0.18em] text-accent-400">
                    {active.tagline}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-background-50 md:text-2xl">
                    {active.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 md:p-8">
              <p className="text-sm leading-relaxed text-foreground-700 md:text-base">
                {active.overview}
              </p>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
                    Subjects Offered
                  </h4>
                  <ul className="mt-3 flex flex-col gap-2">
                    {active.subjects.map((subject) => (
                      <li key={subject} className="flex items-start gap-2 text-sm text-foreground-700">
                        <i className="ri-checkbox-circle-line mt-0.5 text-primary-500" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
                    Facilities & Resources
                  </h4>
                  <ul className="mt-3 flex flex-col gap-2">
                    {active.facilities.map((facility) => (
                      <li key={facility} className="flex items-start gap-2 text-sm text-foreground-700">
                        <i className="ri-building-2-line mt-0.5 text-primary-500" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
                    Department Activities
                  </h4>
                  <ul className="mt-3 flex flex-col gap-2">
                    {active.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2 text-sm text-foreground-700">
                        <i className="ri-sparkling-line mt-0.5 text-accent-600" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
                    Career Pathways
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.careers.map((career) => (
                      <li
                        key={career}
                        className="rounded-full bg-secondary-100 px-3 py-1 font-label text-[11px] text-secondary-900"
                      >
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 rounded-lg border border-accent-200 bg-accent-50 p-5">
                <h4 className="flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.16em] text-accent-800">
                  <i className="ri-award-line text-lg" />
                  Achievements
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground-700">
                  {active.achievement}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}