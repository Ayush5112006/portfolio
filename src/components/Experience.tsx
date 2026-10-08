import { motion, useInView, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

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

/** Timeline marker that lights up as the scroll-drawn line reaches it. */
const MilestoneDot = ({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) => {
  const start = index / total;
  const scale = useTransform(progress, [start, start + 0.12], [0.55, 1]);
  const opacity = useTransform(progress, [start, start + 0.12], [0.3, 1]);
  const glow = useTransform(progress, [start, start + 0.14], [0, 1]);

  return (
    <span
      className="absolute top-[28px] left-[8px] md:left-1/2 z-10 flex h-4 w-4 -translate-y-1/2 md:-translate-x-1/2 items-center justify-center rounded-full"
      style={{ background: "hsl(199 89% 60%)" }}
      aria-hidden="true"
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ scale, opacity, boxShadow: "0 0 0 5px hsl(199 89% 60% / 0.22)" }}
      />
      <motion.span
        className="absolute h-9 w-9 rounded-full"
        style={{
          scale: glow,
          opacity: glow,
          background: "radial-gradient(circle, hsl(199 89% 60% / 0.45), transparent 70%)",
        }}
      />
    </span>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <section id="experience" className="section-padding" style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              My <span className="gradient-text">Journey</span>
            </>
          }
          subtitle="From first lines of code to AI and full-stack development"
        />

        <div className="max-w-5xl mx-auto relative" ref={ref}>
          {/* Track — desktop */}
          <div
            className="timeline-track absolute hidden md:block"
            style={{ left: "50%", top: 0, bottom: 0, width: "2px", marginLeft: "-1px" }}
            aria-hidden="true"
          />
          <motion.div
            className="timeline-fill absolute hidden md:block"
            style={{
              left: "50%",
              marginLeft: "-1px",
              top: 0,
              bottom: 0,
              width: "2px",
              scaleY: draw,
              transformOrigin: "top center",
            }}
            aria-hidden="true"
          />

          {/* Track — mobile */}
          <div
            className="timeline-track absolute md:hidden"
            style={{ left: "16px", top: 0, bottom: 0, width: "2px" }}
            aria-hidden="true"
          />
          <motion.div
            className="timeline-fill absolute md:hidden"
            style={{
              left: "16px",
              top: 0,
              bottom: 0,
              width: "2px",
              scaleY: draw,
              transformOrigin: "top center",
            }}
            aria-hidden="true"
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -40 : 40, filter: "blur(6px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-16 last:mb-0 flex items-start"
                style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}
              >
                {/* Card */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
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

                {/* Scroll-lit marker */}
                <MilestoneDot progress={draw} index={i} total={timeline.length} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
