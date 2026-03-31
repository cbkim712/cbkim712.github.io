import { useLang } from "../context/LangContext";

export default function Resume() {
  const { t } = useLang();
  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-[#0f0f14] transition-colors duration-300">
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">📄</span>
          <span className="section-label">{t({ en: "Resume", ko: "이력서" })}</span>
        </div>
        <div className="animate-fade-up delay-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="font-display font-black text-5xl md:text-6xl text-[#3d1a26] dark:text-[#f0f0f0] leading-tight">
            {t({ en: <>My Resume</>})}
          </h2>
          <a href="/resume.pdf" download className="self-start px-6 py-3 bg-[#f06292] dark:bg-[#f48fb1] text-white dark:text-[#0f0f14] font-body font-black text-sm rounded-full shadow-soft hover:bg-[#e91e8c] dark:hover:bg-[#f06292] transition-all">
            {t({ en: "Download PDF ↓", ko: "PDF 다운로드 ↓" })}
          </a>
        </div>
        <div className="animate-fade-up delay-200 bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-3xl overflow-hidden shadow-card transition-colors duration-300">
          <div className="bg-[#fff0f5] dark:bg-[#141420] border-b border-[#fce4ec] dark:border-[#2a2a3a] px-6 py-3 flex items-center gap-2">
            <span className="text-sm">📄</span>
            <span className="font-mono text-xs text-[#9e6b7a] dark:text-[#a0a0b8]">Chaebin_Kim_Resume.pdf</span>
          </div>
          <iframe src="/resume.pdf" title="Resume" className="w-full" style={{ height: "80vh", border: "none" }}>
            <div className="p-10 text-center">
              <a href="/resume.pdf" download className="px-6 py-3 bg-[#f06292] text-white font-black rounded-full">
                {t({ en: "Download Resume", ko: "이력서 다운로드" })}
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </main>
  );
}
