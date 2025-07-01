// src/components/Header.jsx
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Achievements", to: "achievements" },
  { name: "Education", to: "education" },
  { name: "Gallery", to: "gallery" },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Clickable name scrolls to top */}
        <button
          onClick={() => scroll.scrollToTop()}
          className="text-xl font-bold tracking-wide text-slate-800 dark:text-slate-100 cursor-pointer"
        >
          Vansh Nyati
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              activeClass="text-blue-600 font-semibold"
              spy={true}
            >
              {link.name}
            </Link>
          ))}

          {/* Resume button (opens in same tab) */}
          <a
            href="/Vansh_Nyati_SDE1_Resume.pdf"
            className="ml-4 px-4 py-1.5 border border-slate-400 dark:border-slate-600 rounded hover:bg-blue-500 hover:text-white transition text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-2xl text-slate-800 dark:text-slate-200"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-slate-100 dark:bg-slate-900 px-6 py-4 space-y-4 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setNavOpen(false)}
              className="block cursor-pointer text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              spy={true}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Vansh_Nyati_SDE1_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 border border-slate-400 dark:border-slate-600 rounded text-center hover:bg-blue-500 hover:text-white transition text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
