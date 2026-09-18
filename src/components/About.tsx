import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Target, GraduationCap } from "lucide-react";

const aboutCards = [
  {
    icon: Code2,
    faIcon: "fa-solid fa-code",
    title: "Who I Am",
    description:
      "I'm a Full Stack Developer specializing in React, Next.js, and modern web technologies. I love building products that make a real difference and push the boundaries of what's possible on the web.",
  },
  {
    icon: Target,
    faIcon: "fa-solid fa-bullseye",
    title: "My Mission",
    description:
      "To create innovative, user-centric applications that solve real-world problems. I believe in clean code, continuous learning, and delivering exceptional digital experiences.",
  },
  {
    icon: GraduationCap,
    faIcon: "fa-solid fa-graduation-cap",
    title: "Education",
    description:
      "Currently pursuing a degree in Computer Science & Engineering. Complementing academics with hands-on projects, open-source contributions, and freelance work.",
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
            A passionate developer turning ideas into digital reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "hsl(199 89% 60% / 0.1)",
                  border: "1px solid hsl(199 89% 60% / 0.15)",
                }}
              >
                <i
                  className={`${item.faIcon} text-lg`}
                  style={{ color: "hsl(199 89% 60%)" }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
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

export default About;
