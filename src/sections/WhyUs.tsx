import { Check } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "@/sections/common";

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section className="bg-violet-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} light />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 100}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm transition hover:border-ochre/40 hover:bg-white/10">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ochre text-violet-deep">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="font-medium text-white/90">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
