'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GlitchEffect from './GlitchEffect';
import GameBackground from './GameBackground';

interface Score {
  name: string;
  score: number;
  date: string;
}

export default function Game() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboard, setLeaderboard] = useState<Score[]>([]);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('%c🎮 Psst! Press "G" to find the secret game!', 'color: #3B82F6; font-size: 16px; font-weight: bold;');
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'g') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    // Load leaderboard from API
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/scores');
        const data = await response.json();
        setLeaderboard(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  const saveScore = async () => {
    if (!playerName.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playerName,
          score: score,
        }),
      });

      const updatedLeaderboard = await response.json();
      setLeaderboard(updatedLeaderboard);
      setShowNameInput(false);
      setShowLeaderboard(true);
    } catch (error) {
      console.error('Error saving score:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setShowLeaderboard(false);
    moveDot();
  };

  const moveDot = () => {
    if (!gameAreaRef.current) return;
    
    const area = gameAreaRef.current.getBoundingClientRect();
    const newX = Math.random() * (area.width - 40);
    const newY = Math.random() * (area.height - 40);
    
    setPosition({ x: newX, y: newY });
  };

  const handleDotClick = () => {
    if (!isPlaying) return;
    setScore(prev => prev + 1);
    moveDot();
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      setShowNameInput(true);
    }

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  if (!isVisible) return null;

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <GlitchEffect intensity={0.6}>
          <h2 className="text-3xl font-bold text-center mb-8">Catch the Dot! 🎮</h2>
        </GlitchEffect>
        
        <div className="text-center mb-4">
          <GlitchEffect intensity={0.5}>
            <p className="text-xl">Score: {score}</p>
            <p className="text-xl">Time: {timeLeft}s</p>
          </GlitchEffect>
        </div>

        {showNameInput && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-2 border rounded-lg mr-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800"
              maxLength={20}
            />
            <button
              onClick={saveScore}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Saving...' : 'Save Score'}
            </button>
          </motion.div>
        )}

        {showLeaderboard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <GlitchEffect intensity={0.5}>
              <h3 className="text-2xl font-bold text-center mb-4">🏆 Global Leaderboard</h3>
            </GlitchEffect>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              {leaderboard.map((entry, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <span className="font-medium">{entry.name}</span>
                  <span>{entry.score} points</span>
                  <span className="text-sm text-gray-500">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div 
          ref={gameAreaRef}
          className="relative w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
        >
          <GameBackground />
          {isPlaying ? (
            <motion.div
              className="absolute w-10 h-10 bg-blue-500 rounded-full cursor-pointer"
              style={{ left: position.x, top: position.y }}
              onClick={handleDotClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <GlitchEffect intensity={0.7}>
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  {timeLeft === 30 ? 'Start Game' : 'Play Again'}
                </button>
              </GlitchEffect>
            </div>
          )}
        </div>

        <GlitchEffect intensity={0.4}>
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
            Click the dot as many times as you can before time runs out!
          </p>
        </GlitchEffect>
      </div>
    </section>
  );
} 