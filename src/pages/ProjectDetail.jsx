import { useParams, Link } from "react-router-dom";
import { useLang } from "../context/LangContext";

const projectDetails = {
  "llm-segmentation": {
    title: "LLM-Guided Segmentation Assessment",
    tech: ["Python", "Gradio", "LISA", "LLaMA"],
    date: { en: "Jul 2025 – Aug 2025", ko: "2025년 7월 – 8월" },
    description: {
      en: "End-to-end multimodal evaluation pipeline integrating LISA (segmentation), DAM (captioning), and a LLaMA-based critic to assess spatial (IoU) and semantic similarity. Built an interactive Gradio interface to visualize segmentation results, compare predictions with targets, compute similarity scores, and generate feedback for prompt refinement.",
      ko: "LISA(분할), DAM(캡셔닝), LLaMA 기반 평가자를 통합한 멀티모달 평가 파이프라인입니다. Gradio 인터페이스로 분할 결과를 시각화하고, 예측값과 정답을 비교하며, 유사도 점수를 계산하고 프롬프트 개선을 위한 피드백을 생성합니다.",
    },
    video: "https://www.youtube.com/embed/jlrC9lmTgb0", // Add your YouTube link here e.g. "https://www.youtube.com/embed/xxxxxxx"
    pdf: "/projects/llm-presentation.pdf",
    pdfLabel: { en: "Presentation", ko: "발표 자료" },
    emoji: "🔬",
  },
  "event-tracker": {
    title: "Event Tracker",
    tech: ["Swift", "SwiftData", "MapKit", "TicketMaster API"],
    date: { en: "", ko: "" },
    description: {
      en: "iOS app for tracking events and artists. Implemented core data architecture using SwiftData, including database classes, event and artist models, and initial content setup. Developed artist tracking and map features to show events geographically, including 'Events on Map' UI and venue-based filtering.",
      ko: "이벤트와 아티스트를 추적하는 iOS 앱입니다. SwiftData로 핵심 데이터 아키텍처를 구현하고, 지도 뷰에서 공연장 기반 필터링을 통해 이벤트를 지리적으로 표시합니다.",
    },
    video: null,
    pdf: "/projects/event-tracker-report.pdf",
    pdfLabel: { en: "Project Report", ko: "프로젝트 보고서" },
    emoji: "🗺️",
  },
  "feather-finder": {
    title: "Feather Finder",
    tech: ["Java", "HTML/CSS", "AWS EC2", "eBird API", "Google Maps API"],
    date: { en: "", ko: "" },
    description: {
      en: "Birdwatching web app with sighting logging and map integration using eBird and Google Maps APIs. Designed backend schema, deployed on AWS EC2, and collaborated in a 6-person team.",
      ko: "탐조 기록 및 지도 통합 기능이 있는 웹 앱입니다. 백엔드 스키마를 설계하고 AWS EC2에 배포했으며, 6인 팀으로 협업했습니다.",
    },
    video: null,
    pdf: "/projects/feather-finder-report.pdf",
    pdfLabel: { en: "Project Report", ko: "프로젝트 보고서" },
    emoji: "🐦",
  },
  "dbworkout": {
    title: "DBWorkout",
    tech: ["Python", "React", "PostgreSQL"],
    date: { en: "Oct 2025 – Present", ko: "2025년 10월 – 현재" },
    description: {
      en: "A web-based SQL practice platform supporting real-time feedback and instructor-led sessions. Contributed to the development by improving backend data models and implementing filterable views to support scalable question and session management.",
      ko: "실시간 피드백과 교수자 주도 세션을 지원하는 웹 기반 SQL 연습 플랫폼입니다. 백엔드 데이터 모델 개선 및 질문·세션 관리를 위한 필터 뷰를 구현했습니다.",
    },
    video: null,
    pdf: null,
    emoji: "🌸",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLang();
  const project = projectDetails[id];

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-display font-bold text-4xl text-[#3d1a26] mb-4">404</p>
          <p className="text-[#9e6b7a] mb-6">Project not found</p>
          <Link to="/projects" className="px-6 py-3 bg-[#f06292] text-white font-bold rounded-full">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 max-w-5xl mx-auto pt-28 pb-24">
      {/* Back button */}
      <Link
        to="/projects"
        className="animate-fade-up inline-flex items-center gap-2 text-sm font-body font-semibold text-[#9e6b7a] hover:text-[#f06292] transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        {t({ en: "Back to Projects", ko: "프로젝트 목록" })}
      </Link>

      {/* Header */}
      <div className="animate-fade-up delay-100 mb-10">
        <span className="text-4xl mb-4 block">{project.emoji}</span>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-[#3d1a26] mb-4 leading-tight">
          {project.title}
        </h1>
        {t(project.date) && (
          <p className="font-mono text-sm text-[#b8909a] mb-4">{t(project.date)}</p>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>
        <p className="font-body text-[#9e6b7a] leading-relaxed text-base ">
          {t(project.description)}
        </p>
      </div>

      {/* Video section */}
      {project.video ? (
        <div className="animate-fade-up delay-200 mb-10">
          <h2 className="font-display font-bold text-xl text-[#3d1a26] mb-4">
            🎬 {t({ en: "Demo Video", ko: "데모 영상" })}
          </h2>
          <div className="bg-white border border-[#fce4ec] rounded-3xl overflow-hidden shadow-card aspect-video">
            <iframe
              src={project.video}
              title="Demo Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <div className="animate-fade-up delay-200 mb-10 bg-[#fff0f5] border border-[#fce4ec] rounded-2xl p-6 flex items-center gap-4">
          <span className="text-3xl">🎬</span>
          <div>
            <p className="font-display font-bold text-[#3d1a26]">
              {t({ en: "Demo Video", ko: "데모 영상" })}
            </p>
            <p className="font-body text-sm text-[#9e6b7a]">
              {t({ en: "Coming soon — video will be added shortly.", ko: "곧 업로드될 예정입니다." })}
            </p>
          </div>
        </div>
      )}

      {/* PDF section */}
      {project.pdf && (
        <div className="animate-fade-up delay-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-xl text-[#3d1a26]">
              📄 {t(project.pdfLabel)}
            </h2>
            <a
              href={project.pdf}
              download
              className="px-5 py-2 bg-[#f06292] text-white font-body font-bold text-sm rounded-full shadow-soft hover:bg-[#e91e8c] transition-all"
            >
              {t({ en: "Download ↓", ko: "다운로드 ↓" })}
            </a>
          </div>
          <div className="bg-white border border-[#fce4ec] rounded-3xl overflow-hidden shadow-card">
            <div className="bg-[#fff0f5] border-b border-[#fce4ec] px-6 py-3 flex items-center gap-2">
              <span className="text-sm">📄</span>
              <span className="font-mono text-xs text-[#9e6b7a]">{project.pdf.split("/").pop()}</span>
            </div>
            <iframe
              src={project.pdf}
              title={t(project.pdfLabel)}
              className="w-full"
              style={{ height: "70vh", border: "none" }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
