'use client';

import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute -top-24 right-0 sm:-right-20 lg:-right-32 z-30"
        >
          <span className="handwritten-large text-right block">
            Crafting digital<br />experiences with<br />passion & precision!
          </span>
        </motion.div>

        <div className="relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I&apos;m Peter Ahlgren
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400"
          >
            I build things for the web
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-gray-600 dark:text-gray-400 text-lg"
          >
            I&apos;m a software engineer specializing in building exceptional digital experiences.
            Currently, I&apos;m focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center space-x-4"
          >
            <a
              href="https://github.com/ahlgren1234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahlgrenpeter/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="/PeterAhlgrenResume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            >
              <IconFileDownload size={20} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 