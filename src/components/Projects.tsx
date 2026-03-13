import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Alumni Connect",
    description: "A college networking platform that connects colleges, students, and alumni, with universal user invite flows and Razorpay payment API integration for premium features.",
    tags: ["Next.js", "Razorpay API", "Tailwind", "TypeScript"],
    category: "Web",
    liveUrl: "https://alumni-connects-snowy.vercel.app/",
    githubUrl: "https://github.com/Ayush5112006/depstar",
  },
  {
    title: "Hostel Mass Attendance System",
    description: "A real-time hostel attendance management system with role-based access control and date-wise attendance tracking, built with Next.js and Supabase as the backend database.",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    category: "Web",
    liveUrl: "https://avj-peach.vercel.app/login",
    githubUrl: "https://github.com/Ayush5112006/hostel",
  },
  {
    title: "DDU Hackathon Platform",
    description: "A hackathon management platform built for DDU, featuring team registration, project submissions, and real-time leaderboard using Next.js and SQL database.",
    tags: ["Next.js", "SQL", "Tailwind", "TypeScript"],
    category: "Web",
    liveUrl: "https://dduhackathon.vercel.app/",
    githubUrl: "https://github.com/Ayush5112006/dduhack",
  },
  {
    title: "Train Ticket Booking System",
    description: "A comprehensive train ticket booking platform with seat selection, payment integration, and real-time schedule tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web",
    liveUrl: "",
    githubUrl: "https://github.com/Ayush5112006/Red-Feri",
  },
  {
    title: "Mobile App with AdMob",
    description: "Cross-platform mobile application integrated with Google AdMob for monetization and Firebase backend.",
    tags: ["React Native", "Firebase", "AdMob"],
    category: "App",
    liveUrl: "",
    githubUrl: "",
  },
];

const filters = ["All", "Web", "App"];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden hover-lift group"
            >
              {/* Gradient placeholder for project image */}
              <div className="h-48 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, hsl(239 84% 67% / ${0.15 + i * 0.05}), hsl(142 71% 45% / ${0.1 + i * 0.03}))` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground/10">{project.title.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.liveUrl ? (
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button variant="hero" size="sm" disabled>
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </Button>
                  )}
                  {project.githubUrl ? (
                    <Button variant="hero-outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> GitHub
                      </a>
                    </Button>
                  ) : (
                    <Button variant="hero-outline" size="sm" disabled>
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
