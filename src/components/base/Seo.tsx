import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
};

/**
 * Lightweight per-page metadata. Updates the document title and the key
 * description / Open Graph tags as the user moves between routes.
 */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    setMeta("property", "og:title", title);
  }, [title, description]);

  return null;
}