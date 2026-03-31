import { NavLink } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

const routes = [
  { to: "/", key: 0 },
  { to: "/about", key: 1 },
  { to: "/experience", key: 2 },
  { to: "/projects", key: 3 },
  { to: "/resume", key: 4 },
  { to: "/contact", key: 5 },
];

export default function Navbar() {
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();

  const labels = {
    en: ["Home", "About", "Experience", "Projects", "Resume", "Contact"],
    ko: ["홈", "소개", "경력", "프로젝트", "이력서", "연락처"],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f0f14]/80 backdrop-blur-md border-b border-[#fce4ec] dark:border-[#2a2a3a] transition-colors duration-300">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-display font-bold text-xl text-[#3d1a26] dark:text-[#f0f0f0] hover:text-[#f06292] dark:hover:text-[#f48fb1] transition-colors">
          ck<span className="text-[#f06292] dark:text-[#f48fb1]"></span>
        </NavLink>

        <ul className="flex gap-5 items-center">
          {routes.map(({ to, key }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm font-body font-semibold transition-colors ${
                    isActive
                      ? "text-[#f06292] dark:text-[#f48fb1] font-bold"
                      : "text-[#9e6b7a] dark:text-[#a0a0b8] hover:text-[#f06292] dark:hover:text-[#f48fb1]"
                  }`
                }
              >
                {labels[lang][key]}
              </NavLink>
            </li>
          ))}

          {/* Language toggle */}
          {/* <li>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-full text-xs font-mono font-bold text-[#f06292] dark:text-[#f48fb1] hover:bg-[#fce4ec] dark:hover:bg-[#2a1520] transition-all"
            >
              <span>{lang === "en" ? "🇰🇷" : "🇺🇸"}</span>
              <span>{lang === "en" ? "한국어" : "English"}</span>
            </button>
          </li> */}

          {/* Dark mode toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center bg-white dark:bg-[#1a1a28] border border-[#fce4ec] dark:border-[#2a2a3a] rounded-full text-base hover:bg-[#fce4ec] dark:hover:bg-[#2a1520] transition-all"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
