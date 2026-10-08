import { Code2, Target, Layers } from "lucide-react";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const aboutCards = [
  {
    icon: Code2,
    faIcon: "fa-solid fa-code",
    title: "How I Work",
    description:
      "I enjoy turning ideas into practical applications by combining programming, machine learning, APIs, databases, and modern web technologies.",
    wide: true,
  },
  {
    icon: Layers,
    faIcon: "fa-solid fa-diagram-project",
    title: "Hands-On Projects",
    description:
      "Through academic projects, hackathons, and hands-on development, I have worked on AI-powered applications, full-stack systems, dashboards, and real-world software solutions.",
    wide: false,
  },
  {
    icon: Target,
    faIcon: "fa-solid fa-bullseye",
    title: "Goals & Growth",
    description:
      "I'm continuously learning and looking for opportunities to grow as an AI/ML Engineer and Software Developer.",
    wide: false,
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — heading + intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal y={24} blur={8}>
              <span className="eyebrow">About</span>
              <h2 className="section-title">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="section-subtitle">
                B.Tech CSE student at CHARUSAT building AI-powered and full-stack applications
              </p>
            </Reveal>

            <Reveal delay={0.12} y={24} blur={8}>
              <div
                className="mt-7 pl-5 text-muted-foreground leading-relaxed"
                style={{ borderLeft: "2px solid hsl(199 89% 60% / 0.35)" }}
              >
                I'm <strong className="text-foreground">Ayush Thummar</strong>, a{" "}
                <strong className="text-foreground">B.Tech Computer Science Engineering</strong> student at{" "}
                <strong className="text-foreground">CHARUSAT</strong> with a strong interest in{" "}
                <strong className="text-foreground">Artificial Intelligence, Machine Learning, Data Science</strong>,
                and software development.
              </div>
            </Reveal>
          </div>

          {/* Right — bento cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {aboutCards.map((item, i) => (
              <Reveal
                key={item.title}
                delay={0.1 + i * 0.1}
                y={30}
                blur={8}
                className={item.wide ? "sm:col-span-2" : undefined}
              >
                <SpotlightCard className="bento-card h-full p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "hsl(199 89% 60% / 0.1)",
                        border: "1px solid hsl(199 89% 60% / 0.18)",
                        boxShadow: "0 0 24px hsl(199 89% 60% / 0.12)",
                      }}
                    >
                      <i
                        className={`${item.faIcon} text-lg`}
                        style={{ color: "hsl(199 89% 60%)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
