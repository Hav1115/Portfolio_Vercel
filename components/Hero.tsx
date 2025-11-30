'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6">
      {/* Profile Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8"
      >
        {/* Gradient background blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110" />
        
        {/* Image placeholder - Replace src with your image */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-dark-700 bg-dark-700">
          {/* Replace this div with your Image component */}
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-6xl">
            {/* Placeholder - Add your image here */}
            <span className="opacity-50">👨‍💻</span>
          </div>
          {/* Example with Next.js Image:
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
          */}
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight"
      >
        I build software and 
        <br />
        create content that  <span className="gradient-text">brings ideas to life!</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-400 text-center max-w-xl mb-10 leading-relaxed"
      >
        I’m a software engineer with a passion for building reliable backend systems, full-stack applications, and embedded systems projects.
        <br className="hidden md:block" />
        I'm a current student at the University of Texas at Austin
        <br className="hidden md:block" />
         pursuing a Bachelor of Science in Computer/Electrical Engineering and Economics.
        <br className="hidden md:block" />
        Graduating in May 2027.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a href="#contact" className="btn-primary">
          Get In Touch
        </a>
        <a href="#projects" className="btn-secondary">
          View Projects
        </a>
      </motion.div>
    </section>
  );
}

