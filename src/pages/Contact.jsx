import { info } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();

  const links = [
    { labelKey: { en: "Email", ko: "이메일" }, value: info.email, href: `mailto:${info.email}`, emoji: "💌" },
    { labelKey: { en: "LinkedIn", ko: "링크드인" }, value: "linkedin.com/in/ckim712", href: info.linkedin, emoji: "🔗" },
    { labelKey: { en: "GitHub", ko: "깃허브" }, value: "github.com/ckim712", href: info.github, emoji: "🐱" },
    { labelKey: { en: "Location", ko: "위치" }, value: t(info.location), href: null, emoji: "📍" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="blob w-96 h-96 bg-[#f48fb1] bottom-[-60px] right-[-80px]" />
      <div className="blob w-64 h-64 bg-[#fce4ec] top-20 left-[-40px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[#fce4ec] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">💌</span>
          <span className="section-label">{t({ en: "Get in touch", ko: "연락하기" })}</span>
        </div>
        <h2 className="animate-fade-up delay-100 font-display font-bold text-5xl md:text-6xl text-[#3d1a26] mb-4 leading-tight">
          {t({ en: <>Let's <span className="italic text-[#f06292]">talk</span></>, ko: <>같이 <span className="italic text-[#f06292]">이야기해요</span></> })}
        </h2>
        <p className="animate-fade-up delay-200 font-body text-[#9e6b7a] text-lg mb-14 max-w-md">
          {t(info.contactPage.sub)}
        </p>

        <div className="animate-fade-up delay-300 grid md:grid-cols-2 gap-4">
          {links.map(({ labelKey, value, href, emoji }) => (
            <div key={emoji} className="bg-white border border-[#fce4ec] rounded-2xl p-6 shadow-card card-hover">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{emoji}</span>
                <span className="section-label">{t(labelKey)}</span>
              </div>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-display font-bold text-lg text-[#3d1a26] hover:text-[#f06292] transition-colors block"
                >
                  {value}
                </a>
              ) : (
                <p className="font-display font-bold text-lg text-[#3d1a26]">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="animate-fade-up delay-500 mt-12 text-center">
          <p className="font-display italic text-[#b8909a] text-lg">{t(info.contactPage.quote)}</p>
        </div>
      </div>
    </main>
  );
}
