import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";

const facts = [
  { icon: "fa-solid fa-graduation-cap", text: "B.Tech CSE · CHARUSAT" },
  {
    icon: "fa-solid fa-rocket",
    text: `${projects.filter((p) => p.liveUrl).length} Projects Live`,
  },
  { icon: "fa-solid fa-brain", text: "AI/ML + Full-Stack" },
  { icon: "fa-solid fa-handshake", text: "Open to Internships & Collabs" },
];

const TrustStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="border-y"
      style={{
        borderColor: "hsl(225 30% 16% / 0.5)",
        background: "hsl(225 40% 11% / 0.35)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <ul
        className="container mx-auto py-5 px-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        aria-label="Quick facts"
      >
        {facts.map((fact, i) => (
          <li key={fact.text} className="flex items-center gap-7">
            {i > 0 && (
              <span
                className="hidden sm:block w-px h-4"
                style={{ background: "hsl(225 30% 20%)" }}
                aria-hidden="true"
              />
            )}
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <i
                className={`${fact.icon} text-xs`}
                style={{ color: "hsl(199 89% 60%)" }}
                aria-hidden="true"
              />
              {fact.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TrustStrip;
