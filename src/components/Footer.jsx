import { useLang } from "../context/LangContext";
import { info } from "../data/portfolio";

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="border-t border-[#fce4ec] py-8">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-[#b8909a]">
            © {new Date().getFullYear()} Chaebin Kim 
            </p>
            <div className="flex gap-6">
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-[#b8909a] hover:text-[#f06292] transition-colors">LinkedIn</a>
            <a href={info.github} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-[#b8909a] hover:text-[#f06292] transition-colors">GitHub</a>
            <a href={`mailto:${info.email}`} className="font-body text-xs text-[#b8909a] hover:text-[#f06292] transition-colors">Email</a>
            </div>
        </div>
        </footer>
    );
}