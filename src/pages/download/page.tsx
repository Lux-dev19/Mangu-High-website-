import PageHero from "@/components/base/PageHero";
import CtaBand from "@/components/base/CtaBand";
import Seo from "@/components/base/Seo";
import Reveal from "@/components/base/Reveal";
import DownloadPanel from "./components/DownloadPanel";

const steps = [
  {
    icon: "ri-file-download-line",
    title: "1. Download & unzip",
    text: "Save the .zip archive and extract it to a folder on your computer.",
  },
  {
    icon: "ri-terminal-box-line",
    title: "2. Install dependencies",
    text: "Open a terminal in the folder and run npm install to fetch everything the project needs.",
  },
  {
    icon: "ri-play-circle-line",
    title: "3. Start developing",
    text: "Run npm run dev and open the local address it prints — usually http://localhost:3000.",
  },
  {
    icon: "ri-rocket-2-line",
    title: "4. Build for production",
    text: "Run npm run build to generate an optimised production bundle ready to deploy anywhere.",
  },
];

const excluded = [
  {
    icon: "ri-shield-keyhole-line",
    title: "Secrets & credentials",
    text: "API keys, tokens and server-only configuration are never part of the export. This project contains none, and none should be hard-coded into it.",
  },
  {
    icon: "ri-image-line",
    title: "Bundled image files",
    text: "Photographs are served from an external CDN and referenced by URL. Each one is listed in the manifest so you can fetch it separately if you need an offline copy.",
  },
  {
    icon: "ri-database-2-line",
    title: "Database data",
    text: "The website runs as a static front end and needs no database. If one is connected later, export its data from that backend's own dashboard.",
  },
];

export default function Download() {
  return (
    <>
      <Seo
        title="Download Project Source | Mangu High School"
        description="Download a complete copy of the Mangu High School website source code for backup, migration or local development — directly from the site, no account required."
      />
      <PageHero
        breadcrumb="Download Project"
        eyebrow="Developer Resources"
        title="Download the complete website"
        description="Export the full project source — code, styles, configuration, an asset manifest and a README — as a single archive. Generated entirely in your browser, no sign-in required."
        image="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20technology%20background%20with%20soft%20golden%20light%20trails%20and%20subtle%20grid%20lines%20representing%20source%20code%20and%20data%2C%20minimal%20elegant%20digital%20texture%2C%20no%20text%2C%20high%20detail&width=1800&height=1000&seq=mangu-download-hero&orientation=landscape"
      />

      <DownloadPanel />

      {/* How to run locally */}
      <section className="bg-background-100 py-16 md:py-20">
        <div className="container-site">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent-500" />
              Getting Started
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
              Running the project locally
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-600 md:text-base">
              Once you have downloaded and extracted the archive, the project runs like any modern
              React application. You will need Node.js 18 or newer installed.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-100 text-xl text-accent-700">
                    <i className={step.icon} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-8">
            <div className="overflow-x-auto rounded-lg border border-background-200 bg-primary-950 p-6">
              <pre className="font-mono text-xs leading-relaxed text-background-100/90 md:text-sm">
{`# install dependencies
npm install

# start the development server
npm run dev

# create a production build
npm run build`}
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's not included */}
      <section className="bg-background-50 py-16 md:py-20">
        <div className="container-site">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent-500" />
              Transparency
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
              What is not included — and why
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-600 md:text-base">
              To keep the export safe and compliant, a few things are intentionally left out. Where
              an asset cannot be bundled, its source URL is recorded in the manifest instead.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {excluded.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary-100 text-xl text-secondary-900">
                    <i className={item.icon} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Need Help?"
        title="Questions about migrating or deploying?"
        description="Whether you are moving the site to new hosting, handing it to another developer, or simply keeping a backup, the school office can point you in the right direction."
        primaryLabel="Contact the School"
        primaryTo="/contact"
        primaryIcon="ri-mail-send-line"
        secondaryLabel="Back to Home"
        secondaryTo="/"
        secondaryIcon="ri-home-4-line"
        image="https://readdy.ai/api/search-image?query=Modern%20navy%20and%20gold%20graduation%20ceremony%20at%20a%20Kenyan%20national%20school%20with%20students%20in%20academic%20dress%2C%20dignified%20celebratory%20atmosphere%2C%20editorial%20photography%2C%20warm%20light%2C%20high%20detail&width=1800&height=1000&seq=mangu-download-cta&orientation=landscape"
      />
    </>
  );
}