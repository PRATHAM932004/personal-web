import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

const testimonials = [
  {
    text: 'Job well done! I am really impressed. He is very very good at what he does :) I would recommend Pratham and will definitely work with him again.',
    name: 'John Doe',
    title: 'Founder - xyz.com',
  },
  {
    text: 'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
    name: 'John Doe',
    title: 'Founder - abc.com',
  },
  {
    text: 'Pratham was extremely easy and pleasant to work with and he truly cares about the project being a success. Pratham has a high level of knowledge and was able to immediately dive into our web application without issues.',
    name: 'John Doe',
    title: 'Freelancer',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-20" ref={ref}>
      <div className="container-main">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="mt-4 text-[30px] font-semibold text-text-primary tracking-tight max-w-[600px] mx-auto">
            Nice things people have said about me:
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border-subtle rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-150 hover:border-border-hover"
              variants={cardVariants}
            >
              <div className="text-primary opacity-50">
                <RiDoubleQuotesL size={24} />
              </div>
              <blockquote className="text-[13px] text-text-secondary leading-relaxed flex-1 italic">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-2 pt-4 border-t border-border-subtle">
                <div className="w-9 h-9 rounded-full bg-surface-high flex items-center justify-center text-[13px] font-semibold text-primary shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
