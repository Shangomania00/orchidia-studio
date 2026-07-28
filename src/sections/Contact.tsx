import { Instagram, MapPin, Sparkles } from "lucide-react";
import { INSTAGRAM_URL } from "@/i18n";
import { useLang } from "@/lib/lang";
import { Reveal } from "@/sections/common";

export default function Contact() {
  const { t, lang } = useLang();

  return (
    <>
      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-lavender-soft py-24 md:py-32">
        <img
          src="/images/emblem.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -end-20 -top-20 w-72 opacity-[0.06]"
        />
        <img
          src="/images/emblem.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -start-24 w-96 opacity-[0.06]"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <img
              src="/images/logo.png"
              alt="Orchidia Studio"
              className="mx-auto mb-8 h-24 w-auto object-contain"
            />
            <h2 className="f-display text-3xl leading-tight text-violet md:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-5 text-lg text-neutral-600">{t.cta.subtitle}</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-9 text-base"
            >
              <Sparkles size={17} />
              {t.cta.button}
            </a>
          </Reveal>

          <Reveal delay={150} className="mt-16">
            <div className="grid gap-4 rounded-3xl border border-lavender/70 bg-white p-8 text-start shadow-xl shadow-violet/10 sm:grid-cols-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet text-white transition group-hover:bg-violet-deep">
                  <Instagram size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-quartz">
                    {t.contact.instagram}
                  </span>
                  <span className="block font-medium text-violet" dir="ltr">
                    @orchidia.studio
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet text-white">
                  <Sparkles size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-quartz">
                    {t.contact.services}
                  </span>
                  <span className="block text-sm font-medium text-violet">
                    {t.contact.servicesValue}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet text-white">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-quartz">
                    {t.contact.location}
                  </span>
                  <span className="block font-medium text-violet">
                    {t.contact.locationValue}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-deep py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <div className="rounded-2xl bg-white/95 p-3">
            <img src="/images/logo.png" alt="Orchidia Studio" className="h-14 w-auto object-contain" />
          </div>
          <p className="f-display text-lg text-lavender">{t.footer.tagline}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-white/70 transition hover:text-ochre"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <Instagram size={16} />
            {t.contact.follow} <span dir="ltr">@orchidia.studio</span>
          </a>
          <div className="w-full border-t border-white/10 pt-6 text-xs text-white/50">
            © 2026 Orchidia Studio — {t.footer.rights} • Dubai, UAE
          </div>
        </div>
      </footer>
    </>
  );
}
