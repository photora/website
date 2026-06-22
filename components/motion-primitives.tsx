"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  FadeIn — viewport-triggered fade + slide                            */
/* ------------------------------------------------------------------ */

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

const directionOffset = (dir: Direction) => {
  switch (dir) {
    case "up":
      return { y: 24 };
    case "down":
      return { y: -24 };
    case "left":
      return { x: 24 };
    case "right":
      return { x: -24 };
  }
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.35,
}: FadeInProps) {
  const offset = directionOffset(direction);

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  FadeInStagger — grid/flex parent that animates children in sequence */
/*  Renders children directly (no wrapper divs) so grid layout is kept. */
/*  Each child must be a direct element (not a fragment).              */
/* ------------------------------------------------------------------ */

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
}

export function FadeInStagger({
  children,
  className,
  stagger = 0.05,
}: FadeInStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wrap each child element in a grid/flex item with this component.
 * It inherits the stagger from the nearest FadeInStagger parent.
 */
export function FadeInItem({
  children,
  className,
  duration = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: "easeOut" },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ScaleIn — viewport-triggered scale + opacity + optional hover lift  */
/* ------------------------------------------------------------------ */

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  hover?: boolean;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.35,
  hover = true,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -4 } : undefined}
      className={cn("transition-shadow duration-200", className)}
    >
      {children}
    </motion.div>
  );
}
