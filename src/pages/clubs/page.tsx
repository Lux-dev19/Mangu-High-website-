import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import ClubsIntro from "./components/ClubsIntro";
import FeaturedProgrammes from "./components/FeaturedProgrammes";
import ClubsDirectory from "./components/ClubsDirectory";
import ClubRhythm from "./components/ClubRhythm";

export default function Clubs() {
  return (
    <>
      <Seo
        title="Clubs & Societies | Mangu High School"
        description="Explore the 30+ clubs and societies at Mangu High School — debate, law, chess, drama, music, journalism, the President's Award Scheme, sports and more."
      />
      <PageHero
        breadcrumb="Clubs & Societies"
        eyebrow="Co-Curricular Life"
        title="Clubs & Societies at Mangu High School"
        description="Talent, service and belonging beyond the classroom — over thirty societies where Mangu students compete, create, lead and give back."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637057788.webp"
      />
      <ClubsIntro />
      <FeaturedProgrammes />
      <ClubsDirectory />
      <ClubRhythm />
      <CtaBand
        eyebrow="Join the Community"
        title="Find your place at Mangu"
        description="Whether you debate, play, code or serve, there is a society waiting for you. Discover how to join the Mangu family."
        primaryLabel="Admissions Information"
        primaryTo="/admissions"
        primaryIcon="ri-edit-2-line"
        secondaryLabel="Explore Student Life"
        secondaryTo="/students"
        secondaryIcon="ri-community-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg"
      />
    </>
  );
}