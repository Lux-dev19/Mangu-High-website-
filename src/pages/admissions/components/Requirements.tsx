import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { admissionRequirements, admissionProcedure } from "@/mocks/admissions";

export default function Requirements() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Requirements"
                title="What you need to join Mangu"
                description="Admission to Form One follows the national selection and placement process. Here is what candidates and families need to prepare."
              />
            </Reveal>

            <div className="mt-8 flex flex-col gap-4">
              {admissionRequirements.map((requirement, index) => (
                <Reveal key={requirement.title} delay={index * 70}>
                  <div className="flex items-start gap-4 rounded-lg border border-background-200 bg-background-100 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600">
                      <i className={requirement.icon} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground-950">
                        {requirement.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground-600">
                        {requirement.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="right">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637058465.webp"
                  alt="Students registering at Mangu High School"
                  className="h-[280px] w-full object-cover object-top md:h-[340px]"
                />
              </div>
            </Reveal>

            <Reveal delay={80} className="mt-6">
              <h3 className="font-heading text-xl font-semibold text-foreground-950">
                Application procedure
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                Four clear steps take you from placement to your first day on campus.
              </p>

              <ol className="mt-6 flex flex-col gap-4">
                {admissionProcedure.map((step, index) => (
                  <Reveal as="li" key={step.step} delay={index * 70}>
                    <div className="flex items-start gap-4 rounded-lg border border-background-200 bg-background-50 p-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent-500 font-heading text-lg font-semibold text-primary-950">
                        {step.step}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-heading text-base font-semibold text-foreground-950">
                          {step.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground-600">
                          {step.description}
                        </p>
                      </div>
                      <i className={`${step.icon} hidden text-2xl text-primary-300 sm:block`} />
                    </div>
                  </Reveal>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}