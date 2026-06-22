"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ViewfinderProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * A decorative frame with corner brackets echoing a camera viewfinder.
 * The signature design element for Photora.
 * Corners pulse subtly on viewport entry.
 */
export function Viewfinder({
  children,
  className,
  size = "md",
}: ViewfinderProps) {
  const cornerSize = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }[size];

  const borderWidth = {
    sm: "border-[1.5px]",
    md: "border-2",
    lg: "border-[3px]",
  }[size];

  const cornerClass = cn("absolute border-primary", borderWidth);

  return (
    <div className={cn("relative", className)}>
      {/* Top-left corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className={cn(
          cornerClass,
          "top-0 left-0 border-b-0 border-r-0",
          cornerSize,
        )}
      />
      {/* Top-right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        className={cn(
          cornerClass,
          "top-0 right-0 border-b-0 border-l-0",
          cornerSize,
        )}
      />
      {/* Bottom-left corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
        className={cn(
          cornerClass,
          "bottom-0 left-0 border-t-0 border-r-0",
          cornerSize,
        )}
      />
      {/* Bottom-right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        className={cn(
          cornerClass,
          "bottom-0 right-0 border-t-0 border-l-0",
          cornerSize,
        )}
      />
      {children}
    </div>
  );
}
