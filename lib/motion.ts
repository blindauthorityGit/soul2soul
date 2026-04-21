export const revealTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};
