import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import type { NewsArticle } from "@/mocks/news";

type RelatedArticlesProps = {
  articles: NewsArticle[];
};

/** Grid of other stories to keep readers exploring the newsroom. */
export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-background-100 py-16 md:py-20">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent-500" />
            Keep Reading
          </span>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
            More from the newsroom
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50">
                <Link to={`/news/${article.id}`} className="flex h-full flex-col">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-label font-semibold uppercase tracking-[0.14em] text-accent-700">
                        {article.category}
                      </span>
                      <span className="opacity-40">·</span>
                      <span className="font-label text-foreground-500">{article.date}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-foreground-950 transition-colors group-hover:text-primary-600">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-foreground-600">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-label text-sm font-semibold text-primary-600">
                      Read More
                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}