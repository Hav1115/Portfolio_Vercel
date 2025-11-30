'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading gradient-text text-center mb-16"
        >
          Projects
        </motion.h2>

        {/* Projects Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              className="project-card relative group cursor-pointer rounded-xl overflow-hidden bg-dark-700 border border-dark-600"
              onClick={() => openProject(project)}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-purple-600/30 flex items-center justify-center">
                    <span className="text-5xl opacity-40">🖼️</span>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>

                {/* Arrow icon */}
                <motion.div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-dark-900 transition-all"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state if no projects */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No projects yet. Add some in data/projects.ts</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

