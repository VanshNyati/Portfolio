import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const copy = async (text, set) => {
  try {
    await navigator.clipboard.writeText(text);
    set(true);
    setTimeout(() => set(false), 1200);
  } catch {}
};

const Connect = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phone = "+918890461763";
  const email = "vanshnyati17@gmail.com";
  const subject = encodeURIComponent("👋 Hello Vansh — Saw your portfolio");
  const body = encodeURIComponent(
    "Hi Vansh,\n\nI came across your portfolio and would love to connect about an opportunity.\n\nThanks!"
  );

  const base =
    "w-full h-12 rounded-lg border border-slate-700 bg-slate-800/60 hover:shadow transition";

  return (
    <section
      id="connect"
      className="py-20 px-4 bg-slate-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-extrabold mb-6 text-center">Get In Touch</h2>
      <p className="text-sm text-slate-400 mb-6">
        Usually replies within a day
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-md p-8 shadow-lg"
      >
        <span className="absolute -top-3 right-4 text-[11px] px-2 py-0.5 rounded-full bg-emerald-600/80">
          Open to SDE-1 roles
        </span>

        <p className="text-lg md:text-xl text-slate-300 mb-8 text-center">
          Interested in connecting? Reach out via any of these platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://www.linkedin.com/in/vanshnyati/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} hover:border-blue-400 hover:shadow-blue-500/20 flex items-center justify-center gap-2`}
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/Vansh_Nyati"
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} hover:border-sky-400 hover:shadow-sky-500/20 flex items-center justify-center gap-2`}
          >
            <FaTwitter size={18} />
            <span>Twitter</span>
          </a>

          <div className={`${base} flex items-center px-4`}>
            <MdEmail size={20} className="mr-2" />
            <a
              className="truncate underline underline-offset-2 decoration-slate-600 hover:decoration-blue-400"
              href={`mailto:${email}?subject=${subject}&body=${body}`}
            >
              {email}
            </a>
            <button
              onClick={() => copy(email, setCopiedEmail)}
              className="ml-auto h-8 w-8 grid place-items-center rounded-md border border-slate-600 hover:border-blue-400 transition"
              title="Copy email"
            >
              {copiedEmail ? <FaCheck /> : <FaRegCopy />}
            </button>
          </div>

          <div className={`${base} flex items-center px-4`}>
            <FaPhoneAlt size={18} className="mr-2" />
            <a className="hover:underline" href={`tel:${phone}`}>
              {phone}
            </a>
            <button
              onClick={() => copy(phone, setCopiedPhone)}
              className="ml-auto h-8 w-8 grid place-items-center rounded-md border border-slate-600 hover:border-emerald-400 transition"
              title="Copy phone"
            >
              {copiedPhone ? <FaCheck /> : <FaRegCopy />}
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-400 mt-8 text-center">
          Thank you for exploring my portfolio!
        </p>
      </motion.div>
    </section>
  );
};

export default Connect;
