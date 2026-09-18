import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, X, Zap, Code2, Bot } from "lucide-react";
import { useState } from "react";

const techTags = [
  { icon: "fa-brands fa-react", label: "React" },
  { icon: "fa-brands fa-js", label: "Next.js" },
  { icon: "fa-solid fa-wind", label: "Tailwind CSS" },
  { icon: "fa-solid fa-database", label: "Supabase" },
  { icon: "fa-brands fa-node-js", label: "Node.js" },
  { icon: "fa-solid fa-robot", label: "AI Tools" },
];

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <div className="status-badge">
                  <span className="pulse-dot" />
                  Available for Freelancing & Projects
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Building{" "}
                <span className="gradient-text">Modern Web Apps</span>{" "}
                With Clean Code
              </h1>

              {/* Bio */}
              <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed">
                Hi, I'm <strong className="text-foreground">Ayush Thummar</strong>. As a{" "}
                <strong className="text-foreground">Full Stack Developer</strong>, I specialize in{" "}
                <strong className="text-foreground">React, Next.js, and modern web technologies</strong>.
                I build fast, responsive, and scalable applications that solve real-world problems.
              </p>

              {/* Quote */}
              <div className="hero-quote">
                <i className="fa-solid fa-quote-left mr-2 opacity-40" />
                I enjoy turning ideas into reality — clean UI, smooth interactions, and real-world problem solving are my passions.
                <i className="fa-solid fa-quote-right ml-2 opacity-40" />
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techTags.map((tag) => (
                  <span key={tag.label} className="tech-tag">
                    <i className={tag.icon} />
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#projects" className="btn-primary-custom">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  onClick={() => setShowResume(true)}
                  className="btn-outline-custom"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Ayush5112006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
                  style={{
                    background: "hsl(225 45% 12%)",
                    border: "1px solid hsl(225 30% 20%)",
                  }}
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="mailto:thummarayush05@gmail.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
                  style={{
                    background: "hsl(225 45% 12%)",
                    border: "1px solid hsl(225 30% 20%)",
                  }}
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-thummar-471720309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
                  style={{
                    background: "hsl(225 45% 12%)",
                    border: "1px solid hsl(225 30% 20%)",
                  }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Visual Side — Photo + Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center lg:justify-end overflow-visible"
              style={{ paddingRight: "180px", paddingTop: "40px", paddingBottom: "60px" }}
            >
              <div className="relative" style={{ width: "260px", height: "260px" }}>
                {/* Orbiting ring */}
                <div
                  style={{
                    position: "absolute",
                    width: "360px",
                    height: "360px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid hsl(271 81% 56% / 0.25)",
                    borderRadius: "50%",
                    animation: "spin-slow 25s linear infinite",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "430px",
                    height: "430px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px dashed hsl(199 89% 60% / 0.12)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />

                {/* Profile Photo */}
                <div
                  className="w-64 h-64 rounded-full overflow-hidden relative z-10"
                  style={{
                    border: "3px solid hsl(199 89% 60% / 0.3)",
                    boxShadow:
                      "0 0 40px hsl(199 89% 60% / 0.15), 0 0 80px hsl(271 81% 56% / 0.08)",
                  }}
                >
                  <img
                    src="/Ayush short.jpeg"
                    alt="Ayush Thummar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Stat Card 1 — top right, fully outside */}
                <motion.div
                  className="stat-card"
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-170px",
                    zIndex: 20,
                    whiteSpace: "nowrap",
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="stat-icon">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="stat-val">5+</span>
                    <span className="stat-label block">Projects Delivered</span>
                  </div>
                </motion.div>

                {/* Stat Card 2 — bottom right, fully outside */}
                <motion.div
                  className="stat-card"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "-175px",
                    zIndex: 20,
                    whiteSpace: "nowrap",
                  }}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="stat-icon">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="stat-val">Full Stack</span>
                    <span className="stat-label block">Frontend + Backend</span>
                  </div>
                </motion.div>

                {/* Stat Card 3 — bottom left, fully outside */}
                <motion.div
                  className="stat-card"
                  style={{
                    position: "absolute",
                    bottom: "-50px",
                    left: "-155px",
                    zIndex: 20,
                    whiteSpace: "nowrap",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="stat-icon">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="stat-val">AI Powered</span>
                    <span className="stat-label block">Smart Integrations</span>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "hsl(228 60% 4% / 0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl shadow-2xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
              style={{
                background: "hsl(225 45% 8%)",
                border: "1px solid hsl(225 30% 16% / 0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid hsl(225 30% 16% / 0.4)" }}
              >
                <span className="font-semibold text-foreground">Resume Preview</span>
                <div className="flex items-center gap-3">
                  <a
                    href="/ayush_Resume.pdf"
                    download="ayush_Resume.pdf"
                    className="btn-primary-custom text-xs py-2 px-4"
                  >
                    <Download className="h-4 w-4" /> Download
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              {/* PDF viewer */}
              <iframe
                src="/ayush_Resume.pdf"
                className="flex-1 w-full"
                title="Ayush Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
