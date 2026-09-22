import Reveal from "@/components/base/Reveal";
import { contactInfo } from "@/mocks/site";

export default function ContactMap() {
  return (
    <section className="bg-background-50 pb-16 md:pb-24">
      <div className="container-site">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-background-200 bg-background-50">
            <div className="flex flex-col gap-2 border-b border-background-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground-950">
                  Find us on the map
                </h2>
                <p className="mt-1 text-sm text-foreground-600">{contactInfo.addressOneLine}</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapQuery)}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-outline shrink-0 !py-2.5"
              >
                <i className="ri-navigation-line" />
                Get Directions
              </a>
            </div>
            <iframe
              title="Mangu High School location map"
              src="https://www.google.com/maps?q=Mangu%20High%20School%20Thika%20Kenya&output=embed"
              className="h-[380px] w-full border-0 md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}