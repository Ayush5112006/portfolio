import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Code2,
  Download,
  Eye,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  X,
} from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import Magnetic from "./Magnetic";
import SpotlightCard from "./SpotlightCard";

const techTags = [
  { icon: "fa-brands fa-python", label: "Python" },
  { icon: "fa-solid fa-brain", label: "Machine Learning" },
  { icon: "fa-brands fa-react", label: "React.js" },
  { icon: "fa-brands fa-node-js", label: "Node.js" },
  { icon: "fa-solid fa-database", label: "SQL" },
  { icon: "fa-solid fa-bolt", label: "FastAPI" },
  { icon: "fa-solid fa-eye", label: "OpenCV" },
  { icon: "fa-brands fa-git-alt", label: "Git" },
];

type CardSide = "right-top" | "right-bottom" | "left-top" | "left-bottom";

interface HeroCard {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  side: CardSide;
  float: number[];
  duration: number;
  delay: number;
}

const heroCards: HeroCard[] = [
  {
    icon: Brain,
    title: "AI / ML",
    subtitle: "Machine Learning",
    side: "right-top",
    float: [0, -8, 0],
    duration: 4,
    delay: 0,
  },
  {
    icon: Eye,
    title: "Computer Vision",
    subtitle: "Intelligent Applications",
    side: "left-top",
    float: [0, -7, 0],
    duration: 4.5,
    delay: 0.6,
  },
  {
    icon: Code2,
    title: "Full Stack",
    subtitle: "Frontend + Backend",
    side: "right-bottom",
    float: [0, 8, 0],
    duration: 5,
    delay: 1,
  },
  {
    icon: BarChart3,
    title: "Data Science",
    subtitle: "Data Analysis",
    side: "left-bottom",
    float: [0, -6, 0],
    duration: 4.5,
    delay: 0.5,
  },
];

const desktopPosition: Record<CardSide, CSSProperties> = {
  "right-top": { top: "-30px", right: "-170px" },
  "right-bottom": { bottom: "10px", right: "-175px" },
  "left-top": { top: "-30px", left: "-155px" },
  "left-bottom": { bottom: "-50px", left: "-155px" },
};

