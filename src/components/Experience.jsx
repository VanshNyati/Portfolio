import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX, FiBriefcase } from "react-icons/fi";
import experienceData from "../data/experience";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRefs = useRef([]);

  const handleToggle = (index) => {
    const isOpening = activeIndex !== index;
    setActiveIndex(isOpening ? index : null);

    if (isOpening && containerRefs.current[index]) {
      const element = containerRefs.current[index];
      const offset = element.getBoundingClientRect().top + window.scrollY;
      const headerOffset = 100;

      window.scrollTo({
        top: offset - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          Experience
        </h2>

        <div className="relative border-l border-slate-700 pl-6 space-y-12">
          {experienceData.map((exp, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                ref={(el) => (containerRefs.current[index] = el)}
                className="relative group"
              >
                {/* Vertical line to next */}
                <div
                  className={`absolute left-[6px] top-6 w-px bg-slate-700 ${
                    index === experienceData.length - 1 ? "h-0" : "h-full"
                  }`}
                ></div>

                {/* Timeline dot */}
                <span className="absolute left-[-35px] top-2 w-5 h-5 bg-blue-600 border-4 border-slate-900 rounded-full z-10" />

                {/* Card */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => e.key === "Enter" && handleToggle(index)}
                  className={`cursor-pointer bg-white/5 backdrop-blur-md border border-slate-700 hover:border-blue-400 transition rounded-xl p-6 shadow-lg outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive ? "ring-2 ring-blue-500 scale-[1.01]" : ""
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <motion.div
                          className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full"
                          animate={{ y: [0, -2, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        >
                          <FiBriefcase size={16} />
                        </motion.div>

                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-blue-400 mt-1">
                        {exp.duration}
                        {exp.duration.includes("Present") && (
                          <span className="ml-2 text-xs px-2 py-0.5 bg-blue-600 text-white rounded-full">
                            Current
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="text-xl text-blue-400">
                      {isActive ? <FiX /> : <FiPlus />}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          type: "spring",
                          damping: 20,
                          stiffness: 200,
                        }}
                        className="overflow-hidden mt-4 text-slate-300 text-sm leading-relaxed"
                      >
                        <ul className="list-disc list-inside space-y-1">
                          {exp.description.split("\n").map((point, idx) => (
                            <li key={idx}>{point.trim()}</li>
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
      </div>
    </section>
  );
};

export default Experience;
