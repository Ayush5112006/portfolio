import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Alumni Connect",
    description:
      "A college networking platform that connects colleges, students, and alumni, with universal user invite flows and Razorpay payment API integration for premium features.",
    tags: ["Next.js", "Razorpay API", "Tailwind", "TypeScript"],
    category: "Web",
    icon: "fa-solid fa-user-group",
    liveUrl: "https://alumni-connects-snowy.vercel.app/",
    githubUrl: "https://github.com/Ayush5112006/depstar",
  },
  {
    title: "Hostel Mass Attendance",
    description:
      "A real-time hostel attendance management system with role-based access control and date-wise attendance tracking, built with Next.js and Supabase as the backend database.",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    category: "Web",
    icon: "fa-solid fa-clipboard-check",
    liveUrl: "https://avj-peach.vercel.app/login",
    githubUrl: "https://github.com/Ayush5112006/hostel",
  },
  {
    title: "DDU Hackathon Platform",
    description:
      "A hackathon management platform built for DDU, featuring team registration, project submissions, and real-time leaderboard using Next.js and SQL database.",
    tags: ["Next.js", "SQL", "Tailwind", "TypeScript"],
    category: "Web",
    icon: "fa-solid fa-trophy",
    liveUrl: "https://dduhackathon.vercel.app/",
    githubUrl: "https://github.com/Ayush5112006/dduhack",
  },
  {
    title: "Train Ticket Booking",
    description:
      "A comprehensive train ticket booking platform with seat selection, payment integration, and real-time schedule tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web",
    icon: "fa-solid fa-train",
    liveUrl: "",
    githubUrl: "https://github.com/Ayush5112006/Red-Feri",
  },
  {
    title: "Mobile App with AdMob",
    description:
      "Cross-platform mobile application integrated with Google AdMob for monetization and Firebase backend.",
    tags: ["React Native", "Firebase", "AdMob"],
    category: "App",
    icon: "fa-solid fa-mobile-screen-button",
    liveUrl: "",
    githubUrl: "",
  },
];

const filters = ["All", "Web", "App"];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
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
            A showcase of my recent work and personal projects
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background:
                    filter === f
                      ? "hsl(199 89% 60% / 0.15)"
                      : "hsl(225 40% 12%)",
                  color:
                    filter === f
                      ? "hsl(199 89% 60%)"
                      : "hsl(215 20% 55%)",
                  border:
                    filter === f
                      ? "1px solid hsl(199 89% 60% / 0.35)"
                      : "1px solid hsl(225 30% 16%)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "hsl(199 89% 60% / 0.1)",
                  border: "1px solid hsl(199 89% 60% / 0.15)",
                }}
              >
                <i
                  className={`${project.icon} text-lg`}
                  style={{ color: "hsl(199 89% 60%)" }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
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

              {/* Links */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium flex items-center gap-1.5 transition-colors duration-200"
                    style={{ color: "hsl(199 89% 60%)" }}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <i className="fa-brands fa-github" />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
