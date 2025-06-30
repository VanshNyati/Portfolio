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
              I’m a <strong>Full-Stack Developer</strong> who enjoys turning
              ideas into clean, scalable products that actually solve problems.
              Currently working as an{" "}
              <strong>Software Development Intern at AppCrave</strong>, I’ve
              contributed to internal tools, fixed critical production bugs, and
              helped build CMS portals that improve real-world workflows.
            </p>

            <p>
              My stack mostly revolves around{" "}
              <span className="text-blue-700 dark:text-blue-300 font-semibold">
                ReactJS, Node.js, MongoDB, and etc
              </span>
              . I've also built MVPs from scratch and led{" "}
              <strong>10-member tech teams</strong> during entrepreneurship summit and
              startup accelerator portal.
            </p>

            <p>
              Outside of coding, I’m a <em>professional cricketer</em> and
              someone who finds joy in the gym, on the field, or anywhere
              there’s a challenge. I thrive on collaboration, late-night
              debugging, and of course, a good cup of coffee while brainstorming
              the next big idea.
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
