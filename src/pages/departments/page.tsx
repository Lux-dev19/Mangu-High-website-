import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";
import { departments } from "@/mocks/academics";
import DepartmentExplorer from "./components/DepartmentExplorer";

export default function Departments() {
  return (
    <>
      <Seo
        title="Departments | Mangu High School Academic Departments"
        description="Explore the ten academic departments at Mangu High School — their subjects, activities and achievements, from Mathematics and Sciences to ICT, Humanities and Creative Arts."
      />
      <PageHero
        breadcrumb="Departments"
        eyebrow="Academic Departments"
        title="Ten departments, one standard of excellence"
        description="Each department unites specialist teachers, subject resources and a culture of achievement. Select one to explore its subjects, activities and results."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637057788.webp"
      >
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-background-50/20 bg-background-50/10 px-4 py-1.5 font-label text-xs uppercase tracking-[0.12em] text-background-100 backdrop-blur-sm">
            {departments.length} Departments
          </span>
          <span className="rounded-full border border-background-50/20 bg-background-50/10 px-4 py-1.5 font-label text-xs uppercase tracking-[0.12em] text-background-100 backdrop-blur-sm">
            Sciences · Humanities · Arts · ICT
          </span>
        </div>
      </PageHero>

      <DepartmentExplorer />

      <section className="bg-background-100 py-16 md:py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Beyond Subjects"
              title="Departments that build whole people"
              description="Our departments extend beyond the syllabus through clubs, competitions, field work and creative performance — connecting knowledge to real life."
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to Learn"
        title="Find your place at Mangu High School"
        description="Explore admissions, discover our academic offering and join a community committed to excellence."
        primaryLabel="Admissions Information"
        primaryTo="/admissions"
        primaryIcon="ri-edit-2-line"
        secondaryLabel="Meet the Community"
        secondaryTo="/administration"
        secondaryIcon="ri-team-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637058465.webp"
      />
    </>
  );
}