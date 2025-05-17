export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95 }
};

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotateY: 20,
    transition: {
      duration: 0.3
    }
  }
};

export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

export const filterVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};