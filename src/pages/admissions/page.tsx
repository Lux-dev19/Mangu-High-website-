import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import { Link } from "react-router-dom";
import Requirements from "./components/Requirements";
import DatesAndBoarding from "./components/DatesAndBoarding";
import AdmissionsFaq from "./components/AdmissionsFaq";

export default function Admissions() {
  return (
    <>
      <Seo
        title="Admissions | Join Mangu High School"
        description="Everything you need to join Mangu High School — admission requirements, the application procedure, key dates, boarding information and answers to common questions."
      />
      <PageHero
        breadcrumb="Admissions"
        eyebrow="Admissions"
        title="Begin your Mangu journey"
        description="Join a century-old tradition of academic excellence, discipline and leadership. Here is everything you need to know about joining Mangu High School."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-accent">
            <i className="ri-mail-send-line" />
            Enquire Now
          </Link>
          <a href="#requirements" className="btn-ghost-light">
            <i className="ri-file-list-3-line" />
            Admission Requirements
          </a>
        </div>
      </PageHero>
      <div id="requirements">
        <Requirements />
      </div>
      <DatesAndBoarding />
      <AdmissionsFaq />
      <CtaBand
        eyebrow="Ready to Apply"
        title="Your future starts at Mangu"
        description="Contact the school office for personalised guidance on placement, documents and joining dates."
        primaryLabel="Contact the School"
        primaryTo="/contact"
        primaryIcon="ri-mail-send-line"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
        secondaryIcon="ri-book-open-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637059421.webp"
      />
    </>
  );
}