import React from 'react';
import { motion } from 'framer-motion';
import { filterVariants } from '../utils/animations';

const FilterBar = ({ activeRegion, setActiveRegion, showFavorites, setShowFavorites, favoritesCount, totalCount }) => {
  const regions = ['All', 'Europe', 'Asia', 'Americas'];

  return (
    <motion.div 
      className="bg-white shadow-md rounded-lg p-4 mb-8 flex flex-col md:flex-row justify-between items-center"
      variants={filterVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex space-x-2 mb-4 md:mb-0">
        {regions.map((region) => (
          <button
            key={region}
            className={`px-4 py-2 rounded-full transition-colors ${activeRegion === region ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{favoritesCount}</span>/{totalCount} favorited
        </div>
        
        <button
          className={`px-4 py-2 rounded-full transition-colors ${showFavorites ? 'bg-yellow-400 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? 'Show All' : 'Favorites'}
        </button>
      </div>
    </motion.div>
  );
};

export default FilterBar;