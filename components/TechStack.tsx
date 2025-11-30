'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Tech stack icons - use 'icon' for image paths, 'placeholder' for text/emoji
type TechIcon = {
  name: string
  icon?: string
  placeholder?: string
}

const techIcons: TechIcon[] = [
  {
    name: 'Java',
    icon: '/images/Java.png',
    placeholder: 'AHHHHHH',
  },
  {
    name: 'Node.js',
    icon: '/images/NJS.png',
    placeholder: 'N',
  },
  {
    name: 'Python',
    icon: '/images/python.png',
    placeholder: '🐍',
  },
  {
    name: 'C/C++',
    icon: '/images/cpp.png',
    placeholder: 'C',
  },
  {
    name: 'React',
     icon: '/images/React.png',
    placeholder: '⚛',
  },
]

export default function TechStack() {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-8">
          Experience With
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="tech-icon"
              title={tech.name}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-lg overflow-hidden">
                {tech.icon ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain p-1"
                  />
                ) : (
                  <span className="text-lg font-semibold text-gray-400">
                    {tech.placeholder ?? tech.name.charAt(0)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

