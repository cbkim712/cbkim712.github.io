import { projects } from "../data/portfolio";
import { useLang } from "../context/LangContext";

const emojis = ["🌸", "🔬", "🗺️", "🐦"];

export default function Projects() {
  const { t } = useLang();
  return (
    <main className="min-h-screen relative overflow-hidden bg-white dark:bg-[#0f0f14] transition-colors duration-300">
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-full px-4 py-1.5 mb-6 shadow-card">
          <span className="text-lg">🛠️</span>
          <span className="section-label">{t({ en: "Things I've built", ko: "제가 만든 것들" })}</span>
        </div>
        <h2 className="animate-fade-up delay-100 font-display font-black text-5xl md:text-6xl text-[#3d1a26] dark:text-[#f0f0f0] mb-12 leading-tight">
          {t({ en: <>My Projects</> })}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={project.title} className="bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-3xl p-7 shadow-card card-hover animate-fade-up transition-colors duration-300" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{emojis[i]}</span>
                <span className="font-mono text-xs text-[#d4aab8] dark:text-[#4a3a4a]">0{i + 1}</span>
              </div>
              <h3 className="font-display font-black text-xl text-[#3d1a26] dark:text-[#f0f0f0] mb-2">{project.title}</h3>
              {t(project.date) && <p className="font-mono text-xs text-[#b8909a] dark:text-[#7a6a7a] mb-3">{t(project.date)}</p>}
              <p className="font-body text-sm text-[#9e6b7a] dark:text-[#a0a0b8] leading-relaxed mb-5">{t(project.description)}</p>
              <div className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="tag-pill">{tech}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
