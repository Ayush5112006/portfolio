import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCw, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const skills = [
  { name: "Python", icon: "fa-brands fa-python", color: "#3776ab", cat: "AI / ML" },
  { name: "Machine Learning", icon: "fa-solid fa-brain", color: "#a78bfa", cat: "AI / ML" },
  { name: "Computer Vision", icon: "fa-solid fa-eye", color: "#22d3ee", cat: "AI / ML" },
  { name: "Data Science", icon: "fa-solid fa-chart-line", color: "#f59e0b", cat: "Data" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e", cat: "Frontend" },
  { name: "React", icon: "fa-brands fa-react", color: "#61dafb", cat: "Frontend" },
  { name: "Next.js", icon: "fa-brands fa-react", color: "#ffffff", cat: "Frontend" },
  { name: "Tailwind", icon: "fa-solid fa-wind", color: "#38bdf8", cat: "Frontend" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#68a063", cat: "Backend" },
  { name: "Express", icon: "fa-solid fa-server", color: "#999999", cat: "Backend" },
  { name: "FastAPI", icon: "fa-solid fa-bolt", color: "#009688", cat: "Backend" },
  { name: "MongoDB", icon: "fa-solid fa-database", color: "#47a248", cat: "Database" },
  { name: "MySQL", icon: "fa-solid fa-database", color: "#00758f", cat: "Database" },
  { name: "Firebase", icon: "fa-solid fa-fire", color: "#ffca28", cat: "Database" },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#f05032", cat: "Tools" },
  { name: "AI Tools", icon: "fa-solid fa-robot", color: "#a78bfa", cat: "Tools" },
];

const categories = ["All", "AI / ML", "Data", "Frontend", "Backend", "Database", "Tools"];

const skillGroups = [
  {
    label: "Languages",
    color: "hsl(199 89% 60%)",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "AI / ML",
    color: "hsl(271 81% 56%)",
    items: ["Machine Learning", "Computer Vision", "Data Science", "AI Tools"],
  },
  {
    label: "Frontend",
    color: "hsl(199 89% 60%)",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind"],
  },
  {
    label: "Backend",
    color: "hsl(142 71% 45%)",
    items: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    label: "Database",
    color: "hsl(38 92% 50%)",
    items: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  },
  {
    label: "Tools & APIs",
    color: "hsl(215 20% 65%)",
    items: ["Git", "Vercel", "Razorpay API", "AdMob"],
  },
];

const skillDetails: Record<string, { description: string; tag: string }> = {
  Python: { description: "General-purpose programming for AI/ML, automation, data processing, and backend services.", tag: "AI / ML" },
  "Machine Learning": { description: "Supervised and unsupervised models, model evaluation, and practical machine learning workflows.", tag: "AI / ML" },
  "Computer Vision": { description: "Image and video analysis pipelines built with OpenCV and modern vision techniques.", tag: "AI / ML" },
  "Data Science": { description: "Data cleaning, exploration, visualization, and drawing insights from real-world datasets.", tag: "AI / ML" },
  HTML: { description: "Semantic markup and accessible web structures. Strong foundation in HTML5 elements and best practices.", tag: "Frontend" },
  CSS: { description: "Modern CSS with animations, Grid, Flexbox, and responsive design patterns. Pixel-perfect implementations.", tag: "Frontend" },
  JavaScript: { description: "ES6+, async/await, DOM manipulation, and modern JS patterns. Strong problem-solving with vanilla JS.", tag: "Frontend" },
  React: { description: "Component-based architecture, hooks, state management, and performance optimization in React applications.", tag: "Frontend" },
  "Next.js": { description: "Server-side rendering, API routes, dynamic routing, and full-stack development with Next.js framework.", tag: "Full Stack" },
  Tailwind: { description: "Utility-first CSS framework for rapid UI development with custom design systems and responsive layouts.", tag: "Frontend" },
  "Node.js": { description: "Server-side JavaScript runtime for building scalable backend services and RESTful APIs.", tag: "Backend" },
  Express: { description: "Minimal and flexible Node.js web application framework for building APIs and web servers.", tag: "Backend" },
  FastAPI: { description: "Fast, modern Python web framework used to serve ML models and data services through REST APIs.", tag: "Backend" },
  MongoDB: { description: "NoSQL database for flexible document storage, aggregation pipelines, and scalable data solutions.", tag: "Database" },
  MySQL: { description: "Relational database management with complex queries, joins, and structured data storage.", tag: "Database" },
  Git: { description: "Version control, branching strategies, collaboration workflows, and open-source contribution practices.", tag: "DevOps" },
  Firebase: { description: "Authentication, Firestore, Realtime Database, Cloud Functions, and hosting for rapid prototyping.", tag: "Backend" },
  "AI Tools": { description: "Integration of AI-powered features including chatbots, content generation, and workflow automation.", tag: "AI/ML" },
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState<string>("Python");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<"normal" | "reverse">("normal");
  const [autoCycling, setAutoCycling] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("All");

  const speed = 38; // seconds per full 360-degree rotation
  const radius = 200;
  const centerSize = 92;

  const isSpinning = !isPaused && !isHovered;

  // Auto-cycle through skills every 10 seconds
  const cycleSkill = useCallback(() => {
    setActiveSkill((current) => {
      const idx = skills.findIndex((s) => s.name === current);
      const next = (idx + 1) % skills.length;
      return skills[next].name;
    });
  }, []);

  useEffect(() => {
    // Pause auto-cycle when user is hovering or has stopped it
    if (!autoCycling || isHovered || isPaused) return;
    const timer = setInterval(cycleSkill, 8000);
    return () => clearInterval(timer);
  }, [autoCycling, isHovered, isPaused, cycleSkill]);

  // When user manually clicks a skill, pause auto-cycle for 30s then resume
  const handleSkillClick = (name: string) => {
    setActiveSkill(name);
    setAutoCycling(false);
    setTimeout(() => setAutoCycling(true), 30000);
  };

  return (
    <section id="skills" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tech <span className="gradient-text">Stack</span>
            </>
          }
          subtitle="An interactive orbit of my core skills, with a full grouped breakdown of my tech stack below."
        />

        {/* Category filter */}
        <Reveal
          delay={0.1}
          y={16}
          blur={6}
          className="flex flex-wrap justify-center gap-2 mb-10 -mt-8"
        >
          <div role="group" aria-label="Filter skills by category" className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => {
              const selected = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  aria-pressed={selected}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
                  style={{
                    background: selected
                      ? "linear-gradient(135deg, hsl(199 89% 60% / 0.2), hsl(271 81% 56% / 0.18))"
                      : "hsl(225 40% 12% / 0.7)",
                    color: selected ? "hsl(199 89% 70%)" : "hsl(215 20% 58%)",
                    border: selected
                      ? "1px solid hsl(199 89% 60% / 0.45)"
                      : "1px solid hsl(225 30% 16%)",
                    boxShadow: selected ? "0 0 18px hsl(199 89% 60% / 0.18)" : "none",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
        >
          {/* Orbiting Visual Column */}
          <div className="flex flex-col items-center">
            <div
              className="relative flex-shrink-0 transition-transform origin-center scale-[0.72] sm:scale-[0.88] md:scale-100 my-[-25px] sm:my-[-5px] md:my-0 group"
              style={{ width: "460px", height: "460px" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer decorative ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${radius * 2 + 40}px`,
                  height: `${radius * 2 + 40}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "1px solid hsl(225 30% 16% / 0.6)",
                  boxShadow: "0 0 50px hsl(199 89% 60% / 0.05)",
                }}
              />

              {/* Orbit guide track (where nodes revolve) */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "1px dashed hsl(199 89% 60% / 0.22)",
                }}
              />

              {/* Inner accent ring (counter-rotating dashed aesthetic) */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${radius * 1.3}px`,
                  height: `${radius * 1.3}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "1px dashed hsl(271 81% 56% / 0.25)",
                  animation: `tech-orbit-counter-spin 45s linear infinite`,
                  animationDirection: direction,
                  animationPlayState: isSpinning ? "running" : "paused",
                }}
              />

              {/* Center Hub */}
              <div
                className="absolute flex flex-col items-center justify-center rounded-full z-20 cursor-pointer select-none transition-all duration-300 hover:scale-105"
                style={{
                  width: `${centerSize}px`,
                  height: `${centerSize}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle, hsl(225 45% 13%) 0%, hsl(225 45% 8%) 100%)",
                  border: isSpinning ? "2px solid hsl(199 89% 60% / 0.5)" : "2px solid hsl(225 30% 25%)",
                  boxShadow: isSpinning
                    ? "0 0 35px hsl(199 89% 60% / 0.22), inset 0 0 15px hsl(199 89% 60% / 0.12)"
                    : "0 0 15px hsl(228 60% 2% / 0.5)",
                }}
                onClick={() => setIsPaused((prev) => !prev)}
                title={isPaused ? "Click to resume orbit rotation" : "Click to pause orbit rotation"}
              >
                <i
                  className="fa-solid fa-microchip text-xl transition-all duration-300"
                  style={{
                    color: isSpinning ? "hsl(199 89% 60%)" : "hsl(215 20% 60%)",
                    filter: isSpinning ? "drop-shadow(0 0 6px hsl(199 89% 60% / 0.5))" : "none",
                  }}
                />
                <span className="text-[10px] font-bold tracking-wider mt-1 text-foreground/90">
                  TECH CORE
                </span>
                <span className="text-[8px] font-medium tracking-wide text-primary/80 mt-0.5">
                  {isSpinning ? "ROTATING" : "PAUSED"}
                </span>
              </div>

              {/* Rotating Orbit Container */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none tech-orbit-track"
                style={{
                  animation: `tech-orbit-spin ${speed}s linear infinite`,
                  animationDirection: direction,
                  animationPlayState: isSpinning ? "running" : "paused",
                  transformOrigin: "center center",
                }}
              >
                {/* Orbiting Nodes */}
                {skills.map((skill, i) => {
                  const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const isActive = activeSkill === skill.name;
                  const dimmed = category !== "All" && skill.cat !== category;

                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      className="absolute flex flex-col items-center group/node cursor-pointer pointer-events-auto select-none transition-opacity duration-500"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                        opacity: dimmed ? 0.22 : 1,
                      }}
                      title={`Select ${skill.name}`}
                      aria-label={`Tech stack skill: ${skill.name}`}
                      aria-pressed={isActive}
                    >
                      {/* Counter-rotating element keeps icon & label always upright */}
                      <div
                        className="flex flex-col items-center gap-1 tech-orbit-node-inner"
                        style={{
                          animation: `tech-orbit-counter-spin ${speed}s linear infinite`,
                          animationDirection: direction,
                          animationPlayState: isSpinning ? "running" : "paused",
                          transformOrigin: "center center",
                        }}
                      >
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "scale-110" : "group-hover/node:scale-110"
                            }`}
                          style={{
                            background: isActive
                              ? "hsl(199 89% 60% / 0.22)"
                              : "hsl(225 45% 10%)",
                            border: isActive
                              ? "2px solid hsl(199 89% 60%)"
                              : "1px solid hsl(225 30% 20%)",
                            boxShadow: isActive
                              ? "0 0 20px hsl(199 89% 60% / 0.5), inset 0 0 10px hsl(199 89% 60% / 0.2)"
                              : "0 2px 10px hsl(228 60% 2% / 0.5)",
                          }}
                        >
                          <i
                            className={`${skill.icon} text-sm transition-transform duration-300 group-hover/node:scale-115`}
                            style={{ color: isActive ? "hsl(199 89% 60%)" : skill.color }}
                          />
                        </div>
                        <span
                          className={`text-[10px] font-semibold whitespace-nowrap px-1.5 py-0.5 rounded transition-all duration-300 ${isActive
                            ? "bg-primary/15 text-primary border border-primary/30 shadow-sm"
                            : "text-muted-foreground group-hover/node:text-foreground"
                            }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Orbit Controls Bar */}
            <div className="flex items-center gap-2.5 mt-5 z-10">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border/70 bg-card/70 hover:bg-card hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-200 shadow-sm cursor-pointer"
                aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
                title={isPaused ? "Resume rotation" : "Pause rotation"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-primary fill-primary" />
                    <span>Resume Orbit</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-primary" />
                    <span>Pause Orbit</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setDirection((prev) => (prev === "normal" ? "reverse" : "normal"))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border/70 bg-card/70 hover:bg-card hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-200 shadow-sm cursor-pointer"
                title="Change rotation direction"
                aria-label="Change rotation direction"
              >
                <RotateCw
                  className={`w-3 h-3 text-secondary transition-transform duration-300 ${direction === "reverse" ? "-scale-x-100" : ""
                    }`}
                />
                <span>{direction === "normal" ? "Clockwise" : "Counter-CW"}</span>
              </button>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-muted-foreground/70 pl-2 select-none">
                Hover to pause &amp; inspect
              </span>

              {/* Auto-cycle indicator */}
              <span
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold ml-auto"
                style={{
                  background: autoCycling && !isHovered && !isPaused
                    ? "hsl(142 71% 45% / 0.1)"
                    : "hsl(225 40% 12%)",
                  color: autoCycling && !isHovered && !isPaused
                    ? "hsl(142 71% 45%)"
                    : "hsl(215 20% 50%)",
                  border: autoCycling && !isHovered && !isPaused
                    ? "1px solid hsl(142 71% 45% / 0.3)"
                    : "1px solid hsl(225 30% 20%)",
                  transition: "all 0.3s",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: autoCycling && !isHovered && !isPaused ? "hsl(142 71% 45%)" : "hsl(215 20% 40%)",
                    display: "inline-block",
                    animation: autoCycling && !isHovered && !isPaused ? "pulse 1.5s ease-in-out infinite" : "none",
                  }}
                />
                {autoCycling && !isHovered && !isPaused ? "Auto 8s" : "Manual"}
              </span>
            </div>
          </div>

          {/* Details Card */}
          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.35 }}
            className="max-md:w-full max-w-md w-full"
          >
            <SpotlightCard className="glass-card p-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "hsl(199 89% 60% / 0.12)",
                  border: "1px solid hsl(199 89% 60% / 0.3)",
                  boxShadow: "0 0 20px hsl(199 89% 60% / 0.15)",
                }}
              >
                <i
                  className={`${skills.find((s) => s.name === activeSkill)?.icon} text-lg`}
                  style={{ color: "hsl(199 89% 60%)" }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{activeSkill}</h3>
                <span className="text-xs text-muted-foreground">Interactive Node Selected</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {skillDetails[activeSkill]?.description}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-border/40">
              <span
                className="inline-block px-3 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: "hsl(271 81% 56% / 0.12)",
                  color: "hsl(271 81% 56%)",
                  border: "1px solid hsl(271 81% 56% / 0.25)",
                }}
              >
                {skillDetails[activeSkill]?.tag}
              </span>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                View in Projects
              </a>
            </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Grouped Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 lg:mt-20"
        >
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Full Tech Stack
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div key={group.label} className="glass-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: group.color }}
                    aria-hidden="true"
                  />
                  <h4 className="text-sm font-semibold text-foreground">{group.label}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
