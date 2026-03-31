import { info } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const links = [
    { labelKey: { en: "Email" }, value: info.email, href: `mailto:${info.email}`, emoji: "💌" },
    { labelKey: { en: "LinkedIn" }, value: "linkedin.com/in/ckim712", href: info.linkedin, emoji: "🔗" },
    { labelKey: { en: "GitHub" }, value: "github.com/cbkim712", href: info.github, emoji: "🐱" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-[#0f0f14] transition-colors duration-300">
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">💌</span>
          <span className="section-label">{t({ en: "Get in touch" })}</span>
        </div>
        <h2 className="animate-fade-up delay-100 font-display font-black text-5xl md:text-6xl text-[#3d1a26] dark:text-[#f0f0f0] mb-4 leading-tight">
          {t({ en: <>Contact</>})}
        </h2>
        {/* <p className="animate-fade-up delay-200 font-body text-[#9e6b7a] dark:text-[#a0a0b8] text-lg mb-14 max-w-md">
          {t(info.contactPage.sub)}
        </p> */}
        <div className="animate-fade-up delay-300 grid md:grid-cols-2 gap-4">
          {links.map(({ labelKey, value, href, emoji }) => (
            <div key={emoji} className="bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-2xl p-6 shadow-card card-hover transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{emoji}</span>
                <span className="section-label">{t(labelKey)}</span>
              </div>
              {href ? (
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-display font-black text-lg text-[#3d1a26] dark:text-[#f0f0f0] hover:text-[#f06292] dark:hover:text-[#f48fb1] transition-colors block">
                  {value}
                </a>
              ) : (
                <p className="font-display font-black text-lg text-[#3d1a26] dark:text-[#f0f0f0]">{value}</p>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}
