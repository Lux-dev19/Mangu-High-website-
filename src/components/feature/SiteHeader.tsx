import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Crest from "@/components/base/Crest";
import { contactInfo, navItems, schoolInfo } from "@/mocks/site";

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkTone = transparent ? "text-background-100" : "text-foreground-800";
  const brandTone = transparent ? "text-background-50" : "text-foreground-950";
  const subTone = transparent ? "text-background-100/70" : "text-foreground-600";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Heritage contact strip */}
      <div
        className={`hidden overflow-hidden border-b transition-all duration-500 lg:block ${
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-12 opacity-100"
        } ${
          transparent
            ? "border-background-50/15 bg-primary-950/40 backdrop-blur-sm"
            : "border-background-200 bg-background-100"
        }`}
      >
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <p className={`flex items-center gap-2 font-label ${subTone}`}>
            <i className="ri-award-line text-accent-500" />
            <span>Founded in {schoolInfo.founded}</span>
            <span className="opacity-40">|</span>
            <em className="not-italic tracking-wide">{schoolInfo.motto}</em>
          </p>
          <div className={`flex items-center gap-5 font-label ${subTone}`}>
            <a
              href={`tel:${contactInfo.phoneHref}`}
              className="flex items-center gap-1.5 transition-colors hover:text-accent-500"
            >
              <i className="ri-phone-line" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-accent-500"
            >
              <i className="ri-mail-line" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`border-b transition-all duration-500 ${
          transparent
            ? "border-transparent bg-transparent"
            : "border-background-200 bg-background-50/95 backdrop-blur-md"
        }`}
      >
        <div className="container-site flex h-[68px] items-center justify-between gap-6 md:h-[76px]">
          <Link to="/" className="group flex items-center gap-3" aria-label={`${schoolInfo.name} home`}>
            <Crest className="h-10 w-9 md:h-11 md:w-10" tone="light" />
            <span className="flex flex-col leading-tight">
              <span
                className={`font-heading text-base font-semibold tracking-tight transition-colors md:text-lg ${brandTone}`}
              >
                {schoolInfo.name}
              </span>
              <span className={`font-label text-[10px] uppercase tracking-[0.2em] ${subTone}`}>
                {schoolInfo.motto}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={`flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 font-label text-sm font-medium transition-colors hover:text-accent-500 ${linkTone}`}
                  >
                    {item.label}
                    <i className="ri-arrow-down-s-line text-base transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-lg border border-background-200 bg-background-50 p-2 shadow-none">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block rounded-md px-3 py-2.5 transition-colors hover:bg-primary-50"
                        >
                          <span className="block text-sm font-semibold text-foreground-900">
                            {child.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-foreground-600">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative rounded-md px-3 py-2 font-label text-sm font-medium transition-colors hover:text-accent-500 ${linkTone} ${
                      isActive
                        ? "after:absolute after:-bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-accent-500"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/admissions" className="btn-accent hidden !px-5 !py-2.5 text-sm sm:inline-flex">
              <i className="ri-edit-2-line" />
              Apply Now
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border text-xl transition-colors lg:hidden ${
                transparent
                  ? "border-background-50/30 text-background-50"
                  : "border-background-200 text-foreground-800"
              }`}
            >
              <i className={mobileOpen ? "ri-close-line" : "ri-menu-line"} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-[68px] z-40 overflow-y-auto overscroll-contain border-b border-background-200 bg-background-50 transition-all duration-400 lg:hidden ${
          mobileOpen ? "max-h-[calc(100vh-68px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-site flex flex-col divide-y divide-background-200 py-2" aria-label="Mobile">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="py-1">
                <button
                  type="button"
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  className="flex w-full cursor-pointer items-center justify-between py-3 font-label text-sm font-semibold text-foreground-900"
                >
                  {item.label}
                  <i
                    className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
                      openGroup === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openGroup === item.label ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-1 pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="rounded-md px-3 py-2 text-sm text-foreground-700 hover:bg-background-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `py-3.5 font-label text-sm font-semibold ${
                    isActive ? "text-accent-600" : "text-foreground-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}

          <div className="flex flex-col gap-3 py-4">
            <Link to="/admissions" className="btn-accent w-full">
              <i className="ri-edit-2-line" />
              Apply / Admissions
            </Link>
            <a href={`tel:${contactInfo.phoneHref}`} className="btn-outline w-full">
              <i className="ri-phone-line" />
              {contactInfo.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}