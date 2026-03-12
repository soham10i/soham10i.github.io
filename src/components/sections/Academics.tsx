'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/portfolio';

function getGradeColor(grade: number): string {
  if (grade <= 1.5) return 'bg-green-500';
  if (grade <= 2.0) return 'bg-cyan-500';
  if (grade <= 2.5) return 'bg-blue-500';
  return 'bg-yellow-500';
}

function getGradeWidth(grade: number): number {
  return Math.round(((4.0 - grade) / 3.0) * 100);
}

export default function Academics() {
  return (
    <section id="academics" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Academics</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex flex-wrap items-start gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-1">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
                <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-500/30">
                  {edu.grade}
                </div>
              </div>

              {edu.courses.length > 0 && (
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-4">Course Grades:</p>
                  <div className="space-y-3">
                    {edu.courses.map((course, ci) => (
                      <div key={ci}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm">{course.name}</span>
                          <span className="text-xs text-gray-400">
                            {course.grade !== null ? (
                              <>
                                <span className="font-semibold text-white">{course.grade.toFixed(1)}</span>
                                <span className="ml-1">({course.label})</span>
                              </>
                            ) : (
                              <span className="text-green-400">{course.label}</span>
                            )}
                          </span>
                        </div>
                        {course.grade !== null && (
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${getGradeWidth(course.grade)}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: ci * 0.1 }}
                              className={`h-full rounded-full ${getGradeColor(course.grade)}`}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    * German grading scale: 1.0 (best) – 4.0 (passing). Bar width = ((4.0 - grade) / 3.0) × 100%
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
