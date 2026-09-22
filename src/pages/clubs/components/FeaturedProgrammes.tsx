import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { featuredProgrammes } from "@/mocks/clubs";

export default function FeaturedProgrammes() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Flagship Programmes"
            title="Where Mangu students make their mark"
            description="Four strands of co-curricular life that define the Mangu experience — each one building skill, character and a lasting sense of belonging."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProgrammes.map((programme, index) => (
            <Reveal key={programme.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50 transition-colors duration-300 hover:border-accent-300">
                <div className="relative h-52 w-full overflow-hidden bg-background-200">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/75 via-primary-950/10 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent-500 text-xl text-primary-950">
                    <i className={programme.icon} />
                  </span>
                  <p className="absolute bottom-4 left-4 font-label text-[11px] uppercase tracking-[0.18em] text-background-100/90">
                    {programme.tagline}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground-950">
                    {programme.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-600">
                    {programme.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {programme.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full bg-secondary-100 px-3 py-1 font-label text-[11px] font-medium text-secondary-900"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}