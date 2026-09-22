import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { studentLifeHighlights } from "@/mocks/studentLife";

export default function StudentLifePreview() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Student Life"
            title="More than a classroom — a complete education"
            description="Boarding life, clubs, leadership, service and faith shape well-rounded young men who are ready for the world."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studentLifeHighlights.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className="group relative h-[380px] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="font-label text-[10px] uppercase tracking-[0.18em] text-accent-400">
                    {item.meta}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-background-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-background-100/85 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Link to="/students" className="btn-outline">
            Discover Student Life
            <i className="ri-arrow-right-line" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}