import React, { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>

        {/* Grid for projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer border border-slate-700 hover:border-blue-500 bg-slate-800 rounded-xl overflow-hidden transition-shadow shadow-lg hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-all duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  {project.description.slice(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
