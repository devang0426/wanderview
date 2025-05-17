import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Update localStorage when favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (destinationId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(destinationId)) {
        return prevFavorites.filter(id => id !== destinationId);
      } else {
        return [...prevFavorites, destinationId];
      }
    });
  };

  const isFavorite = (destinationId) => {
    return favorites.includes(destinationId);
  };

  return { favorites, toggleFavorite, isFavorite };
};