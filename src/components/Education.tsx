import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const educationList = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institute:
      "CHARUSAT University — Devang Patel Institute of Advanced Technology and Research (DEPSTAR), Anand",
    year: "2024 – 2028",
    grade: "CGPA: 7.17",
    pursuing: true,
    description:
      "Focused on Full Stack Development, DAA, DSA, Database Management, and more.",
    icon: "fa-solid fa-laptop-code",
    mark: "CU",
  },
  {
    degree: "Higher Secondary (12th Science – PCM)",
    institute:
      "Gyanmanjari Secondary and Higher Secondary School, Bhavnagar",
    year: "2022 – 2024",
    grade: "87% (PCM) — Maths: 98/100",
    description:
      "Completed with Physics, Chemistry, and Mathematics. Gained strong discipline and analytical thinking skills.",
    icon: "fa-solid fa-flask",
    mark: "GM",
  },
  {
    degree: "Secondary (10th Standard Mathematics)",
    institute: "Shivam Vidhya Sankul, Amreli",
    year: "2020 – 2022",
    grade: "89% — Maths: 98/100",
    description:
      "Foundation in Mathematics, Science, and Computer fundamentals.",
    icon: "fa-solid fa-book",
    mark: "SV",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Academics"
          title={
            <>
              My <span className="gradient-text">Education</span>
            </>
          }
          subtitle="Academic background and qualifications"
        />

        <div className="max-w-5xl mx-auto relative">
          {/* Center vertical line — desktop */}
          <motion.div
            className="absolute hidden md:block"
            style={{
              left: "50%",
              top: 0,
              width: "2px",
              transform: "translateX(-50%)",
              transformOrigin: "top center",
              background:
                "linear-gradient(to bottom, hsl(271 81% 56% / 0.15), hsl(199 89% 60% / 0.35), hsl(271 81% 56% / 0.15))",
            }}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          {/* Mobile line */}
          <motion.div
            className="absolute md:hidden"
            style={{
              left: "16px",
              top: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, hsl(271 81% 56% / 0.15), hsl(199 89% 60% / 0.35), hsl(271 81% 56% / 0.15))",
            }}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          {educationList.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40, filter: "blur(6px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-12 last:mb-0 flex items-start"
                style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}
              >
                {/* Card */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <SpotlightCard
                    className="bento-card p-6 h-full"
                    style={{
                      marginRight: isLeft ? "calc(10% + 20px)" : undefined,
                      marginLeft: isLeft ? undefined : "calc(10% + 20px)",
                    }}
                  >
                    {/* Subtle academic grid pattern */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.5]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, hsl(0 0% 100% / 0.03) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 100% / 0.03) 1px, transparent 1px)",
                        backgroundSize: "26px 26px",
                        maskImage:
                          "radial-gradient(ellipse 80% 60% at 100% 0%, #000, transparent 70%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse 80% 60% at 100% 0%, #000, transparent 70%)",
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start gap-4 mb-3">
                      {/* Institution monogram */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold tracking-wider"
                        style={{
                          background: "hsl(271 81% 56% / 0.12)",
                          border: "1px solid hsl(271 81% 56% / 0.28)",
                          color: "hsl(271 90% 78%)",
                          boxShadow: "0 0 22px hsl(271 81% 56% / 0.16)",
                        }}
                        aria-hidden="true"
                      >
                        {edu.mark}
                      </div>
                      <div className="min-w-0">
                        {/* Year badge + status */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span
                            className="inline-block text-xs font-bold px-3 py-0.5 rounded-full"
                            style={{
                              color: "hsl(199 89% 60%)",
                              background: "hsl(199 89% 60% / 0.08)",
                              border: "1px solid hsl(199 89% 60% / 0.2)",
                            }}
                          >
                            {edu.year}
                          </span>
                          {edu.pursuing && (
                            <span
                              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                              style={{
                                color: "hsl(271 90% 78%)",
                                background: "hsl(271 81% 56% / 0.15)",
                                border: "1px solid hsl(271 81% 56% / 0.3)",
                              }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                  background: "hsl(271 90% 78%)",
                                  animation: "pulse-dot 2s ease-in-out infinite",
                                }}
                                aria-hidden="true"
                              />
                              Currently Pursuing
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold">{edu.degree}</h3>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "hsl(199 89% 60%)" }}
                        >
                          {edu.institute}
                        </p>
                      </div>
                    </div>

                    {/* Degree grade + icon */}
                    <div className="relative flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-semibold inline-block px-2 py-0.5 rounded"
                        style={{
                          background: "hsl(142 71% 45% / 0.1)",
                          color: "hsl(142 71% 45%)",
                        }}
                      >
                        {edu.grade}
                      </span>
                      <i
                        className={`${edu.icon} text-xs`}
                        style={{ color: "hsl(215 20% 50%)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </SpotlightCard>
                </div>

                {/* Timeline markers */}
                <span
                  className="absolute hidden md:block"
                  style={{
                    left: "50%",
                    top: "32px",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "hsl(271 81% 56%)",
                    boxShadow:
                      "0 0 0 4px hsl(271 81% 56% / 0.2), 0 0 12px hsl(271 81% 56% / 0.4)",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute md:hidden"
                  style={{
                    left: "8px",
                    top: "32px",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "hsl(271 81% 56%)",
                    boxShadow:
                      "0 0 0 4px hsl(271 81% 56% / 0.2), 0 0 12px hsl(271 81% 56% / 0.4)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
