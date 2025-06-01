'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchLine {
  id: number;
  top: number;
  width: number;
  opacity: number;
  duration: number;
}

interface GlitchFlash {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
}

export default function GameBackground() {
  const [lines, setLines] = useState<GlitchLine[]>([]);
  const [flashes, setFlashes] = useState<GlitchFlash[]>([]);

  useEffect(() => {
    // Create random glitch lines
    const createLine = () => {
      const newLine: GlitchLine = {
        id: Date.now(),
        top: Math.random() * 100,
        width: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 0.5 + 0.1,
      };
      setLines(prev => [...prev, newLine]);
      setTimeout(() => {
        setLines(prev => prev.filter(line => line.id !== newLine.id));
      }, newLine.duration * 1000);
    };

    // Create random glitch flashes
    const createFlash = () => {
      const newFlash: GlitchFlash = {
        id: Date.now(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 50 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 0.3 + 0.1,
      };
      setFlashes(prev => [...prev, newFlash]);
      setTimeout(() => {
        setFlashes(prev => prev.filter(flash => flash.id !== newFlash.id));
      }, newFlash.duration * 1000);
    };

    // Create effects at random intervals
    const lineInterval = setInterval(createLine, Math.random() * 1000 + 500);
    const flashInterval = setInterval(createFlash, Math.random() * 800 + 300);

    return () => {
      clearInterval(lineInterval);
      clearInterval(flashInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {lines.map(line => (
        <motion.div
          key={line.id}
          className="absolute h-[2px] bg-blue-500"
          style={{
            top: `${line.top}%`,
            width: `${line.width}%`,
            opacity: line.opacity,
            filter: 'blur(1px)',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: line.duration }}
        />
      ))}
      {flashes.map(flash => (
        <motion.div
          key={flash.id}
          className="absolute bg-blue-500"
          style={{
            top: `${flash.top}%`,
            left: `${flash.left}%`,
            width: `${flash.size}px`,
            height: `${flash.size}px`,
            opacity: flash.opacity,
            filter: 'blur(2px)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: flash.opacity }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: flash.duration }}
        />
      ))}
    </div>
  );
} 