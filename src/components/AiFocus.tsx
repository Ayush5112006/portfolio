import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const aiFocusAreas = [
  {
    icon: "fa-solid fa-brain",
    title: "Machine Learning",
    description: "Model building, evaluation, and practical ML applications.",
  },
  {
    icon: "fa-solid fa-eye",
    title: "Computer Vision",
    description: "Image and video analysis using computer vision techniques.",
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Data Science",
    description: "Data processing, analysis, visualization, and insights.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI Applications",
    description: "Integrating intelligent models into real software products.",
  },
  {
    icon: "fa-solid fa-sparkles",
    title: "Generative AI",
    description: "Exploring modern AI and LLM-based applications.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "AI + Full Stack",
    description: "Connecting AI models with production-ready web applications.",
  },
];

const AiFocus = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ai-focus"
      className="section-padding"
      ref={ref}
      style={{ zIndex: 1, position: "relative" }}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="section-title">
            AI &amp; <span className="gradient-text">Machine Learning</span>
          </h2>
          <p className="section-subtitle">
            Exploring intelligent systems that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFocusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group flex flex-col"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{
                  background: "hsl(271 81% 56% / 0.12)",
                  border: "1px solid hsl(271 81% 56% / 0.2)",
                }}
              >
                <i
                  className={`${area.icon} text-base`}
                  style={{ color: "hsl(271 90% 75%)" }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiFocus;
