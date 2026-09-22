import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { schoolHistory } from "@/mocks/about";
import { schoolInfo } from "@/mocks/site";

export default function Story() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal variant="left" className="lg:col-span-5">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg"
                alt="Historic buildings on the Mangu High School campus"
                className="h-[380px] w-full object-cover object-top md:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-lg border border-background-200 bg-background-50 p-5 sm:block lg:-right-6">
              <p className="font-heading text-3xl font-semibold text-primary-600">{schoolInfo.founded}</p>
              <p className="mt-1 font-label text-[11px] uppercase tracking-[0.18em] text-foreground-500">
                Founded at Kabaa
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="A century of character, scholarship and service"
              description={schoolHistory.intro}
            />
          </Reveal>

          <div className="mt-6 flex flex-col gap-4">
            {schoolHistory.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 80}>
                <p className="text-sm leading-relaxed text-foreground-600 md:text-base">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-background-200 bg-background-100 p-4">
              <i className="ri-ancient-gate-line text-2xl text-accent-600" />
              <p className="mt-2 font-heading text-sm font-semibold text-foreground-950">
                Founded {schoolInfo.founded}
              </p>
              <p className="mt-1 text-xs text-foreground-600">At Kabaa, by Fr. Michael Witte</p>
            </div>
            <div className="rounded-lg border border-background-200 bg-background-100 p-4">
              <i className="ri-book-marked-line text-2xl text-accent-600" />
              <p className="mt-2 font-heading text-sm font-semibold text-foreground-950">
                {schoolInfo.motto}
              </p>
              <p className="mt-1 text-xs text-foreground-600">{schoolInfo.mottoMeaning}</p>
            </div>
            <div className="rounded-lg border border-background-200 bg-background-100 p-4">
              <i className="ri-building-2-line text-2xl text-accent-600" />
              <p className="mt-2 font-heading text-sm font-semibold text-foreground-950">
                National School
              </p>
              <p className="mt-1 text-xs text-foreground-600">{schoolInfo.county}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}