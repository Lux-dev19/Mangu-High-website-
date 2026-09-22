import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import Story from "./components/Story";
import VisionMission from "./components/VisionMission";
import Timeline from "./components/Timeline";
import AlumniShowcase from "./components/AlumniShowcase";

export default function About() {
  return (
    <>
      <Seo
        title="About Mangu High School | History, Vision & Values"
        description="Founded in 1925 at Kabaa, Mangu High School has spent a century shaping disciplined, ambitious young men. Explore our history, vision, mission and values."
      />
      <PageHero
        breadcrumb="About"
        eyebrow="About Mangu High School"
        title="Rooted in tradition, driven by excellence"
        description="Founded in 1925, Mangu High School has spent a century shaping disciplined, ambitious young men who go on to lead and serve across Kenya and the world."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637055956.webp"
      />
      <Story />
      <VisionMission />
      <Timeline />
      <AlumniShowcase />
      <CtaBand
        eyebrow="Visit Us"
        title="See the school for yourself"
        description="We welcome prospective families, alumni and partners to visit our campus. Reach out to arrange a tour with the school office."
        primaryLabel="Contact the School"
        primaryTo="/contact"
        primaryIcon="ri-mail-send-line"
        secondaryLabel="Explore Admissions"
        secondaryTo="/admissions"
        secondaryIcon="ri-edit-2-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637059421.webp"
      />
    </>
  );
}