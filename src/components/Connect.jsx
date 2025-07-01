import React from "react";
import { FaLinkedin, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Connect = () => {
  return (
    <section
      id="connect"
      className="py-16 px-4 bg-slate-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Get In Touch
      </h2>

      <div className="bg-slate-800 rounded-xl shadow-lg p-10 w-full max-w-3xl text-center border border-slate-700">
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Interested in connecting? Reach out via any of these platforms!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/vanshnyati/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="mailto:vanshnyati17@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            <MdEmail size={20} />
            Email
          </a>

          <a
            href="https://x.com/Vansh_Nyati"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition"
          >
            <FaTwitter size={20} />
            Twitter
          </a>

          {/* Optional Phone */}
          <a
            href="tel:+918890461763"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
          >
            <FaPhoneAlt size={18} />
            Phone
          </a>
        </div>

        <p className="text-sm text-slate-400">
          Thank you for exploring my portfolio!
        </p>
      </div>
    </section>
  );
};

export default Connect;
