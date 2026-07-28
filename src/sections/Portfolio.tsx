import { ExternalLink } from "lucide-react";
import { galleryConfig, type ImageItem } from "@/config";
import { INSTAGRAM_URL } from "@/i18n";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "@/sections/common";

const FEATURED = [
  "/images/portfolio-purple-couture.jpg",
  "/images/portfolio-grey-abaya.jpg",
  "/images/portfolio-black-abayas.jpg",
  "/images/portfolio-atelier.jpg",
];

export default function Portfolio({
  onSelect,
}: {
  onSelect: (img: ImageItem) => void;
}) {
  const { t, lang } = useLang();

  const featured = FEATURED.map((src) => {
    const idx = galleryConfig.images.findIndex((i) => i.src === src);
    const base = galleryConfig.images[idx];
    const cap = t.captions[idx];
    return { ...base, ...cap };
  });

  return (
    <section id="portfolio" className="bg-lavender-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHead
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2.5">
          {t.portfolio.categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-violet/20 bg-white px-4 py-1.5 text-sm text-violet"
            >
              {c}
            </span>
          ))}
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((img, i) => (
            <Reveal key={img.src} delay={i * 100}>
              <button
                onClick={() => onSelect(img)}
                className="group relative block w-full overflow-hidden rounded-3xl text-start shadow-lg shadow-violet/10"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-violet-deep/85 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-lavender">
                    {img.category}
                  </span>
                  <span className="f-display mt-1 block text-xl text-white">
                    {img.title}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-sm"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {t.portfolio.more}
            <ExternalLink size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
