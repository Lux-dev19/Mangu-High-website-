import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { upcomingEvents } from "@/mocks/news";

export default function EventsSection() {
  return (
    <section className="bg-primary-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Upcoming Events"
            title="Mark your calendar"
            description="Ceremonies, competitions, parents' days and showcases across the school year."
          />
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col">
          {upcomingEvents.slice(0, 4).map((event, index) => (
            <Reveal key={event.id} delay={index * 80} variant="up">
              <article className="group relative flex gap-5 border-b border-primary-200/60 py-6 transition-colors hover:bg-background-50">
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-primary-500 text-background-50">
                  <span className="font-heading text-2xl font-semibold leading-none text-accent-400">
                    {event.day}
                  </span>
                  <span className="mt-1 font-label text-[10px] uppercase tracking-[0.16em]">
                    {event.month}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-lg font-semibold text-foreground-950">
                      {event.title}
                    </h3>
                    <span className="rounded-full bg-secondary-100 px-2.5 py-0.5 font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-900">
                      {event.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                    {event.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-label text-xs text-foreground-500">
                    <span className="flex items-center gap-1.5">
                      <i className="ri-time-line text-accent-600" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="ri-map-pin-2-line text-accent-600" />
                      {event.venue}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Link to="/news" className="btn-primary">
            View Full Events Calendar
            <i className="ri-calendar-event-line" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}