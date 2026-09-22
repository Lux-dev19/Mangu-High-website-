import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { sports } from "@/mocks/studentLife";

export default function SportsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              tone="light"
              eyebrow="Sports & Athletics"
              title="Discipline, teamwork and a winning spirit"
              description="Sport is central to life at Mangu. Our teams compete with pride at county, regional and national level, and every student is encouraged to stay active."
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:text-right">
            <span className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.18em] text-accent-400">
              <i className="ri-trophy-line text-lg" />
              Handball · Rugby · Athletics
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sports.map((sport, index) => (
            <Reveal key={sport.name} delay={index * 60}>
              <article className="group flex h-full flex-col rounded-lg border border-background-50/12 bg-background-50/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-500/60 hover:bg-background-50/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-500/15 text-2xl text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <i className={sport.icon} />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-background-50">
                  {sport.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background-100/70">
                  {sport.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}