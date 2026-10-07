import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const exploring = [
  { icon: "fa-solid fa-sparkles", label: "Generative AI" },
  { icon: "fa-solid fa-brain", label: "LLM-Based Applications" },
  { icon: "fa-solid fa-eye", label: "Computer Vision Pipelines" },
  { icon: "fa-solid fa-bolt", label: "Serving ML Models with FastAPI" },
];

const CurrentlyExploring = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="exploring"
      className="section-padding pt-0"
      ref={ref}
      style={{ zIndex: 1, position: "relative" }}
      aria-labelledby="exploring-title"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="flex-shrink-0">
              <h2
                id="exploring-title"
                className="text-xl md:text-2xl font-bold whitespace-nowrap"
              >
                Currently <span className="gradient-text">Exploring</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Where my learning is pointed right now
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 md:justify-end flex-1">
              {exploring.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium"
                  style={{
                    background: "hsl(271 81% 56% / 0.10)",
                    color: "hsl(271 90% 82%)",
                    border: "1px solid hsl(271 81% 56% / 0.25)",
                  }}
                >
                  <i className={`${item.icon} text-[11px]`} aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyExploring;
