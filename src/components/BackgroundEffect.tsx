'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BackgroundEffect() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(600px circle at center, rgba(29, 78, 216, 0.15), transparent 80%)',
          width: '100%',
          height: '100%',
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
    </div>
  );
} 