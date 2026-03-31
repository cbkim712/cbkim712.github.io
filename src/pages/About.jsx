import { info } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function About() {
  const { t } = useLang();
  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-[#0f0f14] transition-colors duration-300">
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">🌷</span>
          <span className="section-label">{t({ en: "About me", ko: "소개" })}</span>
        </div>
        <h2 className="animate-fade-up delay-100 font-display font-black text-5xl md:text-6xl text-[#3d1a26] dark:text-[#f0f0f0] mb-12 leading-tight">
          {t({ en: <>Who I am</> })}
        </h2>
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5 animate-fade-up delay-200">
            {t(info.bio).split("\n\n").map((para, i) => (
              <p key={i} className="font-body text-[#9e6b7a] dark:text-[#a0a0b8] leading-relaxed text-base">{para}</p>
            ))}
            <div className="pt-4">
              <p className="section-label mb-3">{t({ en: "Coursework", ko: "수강 과목" })}</p>
              <div className="flex flex-wrap gap-2">
                {t(info.education.coursework).map((c) => <span key={c} className="tag-pill">{c}</span>)}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 animate-fade-up delay-300">
            <div className="bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-2xl p-6 shadow-card transition-colors duration-300">
              <p className="section-label mb-3">🎓 {t({ en: "Education", ko: "학력" })}</p>
              <p className="font-display font-black text-lg text-[#3d1a26] dark:text-[#f0f0f0]">{info.education.school}</p>
              <p className="font-body text-sm text-[#9e6b7a] dark:text-[#a0a0b8] mt-1">{t(info.education.degree)}</p>
              <p className="font-body text-sm text-[#9e6b7a] dark:text-[#a0a0b8]">{t(info.education.date)}</p>
              <p className="font-body text-xs text-[#b8909a] dark:text-[#7a6a7a] mt-2">{t(info.education.honors)[0]}</p>
            </div>
            <div className="bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-2xl p-6 shadow-card transition-colors duration-300">
              <p className="section-label mb-3">✨ {t({ en: "Skills", ko: "기술" })}</p>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-xs text-[#b8909a] dark:text-[#7a6a7a] mb-2">{t({ en: "Languages", ko: "프로그래밍 언어" })}</p>
                  <div className="flex flex-wrap gap-2">{info.skills.languages.map((s) => <span key={s} className="tag-pill">{s}</span>)}</div>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#b8909a] dark:text-[#7a6a7a] mb-2">{t({ en: "Tools & Frameworks", ko: "도구 및 프레임워크" })}</p>
                  <div className="flex flex-wrap gap-2">{info.skills.frameworks.map((s) => <span key={s} className="tag-pill">{s}</span>)}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#fff0f5] dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-2xl p-5 shadow-card transition-colors duration-300">
              <p className="section-label mb-2">🌏 {t({ en: "Languages", ko: "사용 언어" })}</p>
              <p className="font-body text-sm text-[#9e6b7a] dark:text-[#a0a0b8]">{t(info.skills.other).join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
