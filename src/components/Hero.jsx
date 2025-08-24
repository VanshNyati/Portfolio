// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";

const TITLES = [
  "SDE-1 • Full-Stack Developer",
  "Built for 20K+ Users",
  "React • Node • Tailwind",
];

function useTypewriter(words, speed = 75, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const full = words[index % words.length];
    let t;

    if (phase === "typing") {
      const next = full.slice(0, text.length + 1);
      t = setTimeout(() => {
        setText(next);
        if (next === full) setPhase("pausing");
      }, speed);
    } else if (phase === "pausing") {
      t = setTimeout(() => setPhase("deleting"), pause);
    } else if (phase === "deleting") {
      const next = full.slice(0, Math.max(0, text.length - 1));
      t = setTimeout(() => {
        setText(next);
        if (next === "") {
          setIndex((i) => (i + 1) % words.length);
          setPhase("typing");
        }
      }, Math.max(30, speed / 1.8));
    }

    return () => clearTimeout(t);
  }, [text, phase, index, words, speed, pause]);

  return text;
}

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const typed = useTypewriter(TITLES);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[92vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] dark:[background:radial-gradient(circle_at_1px_1px,theme(colors.slate.800)_1px,transparent_0)] [background-size:22px_22px] opacity-40" />

      {/* parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-24 -left-28 w-[28rem] h-[28rem] rounded-full blur-3xl bg-gradient-to-br from-blue-400/40 to-cyan-300/30 dark:from-blue-700/40 dark:to-indigo-700/30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] rounded-full blur-3xl bg-gradient-to-tr from-fuchsia-300/30 to-violet-300/30 dark:from-fuchsia-700/30 dark:to-violet-700/30"
      />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
            Vansh Nyati
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-slate-700 dark:text-slate-300 min-h-[2.2rem]">
          {typed}
          <span className="animate-pulse">|</span>
        </p>

        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <ScrollLink
            to="projects"
            smooth
            duration={600}
            offset={-80}
            className="group cursor-pointer rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md transition-transform hover:scale-[1.04] active:scale-[0.98]"
          >
            View Projects{" "}
            <span className="ml-1 inline-block transition group-hover:translate-x-1">
              →
            </span>
          </ScrollLink>

          <a
            href="https://www.linkedin.com/in/vanshnyati/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 text-sm font-semibold border border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 z-10"
      >
        <ScrollLink
          to="about"
          smooth
          duration={600}
          offset={-80}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-2xl animate-bounce cursor-pointer"
        >
          <FaArrowDown />
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
