import { useState } from "react";
import { Link } from "react-router-dom";
import type { NewsArticle } from "@/mocks/news";

type ArticleSidebarProps = {
  article: NewsArticle;
};

/** Sticky article sidebar: details, tags, share actions and a related-journey call to action. */
export default function ArticleSidebar({ article }: ArticleSidebarProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(article.title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-lg border border-background-200 bg-background-50 p-6">
        <h3 className="font-heading text-base font-semibold text-foreground-950">Article details</h3>
        <dl className="mt-5 space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <i className="ri-calendar-event-line mt-0.5 text-lg text-accent-600" />
            <div>
              <dt className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                Published
              </dt>
              <dd className="mt-0.5 text-foreground-800">{article.date}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <i className="ri-price-tag-3-line mt-0.5 text-lg text-accent-600" />
            <div>
              <dt className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                Category
              </dt>
              <dd className="mt-0.5 text-foreground-800">{article.category}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <i className="ri-user-line mt-0.5 text-lg text-accent-600" />
            <div>
              <dt className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                Author
              </dt>
              <dd className="mt-0.5 text-foreground-800">{article.author}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <i className="ri-time-line mt-0.5 text-lg text-accent-600" />
            <div>
              <dt className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
                Reading time
              </dt>
              <dd className="mt-0.5 text-foreground-800">{article.readTime}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-6 border-t border-background-200 pt-5">
          <h4 className="font-label text-xs uppercase tracking-[0.16em] text-foreground-500">
            Tags
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary-100 px-3 py-1 font-label text-xs font-medium text-secondary-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-background-200 pt-5">
          <h4 className="font-label text-xs uppercase tracking-[0.16em] text-foreground-500">
            Share this story
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Share on X"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-background-300 text-lg text-foreground-700 transition-colors hover:border-primary-400 hover:text-primary-600"
            >
              <i className="ri-twitter-x-line" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Share on Facebook"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-background-300 text-lg text-foreground-700 transition-colors hover:border-primary-400 hover:text-primary-600"
            >
              <i className="ri-facebook-circle-line" />
            </a>
            <a
              href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Share on WhatsApp"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-background-300 text-lg text-foreground-700 transition-colors hover:border-primary-400 hover:text-primary-600"
            >
              <i className="ri-whatsapp-line" />
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy article link"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-background-300 text-lg text-foreground-700 transition-colors hover:border-primary-400 hover:text-primary-600"
            >
              <i className={copied ? "ri-check-line text-primary-600" : "ri-link"} />
            </button>
          </div>
          {copied ? (
            <p className="mt-3 font-label text-xs text-primary-600">Link copied to clipboard.</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-primary-200 bg-primary-50 p-6">
        <i className="ri-graduation-cap-line text-3xl text-primary-600" />
        <h3 className="mt-3 font-heading text-lg font-semibold text-foreground-950">
          Begin your Mangu journey
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-600">
          Discover our admissions process and join a school where character and achievement go
          hand in hand.
        </p>
        <Link to="/admissions" className="btn-primary mt-5 w-full">
          <i className="ri-arrow-right-line" />
          Explore Admissions
        </Link>
      </div>
    </aside>
  );
}