'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from '@tabler/icons-react';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 dark:bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-3xl">
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Peter Ahlgren
              </h1>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-300 dark:bg-blue-500 rounded-full opacity-75"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-200 dark:bg-blue-400 rounded-full opacity-75"></div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer & Web Developer
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              I create modern and user-friendly web applications with a focus on performance and user experience.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="https://github.com/ahlgren1234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <IconBrandGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahlgrenpeter/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <IconBrandLinkedin size={24} />
              </a>
              <a
                href="/PeterAhlgrenResume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors"
              >
                <IconFileDownload size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-300 dark:bg-blue-500 rounded-full opacity-75 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-200 dark:bg-blue-400 rounded-full opacity-75 animate-pulse animation-delay-1000"></div>
            <Image
              src="/hi.png"
              alt="Peter Ahlgren"
              fill
              className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 relative z-10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Easter Egg Notification */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400 dark:text-gray-500 animate-pulse"
      >
        🥚 Look for an easter egg...
      </motion.div>
    </header>
  );
};

export default Header; 