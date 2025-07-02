import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-6 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Vansh Nyati. All rights reserved.
        </p>
        <div className="space-x-4 text-sm">
          <a
            href="mailto:vanshnyati@example.com"
            className="hover:underline text-blue-400"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/vanshnyati/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vanshnyati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
