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
      "Focused on Artificial Intelligence, Machine Learning, Full Stack Development, Data Structures, Algorithms, and Database Management.",
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
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Academics"
          title={
            <>
              My <span className="gradient-text">Education</span>
            </>
          }
          subtitle="Academic background and engineering qualifications"
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
                initial={{ opacity: 0, x: isLeft ? -30 : 30, filter: "blur(6px)" }}
                animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mb-12 last:mb-0 flex items-start"
                style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}
              >
                {/* Card */}
                <div className="w-full md:w-[46%] pl-10 md:pl-0">
                  <SpotlightCard className="bento-card p-6 md:p-7 h-full">
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
                            <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                              Pursuing
                            </span>
                          )}
                        </div>
                        <h3 className="text-base md:text-lg font-bold leading-snug text-foreground">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-muted-foreground/80 mb-3 leading-normal">
                      {edu.institute}
                    </p>

                    <div className="mb-3">
                      <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 text-sky-300 border border-slate-700/60">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </SpotlightCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
