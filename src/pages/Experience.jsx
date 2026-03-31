import { experience, info } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function Experience() {
  const { t } = useLang();

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="blob w-80 h-80 bg-[#fce4ec] top-10 right-[-60px]" />
      <div className="blob w-64 h-64 bg-[#f48fb1] bottom-10 left-[-50px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[#fce4ec] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">💼</span>
          <span className="section-label">{t({ en: "Work & Research", ko: "경력 및 연구" })}</span>
        </div>
        <h2 className="animate-fade-up delay-100 font-display font-bold text-5xl md:text-6xl text-[#3d1a26] mb-12 leading-tight">
          {t({ en: <>My <span className="italic text-[#f06292]">Experience</span></>, ko: <>저의 <span className="italic text-[#f06292]">경력</span></> })}
        </h2>

        {/* Timeline */}
        <div className="animate-fade-up delay-200 relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#fce4ec] hidden md:block" />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 bg-white border-2 border-[#f48fb1] rounded-full items-center justify-center shadow-card">
                  <span className="text-base">
                    {i === 0 ? "🔬" : i === 1 ? "🌍" : i === 2 ? "📚" : "🌸"}
                  </span>
                </div>

                <div className="bg-white border border-[#fce4ec] rounded-2xl p-6 shadow-card card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#3d1a26]">{t(exp.role)}</h3>
                      <p className="font-body text-sm text-[#f06292] font-semibold">{t(exp.org)}</p>
                      <p className="font-mono text-xs text-[#b8909a] mt-0.5">{t(exp.location)}</p>
                    </div>
                    <span className="tag-pill self-start shrink-0">{t(exp.date)}</span>
                  </div>

                  <ul className="space-y-2">
                    {t(exp.bullets).map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[#9e6b7a] font-body">
                        <span className="text-[#f48fb1] mt-1 flex-shrink-0">✦</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education card at bottom */}
        <div className="animate-fade-up delay-400 mt-10">
          <p className="section-label mb-4">🎓 {t({ en: "Education", ko: "학력" })}</p>
          <div className="bg-[#fff0f5] border border-[#fce4ec] rounded-2xl p-6 shadow-card">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-[#3d1a26]">{info.education.school}</h3>
                <p className="font-body text-sm text-[#f06292] font-semibold">{t(info.education.degree)}</p>
                <p className="font-body text-xs text-[#b8909a] mt-1">{t(info.education.honors)[0]}</p>
              </div>
              <div className="shrink-0 text-right">
                <span className="tag-pill">{t(info.education.date)}</span>
                <p className="font-mono text-sm font-bold text-[#c2185b] mt-2">GPA {info.education.gpa}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
