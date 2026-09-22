import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { sports } from "@/mocks/studentLife";

export default function SportsPreview() {
  return (
    <section className="relative overflow-hidden bg-background-100 py-16 md:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal variant="left" className="lg:col-span-5">
          <div className="relative h-[320px] w-full overflow-hidden rounded-lg md:h-[440px]">
            <img
              src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533907782086A3313%5B1%5D.jpg"
              alt="Mangu High School team in competition"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-md bg-accent-500 text-2xl text-primary-950">
              <i className="ri-trophy-line" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="Sports & Activities"
              title="Where discipline meets determination"
              description="Sport is central to Mangu life. Our teams compete with pride at county, regional and national level — building fitness, teamwork and resilience."
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sports.map((sport, index) => (
              <Reveal key={sport.name} delay={index * 50} variant="scale">
                <div className="group flex h-full flex-col items-center gap-2 rounded-lg border border-background-200 bg-background-50 px-3 py-5 text-center transition-colors duration-300 hover:border-accent-300 hover:bg-primary-50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                    <i className={sport.icon} />
                  </span>
                  <span className="font-label text-xs font-semibold text-foreground-800">
                    {sport.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-8">
            <Link to="/students" className="btn-primary">
              Explore Sports &amp; Clubs
              <i className="ri-arrow-right-line" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}