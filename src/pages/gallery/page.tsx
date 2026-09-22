import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import GalleryGrid from "./components/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <Seo
        title="Photo Gallery | Mangu High School"
        description="Browse photographs of campus, academics, sports, students, events and school life at Mangu High School, with a full-screen viewer."
      />
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Photo Gallery"
        title="Life at Mangu, captured in pictures"
        description="Browse photographs of campus, academics, sports, students, events and school life. Select any image to open the full-screen viewer."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637059421.webp"
      />
      <GalleryGrid />
      <CtaBand
        eyebrow="Visit Us"
        title="Experience Mangu in person"
        description="Photographs only capture so much. Arrange a visit and see our campus, classrooms and community for yourself."
        primaryLabel="Contact the School"
        primaryTo="/contact"
        primaryIcon="ri-mail-send-line"
        secondaryLabel="Explore Student Life"
        secondaryTo="/students"
        secondaryIcon="ri-group-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637058465.webp"
      />
    </>
  );
}