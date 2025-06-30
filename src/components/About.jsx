// src/components/About.jsx
import React from "react";
import myImage from "../assets/Vansh_MES_Ghibli.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 py-20 px-6 overflow-hidden"
    >
      {/* Background image overlay */}
      <img
        src={myImage}
        alt="Ghibli Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="md:w-1/2 animate-fade-in">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              I’m a <strong>Full-Stack Developer</strong> with a passion for
              building sleek, scalable apps that blend performance with purpose.
              Currently an <strong>SDE-1 Intern at AppCrave</strong>, I’ve
              contributed to internal tools, production bug fixes, and CMS-based
              portals.
            </p>

            <p>
              My stack revolves around{" "}
              <span className="text-blue-700 dark:text-blue-300 font-semibold">
                ReactJS, Node.js, MongoDB, and TailwindCSS
              </span>
              . I’ve also built MVPs and led 10-member teams for university
              events and startup accelerators.
            </p>

            <p>
              Outside of coding, I’m into <em>Studio Ghibli films</em>,{" "}
              <em>hackathons</em>, <em>open-source</em>, and sipping chai while
              brainstorming ideas.
            </p>
          </div>
        </div>

        {/* Foreground image */}
        <div className="md:w-1/2 flex justify-center animate-fade-in delay-200">
          <img
            src={myImage}
            alt="Vansh Nyati"
            className="rounded-2xl shadow-2xl max-w-xs md:max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
