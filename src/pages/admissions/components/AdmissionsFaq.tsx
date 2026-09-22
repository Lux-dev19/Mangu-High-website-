import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import FaqAccordion from "@/components/base/FaqAccordion";
import { admissionFaqs } from "@/mocks/admissions";

export default function AdmissionsFaq() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently Asked"
              title="Admissions questions, answered"
              description="Everything prospective families ask us most often. If your question is not here, the school office is happy to help."
            />
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={80}>
            <FaqAccordion items={admissionFaqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}