import { NavLink } from "react-router-dom";
import { useLang } from "../context/LangContext";

const routes = [
  { to: "/", key: 0 },
  { to: "/about", key: 1 },
  { to: "/experience", key: 2 },
  { to: "/projects", key: 3 },
  { to: "/resume", key: 4 },
  { to: "/contact", key: 5 },
];

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const labels = {
    en: ["Home", "About", "Experience", "Projects", "Resume", "Contact"],
    ko: ["홈", "소개", "경력", "프로젝트", "이력서", "연락처"],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f9]/80 backdrop-blur-md border-b border-[#fce4ec]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-display font-bold text-xl text-[#3d1a26] hover:text-[#f06292] transition-colors">
          ck<span className="text-[#f06292]"> ♡</span>
        </NavLink>

        <ul className="flex gap-5 items-center">
          {routes.map(({ to, key }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm font-body font-semibold transition-colors ${
                    isActive ? "text-[#f06292] font-bold" : "text-[#9e6b7a] hover:text-[#f06292]"
                  }`
                }
              >
                {labels[lang][key]}
              </NavLink>
            </li>
          ))}

          {/* Language toggle */}
          <li>
            <button
              onClick={toggle}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#fce4ec] rounded-full text-xs font-mono font-bold text-[#f06292] shadow-card hover:bg-[#fce4ec] transition-all"
            >
              <span>{lang === "en" ? "🇰🇷" : "🇺🇸"}</span>
              <span>{lang === "en" ? "한국어" : "English"}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
