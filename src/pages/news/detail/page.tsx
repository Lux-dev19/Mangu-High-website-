import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/base/Seo";
import CtaBand from "@/components/base/CtaBand";
import Reveal from "@/components/base/Reveal";
import { newsArticles } from "@/mocks/news";
import ArticleHeader from "./components/ArticleHeader";
import ArticleBody from "./components/ArticleBody";
import ArticleSidebar from "./components/ArticleSidebar";
import RelatedArticles from "./components/RelatedArticles";

/** Thin gold progress bar that tracks how far the reader has scrolled through the story. */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-accent-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find((item) => item.id === id);

  if (!article) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-background-50 px-4 py-32">
        <Seo title="Story Not Found | Mangu High School" description="The story you are looking for could not be found." />
        <div className="text-center">
          <i className="ri-newspaper-line text-5xl text-accent-500" />
          <h1 className="mt-5 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
            This story could not be found
          </h1>
          <p className="mt-3 text-sm text-foreground-600">
            The article may have been moved or is no longer available.
          </p>
          <Link to="/news" className="btn-primary mt-8">
            <i className="ri-arrow-left-line" />
            Back to News &amp; Events
          </Link>
        </div>
      </section>
    );
  }

  const related = newsArticles
    .filter((item) => item.id !== article.id)
    .sort((a, b) => {
      const aMatch = a.category === article.category ? 1 : 0;
      const bMatch = b.category === article.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  return (
    <>
      <Seo title={`${article.title} | Mangu High School`} description={article.excerpt} />
      <ReadingProgress />
      <ArticleHeader article={article} />

      <section className="bg-background-50 py-14 md:py-20">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal variant="fade">
                <p className="border-l-4 border-accent-500 pl-5 font-heading text-lg font-medium italic leading-relaxed text-foreground-800 md:text-xl">
                  {article.excerpt}
                </p>
              </Reveal>

              <div className="mt-10">
                <ArticleBody blocks={article.body} />
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-background-200 pt-8">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 font-label text-sm font-semibold text-primary-600"
                >
                  <i className="ri-arrow-left-line" />
                  All news &amp; events
                </Link>
                <span className="font-label text-xs text-foreground-500">
                  Published {article.date} · {article.readTime}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <ArticleSidebar article={article} />
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles articles={related} />

      <CtaBand
        eyebrow="Stay Connected"
        title="Never miss an update from Mangu"
        description="For official announcements, enquiries and partnerships, reach out to the school office directly."
        primaryLabel="Contact the School"
        primaryTo="/contact"
        primaryIcon="ri-mail-send-line"
        secondaryLabel="Back to News"
        secondaryTo="/news"
        secondaryIcon="ri-newspaper-line"
        image="https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533886605JPG_7144%281%29.JPG"
      />
    </>
  );
}