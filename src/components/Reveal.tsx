import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "article" | "header" | "footer";
};

const Reveal = ({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  blur = 6,
  duration = 0.7,
  once = true,
  as = "div",
}: RevealProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      x,
      scale,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
