import { Link } from "react-router-dom";
import Crest from "@/components/base/Crest";
import { contactInfo, footerGroups, schoolInfo, socialLinks } from "@/mocks/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-background-100">
      <div className="container-site grid gap-10 py-14 md:py-16 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Crest className="h-12 w-11" tone="light" />
            <div>
              <h4 className="font-heading text-lg font-semibold text-background-50">
                {schoolInfo.name}
              </h4>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-accent-400">
                {schoolInfo.motto}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-background-100/70">
            Founded in {schoolInfo.founded}, Mangu High School is one of Kenya&apos;s leading national
            schools — shaping character, leadership and academic excellence for over a century.
          </p>

          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-background-100/15 text-lg text-background-100/80 transition-colors hover:border-accent-500 hover:text-accent-400"
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        {footerGroups.map((group) => (
          <nav key={group.title} className="lg:col-span-2" aria-label={group.title}>
            <h4 className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {group.title}
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-background-100/70 transition-colors hover:text-background-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact */}
        <div className="lg:col-span-4">
          <h4 className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            Connect
          </h4>
          <ul className="mt-5 flex flex-col gap-4 text-sm text-background-100/70">
            <li className="flex gap-3">
              <i className="ri-map-pin-2-line mt-0.5 text-accent-500" />
              <span>
                {contactInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <i className="ri-phone-line mt-0.5 text-accent-500" />
              <a href={`tel:${contactInfo.phoneHref}`} className="transition-colors hover:text-background-50">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <i className="ri-mail-line mt-0.5 text-accent-500" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-background-50"
              >
                {contactInfo.email}
              </a>
            </li>
          </ul>

          <Link to="/contact" className="btn-accent mt-6 !px-5 !py-2.5">
            Enquire Now
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>

      <div className="border-t border-background-100/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-background-100/55 sm:flex-row sm:text-left">
          <p>
            © {year} {schoolInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <Link to="/download" className="inline-flex items-center gap-2 transition-colors hover:text-accent-400">
              <i className="ri-download-2-line" />
              Download Project Source
            </Link>
            <p className="flex items-center gap-2">
              <i className="ri-graduation-cap-line text-accent-500" />
              <span>Excellence in Character, Leadership and Academic Achievement.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}