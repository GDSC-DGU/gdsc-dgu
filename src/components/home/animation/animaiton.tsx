export const aniSlideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const aniFadein = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

export const aniSlideRight = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
