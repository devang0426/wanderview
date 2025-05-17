import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Modal from './Modal';
import FilterBar from './FilterBar';
import { destinations } from '../data/destinations';
import { useFavorites } from '../hooks/useFavorites';

const Gallery = () => {
  const [activeRegion, setActiveRegion] = useState('All');
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const filteredDestinations = destinations.filter(destination => {
    const regionMatch = activeRegion === 'All' || destination.region === activeRegion;
    const favoriteMatch = !showFavorites || isFavorite(destination.id);
    return regionMatch && favoriteMatch;
  });

  const handleCardClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handleCloseModal = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <FilterBar 
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
        favoritesCount={favorites.length}
        totalCount={destinations.length}
      />
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredDestinations.map((destination, index) => (
          <Card 
            key={destination.id}
            destination={destination}
            index={index}
            onClick={() => handleCardClick(destination)}
            isFavorite={isFavorite(destination.id)}
          />
        ))}
      </motion.div>
      
      {selectedDestination && (
        <Modal 
          destination={selectedDestination}
          isOpen={!!selectedDestination}
          onClose={handleCloseModal}
          isFavorite={isFavorite(selectedDestination.id)}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default Gallery;