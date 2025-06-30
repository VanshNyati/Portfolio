import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-8">
      <div className="bg-white dark:bg-slate-800 text-black dark:text-white rounded-lg w-full max-w-4xl p-6 shadow-lg transform transition-all scale-110 opacity-100">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4 text-lg text-slate-400">{project.description}</p>

        {/* Display tech stack */}
        {project.tech?.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4 text-xs text-slate-300">
            {project.tech.map((t, i) => (
              <li key={i} className="bg-slate-700 px-3 py-1 rounded-lg">
                {t}
              </li>
            ))}
          </ul>
        )}

        {/* Live link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-lg hover:text-blue-700 underline mb-4"
          >
            View Live Project
          </a>
        )}

        {/* Close button */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
