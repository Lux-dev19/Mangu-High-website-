import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { clubs } from "@/mocks/studentLife";

export default function ClubsGrid() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Clubs & Societies"
            title="Talent, passion and belonging"
            description="With more than thirty active clubs and societies, there is a community for every interest — from debate and law to music, science and the environment."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clubs.map((club, index) => (
            <Reveal key={club.name} delay={index * 60}>
              <article className="group flex h-full items-start gap-4 rounded-lg border border-background-200 bg-background-50 p-5 transition-colors duration-300 hover:border-accent-300">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                  <i className={club.icon} />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground-950">
                    {club.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground-600">
                    {club.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link to="/clubs" className="btn-outline">
            Explore all clubs &amp; societies
            <i className="ri-arrow-right-line" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}