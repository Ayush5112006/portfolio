import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationList = [
  {
    degree: "Bachelor of Engineering – Computer Engineering",
    institute:
      "Devang Patel Institute of Advance Technology and Research (DEPSTAR), Anand",
    year: "2024 – 2028",
    grade: "CGPA: 7.08",
    description:
      "Focused on Full Stack Development, DAA, DSA, Database Management, and more.",
    icon: "fa-solid fa-laptop-code",
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
  },
  {
    degree: "Secondary (10th Standard Mathematics)",
    institute: "Shivam Vidhya Sankul, Amreli",
    year: "2020 – 2022",
    grade: "89% — Maths: 98/100",
    description:
      "Foundation in Mathematics, Science, and Computer fundamentals.",
    icon: "fa-solid fa-book",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Center vertical line — desktop */}
          <div
            className="absolute hidden md:block"
            style={{
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(to bottom, hsl(271 81% 56% / 0.15), hsl(199 89% 60% / 0.35), hsl(271 81% 56% / 0.15))",
            }}
          />
          {/* Mobile line */}
          <div
            className="absolute md:hidden"
            style={{
              left: "16px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, hsl(271 81% 56% / 0.15), hsl(199 89% 60% / 0.35), hsl(271 81% 56% / 0.15))",
            }}
          />

          {educationList.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative mb-12 last:mb-0 flex items-start"
                style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}
              >
                {/* Card */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <div
                    className="glass-card p-6"
                    style={{
                      marginRight: isLeft ? "calc(10% + 20px)" : undefined,
                      marginLeft: isLeft ? undefined : "calc(10% + 20px)",
                    }}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "hsl(271 81% 56% / 0.12)",
                          border: "1px solid hsl(271 81% 56% / 0.2)",
                        }}
                      >
                        <i
                          className={`${edu.icon} text-sm`}
                          style={{ color: "hsl(271 81% 56%)" }}
                        />
                      </div>
                      <div>
                        {/* Year badge */}
                        <span
                          className="inline-block text-xs font-bold px-3 py-0.5 rounded-full mb-1"
                          style={{
                            color: "hsl(199 89% 60%)",
                            background: "hsl(199 89% 60% / 0.08)",
                            border: "1px solid hsl(199 89% 60% / 0.2)",
                          }}
                        >
                          {edu.year}
                        </span>
                        <h3 className="text-base font-bold">{edu.degree}</h3>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "hsl(199 89% 60%)" }}
                        >
                          {edu.institute}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-xs font-semibold mb-2 inline-block px-2 py-0.5 rounded"
                      style={{
                        background: "hsl(142 71% 45% / 0.1)",
                        color: "hsl(142 71% 45%)",
                      }}
                    >
                      {edu.grade}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div
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
                />
                {/* Mobile dot */}
                <div
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
