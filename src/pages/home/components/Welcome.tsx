import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import { schoolInfo } from "@/mocks/site";

const highlights = [
  { icon: "ri-history-line", text: "Founded in 1925 at Kabaa — a century of academic tradition" },
  { icon: "ri-user-star-line", text: "Alumni including a former President of the Republic of Kenya" },
  { icon: "ri-shield-check-line", text: "A national school built on discipline, faith and service" },
];

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left" className="relative">
          <div className="relative h-[340px] w-full overflow-hidden rounded-lg md:h-[460px]">
            <img
              src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg"
              alt="The entrance to Mangu High School"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[210px] rounded-lg bg-primary-500 p-5 text-background-50 md:block">
            <span className="font-heading text-3xl font-semibold text-accent-400">100+</span>
            <p className="mt-1 text-xs leading-snug text-background-100/85">
              years of shaping leaders for Kenya and the world
            </p>
          </div>
          <span className="absolute -left-5 -top-5 hidden h-20 w-20 rounded-lg border border-accent-500/50 lg:block" />
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent-500" />
              Welcome to Mangu
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground-950 md:text-4xl">
              A national school where character is built and leaders are made
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground-600 md:text-base">
              Mangu High School was founded in {schoolInfo.founded} at Kabaa by Fr. Michael Witte.
              Renowned for producing some of the brightest minds in the country, the school combines
              academic rigour with discipline, faith and a proud sporting and cultural tradition.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-col gap-4">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-100 text-lg text-primary-600">
                  <i className={item.icon} />
                </span>
                <p className="text-sm leading-relaxed text-foreground-700">{item.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/about" className="btn-primary">
              Our Story
              <i className="ri-arrow-right-line" />
            </Link>
            <Link to="/administration" className="link-underline font-label text-sm font-semibold text-primary-600">
              Meet the community
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}