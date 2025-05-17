import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '../utils/animations';

const Card = ({ destination, index, onClick, isFavorite }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setMousePosition({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${mousePosition.rotateX}deg) rotateY(${mousePosition.rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-3d h-64 w-full">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{destination.name}</h3>
            <p className="text-sm">{destination.region}</p>
          </div>
          {isFavorite && (
            <div className="absolute top-2 right-2">
              <span className="text-yellow-400 text-2xl">★</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;