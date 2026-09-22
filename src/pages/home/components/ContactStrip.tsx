import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { contactInfo, socialLinks } from "@/mocks/site";

export default function ContactStrip() {
  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Get in Touch"
                title="We'd love to hear from you"
                description="Whether you are a prospective family, an alumnus or a partner, the school office is ready to help."
              />
            </Reveal>

            <Reveal delay={120} className="mt-8 flex flex-col gap-4">
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="flex items-center gap-4 rounded-lg border border-background-200 bg-background-50 p-4 transition-colors hover:border-primary-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600">
                  <i className="ri-phone-line" />
                </span>
                <span>
                  <span className="block font-label text-[11px] uppercase tracking-[0.16em] text-foreground-500">
                    Telephone
                  </span>
                  <span className="block text-sm font-semibold text-foreground-900">
                    {contactInfo.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 rounded-lg border border-background-200 bg-background-50 p-4 transition-colors hover:border-primary-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600">
                  <i className="ri-mail-line" />
                </span>
                <span>
                  <span className="block font-label text-[11px] uppercase tracking-[0.16em] text-foreground-500">
                    Email
                  </span>
                  <span className="block text-sm font-semibold text-foreground-900">
                    {contactInfo.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-lg border border-background-200 bg-background-50 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-100 text-xl text-primary-600">
                  <i className="ri-map-pin-2-line" />
                </span>
                <span>
                  <span className="block font-label text-[11px] uppercase tracking-[0.16em] text-foreground-500">
                    Location
                  </span>
                  <span className="block text-sm font-semibold text-foreground-900">
                    {contactInfo.addressOneLine}
                  </span>
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary">
                  <i className="ri-mail-send-line" />
                  Send an Enquiry
                </Link>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-background-300 text-lg text-foreground-600 transition-colors hover:border-primary-400 hover:text-primary-600"
                    >
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={100} className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-background-200 bg-background-50">
              <iframe
                title="Mangu High School location map"
                src="https://www.google.com/maps?q=Mangu%20High%20School%20Thika%20Kenya&output=embed"
                className="h-[360px] w-full border-0 md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col gap-2 border-t border-background-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.16em] text-foreground-500">
                    School Office Hours
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground-900">
                    {contactInfo.officeHours}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 font-label text-xs text-foreground-500">
                  <i className="ri-map-2-line text-accent-600" />
                  {contactInfo.addressOneLine}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}