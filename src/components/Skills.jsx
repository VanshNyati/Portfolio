import React from "react";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-blue-500/50 transition duration-300"
            >
              <h3 className="text-2xl font-bold capitalize mb-6 text-blue-400">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-4">
                {items.map((skill, i) => {
                  // make icon filenames lowercase with dashes and .svg extension
                  const iconName = skill
                    .toLowerCase()
                    .replace(/\+/g, "plus")
                    .replace(/\s/g, "-")
                    .replace(".", "")
                    .replace("#", "sharp");
                  const iconPath = `/icons/${iconName}.svg`;

                  return (
                    <li
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-full hover:bg-blue-600 transition cursor-default text-sm"
                    >
                      <img
                        src={iconPath}
                        alt={skill}
                        className="w-5 h-5"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
