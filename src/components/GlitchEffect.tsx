'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlitchEffectProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
}

export default function GlitchEffect({ children, intensity = 0.5, duration = 0.2 }: GlitchEffectProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), duration * 1000);
    }, Math.random() * 1500 + 500); // More frequent glitches

    return () => clearInterval(glitchInterval);
  }, [duration]);

  return (
    <div className="relative">
      {isGlitching && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: -4, y: 4, skewX: -2 }}
            animate={{ x: 4, y: -4, skewX: 2 }}
            transition={{ duration: 0.05, repeat: 5, repeatType: "reverse" }}
            style={{
              color: '#ff0000',
              mixBlendMode: 'difference',
              opacity: intensity,
              filter: 'blur(0.5px)',
            }}
          >
            {children}
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: 4, y: -4, skewX: 2 }}
            animate={{ x: -4, y: 4, skewX: -2 }}
            transition={{ duration: 0.05, repeat: 5, repeatType: "reverse" }}
            style={{
              color: '#00ff00',
              mixBlendMode: 'difference',
              opacity: intensity,
              filter: 'blur(0.5px)',
            }}
          >
            {children}
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: -2, y: -2, skewY: -2 }}
            animate={{ x: 2, y: 2, skewY: 2 }}
            transition={{ duration: 0.05, repeat: 5, repeatType: "reverse" }}
            style={{
              color: '#0000ff',
              mixBlendMode: 'difference',
              opacity: intensity * 0.7,
              filter: 'blur(0.5px)',
            }}
          >
            {children}
          </motion.div>
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 