import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import { administration, teachingStaff, studentLeaders } from "@/mocks/community";
import CommunityDirectory from "./components/CommunityDirectory";

const summary = [
  { icon: "ri-shield-user-line", label: "Administration", value: administration.length },
  { icon: "ri-book-open-line", label: "Teaching Staff", value: teachingStaff.length },
  { icon: "ri-star-line", label: "Student Leadership Roles", value: studentLeaders.length },
];

export default function Administration() {
  return (
    <>
      <Seo
        title="Meet the Community | Mangu High School Staff & Leadership"
        description="Meet the Mangu High School community — search and filter our school administration, teaching staff and student leadership directory."
      />
      <PageHero
        breadcrumb="Community"
        eyebrow="Meet the Mangu Community"
        title="The people behind our success"
        description="Leadership, faculty and student leaders work as one community. Search, filter and explore the people who make Mangu High School exceptional."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637055956.webp"
      >
        <div className="flex flex-wrap gap-3">
          {summary.map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-background-50/20 bg-background-50/10 px-4 py-1.5 font-label text-xs text-background-100 backdrop-blur-sm"
            >
              <i className={`${item.icon} text-accent-400`} />
              <span className="font-semibold text-background-50">{item.value}</span>
              {item.label}
            </span>
          ))}
        </div>
      </PageHero>

      <CommunityDirectory />

      <CtaBand
        eyebrow="Join the Team"
        title="Teach, lead and serve at Mangu"
        description="We are always interested in passionate educators and professionals who share our commitment to excellence and character."
        primaryLabel="Contact the School"
        primaryTo="/contact"
        primaryIcon="ri-mail-send-line"
        secondaryLabel="About Mangu"
        secondaryTo="/about"
        secondaryIcon="ri-compass-3-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637058465.webp"
      />
    </>
  );
}