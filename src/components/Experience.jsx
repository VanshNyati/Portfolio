// src/components/Experience.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX, FiBriefcase } from "react-icons/fi";
import experienceData from "../data/experience";

const CARD_T = { duration: 0.35, type: "spring", damping: 22, stiffness: 220 };

export default function Experience() {
  const [open, setOpen] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (experienceData.length && open.length === 0) setOpen([0]);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === "e") setOpen(experienceData.map((_, i) => i));
      if (e.key.toLowerCase() === "c") setOpen([]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = (idx) => {
    setOpen((prev) => {
      const has = prev.includes(idx);
      const next = has ? prev.filter((i) => i !== idx) : [...prev, idx];
      if (!has && itemRefs.current[idx]) {
        const y =
          itemRefs.current[idx].getBoundingClientRect().top +
          window.scrollY -
          96;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return next;
    });
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Experience
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setOpen(experienceData.map((_, i) => i))}
              className="px-3 py-1.5 text-xs rounded-md border border-slate-600 hover:border-blue-400"
            >
              Expand all (E)
            </button>
            <button
              onClick={() => setOpen([])}
              className="px-3 py-1.5 text-xs rounded-md border border-slate-600 hover:border-blue-400"
            >
              Collapse all (C)
            </button>
          </div>
        </div>

        <div className="relative border-l border-slate-700 pl-6 space-y-10">
          {experienceData.map((exp, idx) => {
            const isOpen = open.includes(idx);
            return (
              <div
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="relative group"
              >
                {/* connector */}
                <div
                  className={`absolute left-[6px] top-6 w-px bg-slate-700 ${
                    idx === experienceData.length - 1 ? "h-0" : "h-full"
                  }`}
                />
                {/* dot */}
                <span className="absolute left-[-35px] top-2 w-5 h-5 bg-blue-600 border-4 border-slate-900 rounded-full z-10" />

                {/* card */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => e.key === "Enter" && toggle(idx)}
                  className={`cursor-pointer bg-white/5 backdrop-blur-md border border-slate-700 hover:border-blue-400 transition rounded-xl p-5 sm:p-6 shadow-lg outline-none focus:ring-2 focus:ring-blue-500 ${
                    isOpen ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <motion.div
                          className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full shrink-0"
                          animate={{ y: [0, -2, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        >
                          <FiBriefcase size={16} />
                        </motion.div>
                        <h3 className="text-lg md:text-xl font-semibold text-white truncate">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-blue-400 mt-1">
                        {exp.duration}
                        {exp.duration?.includes("Present") && (
                          <span className="ml-2 text-xs px-2 py-0.5 bg-blue-600 text-white rounded-full">
                            Current
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="text-xl text-blue-400 shrink-0">
                      {isOpen ? <FiX /> : <FiPlus />}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={CARD_T}
                        className="overflow-hidden mt-3 sm:mt-4 text-slate-300 text-sm leading-relaxed"
                      >
                        <ul className="list-disc list-inside space-y-1">
                          {exp.description.split("\n").map((point, i) => (
                            <li key={i}>{point.trim()}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            * { animation: none !important; transition: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
