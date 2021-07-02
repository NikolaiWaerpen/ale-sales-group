// Scroll library standard
export const SCROLL_DURATION = 1000;

// Animations
export const POPEFFECT = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.4,
    },
  },
};

export const FASTPOPEFFECT = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      delay: 6,
    },
  },
};
