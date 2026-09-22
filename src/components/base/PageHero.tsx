import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  breadcrumb: string;
  children?: ReactNode;
};

/** Shared interior page banner used across every secondary page for a consistent editorial feel. */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[460px] items-end overflow-hidden bg-primary-950 pb-12 pt-36 md:min-h-[540px] md:pb-16 md:pt-44">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="anim-hero-zoom h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/75 to-primary-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-950/30 to-transparent" />
      </div>

      <div className="container-site relative z-10 w-full">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 font-label text-xs text-background-100/70">
          <Link to="/" className="transition-colors hover:text-accent-400">
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-background-100/90">{breadcrumb}</span>
        </nav>

        {eyebrow ? (
          <span className="eyebrow text-accent-400">
            <span className="h-px w-6 bg-accent-500" />
            {eyebrow}
          </span>
        ) : null}

        <h1 className="mt-4 max-w-4xl font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-background-50 text-shadow-hero sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background-100/80 md:text-base">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}