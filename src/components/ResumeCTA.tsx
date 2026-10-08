import { ArrowRight, Download, FileText, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

const ResumeCTA = () => {
  return (
    <section
      id="resume-cta"
      className="section-padding pt-0"
      style={{ zIndex: 1, position: "relative" }}
    >
      <div className="container mx-auto">
        <Reveal y={34} blur={10} duration={0.8}>
          <SpotlightCard className="p-8 md:p-14 text-center max-w-4xl mx-auto overflow-hidden rounded-3xl">
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, hsl(271 81% 56% / 0.18) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, hsl(199 89% 60% / 0.15) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex flex-col items-center gap-2">
                <span className="status-badge">
                  <span className="pulse-dot" />
                  Open to AI/ML &amp; Software Development Opportunities
                </span>
                <span className="text-xs text-muted-foreground">
                  Internships • Projects • Technical Collaborations
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Let's Build <span className="gradient-text">Something Meaningful</span>
              </h2>
              <p className="section-subtitle mx-auto mb-8">
                Recruiter or collaborator — I'm open to AI/ML, software development, and
                data-driven opportunities where I can learn, contribute, and solve real problems.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Magnetic strength={0.22}>
                  <a href="#contact" className="btn-primary-custom">
                    Let's Connect <ArrowRight className="h-4 w-4 btn-arrow" aria-hidden="true" />
                  </a>
                </Magnetic>
                <a href="#projects" className="btn-outline-custom">
                  View Projects
                </a>
                <a
                  href="/ayush_Resume.pdf"
                  download="ayush_Resume.pdf"
                  className="btn-outline-custom"
                >
                  <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
                </a>
                <a
                  href="/ayush_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom"
                  aria-label="View resume in a new tab"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" /> View Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-thummar-471720309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                </a>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
};

export default ResumeCTA;
