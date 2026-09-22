import { Link } from "react-router-dom";
import type { NewsArticle } from "@/mocks/news";

type ArticleHeaderProps = {
  article: NewsArticle;
};

/** Editorial article header: dark photographic banner with breadcrumb, meta and title. */
export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="relative flex min-h-[520px] items-end overflow-hidden bg-primary-950 pb-12 pt-36 md:min-h-[620px] md:pb-16 md:pt-44">
      <div className="absolute inset-0">
        <img
          src={article.image}
          alt={article.title}
          className="anim-hero-zoom h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-primary-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-950/35 to-transparent" />
      </div>

      <div className="container-site relative z-10 w-full">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 font-label text-xs text-background-100/70">
          <Link to="/" className="transition-colors hover:text-accent-400">
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <Link to="/news" className="transition-colors hover:text-accent-400">
            News &amp; Events
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="line-clamp-1 text-background-100/90">{article.category}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent-500 px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-950">
            {article.category}
          </span>
          <span className="font-label text-xs text-background-100/80">{article.date}</span>
        </div>

        <h1 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-background-50 text-shadow-hero sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-50/10 font-label text-sm font-semibold text-accent-400 backdrop-blur-sm">
              {article.author.charAt(0)}
            </span>
            <span className="leading-tight">
              <span className="block font-label text-sm font-semibold text-background-50">
                {article.author}
              </span>
              <span className="block font-label text-xs text-background-100/65">
                {article.authorRole}
              </span>
            </span>
          </span>

          <span className="flex items-center gap-2 font-label text-xs text-background-100/70">
            <i className="ri-time-line text-base text-accent-400" />
            {article.readTime}
          </span>
        </div>
      </div>
    </header>
  );
}