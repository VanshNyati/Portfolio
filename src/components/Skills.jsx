// src/components/Skills.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../data/skills";

/** Curated set that you want recruiters to see first */
const HIGHLIGHTS = [
  "ReactJS",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Tailwind CSS",
  "Git",
  "Docker",
  "AWS",
];

const categories = ["Highlights", ...Object.keys(skillsData)];

const chipVariants = {
  hidden: { opacity: 0, y: 8 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.02, duration: 0.25 },
  }),
};

export default function Skills() {
  const [active, setActive] = useState(categories[0]);
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const raw = active === "Highlights" ? HIGHLIGHTS : skillsData[active] || [];
    if (!query.trim()) return raw;
    const q = query.toLowerCase();
    return raw.filter((s) => s.toLowerCase().includes(q));
  }, [active, query]);

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Skills</h2>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="mx-auto w-full max-w-3xl flex flex-wrap justify-center gap-2 mb-6"
        >
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`relative px-4 py-2 rounded-full text-sm border transition
                  ${
                    isActive
                      ? "border-blue-400 text-white"
                      : "border-slate-700 text-slate-300 hover:border-slate-500"
                  }`}
              >
                {cat}
                {isActive && (
                  <motion.span
                    layoutId="skillsTab"
                    className="absolute inset-0 -z-10 rounded-full bg-blue-600/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="mx-auto w-full max-w-3xl mb-10">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search in ${active}…`}
              className="w-full rounded-xl bg-slate-800/70 border border-slate-700 focus:border-blue-400 focus:outline-none px-4 py-3 text-sm placeholder:text-slate-400"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-sm px-2 py-1"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-blue-300">{active}</h3>
            <span className="text-xs text-slate-400">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>

          {/* Skill chips */}
          <AnimatePresence initial={false} mode="popLayout">
            <motion.ul
              key={active + query}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {items.map((skill, i) => {
                const iconName = skill
                  .toLowerCase()
                  .replace(/\+/g, "plus")
                  .replace(/\s/g, "-")
                  .replace(".", "")
                  .replace("#", "sharp");
                const iconPath = `/icons/${iconName}.svg`;

                return (
                  <motion.li
                    key={skill}
                    variants={chipVariants}
                    custom={i}
                    whileHover={{ y: -2, rotate: -0.3 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-2 rounded-xl bg-slate-900/60 border border-slate-700 hover:border-blue-500 px-3 py-2 text-sm"
                    title={skill}
                  >
                    <img
                      src={iconPath}
                      alt=""
                      loading="lazy"
                      className="w-5 h-5 opacity-90"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <span className="truncate">{skill}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 text-slate-400 transition">
                      ↗
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </AnimatePresence>

          {/* Empty state */}
          {items.length === 0 && (
            <div className="text-center text-slate-400 py-8">
              No matches. Try another keyword.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
