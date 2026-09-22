import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { clubCategories, clubDirectory } from "@/mocks/clubs";

const filters = ["All", ...clubCategories];

export default function ClubsDirectory() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All" ? clubDirectory : clubDirectory.filter((club) => club.category === active);

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="The Directory"
            title="Explore our clubs & societies"
            description="Filter by category to see what each society does. Every club is open to students, with a teacher patron and a student committee guiding its work."
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`cursor-pointer rounded-full border px-4 py-2 font-label text-xs font-medium whitespace-nowrap transition-colors ${
                active === filter
                  ? "border-primary-500 bg-primary-500 text-background-50"
                  : "border-background-300 bg-background-50 text-foreground-700 hover:border-accent-400 hover:text-accent-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((club, index) => (
            <Reveal key={club.id} delay={Math.min(index, 6) * 50}>
              <article className="group flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-5 transition-colors duration-300 hover:border-accent-300 hover:bg-background-50">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                    <i className={club.icon} />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-semibold leading-snug text-foreground-950">
                      {club.name}
                    </h3>
                    <p className="mt-0.5 font-label text-[10px] uppercase tracking-[0.14em] text-accent-700">
                      {club.category}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-foreground-600">{club.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {club.activities.map((activity) => (
                    <li
                      key={activity}
                      className="rounded bg-background-200/70 px-2 py-0.5 font-label text-[10px] text-foreground-700"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}