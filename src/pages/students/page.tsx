import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import LifeHighlights from "./components/LifeHighlights";
import ClubsGrid from "./components/ClubsGrid";
import SportsSection from "./components/SportsSection";
import LeadershipSection from "./components/LeadershipSection";

export default function Students() {
  return (
    <>
      <Seo
        title="Student Life & Sports | Mangu High School"
        description="Boarding life, 30+ clubs and societies, sports, leadership and faith at Mangu High School — an education that shapes the whole person."
      />
      <PageHero
        breadcrumb="Student Life"
        eyebrow="Student Life"
        title="Where character is built and friendships last"
        description="From the dormitory to the sports field, from the chapel to the debating chamber — life at Mangu is rich, structured and full of opportunity."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533907782086A3313%5B1%5D.jpg"
      />
      <LifeHighlights />
      <ClubsGrid />
      <SportsSection />
      <LeadershipSection />
      <CtaBand
        eyebrow="Be Part of It"
        title="Your journey at Mangu starts here"
        description="Discover how to join a school where excellence, discipline and opportunity go hand in hand."
        primaryLabel="Admissions Information"
        primaryTo="/admissions"
        primaryIcon="ri-edit-2-line"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
        secondaryIcon="ri-book-open-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637055956.webp"
      />
    </>
  );
}