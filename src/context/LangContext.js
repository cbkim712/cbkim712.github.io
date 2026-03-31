import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggle = () => setLang((l) => (l === "en" ? "ko" : "en"));
  const t = (obj) => (typeof obj === "string" ? obj : obj?.[lang] ?? obj?.en);
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
