import Reveal from "@/components/base/Reveal";
import { contactInfo, socialLinks } from "@/mocks/site";

const details = [
  {
    icon: "ri-map-pin-2-line",
    label: "Campus Address",
    lines: contactInfo.addressLines,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapQuery)}`,
  },
  {
    icon: "ri-phone-line",
    label: "Telephone",
    lines: [contactInfo.phone],
    href: `tel:${contactInfo.phoneHref}`,
  },
  {
    icon: "ri-mail-line",
    label: "Email",
    lines: [contactInfo.email],
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: "ri-time-line",
    label: "Office Hours",
    lines: [contactInfo.officeHours],
    href: "",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((detail, index) => {
              const cardClass =
                "flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-6 transition-colors duration-300 hover:border-accent-300";
              const body = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 text-2xl text-primary-600">
                    <i className={detail.icon} />
                  </span>
                  <h3 className="mt-5 font-label text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
                    {detail.label}
                  </h3>
                  <div className="mt-2 flex flex-col gap-0.5">
                    {detail.lines.map((line) => (
                      <span key={line} className="text-sm leading-relaxed text-foreground-700">
                        {line}
                      </span>
                    ))}
                  </div>
                </>
              );

              return (
                <Reveal key={detail.label} delay={index * 70}>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "nofollow noopener noreferrer" : undefined}
                      className={cardClass}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={cardClass}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="flex flex-col items-center gap-4 rounded-lg border border-background-200 bg-background-100 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground-950">
                Follow Mangu High School
              </h3>
              <p className="mt-1 text-sm text-foreground-600">
                Stay up to date with news, achievements and events.
              </p>
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-background-300 text-lg text-foreground-600 transition-colors hover:border-primary-400 hover:text-primary-600"
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}