import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const bringItems = [
  {
    icon: "fa-solid fa-layer-group",
    title: "End-to-End Delivery",
    description:
      "I build complete products — interface, backend, database, and deployment — as shown by Alumni Connect, Hostel Mass Attendance, and the DDU Hackathon Platform.",
    span: "lg:col-span-3",
  },
  {
    icon: "fa-solid fa-brain",
    title: "AI/ML Foundations",
    description:
      "Hands-on with Python, machine learning, computer vision, and data science, applied through academic and personal projects.",
    span: "lg:col-span-3",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Modern, Clean Code",
    description:
      "React, Next.js, TypeScript, and Tailwind — maintainable code with accessible, responsive interfaces.",
    span: "lg:col-span-2",
  },
  {
    icon: "fa-solid fa-code-branch",
    title: "Collaboration Ready",
    description:
      "Git-based workflows, clear communication, and a habit of documenting work so teams can move fast together.",
    span: "lg:col-span-4",
  },
];

const WhatIBring = () => {
  return (
    <section
      id="what-i-bring"
      className="section-padding"
      style={{ zIndex: 1, position: "relative" }}
    >
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Value"
          title={
            <>
              What I <span className="gradient-text">Bring</span>
            </>
          }
          subtitle="The value I add to a team, client, or collaboration"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {bringItems.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              y={30}
              blur={8}
              className={item.span}
            >
              <SpotlightCard className="bento-card h-full p-7 flex flex-col">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 flex-shrink-0"
                  style={{
                    background: "hsl(199 89% 60% / 0.1)",
                    border: "1px solid hsl(199 89% 60% / 0.18)",
                    boxShadow: "0 0 26px hsl(199 89% 60% / 0.12)",
                  }}
                >
                  <i
                    className={`${item.icon} text-base`}
                    style={{ color: "hsl(199 89% 60%)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
