import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#faq", label: t.nav.faq },
  ];

  const langToggle = (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="rounded-full border border-violet/30 px-4 py-1.5 text-sm font-medium text-violet transition hover:bg-violet hover:text-white"
      aria-label="Switch language"
    >
      {lang === "ar" ? "EN" : "عربي"}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-lavender/60 bg-white/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Orchidia Studio"
            className="h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-700 transition hover:text-violet"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {langToggle}
          <a href="#contact" className="btn-primary !px-6 !py-2.5 text-sm">
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          {langToggle}
          <button
            onClick={() => setOpen(!open)}
            className="text-violet"
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-lavender/60 bg-white/95 px-6 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-neutral-800 transition hover:bg-lavender-soft hover:text-violet"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 justify-center text-sm"
            >
              {t.nav.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
