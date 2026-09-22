import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { studentLeaders } from "@/mocks/community";

export default function LeadershipSection() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal variant="left" className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637059421.webp"
                alt="A student leader addressing the school"
                className="h-[380px] w-full object-cover object-top md:h-[520px]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="Student Leadership"
                title="Growing leaders, not just high achievers"
                description="Our student leadership structure gives learners genuine responsibility — to lead their peers, serve their houses and shape the culture of the school."
              />
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {studentLeaders.map((leader, index) => (
                <Reveal key={leader.role} delay={index * 50}>
                  <div className="flex items-start gap-3 rounded-lg border border-background-200 bg-background-100 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-100 text-lg text-primary-600">
                      <i className={leader.icon} />
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground-950">
                        {leader.role}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-foreground-600">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}