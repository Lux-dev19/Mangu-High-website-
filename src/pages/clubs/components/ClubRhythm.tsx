import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { clubRhythm } from "@/mocks/clubs";

export default function ClubRhythm() {
  return (
    <section className="bg-primary-950 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="How It Works"
            title="A rhythm that shapes the whole person"
            description="Co-curricular life at Mangu is structured, supervised and taken seriously — because the skills learned outside the classroom matter just as much as those learned inside it."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clubRhythm.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="flex h-full flex-col rounded-lg border border-background-100/10 bg-primary-900/40 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-500 text-2xl text-primary-950">
                  <i className={item.icon} />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-background-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background-100/70">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}