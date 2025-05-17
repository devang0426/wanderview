import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { modalVariants, backdropVariants } from '../utils/animations';
import FavoriteButton from './FavoriteButton';
import { useDrag } from '@use-gesture/react';

const Modal = ({ destination, isOpen, onClose, isFavorite, toggleFavorite }) => {
  const modalRef = useRef(null);
  
  const bind = useDrag(({ offset: [x, y], movement: [mx, my] }) => {
    if (modalRef.current) {
      const rotateY = mx / 10;
      const rotateX = -my / 10;
      modalRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }, {
    from: [0, 0],
    filterTaps: true,
    rubberband: true,
    bounds: { left: -100, right: 100, top: -100, bottom: 100 }
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            className="bg-white rounded-xl overflow-hidden shadow-3d max-w-lg w-full"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            {...bind()}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative h-64">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white transition-colors"
                onClick={onClose}
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{destination.name}</h2>
                  <p className="text-sm text-gray-600">{destination.region}</p>
                </div>
                <FavoriteButton 
                  isFavorite={isFavorite} 
                  onClick={() => toggleFavorite(destination.id)} 
                />
              </div>
              <p className="text-gray-700">{destination.description}</p>
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Drag to rotate the card</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;