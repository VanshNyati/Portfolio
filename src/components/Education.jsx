import React from "react";
import { motion } from "framer-motion";
import educationData from "../data/education";

const getIcon = (degree) => {
  if (degree.toLowerCase().includes("b.tech")) return "🎓";
  if (degree.toLowerCase().includes("class 12")) return "🏫";
  if (degree.toLowerCase().includes("class 10")) return "📘";
  return "🎒";
};

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Education</h2>

        <div className="space-y-10 relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-blue-900 before:rounded-full">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-12 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="absolute left-[0.8rem] top-4 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900" />
              <div className="bg-white/5 backdrop-blur-md border border-slate-600 group-hover:border-blue-400 group-hover:shadow-md hover:shadow-blue-500/10 rounded-xl p-6 transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-blue-400">
                    {getIcon(edu.degree)} {edu.institution}
                  </h3>
                  <span className="text-sm text-slate-300">{edu.duration}</span>
                </div>
                <p className="text-md font-semibold text-white mb-1">
                  {edu.degree}
                </p>
                <p className="text-sm italic text-slate-400">{edu.location}</p>
                {edu.details && (
                  <ul className="mt-3 list-disc list-inside text-slate-300 text-sm">
                    {edu.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
