// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Achievements", to: "achievements" },
  { name: "Education", to: "education" },
  { name: "Gallery", to: "gallery" },
  { name: "Connect", to: "connect" },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(Math.min(1, scrolled / height));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
  );
  const progress = useScrollProgress();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    // persist
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  useEffect(() => {
    // initial theme from storage if any
    try {
      const saved = localStorage.getItem("theme");
      if (saved) setDark(saved === "dark");
    } catch {}
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Glass bar */}
      <div className="bg-slate-100/70 dark:bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => scroll.scrollToTop()}
            className="text-lg md:text-xl font-bold tracking-wide text-slate-900 dark:text-slate-100 hover:opacity-90"
          >
            Vansh Nyati
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="text-blue-600 dark:text-blue-400"
                className="relative px-3 py-1.5 rounded-md cursor-pointer text-slate-700/90 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
                {/* underline when active (react-scroll adds 'active' class) */}
                <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] bg-blue-600/70 dark:bg-blue-400/80 scale-x-0 [transition:transform_300ms] [transform-origin:left] group-[.active]:scale-x-100"></span>
              </Link>
            ))}

            <a
              href="/Vansh_Nyati_SDE1_Resume.pdf"
              className="ml-2 px-4 py-1.5 rounded-lg border border-slate-300/60 dark:border-slate-600 hover:bg-blue-600 hover:text-white transition text-sm font-medium text-slate-800 dark:text-slate-200"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setNavOpen((v) => !v)}
            className="md:hidden text-2xl text-slate-900 dark:text-slate-100"
            aria-label="Toggle navigation"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="h-[3px] bg-transparent">
        <motion.div
          className="h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
          style={{ scaleX: progress }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          transformTemplate={({ scaleX }) => `scaleX(${scaleX})`}
          aria-hidden
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 180 }}
            className="md:hidden bg-slate-100/95 dark:bg-slate-900/95 backdrop-blur px-6 py-4 space-y-3 shadow"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                onClick={() => setNavOpen(false)}
                className="block py-2 cursor-pointer text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
