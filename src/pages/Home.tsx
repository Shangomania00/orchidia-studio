import { useEffect, useRef, useState } from "react";
import { ChevronDown, MousePointerClick } from "lucide-react";
import VortexGallery from "@/lib/VortexGallery";
import { galleryConfig, type ImageItem } from "@/config";
import ImageDetailOverlay from "@/components/ImageDetailOverlay";
import { useLang } from "@/lib/lang";
import Header from "@/sections/Header";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Portfolio from "@/sections/Portfolio";
import WhyUs from "@/sections/WhyUs";
import Faq from "@/sections/Faq";
import Contact from "@/sections/Contact";

export default function Home() {
  const { t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const vortexRef = useRef<VortexGallery | null>(null);
  const [selected, setSelected] = useState<ImageItem | null>(null);
  const heroVisibleRef = useRef(true);

  const images = galleryConfig.images.map((img, i) => ({
    ...img,
    ...(t.captions[i] ?? {}),
  }));

  // Init vortex once
  useEffect(() => {
    if (!canvasRef.current || galleryConfig.images.length === 0) return;

    const vortex = new VortexGallery(
      canvasRef.current,
      galleryConfig.images.map((i) => i.src)
    );
    vortexRef.current = vortex;

    const io = new IntersectionObserver(
      ([entry]) => {
        heroVisibleRef.current = entry.isIntersecting;
        vortex.setPaused(!entry.isIntersecting || selectedRef.current !== null);
      },
      { threshold: 0.05 }
    );
    if (heroRef.current) io.observe(heroRef.current);

    return () => {
      io.disconnect();
      vortex.destroy();
      vortexRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedRef = useRef<ImageItem | null>(null);
  useEffect(() => {
    selectedRef.current = selected;
    vortexRef.current?.setPaused(selected !== null || !heroVisibleRef.current);
  }, [selected]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const vortex = vortexRef.current;
    const canvas = canvasRef.current;
    if (!vortex || !canvas) return;
    const idx = vortex.pickAtScreen(
      e.clientX,
      e.clientY,
      canvas.getBoundingClientRect()
    );
    if (idx !== null) setSelected(images[idx]);
  };

  return (
    <>
      <Header />

      {/* â”€â”€ Hero: WebGL vortex gallery â”€â”€ */}
      <section id="home" ref={heroRef} className="relative h-[100svh] w-full overflow-hidden bg-white">
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="absolute inset-0 h-full w-full cursor-pointer"
        />

        {/* Hero copy */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end pb-24 sm:pb-20">
          <div className="pointer-events-auto mx-4 max-w-2xl rounded-3xl border border-white/60 bg-white/70 px-6 py-6 text-center shadow-2xl shadow-violet/10 backdrop-blur-md sm:px-10 sm:py-8">
            <p className="section-eyebrow !mb-2">{t.hero.eyebrow}</p>
            <h1 className="f-display text-2xl leading-snug text-violet sm:text-4xl sm:leading-tight">
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              {t.hero.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {t.hero.points.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-violet/15 bg-lavender-soft px-3 py-1 text-xs font-medium text-violet"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="btn-primary text-sm">
                {t.hero.cta}
              </a>
              <a href="#portfolio" className="btn-outline text-sm">
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-col items-center gap-1 text-violet/70">
            <span className="hidden items-center gap-1.5 text-[11px] tracking-wide sm:flex">
              <MousePointerClick size={13} />
              {t.hero.hint}
            </span>
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* â”€â”€ One-page sections â”€â”€ */}
      <About />
      <Services />
      <Process />
      <Portfolio onSelect={setSelected} />
      <WhyUs />
      <Faq />
      <Contact />

      <ImageDetailOverlay image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
