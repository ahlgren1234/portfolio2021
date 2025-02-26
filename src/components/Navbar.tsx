'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { IconMenu2, IconX } from '@tabler/icons-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur">
      <nav className="px-4 md:px-6 mx-auto max-w-5xl h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base sm:text-lg font-bold hover:text-primary-light dark:hover:text-primary-dark transition-colors"
        >
          <Link href="/" className="flex items-center">
            <span className="hidden sm:block">Peter Ahlgren</span>
            <span className="sm:hidden">Peter A.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm hover:text-primary-light dark:hover:text-primary-dark transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-primary-light dark:text-primary-dark'
                      : ''
                  }`}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
            >
              <ul className="py-4 px-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2 last:mb-0"
                  >
                    <Link
                      href={item.href}
                      className={`block py-2 text-lg hover:text-primary-light dark:hover:text-primary-dark transition-colors ${
                        activeSection === item.name.toLowerCase()
                          ? 'text-primary-light dark:text-primary-dark'
                          : ''
                      }`}
                      onClick={() => {
                        setActiveSection(item.name.toLowerCase());
                        closeMenu();
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 