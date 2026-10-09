import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import WavingPortfolioLanding from "@/components/ui/waving-portfolio-landing";
import { ArrowRight } from "lucide-react";

const KEY = "ayush-preloader-seen";

/**
 * Premium Waving Portfolio Intro & Preloader.
 * Plays a clean, interactive poster intro sequence for Ayush Thummar.
 * Remembers session preference so repeat navigations are fast, while
 * keeping an interactive option to explore or skip instantly.
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
      /* storage unavailable — show intro once */
    }

    setVisible(true);
    // Smooth auto-transition after intro completion (5.5s), or user can click EXPLORE PORTFOLIO anytime
    const timer = window.setTimeout(() => setVisible(false), 5500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#040711] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Portfolio Intro"
        >
          {/* Top Skip / Enter Site Button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-6 right-6 z-[210] flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-sky-500/30 text-xs font-semibold tracking-widest text-sky-300 backdrop-blur-md transition-all shadow-lg hover:border-sky-400 cursor-pointer group"
            aria-label="Skip intro and enter portfolio website"
          >
            <span>EXPLORE PORTFOLIO</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-sky-400" />
          </button>

          <div className="w-full h-full flex items-center justify-center max-w-7xl mx-auto px-4">
            <WavingPortfolioLanding
              name="Ayush Thummar"
              year="2026"
              roles={["AI / ML", "Software"]}
              lettersLeft={["P", "F"]}
              giantLetter="O"
              lettersRight={["RT", "LIO"]}
              title="Ayush Thummar Portfolio"
              signature="AYUSH/THUMMAR"
              greeting="Hi, I'm Ayush!"
              accent="#38bdf8"
              paper="#040711"
              ink="#f8fafc"
              intro={true}
              height="100vh"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
