import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Target, Layers } from "lucide-react";

const aboutCards = [
  {
    icon: Code2,
    faIcon: "fa-solid fa-code",
    title: "How I Work",
    description:
      "I enjoy turning ideas into practical applications by combining programming, machine learning, APIs, databases, and modern web technologies.",
  },
  {
    icon: Layers,
    faIcon: "fa-solid fa-diagram-project",
    title: "Hands-On Projects",
    description:
      "Through academic projects, hackathons, and hands-on development, I have worked on AI-powered applications, full-stack systems, dashboards, and real-world software solutions.",
  },
  {
    icon: Target,
    faIcon: "fa-solid fa-bullseye",
    title: "Goals & Growth",
    description:
      "I'm continuously learning and looking for opportunities to grow as an AI/ML Engineer and Software Developer.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            B.Tech CSE student at CHARUSAT building AI-powered and full-stack applications
          </p>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed mb-12 -mt-6"
        >
          I'm <strong className="text-foreground">Ayush Thummar</strong>, a{" "}
          <strong className="text-foreground">B.Tech Computer Science Engineering</strong> student at{" "}
          <strong className="text-foreground">CHARUSAT</strong> with a strong interest in{" "}
          <strong className="text-foreground">Artificial Intelligence, Machine Learning, Data Science</strong>, and
          software development.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="glass-card p-8 group flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{
                  background: "hsl(199 89% 60% / 0.1)",
                  border: "1px solid hsl(199 89% 60% / 0.15)",
                }}
              >
                <i
                  className={`${item.faIcon} text-lg`}
                  style={{ color: "hsl(199 89% 60%)" }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
