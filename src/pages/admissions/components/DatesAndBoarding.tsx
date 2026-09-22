import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { importantDates, boardingInfo } from "@/mocks/admissions";
import { contactInfo } from "@/mocks/site";

export default function DatesAndBoarding() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        {/* Key dates */}
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading
              eyebrow="Important Dates"
              title="Key dates in the admissions journey"
              description="Dates follow the national school calendar. Confirm specific dates with the school office as they are published each year."
            />
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {importantDates.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="rounded-lg border-l-2 border-accent-500 bg-background-50 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground-950">
                      {item.label}
                    </h3>
                    <span className="rounded-full bg-primary-100 px-3 py-1 font-label text-[10px] uppercase tracking-[0.12em] text-primary-700">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Boarding */}
        <div className="lg:col-span-6">
          <Reveal variant="right">
            <SectionHeading
              eyebrow="Boarding & Life"
              title="A structured, supportive home"
              description="Mangu is primarily a boarding school. Our house system and pastoral care help every student settle, thrive and belong."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {boardingInfo.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="h-full rounded-lg border border-background-200 bg-background-50 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600">
                    <i className={item.icon} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-6">
            <div className="flex flex-col gap-4 rounded-lg border border-background-200 bg-primary-950 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-label text-xs uppercase tracking-[0.16em] text-accent-400">
                  Questions about fees or joining?
                </p>
                <p className="mt-1 text-sm text-background-100/80">
                  Contact the school office — fees follow government guidelines and are confirmed
                  each year.
                </p>
              </div>
              <a href={`tel:${contactInfo.phoneHref}`} className="btn-accent shrink-0">
                <i className="ri-phone-line" />
                Call the Office
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}