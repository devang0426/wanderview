import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const FavoriteButton = ({ isFavorite, onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    
    // Only trigger confetti when adding to favorites
    if (!isFavorite) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    
    onClick();
  };

  return (
    <motion.button
      className={`rounded-full p-2 ${isFavorite ? 'text-yellow-400' : 'text-gray-400'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={isFavorite ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-6 h-6"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.button>
  );
};

export default FavoriteButton;