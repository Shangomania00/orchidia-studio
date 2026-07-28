import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "@/sections/common";

export default function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative flex h-full flex-col items-center rounded-3xl border border-lavender/60 bg-lavender-soft/60 p-6 text-center transition hover:border-violet/30 hover:bg-lavender-soft">
                <span className="f-display flex h-12 w-12 items-center justify-center rounded-full bg-violet text-lg text-white shadow-lg shadow-violet/30">
                  {i + 1}
                </span>
                <h3 className="f-display mt-4 text-xl text-violet">{step.title}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ochre">
                  {step.en}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {step.desc}
                </p>
                {i < t.process.steps.length - 1 && (
                  <span className="absolute -bottom-4 start-1/2 -translate-x-1/2 text-lavender lg:hidden">
                    ↓
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
