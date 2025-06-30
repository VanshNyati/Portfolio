import React from "react";
import achievementsData from "../data/achievements";
import { FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 flex justify-center items-center gap-3">
          <FaTrophy className="text-yellow-400 text-3xl" />
          Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="relative group bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-6 shadow-md transition-all hover:shadow-blue-500/30 hover:border-blue-400"
            >
              {item.badge && (
                <span className="absolute -top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {item.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-blue-300 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 mb-2">{item.date}</p>
              <p className="text-sm text-slate-300 mb-4">{item.description}</p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm inline-flex items-center gap-1 hover:underline"
                >
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
