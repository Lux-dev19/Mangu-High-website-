import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import Intro from "./components/Intro";
import Pillars from "./components/Pillars";
import Curriculum from "./components/Curriculum";
import SciencesSection from "./components/SciencesSection";
import SubjectChoices from "./components/SubjectChoices";
import Support from "./components/Support";

export default function Academics() {
  return (
    <>
      <Seo
        title="Academics | Mangu High School Curriculum & Departments"
        description="A rigorous, broad secondary curriculum at Mangu High School — sciences and STEM, humanities, languages, ICT, business and creative arts, with clear guidance on subject choices and science, arts and technical pathways."
      />
      <PageHero
        breadcrumb="Academics"
        eyebrow="Academics"
        title="A rigorous education, taught with care"
        description="From the sciences and humanities to ICT and creative arts, our curriculum is designed for depth, curiosity and real-world competence."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637058465.webp"
      />
      <Intro />
      <Pillars />
      <Curriculum />
      <SciencesSection />
      <SubjectChoices />
      <Support />
      <CtaBand
        eyebrow="Choose Your Path"
        title="Discover the department that fits your ambition"
        description="Behind every subject is a team of specialists. Explore our departments and the opportunities they open."
        primaryLabel="Browse Departments"
        primaryTo="/departments"
        primaryIcon="ri-layout-grid-line"
        secondaryLabel="Talk to Us"
        secondaryTo="/contact"
        secondaryIcon="ri-mail-send-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637057788.webp"
      />
    </>
  );
}