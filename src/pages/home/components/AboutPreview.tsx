import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { schoolValues, schoolInfo } from "@/mocks/site";

export default function AboutPreview() {
  return (
    <section className="relative bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who We Are"
              title="Rooted in tradition, driven by excellence"
              description={`Since ${schoolInfo.founded}, Mangu High School has stood for academic achievement, discipline and Christian values. Our motto, "${schoolInfo.motto}", calls every student to take ownership of their own growth.`}
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <blockquote className="rounded-lg border-l-2 border-accent-500 bg-background-50 p-6">
              <i className="ri-double-quotes-l text-2xl text-accent-500" />
              <p className="mt-2 font-heading text-base italic leading-relaxed text-foreground-800">
                We provide a world-class education that prepares our students to branch out into the
                real world and serve anyone and everyone in any way they can.
              </p>
              <footer className="mt-4 font-label text-xs uppercase tracking-[0.16em] text-foreground-500">
                — The School Mission
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schoolValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <article className="group h-full rounded-lg border border-background-200 bg-background-50 p-6 transition-colors duration-300 hover:border-primary-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-50 text-2xl text-primary-600 transition-colors duration-300 group-hover:bg-accent-100 group-hover:text-accent-800">
                  <i className={value.icon} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Link to="/about" className="btn-outline">
            Discover our history &amp; values
            <i className="ri-arrow-right-line" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}