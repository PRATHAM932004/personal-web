import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quickBits = [
  "B.E. in Information & Communication Technology",
  "Avid learner",
  "Working at 4C Consulting as Jr. Software Engineer",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container-main">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr] gap-20 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-[30px] font-semibold text-text-primary tracking-tight mb-6">
              Curious about me? Here you have it:
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <p className="text-text-secondary leading-relaxed">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development. I am very enthusiastic about bringing
                the technical and visual aspects of digital products to life.
                User experience, pixel perfect design, and writing clear,
                readable, highly performant code matters to me.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I began my journey as a web developer in 2024, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way. I
                began my web development journey in June 2024 and have since
                been building modern, scalable web applications using
                technologies like Next.js, TypeScript, NestJS, Tailwind CSS,
                Java with Spring Boot much more.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text-primary mb-2">
                Finally, some quick bits about me:
              </p>
              <ul className="flex flex-col gap-2">
                {quickBits.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-text-secondary"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
