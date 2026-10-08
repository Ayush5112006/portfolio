import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";

const aiFocusAreas = [
  {
    icon: "fa-solid fa-brain",
    title: "Machine Learning",
    description: "Model building, evaluation, and practical ML applications.",
  },
  {
    icon: "fa-solid fa-eye",
    title: "Computer Vision",
    description: "Image and video analysis using computer vision techniques.",
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Data Science",
    description: "Data processing, analysis, visualization, and insights.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI Applications",
    description: "Integrating intelligent models into real software products.",
  },
  {
    icon: "fa-solid fa-sparkles",
    title: "Generative AI",
    description: "Exploring modern AI and LLM-based applications.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "AI + Full Stack",
    description: "Connecting AI models with production-ready web applications.",
  },
];

const nodes = [
  [80, 120], [240, 60], [400, 180], [560, 90], [720, 200], [880, 70], [1080, 150],
  [140, 340], [320, 430], [500, 330], [660, 450], [860, 360], [1040, 430],
  [220, 550], [470, 560], [760, 555], [1000, 555],
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [7, 8], [8, 9], [9, 4], [9, 2],
  [10, 4], [10, 11], [11, 12], [11, 6],
  [7, 13], [13, 14], [14, 9], [14, 15], [15, 10], [15, 16], [16, 12],
  [8, 14], [12, 16],
];

const NeuralBackdrop = () => (
  <div className="neural-backdrop" aria-hidden="true">
    <div className="grid-backdrop" />
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
    >
      <defs>
        <linearGradient id="neural-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(199 89% 60%)" />
          <stop offset="100%" stopColor="hsl(271 81% 56%)" />
        </linearGradient>
        <radialGradient id="neural-node-fill">
          <stop offset="0%" stopColor="hsl(199 89% 70%)" />
          <stop offset="100%" stopColor="hsl(271 81% 56%)" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => (
        <line
          key={`e-${i}`}
          className={`neural-line ${i % 2 ? "neural-line-alt" : ""}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="url(#neural-stroke)"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}

      {nodes.map(([x, y], i) => (
        <g key={`n-${i}`}>
          <circle
            className="neural-node"
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 5 : 3.5}
            fill="url(#neural-node-fill)"
            style={{ animationDelay: `${(i % 7) * 0.4}s` }}
          />
          <circle
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 13 : 9}
            fill="none"
            stroke="hsl(199 89% 60% / 0.25)"
            strokeWidth="1"
          />
        </g>
      ))}
    </svg>
  </div>
);

const AiFocus = () => {
  return (
    <section
      id="ai-focus"
      className="section-padding overflow-hidden"
      style={{ zIndex: 1, position: "relative" }}
    >
      <NeuralBackdrop />

      <div className="container mx-auto relative z-10">
        <SectionHeading
          eyebrow="Focus Area"
          title={
            <>
              AI &amp; <span className="gradient-text">Machine Learning</span>
            </>
          }
          subtitle="Exploring intelligent systems that solve real-world problems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {aiFocusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08} y={30} blur={8}>
              <SpotlightCard className="bento-card p-6 h-full group">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                    style={{
                      background: "hsl(271 81% 56% / 0.12)",
                      border: "1px solid hsl(271 81% 56% / 0.25)",
                      boxShadow: "0 0 26px hsl(271 81% 56% / 0.14)",
                    }}
                  >
                    <i
                      className={`${area.icon} text-base transition-all duration-500 group-hover:scale-110`}
                      style={{ color: "hsl(271 90% 75%)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground/50 select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
                <span
                  className="mt-5 block h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background:
                      "linear-gradient(to right, hsl(199 89% 60%), transparent)",
                  }}
                  aria-hidden="true"
                />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiFocus;
