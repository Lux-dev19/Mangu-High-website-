import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { upcomingEvents } from "@/mocks/news";

export default function EventsTimeline() {
  return (
    <section id="events" className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Mark your calendar"
            description="Ceremonies, competitions, parents' meetings and celebrations from across the school year."
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {upcomingEvents.map((event, index) => (
            <Reveal key={event.id} delay={index * 60}>
              <article className="group grid gap-5 rounded-lg border border-background-200 bg-background-50 p-5 transition-colors duration-300 hover:border-accent-300 md:grid-cols-12 md:items-center md:p-6">
                {/* Date block */}
                <div className="flex items-center gap-4 md:col-span-3 lg:col-span-2">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-primary-950 text-background-50">
                    <span className="font-heading text-xl font-semibold leading-none text-accent-400">
                      {event.day}
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-[0.14em] text-background-100/70">
                      {event.month}
                    </span>
                  </div>
                  <span className="rounded-full bg-secondary-100 px-3 py-1 font-label text-[10px] uppercase tracking-[0.12em] text-secondary-900 md:hidden">
                    {event.category}
                  </span>
                </div>

                {/* Detail */}
                <div className="md:col-span-6 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="hidden rounded-full bg-secondary-100 px-3 py-1 font-label text-[10px] uppercase tracking-[0.12em] text-secondary-900 md:inline-flex">
                      {event.category}
                    </span>
                    <span className="flex items-center gap-1.5 font-label text-xs text-foreground-500">
                      <i className="ri-time-line" />
                      {event.time}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-foreground-950">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                    {event.description}
                  </p>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-2 md:col-span-3 md:border-l md:border-background-200 md:pl-6">
                  <i className="ri-map-pin-2-line mt-0.5 text-lg text-accent-600" />
                  <span>
                    <span className="block font-label text-[10px] uppercase tracking-[0.14em] text-foreground-500">
                      Venue
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-foreground-900">
                      {event.venue}
                    </span>
                    <span className="mt-1 block text-xs text-foreground-500">{event.date}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}