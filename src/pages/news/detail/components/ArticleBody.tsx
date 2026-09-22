import Reveal from "@/components/base/Reveal";
import type { ArticleBlock } from "@/mocks/news";

type ArticleBodyProps = {
  blocks: ArticleBlock[];
};

/** Renders the structured article content with editorial typography. */
export default function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "heading") {
          return (
            <Reveal key={key} as="div" variant="up">
              <h2 className="mt-10 font-heading text-xl font-semibold leading-snug text-foreground-950 md:text-2xl">
                {block.text}
              </h2>
            </Reveal>
          );
        }

        if (block.type === "quote") {
          return (
            <Reveal key={key} as="div" variant="up">
              <blockquote className="my-8 rounded-lg border-l-4 border-accent-500 bg-background-100 px-6 py-6">
                <i className="ri-double-quotes-l text-2xl text-accent-500" />
                <p className="mt-3 font-heading text-lg italic leading-relaxed text-foreground-900 md:text-xl">
                  {block.text}
                </p>
                {block.attribution ? (
                  <footer className="mt-4 font-label text-xs font-semibold uppercase tracking-[0.16em] text-foreground-500">
                    {block.attribution}
                  </footer>
                ) : null}
              </blockquote>
            </Reveal>
          );
        }

        if (block.type === "image") {
          return (
            <Reveal key={key} as="div" variant="scale">
              <figure className="my-8 overflow-hidden rounded-lg border border-background-200">
                <div className="h-64 w-full sm:h-80 md:h-96">
                  <img
                    src={block.image}
                    alt={block.caption}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <figcaption className="bg-background-100 px-5 py-3 font-label text-xs leading-relaxed text-foreground-600">
                  {block.caption}
                </figcaption>
              </figure>
            </Reveal>
          );
        }

        return (
          <Reveal key={key} as="div" variant="up">
            <p className="text-[15px] leading-[1.85] text-foreground-700 md:text-base">
              {block.text}
            </p>
          </Reveal>
        );
      })}
    </div>
  );
}