'use client';

import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import Annotation from './Annotation';

const projects = [
  {
    title: 'SaaS Starter Kit',
    description: 'A production-ready SaaS starter kit with comprehensive features including JWT authentication, Stripe subscription billing, email verification via Resend, and MongoDB integration. Features a modern UI with dark mode, responsive design, and role-based access control. Perfect for quickly launching professional SaaS applications with enterprise-grade security and scalability.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe', 'JWT', 'Resend', 'Framer Motion'],
    github: 'https://github.com/ahlgren1234/saas-starter',
    external: '#',
  },
  {
    title: 'Currency Converter',
    description: 'A modern mobile currency converter application built with React Native and Expo. Features real-time currency updates via API, support for multiple languages, and a sleek dark/light theme interface. Includes a custom splash screen and intuitive user interface for easy currency conversions.',
    tech: ['React Native', 'Expo', 'TypeScript', 'REST API', 'i18n', 'Theme UI'],
    github: 'https://github.com/ahlgren1234/currency',
    external: '#',
  },
  {
    title: 'Color Palette Creator',
    description: 'An intuitive web application for creating and exploring color palettes. Users can generate, customize, and save color combinations for their design projects. Features a modern, responsive interface and real-time color preview capabilities.',
    tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Create React App', 'Vercel'],
    github: 'https://github.com/ahlgren1234/colorz',
    external: 'https://colorz-weld.vercel.app/',
  },
  {
    title: 'Wallpapers App',
    description: 'A feature-rich mobile application for browsing, downloading, and setting high-quality wallpapers. Users can explore various categories, save favorites, and instantly set wallpapers for their home and lock screens. Includes search functionality and an intuitive category-based browsing experience.',
    tech: ['React Native', 'TypeScript', 'Expo', 'CodeMagic CI/CD', 'REST API', 'Mobile Storage'],
    github: 'https://github.com/ahlgren1234/wallpapers',
    external: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            Some Things I&apos;ve Built
          </motion.h2>
          <Annotation
            text="Check out my newest cool project!"
            className="top-0 right-0 transform translate-x-4 -translate-y-8"
            arrowDirection="down"
          />
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative grid grid-cols-1 gap-4 p-4 md:p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <IconBrandGithub size={24} />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <IconExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 