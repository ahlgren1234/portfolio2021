'use client';

import { motion } from 'framer-motion';
import { IconCertificate } from '@tabler/icons-react';
import Annotation from './Annotation';

const certifications = [
  {
    title: 'MS-900: Microsoft 365 Fundamentals Cloud',
    issuer: 'Microsoft',
    category: 'Cloud Computing',
  },
  {
    title: 'SC-900: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    category: 'Security',
  },
  {
    title: 'AZ-900: Azure Fundamentals',
    issuer: 'Microsoft',
    category: 'Cloud Computing',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    category: 'Networking',
  },
  {
    title: 'Operating Systems Basics',
    issuer: 'Cisco',
    category: 'Systems',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    category: 'Security',
  },
  {
    title: 'Endpoint Security',
    issuer: 'Cisco',
    category: 'Security',
  },
  {
    title: 'ITIL 4',
    issuer: 'Axelos',
    category: 'IT Service Management',
  },
  {
    title: 'C++ MCP',
    issuer: 'Microsoft',
    category: 'Programming',
  },
  {
    title: 'Visual Basic MCP',
    issuer: 'Microsoft',
    category: 'Programming',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            Certifications
          </motion.h2>
          <Annotation
            text="Always learning and growing!"
            className="top-0 left-0 transform -translate-x-4 -translate-y-8"
            arrowDirection="right"
            rotate={-8}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-lg bg-background-light dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 p-6 hover:border-primary-light dark:hover:border-primary-dark transition-colors">
                <div className="flex items-start gap-4">
                  <IconCertificate className="w-6 h-6 text-primary-light dark:text-primary-dark flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <p className="text-primary-light dark:text-primary-dark mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-1">
                      {cert.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 