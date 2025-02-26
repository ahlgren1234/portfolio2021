'use client';

import { motion } from 'framer-motion';

interface AnnotationProps {
  text: string;
  className?: string;
  rotate?: number;
  withArrow?: boolean;
  arrowDirection?: 'up' | 'down' | 'left' | 'right';
}

export default function Annotation({
  text,
  className = '',
  rotate = -6,
  withArrow = true,
  arrowDirection = 'right',
}: AnnotationProps) {
  const arrows = {
    right: '→',
    left: '←',
    up: '↑',
    down: '↓',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className={`absolute z-10 handwritten text-2xl text-primary-light dark:text-primary-dark ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {text} {withArrow && <span className="ml-2">{arrows[arrowDirection]}</span>}
    </motion.div>
  );
} 