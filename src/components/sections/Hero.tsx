'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 font-light mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/20"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
