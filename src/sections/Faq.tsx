import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "@/sections/common";

export default function Faq() {
  const { t } = useLang();

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-lavender/70"
              >
                <AccordionTrigger className="f-display py-5 text-start text-lg text-violet hover:text-violet-deep hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
