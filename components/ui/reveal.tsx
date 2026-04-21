"use client";

import { revealTransition, revealVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({
  className,
  delay = 0,
  initial,
  animate,
  whileInView,
  variants,
  transition,
  viewport,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)} {...props} />;
  }

  return (
    <motion.div
      initial={initial ?? "hidden"}
      whileInView={whileInView ?? "visible"}
      viewport={viewport ?? { once: true, amount: 0.3 }}
      variants={variants ?? revealVariants}
      transition={transition ?? { ...revealTransition, delay }}
      className={cn(className)}
      {...props}
    />
  );
}