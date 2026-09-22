import { useMemo, useState } from "react";
import Reveal from "@/components/base/Reveal";
import FilterTabs from "@/components/base/FilterTabs";
import { galleryCategories, galleryImages } from "@/mocks/gallery";
import Lightbox from "./Lightbox";

export default function GalleryGrid() {
  const [category, setCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (category === "All" ? galleryImages : galleryImages.filter((image) => image.category === category)),
    [category],
  );

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent-500" />
                Photo Gallery
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground-950 md:text-3xl">
                Moments from campus
              </h2>
            </div>
            <p className="font-label text-xs uppercase tracking-[0.14em] text-foreground-500">
              {filtered.length} Photographs
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <FilterTabs
            options={galleryCategories}
            active={category}
            onChange={setCategory}
            aria-label="Filter gallery by category"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {filtered.map((image, index) => (
            <Reveal
              key={image.id}
              delay={(index % 4) * 60}
              variant="scale"
              className={index % 7 === 0 ? "col-span-2 row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block h-full min-h-[160px] w-full cursor-pointer overflow-hidden rounded-lg"
                aria-label={`View image: ${image.caption}`}
              >
                <img
                  src={image.image}
                  alt={image.caption}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-950/0 transition-colors duration-500 group-hover:bg-primary-950/50" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-label text-[10px] uppercase tracking-[0.16em] text-accent-400">
                    {image.category}
                  </span>
                  <p className="mt-1 text-xs font-semibold text-background-50">{image.caption}</p>
                </div>
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary-950/60 text-lg text-background-50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <i className="ri-zoom-in-line" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </section>
  );
}