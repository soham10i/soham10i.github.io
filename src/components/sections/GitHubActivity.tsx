'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';

export default function GitHubActivity() {
  const username = personalInfo.github;

  return (
    <section id="github" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">GitHub Activity</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @{username}
            </a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-4 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=8b949e&icon_color=58a6ff`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-4 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117`}
              alt="Top Languages"
              className="w-full rounded-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-4 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true&background=0d1117`}
            alt="GitHub Streak"
            className="w-full max-w-2xl rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
