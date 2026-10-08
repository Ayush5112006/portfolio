import { motion, useScroll, useSpring } from "framer-motion";

/** Thin top-of-viewport scroll progress line. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

export default ScrollProgress;
