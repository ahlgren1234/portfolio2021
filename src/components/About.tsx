'use client';

import { motion } from 'framer-motion';
import Annotation from './Annotation';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'C#',
  '.NET',
  'HTML & CSS',
  'Tailwind CSS',
  'Git',
  'SQL',
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            About Me
          </motion.h2>
          <Annotation
            text="Full-stack developer with a passion for React!"
            className="top-0 right-0 transform translate-x-4 -translate-y-8"
            arrowDirection="down"
            rotate={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 text-gray-600 dark:text-gray-400"
          >
            <p className="mb-4">
              Hello! I&apos;m Peter, a passionate software engineer who loves creating things for the web.
              My journey in web development started back when I discovered my fascination with building
              digital experiences that make a difference in people&apos;s lives.
            </p>
            <p className="mb-4">
              I focus on creating fast, responsive, and user-friendly applications
              that solve real-world problems. I&apos;m particularly interested in modern web technologies
              and best practices in software development.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-600 dark:text-gray-400"
                >
                  <span className="text-blue-500 mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 