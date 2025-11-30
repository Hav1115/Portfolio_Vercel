'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { experiences } from '@/data/projects';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading gradient-text text-center mb-16"
        >
          Experience
        </motion.h2>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-4 mb-3 md:mb-0">
                <div className="relative w-12 h-12 rounded-xl bg-dark-600 flex items-center justify-center overflow-hidden border border-dark-500">
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-gray-300">
                      {exp.company.charAt(0)}
                    </span>
                  )}
                </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role} at {exp.company}
                    </h3>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

