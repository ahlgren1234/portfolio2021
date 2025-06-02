'use client';

import { motion } from 'framer-motion';
import { IconBriefcase, IconCalendar } from '@tabler/icons-react';
import Annotation from './Annotation';

const experiences = [
  {
    company: 'Enfo Group',
    title: 'Cloud Developer',
    period: '2022 - 2023',
    points: [
      'Developed mobile and web applications for major clients including Universeum and Ramboll',
      'Set up and managed systems using both Azure and AWS as backend infrastructure',
      'Built responsive and modern applications using React and Angular frameworks',
      'Utilized various technologies including HTML, CSS, JavaScript, Git for version control',
    ],
  },
  {
    company: 'Navigraph',
    title: 'Frontend Developer',
    period: '2020 - 2021',
    points: [
      'Developed navigation systems for flight simulators',
      'Led development of the developer portal for third-party accessories',
      'Built modern web applications using React, Next.js, and TypeScript',
      'Worked with cloud infrastructure using AWS for deployment and hosting',
    ],
  },
  {
    company: 'Peter Ahlgren Consulting',
    title: 'Fullstack Developer',
    period: '2000 - 2020',
    points: [
      'Operated as an independent freelance developer serving clients worldwide',
      'Developed full-stack solutions using PHP, MySQL, WordPress, and modern JavaScript frameworks',
      'Conducted programming courses and authored books on software development',
      'Managed cloud infrastructure using AWS and Azure for client projects',
    ],
  },
  {
    company: 'Holid',
    title: 'Fullstack Developer',
    period: '2018 - 2019',
    points: [
      'Developed a comprehensive website advertising system from design to deployment',
      'Managed the entire development lifecycle from concept to customer launch',
      'Built full-stack solutions using PHP, MySQL, and modern JavaScript',
      'Implemented version control and collaborative development using Git',
    ],
  },
  {
    company: 'Dormy Golf & Fashion',
    title: 'Web Developer',
    period: '2015 - 2016',
    points: [
      'Enhanced and maintained the company\'s e-commerce platform',
      'Developed corporate ordering website using C# and .NET framework',
      'Worked extensively with custom-built e-commerce platform',
      'Built responsive interfaces using HTML, CSS, JavaScript, and Foundation framework',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            Where I&apos;ve Worked
          </motion.h2>
          <Annotation
            text="Over 10 years of tech experience!"
            className="top-0 left-0 transform -translate-x-4 -translate-y-8"
            arrowDirection="right"
          />
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-lg bg-background-light dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 p-6 md:p-8 hover:border-primary-light dark:hover:border-primary-dark transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <IconBriefcase className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary-light dark:text-primary-dark mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-light/60 dark:text-text-dark/60 mt-2 md:mt-0">
                    <IconCalendar className="w-4 h-4" />
                    {experience.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {experience.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + pointIndex * 0.1 }}
                      className="flex items-start gap-2 text-text-light/80 dark:text-text-dark/80"
                    >
                      <span className="text-primary-light dark:text-primary-dark mt-1">▹</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 