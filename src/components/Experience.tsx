import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2024",
    title: "Started Coding Journey",
    description:
      "Began learning HTML, CSS, JavaScript and PHP. Built my first static websites including a Train Ticket Booking System.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    year: "2025",
    title: "Building Projects",
    description:
      "Dove into React and Node.js. Started building full-stack projects and contributing to open source with many websites built.",
    tags: ["React", "Node.js", "Full Stack", "Open Source"],
  },
  {
    year: "2026",
    title: "Freelancing & Growth",
    description:
      "Started freelancing, delivered client projects, and expanded into Next.js, AI tools, n8n automation, and app development.",
    tags: ["Next.js", "AI Tools", "Freelancing", "App Dev"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            The path that shaped me as a developer
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Center vertical line */}
          <div
            className="absolute hidden md:block"
            style={{
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              transform: "translateX(-50%)",
              background: "linear-gradient(to bottom, hsl(199 89% 60% / 0.15), hsl(271 81% 56% / 0.3), hsl(199 89% 60% / 0.15))",
            }}
          />
          {/* Mobile line */}
          <div
            className="absolute md:hidden"
            style={{
              left: "16px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, hsl(199 89% 60% / 0.15), hsl(271 81% 56% / 0.3), hsl(199 89% 60% / 0.15))",
            }}
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative mb-16 last:mb-0 flex items-start"
                style={{
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  paddingLeft: isLeft ? 0 : undefined,
                }}
              >
                {/* Card */}
                <div
                  className="w-full md:w-[45%] pl-10 md:pl-0"
                  style={{
                    marginRight: isLeft ? undefined : 0,
                    paddingRight: isLeft ? undefined : undefined,
                  }}
                >
                  <div
                    className="glass-card p-6"
                    style={{
                      marginRight: isLeft ? "calc(10% + 20px)" : undefined,
                      marginLeft: isLeft ? undefined : "calc(10% + 20px)",
                    }}
                  >
                    {/* Year badge */}
                    <span
                      className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-3"
                      style={{
                        color: "hsl(199 89% 60%)",
                        background: "hsl(199 89% 60% / 0.08)",
                        border: "1px solid hsl(199 89% 60% / 0.2)",
                      }}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg"
                          style={{
                            background: "hsl(225 40% 12%)",
                            color: "hsl(215 20% 65%)",
                            border: "1px solid hsl(225 30% 18%)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div
                  className="absolute hidden md:flex items-center justify-center"
                  style={{
                    left: "50%",
                    top: "28px",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "hsl(199 89% 60%)",
                    boxShadow: "0 0 0 4px hsl(199 89% 60% / 0.2), 0 0 12px hsl(199 89% 60% / 0.4)",
                  }}
                />
                {/* Mobile dot */}
                <div
                  className="absolute md:hidden flex items-center justify-center"
                  style={{
                    left: "8px",
                    top: "28px",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "hsl(199 89% 60%)",
                    boxShadow: "0 0 0 4px hsl(199 89% 60% / 0.2), 0 0 12px hsl(199 89% 60% / 0.4)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
