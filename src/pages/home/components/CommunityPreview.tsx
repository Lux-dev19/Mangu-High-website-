import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { administration } from "@/mocks/community";
import MonogramAvatar from "@/components/base/MonogramAvatar";

export default function CommunityPreview() {
  const featured = administration.slice(0, 3);

  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Meet the Community"
              title="The people behind Mangu's success"
              description="Leadership, faculty and student leaders work together to create an environment where every learner can thrive. Explore our interactive directory."
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:text-right">
            <Link to="/administration" className="btn-primary">
              <i className="ri-team-line" />
              View the Directory
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((member, index) => (
            <Reveal key={member.id} delay={index * 90}>
              <article className="group h-full overflow-hidden rounded-lg border border-background-200 bg-background-50">
                <div className="relative h-64 w-full overflow-hidden">
                  <MonogramAvatar name={member.name} />
                  <span className="absolute left-3 top-3 rounded-full bg-primary-950/80 px-3 py-1 font-label text-[10px] uppercase tracking-[0.16em] text-accent-400 backdrop-blur-sm">
                    {member.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground-950">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-label text-xs uppercase tracking-[0.14em] text-accent-700">
                    {member.position}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground-600">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}