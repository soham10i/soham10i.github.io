'use client';

import { motion } from 'framer-motion';
import { MapPin, Code2, BrainCircuit, GraduationCap } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const stats = [
  { icon: Code2, label: 'Experience', value: '2+ Years', sub: 'Software Engineering' },
  { icon: BrainCircuit, label: 'Projects', value: '5+', sub: 'AI & Data Projects' },
  { icon: GraduationCap, label: 'Education', value: 'M.Sc. AI', sub: 'OTH Amberg-Weiden' },
  { icon: MapPin, label: 'Location', value: 'Germany', sub: 'Bavaria, Amberg' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My academic journey spans two countries — earning a top-ranked M.Sc. in Information Technology from 
              Sardar Patel University in India, followed by professional experience at Altera Digital Health 
              (formerly Allscripts), where I built data pipelines and clinical analytics tools.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently pursuing my second Master&apos;s in AI at OTH Amberg-Weiden, I focus on autonomous systems, 
              deep learning, and digital twins. I believe in building intelligent systems that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
