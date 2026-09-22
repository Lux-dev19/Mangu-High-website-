import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";

const steps = [
  { icon: "ri-file-list-3-line", title: "Explore Requirements", text: "Review the admission criteria and required documents." },
  { icon: "ri-edit-2-line", title: "Complete Application", text: "Submit your details through the official placement process." },
  { icon: "ri-calendar-check-line", title: "Prepare for Joining", text: "Receive joining instructions, kit list and reporting dates." },
];

export default function AdmissionsCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <img
          src="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637058465.webp"
          alt="A Mangu High School student"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/55" />
      </div>

      <div className="container-site relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-accent-400">
            <span className="h-px w-6 bg-accent-500" />
            Admissions
          </span>
          <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight text-background-50 md:text-4xl">
            Begin your Mangu journey
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-background-100/80 md:text-base">
            Join a century-old tradition of academic excellence, discipline and leadership. Find
            everything you need to apply and prepare for life at Mangu High School.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admissions" className="btn-accent">
              <i className="ri-edit-2-line" />
              Admissions Information
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              <i className="ri-question-line" />
              Talk to the School
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <article className="h-full rounded-lg border border-background-50/12 bg-primary-950/40 p-6 backdrop-blur-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-500 text-2xl text-primary-950">
                  <i className={step.icon} />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-background-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background-100/70">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}