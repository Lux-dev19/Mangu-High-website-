import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { schoolInfo } from "@/mocks/site";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-primary-950"
      aria-label={`Welcome to ${schoolInfo.name}`}
    >
      {/* Background photograph with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637059421.webp"
          alt="The Mangu High School campus at golden hour"
          className="anim-hero-zoom h-[115%] w-full object-cover object-top"
          style={{ transform: `translateY(${offset * 0.18}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-900/60 to-primary-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-transparent to-primary-950/40" />
      </div>

      {/* Floating geometric accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="anim-float absolute left-[6%] top-[24%] hidden h-16 w-16 rounded-lg border border-accent-500/30 lg:block" />
        <span className="anim-float-slow absolute right-[10%] top-[18%] hidden h-24 w-24 rounded-full border border-background-50/15 lg:block" />
        <span className="anim-float absolute bottom-[22%] right-[18%] hidden h-10 w-10 rotate-45 border border-accent-500/40 lg:block" />
        <span className="anim-float-slow absolute bottom-[30%] left-[14%] hidden h-6 w-6 rounded-full bg-accent-500/40 lg:block" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 w-full pt-32 pb-24 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow anim-fade-up text-accent-400">
              <span className="h-px w-8 bg-accent-500" />
              Founded {schoolInfo.founded} · {schoolInfo.motto}
            </span>

            <h1 className="anim-fade-up delay-1 mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-background-50 text-shadow-hero sm:text-5xl lg:text-6xl xl:text-7xl">
              Mangu High School
            </h1>

            <p className="anim-fade-up delay-2 mt-6 max-w-2xl font-heading text-lg italic leading-relaxed text-accent-200 sm:text-xl lg:text-2xl">
              {schoolInfo.tagline}
            </p>

            <p className="anim-fade-up delay-3 mt-5 max-w-xl text-sm leading-relaxed text-background-100/80 md:text-base">
              For a century, Mangu has shaped the character, discipline and ambition of Kenya&apos;s
              finest young men — a national school where tradition and innovation meet.
            </p>

            <div className="anim-fade-up delay-4 mt-9 flex flex-wrap items-center gap-3">
              <Link to="/about" className="btn-accent">
                <i className="ri-compass-3-line" />
                Explore Our School
              </Link>
              <Link to="/admissions" className="btn-primary !bg-background-50 !text-primary-700 hover:!bg-background-100">
                <i className="ri-edit-2-line" />
                Admissions
              </Link>
              <Link to="/academics" className="btn-ghost-light">
                <i className="ri-book-open-line" />
                Academics
              </Link>
              <Link to="/contact" className="btn-ghost-light">
                <i className="ri-mail-send-line" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Interactive crest medallion */}
          <div className="hidden justify-center lg:col-span-5 lg:flex">
            <div
              className="relative h-72 w-72 transition-transform duration-300 ease-out xl:h-80 xl:w-80"
              style={{
                transform: `perspective(900px) rotateY(${tilt.x * 16}deg) rotateX(${-tilt.y * 16}deg)`,
              }}
            >
              <div className="anim-spin-slow absolute inset-0 rounded-full border border-dashed border-accent-500/30" />
              <div className="absolute inset-6 rounded-full border border-background-50/20" />
              <div className="absolute inset-12 flex flex-col items-center justify-center rounded-full bg-primary-900/70 backdrop-blur-sm">
                <span className="font-heading text-6xl font-semibold text-accent-400">M</span>
                <span className="mt-2 font-label text-[10px] uppercase tracking-[0.3em] text-background-100/70">
                  Est. {schoolInfo.founded}
                </span>
              </div>
              <span className="anim-float absolute -right-2 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/50 bg-primary-950/70 text-xl text-accent-400">
                <i className="ri-book-2-line" />
              </span>
              <span className="anim-float-slow absolute -left-3 bottom-10 flex h-12 w-12 items-center justify-center rounded-full border border-background-50/25 bg-primary-950/70 text-xl text-background-100">
                <i className="ri-trophy-line" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-label text-[10px] uppercase tracking-[0.3em] text-background-100/60">
          Scroll
        </span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-background-50/30">
          <span className="anim-scroll-dot mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-400" />
        </span>
      </div>
    </section>
  );
}