const HighlightCard = ({
  card,
  className,
  style,
}: {
  card: HeroCard;
  className: string;
  style?: CSSProperties;
}) => (
  <motion.div
    className={className}
    style={style}
    animate={{ y: card.float }}
    transition={{ duration: card.duration, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
  >
    <SpotlightCard className="stat-card w-full">
      <div className="stat-icon">
        <card.icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <span className="stat-val">{card.title}</span>
        <span className="stat-label block">{card.subtitle}</span>
      </div>
    </SpotlightCard>
  </motion.div>
);

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lineTransition = (i: number) => ({
  initial: { y: "115%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  transition: { duration: 0.85, delay: 0.15 + i * 0.13, ease: EASE },
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: EASE },
});

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const px = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const py = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateY = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const rotateX = useSpring(mouseY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    if (!showResume) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowResume(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showResume]);

  const onPointerMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx * 26);
    mouseY.set(ny * 20);
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
        style={{ zIndex: 1 }}
        onMouseMove={onPointerMove}
      >
        {/* Animated technical grid */}
        <div className="grid-backdrop" aria-hidden="true" />

        {/* Soft radial glows behind hero */}
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            width: "620px",
            height: "620px",
            top: "-160px",
            left: "-140px",
            background:
              "radial-gradient(circle, hsl(199 89% 60% / 0.16) 0%, transparent 65%)",
            x: px,
            y: py,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            width: "560px",
            height: "560px",
            bottom: "-180px",
            right: "-120px",
            background:
              "radial-gradient(circle, hsl(271 81% 56% / 0.14) 0%, transparent 65%)",
            x: px,
            y: py,
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="min-w-0">
              {/* Status + Student Badge */}
              <motion.div {...fadeUp(0.05)} className="mb-6 flex flex-wrap items-center gap-3">
                <div className="status-badge">
                  <span className="pulse-dot" />
                  Open to AI/ML &amp; Software Development Opportunities
                </div>
                <span className="hero-label">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  B.Tech CSE @ CHARUSAT
                </span>
              </motion.div>

              {/* Main Heading — staggered line reveal */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.12] mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="block overflow-hidden pb-1">
                  <motion.span className="block" {...lineTransition(0)}>
                    Building <span className="gradient-text-animated">Intelligent</span>
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <motion.span className="block" {...lineTransition(1)}>
                    Solutions With{" "}
                    <span className="gradient-text-animated">AI &amp; Code</span>
                  </motion.span>
                </span>
              </h1>

              {/* Bio */}
              <motion.p
                {...fadeUp(0.45)}
                className="text-base md:text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed"
              >
                Hi, I'm <strong className="text-foreground">Ayush Thummar</strong>. I'm a{" "}
                <strong className="text-foreground">B.Tech Computer Science Engineering</strong> student at{" "}
                <strong className="text-foreground">CHARUSAT</strong>, passionate about{" "}
                <strong className="text-foreground">Artificial Intelligence, Machine Learning, Data Science</strong>,
                and modern software development. I build practical applications that combine AI, software
                engineering, and real-world problem solving.
              </motion.p>

              {/* Quote */}
              <motion.div {...fadeUp(0.55)} className="hero-quote">
                <i className="fa-solid fa-quote-left mr-2 opacity-40" aria-hidden="true" />
                I enjoy turning ideas into practical applications — clean code, intelligent features, and
                real-world problem solving are my passions.
                <i className="fa-solid fa-quote-right ml-2 opacity-40" aria-hidden="true" />
              </motion.div>

              {/* Tech Tags */}
              <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-2 mb-8">
                {techTags.map((tag) => (
                  <span key={tag.label} className="tech-tag">
                    <i className={tag.icon} aria-hidden="true" />
                    {tag.label}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div {...fadeUp(0.75)} className="flex flex-wrap gap-4 mb-6">
                <Magnetic>
                  <a href="#projects" className="btn-primary-custom">
                    View Projects <ArrowRight className="h-4 w-4 btn-arrow" aria-hidden="true" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <button
                    onClick={() => setShowResume(true)}
                    className="btn-outline-custom"
                    aria-haspopup="dialog"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
                  </button>
                </Magnetic>
              </motion.div>

              {/* Social Links */}
              <motion.div {...fadeUp(0.85)} className="flex items-center gap-3">
                <a
                  href="https://github.com/Ayush5112006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  style={{
                    background: "hsl(225 45% 12%)",
                    border: "1px solid hsl(225 30% 20%)",
                  }}
                  aria-label="GitHub profile"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="mailto:thummarayush05@gmail.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  style={{
                    background: "hsl(225 45% 12%)",
                    border: "1px solid hsl(225 30% 20%)",
                  }}
                  aria-label="Send an email"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-thummar-471720309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  style={{
                    background: "hsl(225 45% 12%)",
                    border: "1px solid hsl(225 30% 20%)",
                  }}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Visual Side — Photo + Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center lg:items-end overflow-visible hero-visual"
            >
              <div
                className="relative"
                style={{ width: "260px", height: "260px", perspective: "1000px" }}
              >
                {/* Orbiting ring */}
                <div
                  className="hidden sm:block"
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
                  aria-hidden="true"
                />
                <div
                  className="hidden md:block"
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
                  aria-hidden="true"
                />

                {/* Spotlight halo behind the photo */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: "340px",
                    height: "340px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, hsl(199 89% 60% / 0.18) 0%, transparent 62%)",
                    filter: "blur(6px)",
                  }}
                  aria-hidden="true"
                />

                {/* Profile Photo — depth/parallax */}
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    x: px,
                    y: py,
                  }}
                  className="w-64 h-64 rounded-full overflow-hidden relative z-10"
                >
                  <div
                    className="w-full h-full rounded-full overflow-hidden"
                    style={{
                      border: "3px solid hsl(199 89% 60% / 0.3)",
                      boxShadow:
                        "0 0 40px hsl(199 89% 60% / 0.15), 0 0 80px hsl(271 81% 56% / 0.08)",
                    }}
                  >
                    <img
                      src="/Ayush short.jpeg"
                      alt="Ayush Thummar — AI/ML and Software Developer"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Glass reflection sweep */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(140deg, hsl(0 0% 100% / 0.14) 0%, transparent 42%)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </motion.div>

                {/* Floating highlight cards — desktop (lg+ on the right, xl+ on the left) */}
                {heroCards.map((card) => (
                  <HighlightCard
                    key={`desktop-${card.title}`}
                    card={card}
                    className={`absolute z-20 hidden ${
                      card.side.startsWith("left") ? "xl:flex" : "lg:flex"
                    }`}
                    style={{ ...desktopPosition[card.side], whiteSpace: "nowrap" }}
                  />
                ))}
              </div>

              {/* Floating highlight cards — stacked below the photo on smaller screens */}
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3 w-full mt-8 lg:hidden">
                {heroCards.map((card) => (
                  <HighlightCard key={`mobile-${card.title}`} card={card} className="min-w-0" />
                ))}
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
              initial={{ scale: 0.9, opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ scale: 0.94, opacity: 0, y: 10, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Resume preview"
              className="relative rounded-2xl shadow-2xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
              style={{
                background: "hsl(225 45% 8%)",
                border: "1px solid hsl(199 89% 60% / 0.22)",
                boxShadow: "0 30px 90px -30px hsl(228 60% 2% / 1)",
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
                    <Download className="h-4 w-4" aria-hidden="true" /> Download
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close resume preview"
                    autoFocus
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              {/* PDF viewer */}
              <iframe
                src="/ayush_Resume.pdf"
                className="flex-1 w-full"
                title="Ayush Thummar resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
