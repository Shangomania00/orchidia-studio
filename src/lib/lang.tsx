import { createContext, useContext, useState, type ReactNode } from "react";
import { content, type Lang } from "@/i18n";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)["ar"];
}

const Ctx = createContext<LangCtx>({
  lang: "ar",
  setLang: () => {},
  t: content.ar,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  return (
    <Ctx.Provider value={{ lang, setLang, t: content[lang] }}>
      <div dir={content[lang].dir} lang={lang} className="f-body">
        {children}
      </div>
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}
