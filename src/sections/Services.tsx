import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "@/sections/common";

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="bg-lavender-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHead
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.num} delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col rounded-3xl border border-lavender/60 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/30 hover:shadow-xl hover:shadow-violet/10">
                <span className="f-display text-4xl text-lavender transition group-hover:text-ochre">
                  {s.num}
                </span>
                <h3 className="f-display mt-4 text-2xl text-violet">{s.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-quartz">
                  {s.en}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">
                  {s.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-lavender-soft px-3 py-1 text-xs text-violet"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
