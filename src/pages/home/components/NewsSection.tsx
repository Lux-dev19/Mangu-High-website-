import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { newsArticles } from "@/mocks/news";

export default function NewsSection() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1, 4);

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionHeading
              eyebrow="Latest News"
              title="What's happening at Mangu"
              description="Achievements, events and stories from across the school community."
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:text-right">
            <Link to="/news" className="link-underline font-label text-sm font-semibold text-primary-600">
              All news &amp; events →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Featured story */}
          <Reveal variant="left" className="lg:col-span-6">
            <article className="group h-full overflow-hidden rounded-lg border border-background-200 bg-background-50">
              <Link to={`/news/${featured.id}`} className="block">
                <div className="h-72 w-full overflow-hidden md:h-80">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-accent-100 px-3 py-1 font-label font-semibold uppercase tracking-[0.14em] text-accent-800">
                      {featured.category}
                    </span>
                    <span className="font-label text-foreground-500">{featured.date}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-foreground-950 transition-colors group-hover:text-primary-600 md:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-600">
                    {featured.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-label text-sm font-semibold text-primary-600">
                    Read More
                    <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          </Reveal>

          {/* List */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {rest.map((article, index) => (
              <Reveal key={article.id} delay={index * 90} variant="right">
                <article className="group overflow-hidden rounded-lg border border-background-200 bg-background-50">
                  <Link to={`/news/${article.id}`} className="flex flex-col gap-4 sm:flex-row">
                    <div className="h-40 w-full overflow-hidden sm:h-auto sm:w-44 sm:shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4 sm:pr-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-label font-semibold uppercase tracking-[0.14em] text-accent-700">
                          {article.category}
                        </span>
                        <span className="opacity-40">·</span>
                        <span className="font-label text-foreground-500">{article.date}</span>
                      </div>
                      <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-foreground-950 transition-colors group-hover:text-primary-600">
                        {article.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foreground-600">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}