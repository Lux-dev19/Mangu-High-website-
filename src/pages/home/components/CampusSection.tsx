import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { campusFacilities } from "@/mocks/studentLife";

export default function CampusSection() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Campus & Facilities"
              title="An environment built for learning"
              description="From historic halls to modern laboratories and innovation spaces, our campus supports every dimension of school life."
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:text-right">
            <Link to="/about" className="link-underline font-label text-sm font-semibold text-primary-600">
              Take a closer look →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-lg">
              <img
                src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637055956.webp"
                alt="A historic teaching block on the Mangu High School campus"
                className="h-[380px] w-full object-cover object-top lg:h-[520px]"
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {campusFacilities.map((facility, index) => (
              <Reveal key={facility.title} delay={index * 60}>
                <article className="group flex h-full gap-4 rounded-lg border border-background-200 bg-background-50 p-5 transition-all duration-300 hover:border-accent-300">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                    <i className={facility.icon} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground-950">
                      {facility.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground-600">
                      {facility.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}