import PageHero from "@/components/base/PageHero";
import Seo from "@/components/base/Seo";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import FaqAccordion from "@/components/base/FaqAccordion";
import { contactFaqs } from "@/mocks/contact";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Mangu High School | Address, Phone & Enquiries"
        description="Contact Mangu High School in Mangu, Thika, Kiambu County. Telephone, email, office hours, location map and an enquiry form for families, alumni and partners."
      />
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact Us"
        title="We would love to hear from you"
        description="Whether you are a prospective family, an alumnus, a partner or a member of the community, the Mangu High School office is here to help."
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg"
      />

      <ContactInfo />

      {/* Form + intro */}
      <section className="bg-background-100 py-16 md:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Enquiries"
                title="Reach the right team"
                description="Use the form to send us a message, or contact the office directly. We aim to respond to all enquiries promptly during working hours."
              />
            </Reveal>

            <Reveal delay={100} className="mt-8 flex flex-col gap-4">
              <div className="rounded-lg border border-background-200 bg-background-50 p-5">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground-950">
                  <i className="ri-customer-service-2-line text-accent-600" />
                  School Office
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                  General enquiries, admissions guidance, campus visits and appointments.
                </p>
              </div>
              <div className="rounded-lg border border-background-200 bg-background-50 p-5">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground-950">
                  <i className="ri-graduation-cap-line text-accent-600" />
                  Academic Office
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                  Curriculum, examinations, subject selection and academic records.
                </p>
              </div>
              <div className="rounded-lg border border-background-200 bg-background-50 p-5">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground-950">
                  <i className="ri-user-heart-line text-accent-600" />
                  Boarding & Pastoral
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                  Student welfare, houses, discipline and pastoral care matters.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <ContactMap />

      <section className="bg-background-100 py-16 md:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently Asked"
                title="Common questions"
                description="A few answers to the questions we receive most often at the school office."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <FaqAccordion items={contactFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}