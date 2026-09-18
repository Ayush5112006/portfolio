import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "fa-solid fa-globe",
    title: "Web Development",
    description:
      "Building modern, responsive web applications with React, Next.js, and cutting-edge technologies.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "App Development",
    description:
      "Cross-platform mobile applications with React Native and native integrations.",
  },
  {
    icon: "fa-solid fa-palette",
    title: "UI/UX Design",
    description:
      "Designing intuitive, beautiful interfaces that delight users and drive engagement.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI Integration",
    description:
      "Integrating AI-powered features like chatbots, content generation, and intelligent automation.",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Freelancing",
    description:
      "End-to-end project delivery from concept to deployment with ongoing support.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">What I can do for you</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "hsl(199 89% 60% / 0.1)",
                  border: "1px solid hsl(199 89% 60% / 0.15)",
                }}
              >
                <i
                  className={`${service.icon} text-xl`}
                  style={{ color: "hsl(199 89% 60%)" }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
