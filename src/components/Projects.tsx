import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

const filters = ["All", "AI", "ML", "Web", "Mobile", "Other"];

const Tag = ({ children }: { children: string }) => (
  <span
    className="px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-300"
    style={{
      background: "hsl(225 40% 12%)",
      color: "hsl(215 20% 65%)",
      border: "1px solid hsl(225 30% 18%)",
    }}
  >
    {children}
  </span>
);

const Projects = () => {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const countFor = (f: string) =>
    f === "All"
      ? projects.length
      : projects.filter((p) => p.categories.includes(f)).length;

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  const [lead, ...rest] = filtered;

  return (
    <>
      <section
        id="projects"
        className="section-padding"
        ref={ref}
        style={{ zIndex: 1, position: "relative" }}
      >
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Key <span className="gradient-text">Projects</span>
              </>
            }
            subtitle="Selected academic and personal projects across web and mobile"
          />

          <Reveal
            delay={0.1}
            y={16}
            blur={6}
            className="flex justify-center gap-2 flex-wrap mb-12 -mt-8"
          >
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex justify-center gap-2 flex-wrap"
            >
              {filters.map((f) => {
                const selected = filter === f;
                const count = countFor(f);
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={selected}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 inline-flex items-center gap-2"
                    style={{
                      background: selected
                        ? "linear-gradient(135deg, hsl(199 89% 60% / 0.18), hsl(271 81% 56% / 0.16))"
                        : "hsl(225 40% 12%)",
                      color: selected ? "hsl(199 89% 65%)" : "hsl(215 20% 55%)",
                      border: selected
                        ? "1px solid hsl(199 89% 60% / 0.4)"
                        : "1px solid hsl(225 30% 16%)",
                      boxShadow: selected ? "0 0 20px hsl(199 89% 60% / 0.15)" : "none",
                      opacity: !selected && count === 0 ? 0.55 : 1,
                    }}
                  >
                    {f}
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-md"
                      style={{
                        background: selected
                          ? "hsl(199 89% 60% / 0.2)"
                          : "hsl(225 30% 16%)",
                        color: selected
                          ? "hsl(199 89% 70%)"
                          : "hsl(215 20% 45%)",
                      }}
                      aria-hidden="true"
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <div className="glass-card p-8 text-center max-w-xl mx-auto">
              <p className="text-muted-foreground text-sm">
                No projects in this category yet.
              </p>
            </div>
          ) : (
            <>
              {/* ── Featured / lead project ── */}
              <Reveal key={lead.title} y={40} blur={10} duration={0.8} className="mb-6">
                <SpotlightCard className="rounded-3xl group">
                  <div className="grid lg:grid-cols-[1.05fr_1fr]">
                    {/* Visual */}
                    <div
                      className="relative image-reveal min-h-[220px] lg:min-h-[400px] overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(225 45% 12%) 0%, hsl(240 50% 12%) 55%, hsl(199 89% 60% / 0.22) 100%)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.35]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, hsl(0 0% 100% / 0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 100% / 0.06) 1px, transparent 1px)",
                          backgroundSize: "34px 34px",
                        }}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -right-16 -bottom-20 w-72 h-72 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, hsl(271 81% 56% / 0.35), transparent 65%)",
                        }}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -left-14 -top-16 w-64 h-64 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, hsl(199 89% 60% / 0.3), transparent 65%)",
                        }}
                        aria-hidden="true"
                      />
                      <i
                        className={`${lead.icon} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] lg:text-[110px] transition-transform duration-700 group-hover:scale-110`}
                        style={{
                          color: "hsl(0 0% 100% / 0.14)",
                          textShadow: "0 0 60px hsl(199 89% 60% / 0.35)",
                        }}
                        aria-hidden="true"
                      />
                      <span
                        className="absolute top-5 left-5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] rounded-lg backdrop-blur-md"
                        style={{
                          background: "hsl(228 60% 4% / 0.6)",
                          color: "hsl(199 89% 72%)",
                          border: "1px solid hsl(199 89% 60% / 0.35)",
                        }}
                      >
                        Featured
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-7 md:p-10 flex flex-col">
                      <span className="eyebrow">{lead.highlight}</span>
                      <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3 transition-transform duration-500 group-hover:translate-x-1">
                        {lead.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                        {lead.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-7">
                        {lead.tags.map((tag, i) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                          >
                            <Tag>{tag}</Tag>
                          </motion.span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-3">
                        <Magnetic strength={0.22}>
                          <button
                            onClick={() => setActiveProject(lead)}
                            className="btn-primary-custom text-[13px]"
                            aria-label={`Open case study for ${lead.title}`}
                            aria-haspopup="dialog"
                          >
                            View Case Study
                            <ArrowUpRight className="h-4 w-4 btn-arrow" aria-hidden="true" />
                          </button>
                        </Magnetic>
                        {lead.githubUrl && (
                          <a
                            href={lead.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-custom text-[13px]"
                            aria-label={`View ${lead.title} source code on GitHub (opens in a new tab)`}
                          >
                            <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                          </a>
                        )}
                        {lead.liveUrl && (
                          <a
                            href={lead.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-custom text-[13px]"
                            aria-label={`Open ${lead.title} live demo (opens in a new tab)`}
                          >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>

              {/* ── Remaining projects ── */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((project, i) => (
                  <Reveal key={project.title} delay={i * 0.08} y={30} blur={8}>
                    <SpotlightCard
                      className="bento-card p-6 h-full flex flex-col"
                      style={
                        project.featured
                          ? { borderColor: "hsl(199 89% 60% / 0.35)" }
                          : undefined
                      }
                    >
                      {/* Icon + badges */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 flex-shrink-0"
                          style={{
                            background: "hsl(199 89% 60% / 0.1)",
                            border: "1px solid hsl(199 89% 60% / 0.18)",
                          }}
                        >
                          <i
                            className={`${project.icon} text-lg`}
                            style={{ color: "hsl(199 89% 60%)" }}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex flex-col items-end gap-1.5 text-right">
                          {project.featured && (
                            <span
                              className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg"
                              style={{
                                background: "hsl(271 81% 56% / 0.18)",
                                color: "hsl(271 90% 78%)",
                                border: "1px solid hsl(271 81% 56% / 0.35)",
                              }}
                            >
                              Featured
                            </span>
                          )}
                          <span
                            className="px-2.5 py-1 text-[10px] font-semibold rounded-lg"
                            style={{
                              background: "hsl(225 40% 12%)",
                              color: "hsl(199 89% 65%)",
                              border: "1px solid hsl(199 89% 60% / 0.2)",
                            }}
                          >
                            {project.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-2 transition-transform duration-500 group-hover:translate-x-1">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>

                      {/* Case study */}
                      <button
                        onClick={() => setActiveProject(project)}
                        className="w-full mb-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-125 hover:-translate-y-0.5"
                        style={{
                          background: "hsl(199 89% 60% / 0.08)",
                          border: "1px solid hsl(199 89% 60% / 0.25)",
                          color: "hsl(199 89% 65%)",
                        }}
                        aria-label={`Open case study for ${project.title}`}
                        aria-haspopup="dialog"
                      >
                        View Case Study
                      </button>

                      {/* Links */}
                      <div className="flex gap-4 mt-auto pt-1 border-t border-border/40">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium flex items-center gap-1.5 transition-all duration-200 py-3 hover:translate-x-0.5"
                            style={{ color: "hsl(199 89% 60%)" }}
                            aria-label={`Open ${project.title} live demo (opens in a new tab)`}
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 py-3"
                            aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                          >
                            <i className="fa-brands fa-github" aria-hidden="true" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Case Study Drawer ── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100]"
            style={{ background: "hsl(228 60% 4% / 0.8)", backdropFilter: "blur(10px)" }}
            onClick={() => setActiveProject(null)}
          >
            <motion.aside
              initial={{ x: "100%", opacity: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.2 }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              className="absolute right-0 top-0 h-full w-full sm:w-[min(640px,92vw)] overflow-y-auto"
              style={{
                background: "hsl(225 45% 6%)",
                borderLeft: "1px solid hsl(199 89% 60% / 0.2)",
                boxShadow: "-30px 0 90px -30px hsl(228 60% 2% / 1)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className="flex items-start justify-between gap-4 px-6 py-5 sticky top-0 z-10 backdrop-blur-xl"
                style={{
                  borderBottom: "1px solid hsl(225 30% 16% / 0.5)",
                  background: "hsl(225 45% 6% / 0.88)",
                }}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(199 89% 60% / 0.12)",
                      border: "1px solid hsl(199 89% 60% / 0.2)",
                    }}
                  >
                    <i
                      className={`${activeProject.icon} text-base`}
                      style={{ color: "hsl(199 89% 60%)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1"
                      style={{ color: "hsl(199 89% 65%)" }}
                    >
                      Case Study
                    </p>
                    <h2 id="case-study-title" className="text-lg font-bold leading-tight">
                      {activeProject.title}
                    </h2>
                    <p className="text-xs mt-1" style={{ color: "hsl(215 20% 55%)" }}>
                      {activeProject.categories.join(" · ")} · {activeProject.highlight}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 hover:bg-white/5"
                  style={{ border: "1px solid hsl(225 30% 18%)" }}
                  aria-label="Close case study"
                  autoFocus
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-7 space-y-7">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: "hsl(199 89% 65%)" }}>
                    <span className="w-4 h-px" style={{ background: "hsl(199 89% 60%)" }} aria-hidden="true" />
                    Overview
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: "hsl(199 89% 65%)" }}>
                    <span className="w-4 h-px" style={{ background: "hsl(199 89% 60%)" }} aria-hidden="true" />
                    Key Highlights
                  </h3>
                  <ul className="space-y-2.5">
                    {activeProject.caseStudy.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed rounded-lg px-3 py-2.5"
                        style={{
                          background: "hsl(225 40% 12% / 0.5)",
                          border: "1px solid hsl(225 30% 16% / 0.7)",
                        }}
                      >
                        <i
                          className="fa-solid fa-check text-xs mt-1"
                          style={{ color: "hsl(199 89% 60%)" }}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: "hsl(199 89% 65%)" }}>
                    <span className="w-4 h-px" style={{ background: "hsl(199 89% 60%)" }} aria-hidden="true" />
                    Technology
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer links */}
              <div
                className="flex flex-wrap gap-3 px-6 py-5 sticky bottom-0"
                style={{
                  borderTop: "1px solid hsl(225 30% 16% / 0.5)",
                  background: "hsl(225 40% 9% / 0.92)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {activeProject.liveUrl ? (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-custom text-xs py-2.5 px-4"
                    aria-label={`Open ${activeProject.title} live demo (opens in a new tab)`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Live Demo
                  </a>
                ) : null}
                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-custom text-xs py-2.5 px-4"
                    aria-label={`View ${activeProject.title} source code on GitHub (opens in a new tab)`}
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    Source Code
                  </a>
                ) : null}
                {!activeProject.liveUrl && !activeProject.githubUrl && (
                  <p className="text-xs text-muted-foreground">
                    Source and live links for this project are being prepared.
                  </p>
                )}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
