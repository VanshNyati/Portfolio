// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute w-[30rem] h-[30rem] bg-blue-300/20 rounded-full blur-3xl top-[-8rem] left-[-10rem] dark:bg-blue-800/30" />
      <div className="absolute w-[25rem] h-[25rem] bg-indigo-400/20 rounded-full blur-3xl bottom-[-6rem] right-[-8rem] dark:bg-indigo-800/30" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-700 dark:text-blue-400">Vansh Nyati</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-2xl mt-4 text-gray-600 dark:text-gray-300 font-medium"
        >
          SDE-1 · MERN Stack Dev · Open Source Contributor
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex justify-center flex-wrap gap-4"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            View Projects
          </ScrollLink>

          <a
            href="https://www.linkedin.com/in/vanshnyati/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-100 dark:hover:bg-slate-800 transition-all shadow-md hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Down Arrow Scroll to About */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 z-10"
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={600}
          offset={-70}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-2xl animate-bounce cursor-pointer"
        >
          <FaArrowDown />
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
