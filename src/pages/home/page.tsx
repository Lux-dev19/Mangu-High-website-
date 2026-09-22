import Seo from "@/components/base/Seo";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import AboutPreview from "./components/AboutPreview";
import AcademicExcellence from "./components/AcademicExcellence";
import StatsBand from "./components/StatsBand";
import CommunityPreview from "./components/CommunityPreview";
import StudentLifePreview from "./components/StudentLifePreview";
import SportsPreview from "./components/SportsPreview";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import CampusSection from "./components/CampusSection";
import GalleryPreview from "./components/GalleryPreview";
import AlumniSection from "./components/AlumniSection";
import AdmissionsCTA from "./components/AdmissionsCTA";
import ContactStrip from "./components/ContactStrip";

export default function Home() {
  return (
    <>
      <Seo
        title="Mangu High School | Excellence in Character, Leadership & Academics"
        description="Founded in 1925, Mangu High School is one of Kenya's leading national secondary schools — academic excellence, discipline, leadership, sports and Christian values."
      />
      <Hero />
      <Welcome />
      <AboutPreview />
      <AcademicExcellence />
      <StatsBand />
      <CommunityPreview />
      <StudentLifePreview />
      <SportsPreview />
      <NewsSection />
      <EventsSection />
      <CampusSection />
      <GalleryPreview />
      <AlumniSection />
      <AdmissionsCTA />
      <ContactStrip />
    </>
  );
}