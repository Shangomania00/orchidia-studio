import { Check } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "@/sections/common";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="f-display text-lg leading-relaxed text-neutral-600 md:text-xl">
              {t.about.p1}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.about.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-lavender/70 bg-lavender-soft px-4 py-3 text-sm font-medium text-violet"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-violet/20">
              <img
                src="/images/portfolio-grey-abaya.jpg"
                alt="Orchidia Studio abaya"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -start-4 hidden rounded-2xl bg-white p-5 shadow-xl shadow-violet/15 sm:block">
              <img src="/images/emblem.png" alt="" className="h-16 w-auto object-contain" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
