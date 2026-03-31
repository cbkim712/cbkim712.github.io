import { useLang } from "../context/LangContext";

export default function Resume() {
  const { t } = useLang();

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="blob w-72 h-72 bg-[#fce4ec] top-10 right-[-40px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[#fce4ec] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">📄</span>
          <span className="section-label">{t({ en: "Resume", ko: "이력서" })}</span>
        </div>

        <div className="animate-fade-up delay-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="font-display font-bold text-5xl md:text-6xl text-[#3d1a26] leading-tight">
            {t({ en: <>My <span className="italic text-[#f06292]">Resume</span></>, ko: <>나의 <span className="italic text-[#f06292]">이력서</span></> })}
          </h2>
          <a
            href="/resume.pdf"
            download
            className="self-start px-6 py-3 bg-[#f06292] text-white font-body font-bold text-sm rounded-full shadow-soft hover:bg-[#e91e8c] transition-all"
          >
            {t({ en: "Download PDF ↓", ko: "PDF 다운로드 ↓" })}
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="animate-fade-up delay-200 bg-white border border-[#fce4ec] rounded-3xl overflow-hidden shadow-card">
          <div className="bg-[#fff0f5] border-b border-[#fce4ec] px-6 py-3 flex items-center gap-2">
            <span className="text-sm">📄</span>
            <span className="font-mono text-xs text-[#9e6b7a]">Chaebin_Kim_Resume.pdf</span>
          </div>
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full"
            style={{ height: "80vh", border: "none" }}
          >
            <div className="p-10 text-center">
              <p className="font-body text-[#9e6b7a] mb-4">
                {t({ en: "PDF preview not available in your browser.", ko: "브라우저에서 PDF 미리보기를 지원하지 않습니다." })}
              </p>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-[#f06292] text-white font-bold rounded-full"
              >
                {t({ en: "Download Resume", ko: "이력서 다운로드" })}
              </a>
            </div>
          </iframe>
        </div>

        <p className="animate-fade-up delay-300 text-center font-body text-xs text-[#b8909a] mt-4">
          {t({ en: "Place your resume.pdf in the /public folder to display it here.", ko: "resume.pdf 파일을 /public 폴더에 넣으면 여기에 표시됩니다." })}
        </p>
      </div>
    </main>
  );
}
