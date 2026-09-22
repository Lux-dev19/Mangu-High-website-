import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import FilterTabs from "@/components/base/FilterTabs";
import { newsArticles, newsCategories } from "@/mocks/news";

export default function NewsGrid() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return newsArticles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="news" className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent-500" />
                Latest News
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
                Stories from across the school
              </h2>
            </div>

            <div className="relative w-full lg:max-w-xs">
              <i className="ri-search-line pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-foreground-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search news"
                aria-label="Search news"
                className="w-full rounded-md border border-background-300 bg-background-50 py-3 pl-11 pr-4 text-sm text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <FilterTabs
            options={newsCategories}
            active={category}
            onChange={setCategory}
            aria-label="Filter news by category"
          />
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, index) => (
              <Reveal key={article.id} delay={index * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50">
                  <Link to={`/news/${article.id}`} className="flex h-full flex-col">
                    <div className="h-52 w-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full bg-accent-100 px-3 py-1 font-label font-semibold uppercase tracking-[0.12em] text-accent-800">
                          {article.category}
                        </span>
                        <span className="font-label text-foreground-500">{article.date}</span>
                      </div>
                      <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-foreground-950 transition-colors group-hover:text-primary-600">
                        {article.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-600">
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
        ) : (
          <div className="mt-16 flex flex-col items-center rounded-lg border border-dashed border-background-300 bg-background-100 py-16 text-center">
            <i className="ri-newspaper-line text-4xl text-foreground-400" />
            <p className="mt-4 font-heading text-lg font-semibold text-foreground-800">
              No stories found
            </p>
            <p className="mt-1 text-sm text-foreground-600">Try another category or search term.</p>
            <button
              type="button"
              onClick={() => {
                setCategory("All");
                setQuery("");
              }}
              className="btn-outline mt-6"
            >
              <i className="ri-refresh-line" />
              Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
}