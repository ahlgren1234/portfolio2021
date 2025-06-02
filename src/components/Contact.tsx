'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mb-8"
        >
          I&apos;m currently open to new opportunities and collaborations. Whether you have a question
          or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="mailto:ahlgren1234@gmail.com"
            className="inline-block px-8 py-4 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
} 