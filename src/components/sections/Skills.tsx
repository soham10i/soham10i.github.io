'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

const categoryColors: Record<string, string> = {
  Programming: 'from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-300',
  'ML & AI': 'from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-300',
  'Data & Cloud': 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 text-cyan-300',
  Visualization: 'from-green-500/20 to-green-600/5 border-green-500/30 text-green-300',
  Tools: 'from-orange-500/20 to-orange-600/5 border-orange-500/30 text-orange-300',
};

const badgeColors: Record<string, string> = {
  Programming: 'bg-blue-500/15 text-blue-300 border-blue-500/20 hover:bg-blue-500/30',
  'ML & AI': 'bg-purple-500/15 text-purple-300 border-purple-500/20 hover:bg-purple-500/30',
  'Data & Cloud': 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/30',
  Visualization: 'bg-green-500/15 text-green-300 border-green-500/20 hover:bg-green-500/30',
  Tools: 'bg-orange-500/15 text-orange-300 border-orange-500/20 hover:bg-orange-500/30',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${categoryColors[category]} border`}
            >
              <h3 className={`text-base font-semibold mb-4 ${categoryColors[category].split(' ').pop()}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-default ${badgeColors[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
