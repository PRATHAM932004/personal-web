import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    company: "4C Consulting - Technology Division",
    role: "Junior Software Developer",
    period: "August 2025 - Present",
    points: [
      "Developed cross-platform mobile applications using React Native.",
      "Built SEO-friendly, high-performance web applications using Next.js with Server-Side Rendering (SSR).",
      "Collaborated with design teams to implement complex UI/UX components and integrate third-party APIs.",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
    ],
  },
  {
    company: "4C Consulting - Technology Division",
    role: "Intern",
    period: "January 2025 - July 2025",
    points: [
      "Worked on full-stack development integrating React (frontend) with Node.js (backend).",
      "Participated in agile workflows including daily stand-ups and sprint planning.",
      "Delivered features on time through effective collaboration and task management.",
    ],
  },
  {
    company: "Student Ambassador Program with IBM SkillsBuild",
    role: "Summer Internship",
    period: "July 2024 - August 2024",
    points: [
      "Completed a 4-week internship focused on front-end development with hands-on experience in building responsive websites.",
      "Designed and optimized web interfaces using HTML, CSS, and JavaScript.",
      "Ensured cross-browser compatibility and improved overall user experience.",
    ],
  },
];

const timelineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="mt-4 text-[30px] font-semibold text-text-primary tracking-tight max-w-[600px] mx-auto">
            Here is a quick summary of my most recent experiences:
          </h2>
        </motion.div>

        <motion.div
          className="max-w-[800px] mx-auto flex flex-col"
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex gap-6"
              variants={itemVariants}
            >
              {/* Timeline indicator */}
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-card border border-primary flex items-center justify-center text-primary shrink-0">
                  <FiBriefcase size={18} />
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border-subtle my-2" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 bg-card border border-border-subtle rounded-2xl p-6 mb-6 transition-colors duration-150 hover:border-border-hover">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-[13px] text-primary font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-text-muted whitespace-nowrap px-3 py-1 bg-card-elevated border border-border-subtle rounded-full">
                    {exp.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[13px] text-text-secondary leading-relaxed"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-primary shrink-0 mt-[7px]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
