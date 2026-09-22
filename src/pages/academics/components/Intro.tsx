import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { academicsIntro } from "@/mocks/academics";

const facts = [
  { icon: "ri-book-2-line", label: "National Curriculum", value: "KCPE/KPSEA to KCSE" },
  { icon: "ri-building-2-line", label: "Academic Departments", value: "10 focus areas" },
  { icon: "ri-flask-line", label: "Practical Laboratories", value: "Science & ICT" },
  { icon: "ri-award-line", label: "Competitions", value: "Regional & national" },
];

export default function Intro() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading
              eyebrow="Academic Programme"
              title={academicsIntro.headline}
              description={academicsIntro.body}
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 80}>
                <div className="flex items-start gap-4 rounded-lg border border-background-200 bg-background-100 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600">
                    <i className={fact.icon} />
                  </span>
                  <span>
                    <span className="block font-label text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                      {fact.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-foreground-900">
                      {fact.value}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="right" className="lg:col-span-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637055956.webp"
              alt="Students in a lesson at Mangu High School"
              className="h-[340px] w-full object-cover object-top md:h-[440px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}