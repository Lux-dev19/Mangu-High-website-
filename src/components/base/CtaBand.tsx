import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryTo: string;
  primaryIcon?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  secondaryIcon?: string;
  image: string;
};

/** Shared full-width call-to-action band with a dark photographic backdrop. */
export default function CtaBand({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  primaryIcon = "ri-arrow-right-line",
  secondaryLabel,
  secondaryTo,
  secondaryIcon = "ri-mail-send-line",
  image,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/55" />
      </div>

      <div className="container-site relative">
        <Reveal className="max-w-2xl">
          {eyebrow ? (
            <span className="eyebrow text-accent-400">
              <span className="h-px w-6 bg-accent-500" />
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight text-background-50 md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm leading-relaxed text-background-100/80 md:text-base">
              {description}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={primaryTo} className="btn-accent">
              <i className={primaryIcon} />
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryTo ? (
              <Link to={secondaryTo} className="btn-ghost-light">
                <i className={secondaryIcon} />
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}