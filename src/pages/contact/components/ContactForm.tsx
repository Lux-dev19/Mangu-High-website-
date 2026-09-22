import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://readdy.ai/api/form/dai0ft3oh653ivfvo6vg";

type Status = "idle" | "submitting" | "success" | "error";

const subjects = [
  "General Enquiry",
  "Admissions",
  "Academic Matters",
  "Boarding & Pastoral Care",
  "Alumni Relations",
  "Partnerships / Media",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = new FormData(form);

    // Anti-spam honeypot — silently succeed without sending if filled.
    const honeypot = String(payload.get("website_alt") || "").trim();
    if (honeypot) {
      setStatus("success");
      setFormError("");
      form.reset();
      return;
    }

    const body = new URLSearchParams();
    payload.forEach((value, key) => {
      if (key === "website_alt") return;
      if (typeof value !== "string") return;
      if (value.trim() === "") return;
      body.append(key, value);
    });

    setStatus("submitting");
    setFormError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string }; message?: string } | null = null;
      try {
        parsed = responseText ? JSON.parse(responseText) : null;
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || "";
      const isSpam = String(serverMsg).toLowerCase().includes("spam");

      if (response.ok && parsed?.code === "OK" && !isSpam) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setFormError(
          String(serverMsg) ||
            "We could not send your message right now. Please try again or contact the school directly.",
        );
      }
    } catch {
      setStatus("error");
      setFormError(
        "A network error prevented your message from sending. Please check your connection and try again.",
      );
    }
  };

  const inputClass =
    "w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400";

  return (
    <form
      id="mangu-contact-form"
      data-readdy-form
      onSubmit={handleSubmit}
      className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-8"
    >
      <h2 className="font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
        Send us a message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground-600">
        Complete the form below and the school office will respond as soon as possible.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
            Full Name *
          </span>
          <input name="name" type="text" required placeholder="Your full name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
            Email Address *
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
            Telephone
          </span>
          <input name="phone" type="tel" placeholder="+254 700 000 000" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
            Subject *
          </span>
          <select name="subject" required defaultValue="" className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>
              Select a subject
            </option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2">
        <span className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
          Message *
        </span>
        <textarea
          name="message"
          required
          maxLength={500}
          rows={5}
          placeholder="How can we help you?"
          className={`${inputClass} resize-none`}
        />
      </label>

      {/* Anti-spam honeypot — hidden via stylesheet, not visible to users */}
      <input
        className="field-verify"
        type="text"
        name="website_alt"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        readOnly
      />

      {status === "error" && formError ? (
        <p className="mt-5 flex items-start gap-2 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          <i className="ri-error-warning-line mt-0.5 text-lg" />
          {formError}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="mt-5 flex items-start gap-2 rounded-md border border-primary-200 bg-primary-50 p-3 text-sm text-primary-700">
          <i className="ri-checkbox-circle-line mt-0.5 text-lg" />
          Thank you — your message has been sent. The school office will get back to you soon.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-accent mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <i className={status === "submitting" ? "ri-loader-4-line animate-spin" : "ri-send-plane-line"} />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}