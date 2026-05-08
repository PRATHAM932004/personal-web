import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Fiskil',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'Supabase'],
    link: '#',
  },
  {
    title: 'Gitfolio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Docker'],
    link: '#',
  },
  {
    title: 'Peerhire',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: ['React', 'Nest.js', 'PostgreSQL', 'AWS', 'Redis'],
    link: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function MockPreview() {
  return (
    <div className="bg-card border border-border-subtle rounded-xl p-4 w-full max-w-[320px] relative z-10">
      <div className="flex gap-1.5 mb-4">
        <span className="w-2 h-2 rounded-full bg-surface-high" />
        <span className="w-2 h-2 rounded-full bg-surface-high" />
        <span className="w-2 h-2 rounded-full bg-surface-high" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2 bg-surface-high rounded w-2/5" />
        <div className="h-2 bg-surface-high rounded w-full" />
        <div className="h-2 bg-surface-high rounded w-7/10" />
        <div className="h-14 bg-surface-high rounded-lg mt-1" />
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Work</span>
          <h2 className="mt-4 text-[30px] font-semibold text-text-primary tracking-tight max-w-[600px] mx-auto">
            Some of the noteworthy projects I have built:
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 bg-card border border-border-subtle rounded-2xl overflow-hidden transition-colors duration-150 hover:border-border-hover ${
                index % 2 !== 0 ? 'md:[direction:rtl]' : ''
              }`}
              variants={cardVariants}
            >
              {/* Preview */}
              <div className="bg-surface-container flex items-center justify-center p-6 md:p-12 relative overflow-hidden md:[direction:ltr]">
                <div className="absolute w-[200px] h-[200px] bg-[radial-gradient(circle,var(--color-primary),transparent_70%)] opacity-8 rounded-full blur-[40px]" />
                <MockPreview />
              </div>

              {/* Info */}
              <div className="p-6 md:p-12 flex flex-col justify-center md:[direction:ltr]">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  {project.title}
                </h3>
                <p className="text-[13px] text-text-secondary mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-card-elevated border border-border-subtle rounded-full text-xs font-medium text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-text-muted transition-colors duration-150 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
