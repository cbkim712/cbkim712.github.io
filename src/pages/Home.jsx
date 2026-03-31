import { Link } from "react-router-dom";
import { info } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function Home() {
  const { t, lang } = useLang();
  const stats = [
    { label: { en: "GPA", ko: "학점" }, value: "3.63", emoji: "⭐" },
    { label: { en: "Projects", ko: "프로젝트" }, value: "4+", emoji: "🛠️" },
    { label: { en: "Research Roles", ko: "연구 경력" }, value: "2", emoji: "🔬" },
    { label: { en: "Students Taught", ko: "지도 학생" }, value: "400+", emoji: "📚" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="blob w-96 h-96 bg-[#f48fb1] top-[-80px] right-[-80px]" />
      <div className="blob w-72 h-72 bg-[#fce4ec] bottom-32 left-[-60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[#fce4ec] rounded-full px-4 py-1.5 mb-8 shadow-card">
          <span className="text-lg">🌸</span>
          <span className="section-label">{t({ en: "CS Student · Virginia Tech · 2026", ko: "컴퓨터공학과 · 버지니아텍 · 2026" })}</span>
        </div>

        <h1 className="animate-fade-up delay-100 font-display font-bold text-6xl md:text-7xl text-[#3d1a26] leading-tight mb-4">
          {lang === "en" ? (
            <>Hi, I'm <span className="italic text-[#f06292]">Chaebin</span><br />Kim<span className="text-[#f48fb1]"> ✦</span></>
          ) : (
            <>안녕하세요,<br /><span className="italic text-[#f06292]">김채빈</span>입니다<span className="text-[#f48fb1]"> ✦</span></>
          )}
        </h1>

        <p className="animate-fade-up delay-200 font-body text-lg text-[#9e6b7a] max-w-xl leading-relaxed mb-10">
          {t(info.tagline)}
        </p>

        <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-20">
          <Link to="/projects" className="px-7 py-3 bg-[#f06292] text-white font-body font-bold text-sm rounded-full shadow-soft hover:bg-[#e91e8c] hover:shadow-hover transition-all">
            {t({ en: "See my projects ✦", ko: "프로젝트 보기 ✦" })}
          </Link>
          <Link to="/contact" className="px-7 py-3 bg-white border border-[#fce4ec] text-[#f06292] font-body font-bold text-sm rounded-full shadow-card hover:border-[#f06292] hover:shadow-soft transition-all">
            {t({ en: "Say hello 🌷", ko: "연락하기 🌷" })}
          </Link>
        </div>

        <div className="animate-fade-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, emoji }) => (
            <div key={emoji} className="bg-white border border-[#fce4ec] rounded-2xl p-5 shadow-card card-hover text-center">
              <div className="text-2xl mb-1">{emoji}</div>
              <div className="font-display font-bold text-2xl text-[#3d1a26]">{value}</div>
              <div className="section-label mt-1">{t(label)}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
