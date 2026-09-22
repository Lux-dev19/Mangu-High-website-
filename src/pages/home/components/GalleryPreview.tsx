import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { galleryImages } from "@/mocks/gallery";

export default function GalleryPreview() {
  const shots = galleryImages.slice(0, 6);

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionHeading
              eyebrow="Photo Gallery"
              title="Life at Mangu, in pictures"
              description="Moments of study, sport, celebration and community from across the school."
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:text-right">
            <Link to="/gallery" className="link-underline font-label text-sm font-semibold text-primary-600">
              Open full gallery →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {shots.map((shot, index) => (
            <Reveal
              key={shot.id}
              delay={index * 60}
              variant="scale"
              className={index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <Link
                to="/gallery"
                className="group relative block h-44 w-full overflow-hidden rounded-lg md:h-full md:min-h-[180px]"
              >
                <img
                  src={shot.image}
                  alt={shot.caption}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-950/0 transition-colors duration-500 group-hover:bg-primary-950/55" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-label text-[10px] uppercase tracking-[0.18em] text-accent-400">
                    {shot.category}
                  </span>
                  <p className="mt-1 text-xs font-semibold text-background-50">{shot.caption}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Link to="/gallery" className="btn-outline">
            <i className="ri-image-2-line" />
            Browse All Photos
          </Link>
        </Reveal>
      </div>
    </section>
  );
}