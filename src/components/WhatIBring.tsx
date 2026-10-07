import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bringItems = [
  {
    icon: "fa-solid fa-layer-group",
    title: "End-to-End Delivery",
    description:
      "I build complete products — interface, backend, database, and deployment — as shown by Alumni Connect, Hostel Mass Attendance, and the DDU Hackathon Platform.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "AI/ML Foundations",
    description:
      "Hands-on with Python, machine learning, computer vision, and data science, applied through academic and personal projects.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Modern, Clean Code",
    description:
      "React, Next.js, TypeScript, and Tailwind — maintainable code with accessible, responsive interfaces.",
  },
  {
    icon: "fa-solid fa-code-branch",
    title: "Collaboration Ready",
    description:
      "Git-based workflows, clear communication, and a habit of documenting work so teams can move fast together.",
  },
];

const WhatIBring = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="what-i-bring"
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
            What I <span className="gradient-text">Bring</span>
          </h2>
          <p className="section-subtitle">
            The value I add to a team, client, or collaboration
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bringItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group flex flex-col"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{
                  background: "hsl(199 89% 60% / 0.1)",
                  border: "1px solid hsl(199 89% 60% / 0.15)",
                }}
              >
                <i
                  className={`${item.icon} text-base`}
                  style={{ color: "hsl(199 89% 60%)" }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
