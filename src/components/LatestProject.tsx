'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LatestProject() {
  return (
    <section id="latest-project" className="py-32 px-4 sm:px-6 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-900/30 dark:to-purple-900/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
            Senaste Projektet: ChatGPT Folder Organizer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Ett Chrome-tillägg som låter dig sortera och organisera dina ChatGPT-konversationer i mappar. Håll ordning, hitta snabbt och jobba mer effektivt med en modern och snygg sidopanel direkt i ChatGPT.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/chatgpt-folder-organizer/kmcbbbkhhmbfhbhiimaejllgepilimom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            Se tillägget i Chrome Web Store
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/folders-dump.png"
            alt="ChatGPT Folder Organizer preview"
            width={400}
            height={300}
            className="rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
} 