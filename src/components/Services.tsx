import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Palette, Bot, Briefcase } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "Building modern, responsive web applications with React, Next.js, and cutting-edge technologies." },
  { icon: Smartphone, title: "App Development", description: "Cross-platform mobile applications with React Native and native integrations." },
  { icon: Palette, title: "UI/UX Design", description: "Designing intuitive, beautiful interfaces that delight users and drive engagement." },
  { icon: Bot, title: "AI Integration", description: "Integrating AI-powered features like chatbots, content generation, and intelligent automation." },
  { icon: Briefcase, title: "Freelancing", description: "End-to-end project delivery from concept to deployment with ongoing support." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What I can do for you</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 hover-lift group text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
