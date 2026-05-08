import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const email = import.meta.env.EMAIL_ADDRESS;

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/PRATHAM932004", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pratham-bhoraniya/",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/PrathamB9304", label: "Twitter" },
  { icon: FiMail, href: `mailto:${email}`, label: "Email" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 py-20">
      <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:text-left text-center"
        >
          <motion.h1
            className="text-2xl sm:text-3xl font-medium text-primary mb-4"
            variants={itemVariants}
          >
            Hi, I'm Pratham 👋
          </motion.h1>

          <motion.p
            className="text-base md:text-xl leading-[1.35] font-normal text-text-secondary mb-6"
            variants={itemVariants}
          >
            I'm a{" "}
            <span className="text-text-primary font-bold">
              full stack developer
            </span>{" "}
            with a focus on creating{" "}
            <span className="text-primary-light font-semibold">
              exceptional software and digital experiences
            </span>{" "}
            that are fast, accessible, visually appealing, and responsive.
          </motion.p>

          <motion.p
            className="text-[15px] text-text-muted mb-12 max-w-[480px] lg:mx-0 mx-auto"
            variants={itemVariants}
          >
            I'm passionate about building seamless, scalable, and user-centric
            web applications that make a difference. Let's create something
            amazing together!
          </motion.p>

          <motion.div
            className="flex gap-4 mb-6 lg:justify-start justify-center flex-wrap"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-[13px] font-semibold bg-primary text-background transition-all duration-150 hover:bg-primary-hover hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            {/* <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-[13px] font-semibold bg-card-elevated text-text-primary border border-border-subtle transition-all duration-150 hover:border-border-hover hover:-translate-y-0.5"
            >
              View Projects
            </a> */}
          </motion.div>

          <motion.div
            className="flex gap-4 lg:justify-start justify-center"
            variants={itemVariants}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border-subtle text-text-muted transition-all duration-150 hover:text-primary hover:border-primary hover:-translate-y-0.5"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Code block visual */}
        <motion.div
          className="relative flex justify-center lg:order-none order-first"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-[350px] bg-card border border-border-subtle rounded-2xl p-6">
            {/* Dots */}
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <pre className="font-mono text-[13px] leading-[1.7] text-text-secondary overflow-x-auto">
              <code className="whitespace-pre">
                {`const pratham = {
  role: "Full Stack Developer",
  skills: ["React", "Node.js",
           "Java", "Spring Boot"],
  passion: "Building scalable web app",
  coffee: true ☕
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
