import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Engineering – Computer Engineering",
    institute: "Devang Patel Institute of Advance Technology and Research (DEPSTAR), Anand",
    year: "2024 – 2028",
    grade: "CGPA: 7.08",
    description:
      "Focused on Full Stack Development, DAA, DSA, Database Management, and more.",
  },
  {
    degree: "Higher Secondary (12th Science – PCM)",
    institute: "Gyanmanjari Secondary and Higher Secondary School, Bhavnagar",
    year: "2022 – 2024",
    grade: "87% (PCM) — Maths: 98/100",
    description:
      "Completed with Physics, Chemistry, and Mathematics. Gained strong discipline and analytical thinking skills.",
  },
  {
    degree: "Secondary (10th Standard Mathematics)",
    institute: "Shivam Vidhya Sankul, Amreli",
    year: "2020 – 2022",
    grade: "89% — Maths: 98/100",
    description:
      "Foundation in Mathematics, Science, and Computer fundamentals.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-8">
            {educationList.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 items-start"
              >
                {/* Icon dot */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>

                {/* Card */}
                <div className="glass-card p-6 flex-1 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm text-secondary font-medium mb-1">{edu.institute}</p>
                  <p className="text-xs text-muted-foreground mb-2">{edu.grade}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
