import { useMemo, useState } from "react";
import Reveal from "@/components/base/Reveal";
import Modal from "@/components/base/Modal";
import {
  administration,
  teachingStaff,
  studentLeaders,
  communityNote,
  type CommunityMember,
} from "@/mocks/community";
import ProfileCard from "./ProfileCard";
import ProfileModalContent from "./ProfileModalContent";

const tabs = ["Administration", "Teaching Staff", "Student Leaders"] as const;
type Tab = (typeof tabs)[number];

export default function CommunityDirectory() {
  const [tab, setTab] = useState<Tab>("Administration");
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [active, setActive] = useState<CommunityMember | null>(null);

  const source = useMemo<CommunityMember[]>(() => {
    if (tab === "Administration") return administration;
    if (tab === "Teaching Staff") return teachingStaff;
    return [];
  }, [tab]);

  const departmentOptions = useMemo(() => {
    const set = new Set(source.map((member) => member.department));
    return ["All Departments", ...Array.from(set)];
  }, [source]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return source.filter((member) => {
      const matchesQuery =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.position.toLowerCase().includes(q) ||
        member.department.toLowerCase().includes(q);
      const matchesDepartment =
        department === "All Departments" || member.department === department;
      return matchesQuery && matchesDepartment;
    });
  }, [source, query, department]);

  const handleTab = (next: Tab) => {
    setTab(next);
    setQuery("");
    setDepartment("All Departments");
  };

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        {/* Tabs */}
        <Reveal>
          <div
            className="inline-flex flex-wrap gap-1 rounded-full border border-background-200 bg-background-100 p-1"
            role="tablist"
            aria-label="Community sections"
          >
            {tabs.map((item) => {
              const isActive = item === tab;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTab(item)}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-5 py-2.5 font-label text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                    isActive
                      ? "bg-primary-600 text-background-50"
                      : "text-foreground-600 hover:text-primary-600"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Controls */}
        {tab !== "Student Leaders" ? (
          <Reveal delay={80} className="mt-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-sm">
                <i className="ri-search-line pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-foreground-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by name, role or department"
                  aria-label="Search the directory"
                  className="w-full rounded-md border border-background-300 bg-background-50 py-3 pl-11 pr-4 text-sm text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400"
                />
              </div>

              <label className="flex items-center gap-3">
                <span className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                  Department
                </span>
                <select
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  aria-label="Filter by department"
                  className="cursor-pointer rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-900 outline-none transition-colors focus:border-primary-400"
                >
                  {departmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </Reveal>
        ) : null}

        {/* Results */}
        {tab === "Student Leaders" ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {studentLeaders.map((leader, index) => (
              <Reveal key={leader.role} delay={index * 60}>
                <article className="group flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-6 transition-colors duration-300 hover:border-accent-300">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-100 text-2xl text-accent-800 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-primary-950">
                    <i className={leader.icon} />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold text-foreground-950">
                    {leader.role}
                  </h3>
                  <p className="mt-1 font-label text-[11px] uppercase tracking-[0.12em] text-accent-700">
                    {leader.scope}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-600">
                    {leader.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((member, index) => (
              <Reveal key={member.id} delay={index * 50}>
                <ProfileCard member={member} onOpen={setActive} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center rounded-lg border border-dashed border-background-300 bg-background-100 py-16 text-center">
            <i className="ri-search-eye-line text-4xl text-foreground-400" />
            <p className="mt-4 font-heading text-lg font-semibold text-foreground-800">
              No matches found
            </p>
            <p className="mt-1 text-sm text-foreground-600">
              Try a different name or clear the department filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setDepartment("All Departments");
              }}
              className="btn-outline mt-6"
            >
              <i className="ri-refresh-line" />
              Reset filters
            </button>
          </div>
        )}

        <Reveal delay={120} className="mt-10">
          <p className="max-w-3xl text-xs leading-relaxed text-foreground-500">{communityNote}</p>
        </Reveal>
      </div>

      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        label={active ? `${active.name} profile` : "Profile"}
      >
        {active ? <ProfileModalContent member={active} /> : null}
      </Modal>
    </section>
  );
}