import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import StatCounter from "@/components/base/StatCounter";

const supports = [
  {
    icon: "ri-user-star-line",
    title: "Academic Mentoring",
    description: "Every learner is assigned a mentor who tracks progress and sets personal academic targets.",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Structured Revision",
    description: "Organised revision programmes and past-paper clinics prepare students for national examinations.",
  },
  {
    icon: "ri-trophy-line",
    title: "Competitions",
    description: "Students represent the school in mathematics, science, debating and essay competitions.",
  },
  {
    icon: "ri-book-read-line",
    title: "Study Resources",
    description: "A well-stocked library, digital resources and study circles support independent learning.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Years of Academic Tradition" },
  { value: 12, suffix: "", label: "Subject Departments" },
  { value: 20, suffix: "+", label: "Competitions & Clubs" },
  { value: 15, suffix: "+", label: "Co-curricular Areas" },
];

export default function Support() {
  return (
    <section className="bg-primary-950 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionHeading
              tone="light"
              eyebrow="Academic Support"
              title="Every student supported to succeed"
              description="Excellence is not left to chance. We build the structures, habits and encouragement that help every learner perform at their best."
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supports.map((support, index) => (
            <Reveal key={support.title} delay={index * 80}>
              <article className="h-full rounded-lg border border-background-50/12 bg-background-50/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent-500/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-500/15 text-2xl text-accent-400">
                  <i className={support.icon} />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-background-50">
                  {support.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background-100/70">
                  {support.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-16">
          <div className="grid grid-cols-2 gap-8 border-t border-background-50/12 pt-12 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}