import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { aboutValues, visionMission } from "@/mocks/about";

const pillars = [
  { icon: "ri-eye-line", label: "Our Vision", text: visionMission.vision },
  { icon: "ri-compass-3-line", label: "Our Mission", text: visionMission.mission },
  { icon: "ri-anchor-line", label: "Our Philosophy", text: visionMission.philosophy },
];

export default function VisionMission() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Vision, Mission & Values"
            title="What we stand for"
            description="Our vision, mission and values shape every lesson, every relationship and every decision at Mangu High School."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 90}>
              <article className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 text-2xl text-primary-600">
                  <i className={pillar.icon} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-950">
                  {pillar.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
              Our core values
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="group h-full rounded-lg border border-background-200 bg-background-50 p-6 transition-colors duration-300 hover:border-accent-300">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-100 text-xl text-accent-800 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                    <i className={value.icon} />
                  </span>
                  <h4 className="mt-4 font-heading text-base font-semibold text-foreground-950">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}