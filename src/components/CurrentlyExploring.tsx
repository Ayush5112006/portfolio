import Reveal from "./Reveal";

const exploring = [
  { icon: "fa-solid fa-sparkles", label: "Generative AI" },
  { icon: "fa-solid fa-brain", label: "LLM-Based Applications" },
  { icon: "fa-solid fa-eye", label: "Computer Vision Pipelines" },
  { icon: "fa-solid fa-bolt", label: "Serving ML Models with FastAPI" },
  { icon: "fa-solid fa-brain", label: "Machine Learning" },
  { icon: "fa-solid fa-chart-line", label: "Data Science" },
  { icon: "fa-solid fa-code", label: "Software Engineering" },
];

const Chip = ({ icon, label }: { icon: string; label: string }) => (
  <span
    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors duration-300"
    style={{
      background: "hsl(271 81% 56% / 0.10)",
      color: "hsl(271 90% 82%)",
      border: "1px solid hsl(271 81% 56% / 0.25)",
    }}
  >
    <i className={`${icon} text-[11px]`} aria-hidden="true" />
    {label}
  </span>
);

const CurrentlyExploring = () => {
  return (
    <section
      id="exploring"
      className="section-padding pt-0"
      style={{ zIndex: 1, position: "relative" }}
      aria-labelledby="exploring-title"
    >
      <div className="container mx-auto">
        <Reveal className="text-center mb-8" y={24} blur={8}>
          <span className="eyebrow ml-auto mr-auto">Learning Now</span>
          <h2 id="exploring-title" className="text-2xl md:text-3xl font-bold">
            Currently <span className="gradient-text">Exploring</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Where my learning is pointed right now
          </p>
        </Reveal>
      </div>

      <div
        className="marquee-shell relative overflow-hidden"
        style={{ "--marquee-duration": "46s" } as React.CSSProperties}
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-3 pr-3" aria-hidden={copy === 1}>
              {exploring.map((item) => (
                <Chip key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyExploring;
