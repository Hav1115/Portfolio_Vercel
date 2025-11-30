'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-dark-800 rounded-2xl border border-dark-600"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-dark-700 hover:bg-dark-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Image */}
            <div className="relative w-full aspect-video bg-dark-700">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-purple-600/20">
                  <span className="text-6xl opacity-30">🖼️</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-dark-600 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Links Section */}
              <div className="flex flex-wrap gap-4">
                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-dark-700 hover:bg-dark-600 rounded-full transition-all hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-medium">View on GitHub</span>
                </a>

                {/* Live URL (if available) */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full transition-all hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    <span className="font-medium">{project.demoLabel ?? 'Demo Vid'}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

