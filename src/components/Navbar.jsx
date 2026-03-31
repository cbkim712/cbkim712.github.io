import { useState } from "react";
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
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const labels = {
    en: ["Home", "About", "Experience", "Projects", "Resume", "Contact"],
    ko: ["홈", "소개", "경력", "프로젝트", "이력서", "연락처"],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#fce4ec]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-display font-bold text-xl text-[#3d1a26] hover:text-[#f06292] transition-colors">
          ck<span className="text-[#f06292]"> </span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-5 items-center">
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
        </ul>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-[#f06292] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#f06292] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#f06292] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#fce4ec] px-6 py-4 flex flex-col gap-4">
          {routes.map(({ to, key }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-body font-semibold transition-colors ${
                  isActive ? "text-[#f06292]" : "text-[#9e6b7a]"
                }`
              }
            >
              {labels[lang][key]}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}