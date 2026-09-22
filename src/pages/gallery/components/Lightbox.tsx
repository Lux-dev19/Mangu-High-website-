import { useEffect } from "react";
import type { GalleryImage } from "@/mocks/gallery";

type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const current = images[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-primary-950/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={current.caption}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-accent-500 px-3 py-1 font-label text-[10px] uppercase tracking-[0.14em] text-primary-950">
            {current.category}
          </span>
          <span className="font-label text-xs text-background-100/60">
            {index + 1} / {images.length}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery viewer"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-background-50/20 text-xl text-background-100 transition-colors hover:border-accent-500 hover:text-accent-400"
        >
          <i className="ri-close-line" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-16">
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + images.length) % images.length)}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-background-50/20 bg-primary-950/60 text-2xl text-background-100 transition-colors hover:border-accent-500 hover:text-accent-400 md:left-6"
        >
          <i className="ri-arrow-left-s-line" />
        </button>

        <figure className="flex max-h-full flex-col items-center">
          <img
            src={current.image}
            alt={current.caption}
            className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
          />
          <figcaption className="mt-5 max-w-2xl text-center">
            <p className="text-sm text-background-100/90">{current.caption}</p>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={() => onNavigate((index + 1) % images.length)}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-background-50/20 bg-primary-950/60 text-2xl text-background-100 transition-colors hover:border-accent-500 hover:text-accent-400 md:right-6"
        >
          <i className="ri-arrow-right-s-line" />
        </button>
      </div>
    </div>
  );
}