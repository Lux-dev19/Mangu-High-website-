import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { studentLifeHighlights } from "@/mocks/studentLife";

export default function LifeHighlights() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Life Beyond the Classroom"
            title="An education that shapes the whole person"
            description="Boarding life, clubs, leadership and service give our students the experiences, friendships and confidence that last a lifetime."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studentLifeHighlights.map((highlight, index) => (
            <Reveal key={highlight.id} delay={index * 80} variant="scale">
              <article className="group relative h-[420px] overflow-hidden rounded-lg">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-label text-[10px] uppercase tracking-[0.16em] text-accent-400">
                    {highlight.meta}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-background-50">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-background-100/0 transition-all duration-500 group-hover:max-h-40 group-hover:text-background-100/80">
                    {highlight.description}
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