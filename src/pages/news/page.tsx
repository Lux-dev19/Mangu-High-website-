import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import NewsGrid from "./components/NewsGrid";
import EventsTimeline from "./components/EventsTimeline";

export default function News() {
  return (
    <>
      <Seo
        title="News & Events | Mangu High School"
        description="The latest news, achievements and upcoming events from Mangu High School. Search and filter stories, and plan ahead with our events calendar."
      />
      <PageHero
        breadcrumb="News & Events"
        eyebrow="News & Events"
        title="The latest from Mangu High School"
        description="Achievements, announcements and the events that shape our school calendar. Filter the news and plan ahead with our upcoming events."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#news"
            className="rounded-full border border-background-50/20 bg-background-50/10 px-4 py-1.5 font-label text-xs text-background-100 backdrop-blur-sm transition-colors hover:border-accent-500"
          >
            <i className="ri-newspaper-line mr-1.5 text-accent-400" />
            Latest News
          </a>
          <a
            href="#events"
            className="rounded-full border border-background-50/20 bg-background-50/10 px-4 py-1.5 font-label text-xs text-background-100 backdrop-blur-sm transition-colors hover:border-accent-500"
          >
            <i className="ri-calendar-event-line mr-1.5 text-accent-400" />
            Upcoming Events
          </a>
        </div>
      </PageHero>
      <NewsGrid />
      <EventsTimeline />
      <CtaBand
        eyebrow="Stay Connected"
        title="Never miss an update from Mangu"
        description="For official announcements, enquiries and partnerships, reach out to the school office directly."
        primaryLabel="Contact the School"
        primaryTo="/contact"
        primaryIcon="ri-mail-send-line"
        secondaryLabel="View Gallery"
        secondaryTo="/gallery"
        secondaryIcon="ri-image-2-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533886605JPG_7144%281%29.JPG"
      />
    </>
  );
}