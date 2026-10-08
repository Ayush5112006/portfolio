import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    icon: "fa-solid fa-globe",
    title: "Web Applications",
    description:
      "Building modern, responsive web applications with React, Next.js, and cutting-edge technologies.",
    span: "lg:col-span-2",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile applications with React Native and native integrations.",
    span: "lg:col-span-4",
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI Integration",
    description:
      "Integrating AI-powered features like chatbots, content generation, and intelligent automation.",
    span: "lg:col-span-4",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Data Applications",
    description:
      "Dashboards, data-driven interfaces, and visualizations that turn raw data into useful insights.",
    span: "lg:col-span-2",
  },
  {
    icon: "fa-solid fa-palette",
    title: "UI/UX Design",
    description:
      "Designing intuitive, beautiful interfaces that delight users and drive engagement.",
    span: "lg:col-span-3",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Freelance Projects",
    description:
      "End-to-end project delivery from concept to deployment with ongoing support.",
    span: "lg:col-span-3",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding" style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What I <span className="gradient-text">Build</span>
            </>
          }
          subtitle="Things I design, build, and ship"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.07}
              y={30}
              blur={8}
              className={service.span}
            >
              <SpotlightCard className="bento-card h-full p-7 flex flex-col group">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.18)",
                      boxShadow: "0 0 26px hsl(199 89% 60% / 0.12)",
                    }}
                  >
                    <i
                      className={`${service.icon} text-xl transition-transform duration-500 group-hover:scale-110`}
                      style={{ color: "hsl(199 89% 60%)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground/40 select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <span
                  className="mt-auto pt-5 block h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background: "linear-gradient(to right, hsl(199 89% 60%), transparent)",
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

export default Services;
