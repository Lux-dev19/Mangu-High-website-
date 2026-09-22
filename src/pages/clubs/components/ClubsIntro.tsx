import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { clubStats } from "@/mocks/clubs";

export default function ClubsIntro() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left" className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="A society for every interest, a stage for every talent"
            description="The clubs and societies at Mangu High School give students the chance to step beyond the textbook — to compete, create, serve and lead. With more than thirty active groups, there is a community here for every ambition."
          />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground-600 md:text-base">
            From debate and moot court to chess, drama, music, journalism and the President&apos;s Award
            Scheme, our co-curricular programme is treated as a serious part of a Mangu education.
            Clubs build confidence, deepen friendships and turn interests into genuine capability.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {clubStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-semibold text-primary-700 md:text-3xl">
                  {stat.value}
                  <span className="text-accent-500">{stat.suffix}</span>
                </dt>
                <dd className="mt-1 text-xs leading-snug text-foreground-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal variant="right" className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-background-100">
            <img
              src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637054156.webp"
              alt="Students at Mangu High School during co-curricular activities"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-md bg-primary-950/85 px-4 py-3 backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-500 text-lg text-primary-950">
                <i className="ri-community-line" />
              </span>
              <span className="font-label text-xs uppercase tracking-[0.16em] text-background-100">
                30+ active societies
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}