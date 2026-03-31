import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import { useLang } from "../context/LangContext";

const emojis = ["🌸", "🔬", "🗺️", "🐦"];
const ids = ["dbworkout", "llm-segmentation", "event-tracker", "feather-finder"];

export default function Projects() {
  const { t } = useLang();

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-[#fce4ec] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">🛠️</span>
          <span className="section-label">{t({ en: "Things I've built", ko: "제가 만든 것들" })}</span>
        </div>
        <h2 className="animate-fade-up delay-100 font-display font-bold text-5xl md:text-6xl text-[#3d1a26] mb-12 leading-tight">
          {t({ en: <>My <span className="italic text-[#f06292]">Projects</span></>, ko: <>나의 <span className="italic text-[#f06292]">프로젝트</span></> })}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              to={`/projects/${ids[i]}`}
              className="bg-white border border-[#fce4ec] rounded-3xl p-7 shadow-card card-hover animate-fade-up block"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{emojis[i]}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#d4aab8]">0{i + 1}</span>
                  <span className="text-xs text-[#f06292] font-semibold">
                    {t({ en: "View details →", ko: "자세히 보기 →" })}
                  </span>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-[#3d1a26] mb-2">{project.title}</h3>
              {t(project.date) && (
                <p className="font-mono text-xs text-[#b8909a] mb-3">{t(project.date)}</p>
              )}
              <p className="font-body text-sm text-[#9e6b7a] leading-relaxed mb-5">{t(project.description)}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag-pill">{tech}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
          <p className="animate-fade-up delay-500 text-center font-body text-sm text-[#b8909a] mt-8">
            {t({ en: "More projects coming soon", ko: "더 많은 프로젝트가 곧 추가될 예정이에요 🌸" })}
          </p>
      </div>
    </main>
  );
}