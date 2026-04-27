import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'motion/react';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
  staggerChildren?: boolean;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  delay = 0.2,
  direction = "up",
  duration = 0.5,
  className = "",
  staggerChildren = false
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariants = (): Variants => {
    switch (direction) {
      case "up": return {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      };
      case "down": return {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 }
      };
      case "left": return {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 }
      };
      case "right": return {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 }
      };
      default: return {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 }
      };
    }
  };

  return (
    <div ref={ref} className={className} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration,
          delay: delay,
          ease: "easeOut",
          staggerChildren: staggerChildren ? 0.1 : 0
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
