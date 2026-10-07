import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const filters = ["All", "AI", "ML", "Web", "Mobile", "Other"];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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

  return (
    <>
    <section id="projects" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="section-title">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mb-8">
            Selected academic and personal projects across web and mobile
          </p>
          <div
            className="flex justify-center gap-2 flex-wrap"
            role="group"
            aria-label="Filter projects by category"
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
                      ? "hsl(199 89% 60% / 0.15)"
                      : "hsl(225 40% 12%)",
                    color: selected
                      ? "hsl(199 89% 60%)"
                      : "hsl(215 20% 55%)",
                    border: selected
                      ? "1px solid hsl(199 89% 60% / 0.35)"
                      : "1px solid hsl(225 30% 16%)",
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
        </motion.div>

        {filtered.length === 0 ? (
          <div className="glass-card p-8 text-center max-w-xl mx-auto">
            <p className="text-muted-foreground text-sm">
              No projects in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 group flex flex-col"
                style={
                  project.featured
                    ? { borderColor: "hsl(199 89% 60% / 0.35)" }
                    : undefined
                }
              >
                {/* Icon + badges */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
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
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
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

                {/* Case study */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full mb-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-125"
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
                      className="text-xs font-medium flex items-center gap-1.5 transition-colors duration-200 py-3"
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "hsl(228 60% 4% / 0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              className="relative rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
              style={{
                background: "hsl(225 45% 8%)",
                border: "1px solid hsl(225 30% 16% / 0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className="flex items-start justify-between gap-4 px-6 py-5 sticky top-0"
                style={{
                  borderBottom: "1px solid hsl(225 30% 16% / 0.4)",
                  background: "hsl(225 45% 8%)",
                }}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i
                      className={`${activeProject.icon} text-base`}
                      style={{ color: "hsl(199 89% 60%)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
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
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  style={{ border: "1px solid hsl(225 30% 18%)" }}
                  aria-label="Close case study"
                  autoFocus
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "hsl(199 89% 65%)" }}>
                    Overview
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "hsl(199 89% 65%)" }}>
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {activeProject.caseStudy.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
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
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "hsl(199 89% 65%)" }}>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
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

              {/* Footer links */}
              <div
                className="flex flex-wrap gap-4 px-6 py-4"
                style={{
                  borderTop: "1px solid hsl(225 30% 16% / 0.4)",
                  background: "hsl(225 40% 10%)",
                }}
              >
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1.5 py-2"
                    style={{ color: "hsl(199 89% 60%)" }}
                    aria-label={`Open ${activeProject.title} live demo (opens in a new tab)`}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    Live Demo
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors py-2"
                    aria-label={`View ${activeProject.title} source code on GitHub (opens in a new tab)`}
                  >
                    <i className="fa-brands fa-github" aria-hidden="true" />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
