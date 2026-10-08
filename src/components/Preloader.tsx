import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const KEY = "ayush-preloader-seen";

/**
 * Very short (≈1.2s) premium intro. Runs once per session so repeat
 * visits are instant. Skipped entirely for reduced-motion users.
 */
const Preloader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable — show once anyway */
    }
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 1250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg md:text-2xl font-bold tracking-[0.3em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AYUSH<span className="gradient-text-animated">.THUMMAR</span>
          </motion.p>
          <div className="preloader-bar">
            <span />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground"
          >
            AI / ML • Software
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
