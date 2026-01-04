import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const milestones = [
  {
    title: "Web Developer",
    company: "Ucove Digital",
    period: "Jun 2024 - Jan 2025",
    description: "First internship building responsive web applications",
  },
  {
    title: "Video Editor & Web Developer",
    company: "SilverBridge360",
    period: "Jun 2025 - Nov 2025",
    description: "Creating content and developing web solutions",
  },
];

export const Resume = () => {
  return (
    <section id="resume" className="section-spacing">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Experience
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-12 tracking-premium">
            My Journey
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line with glow */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent">
            <motion.div
              className="absolute inset-0 w-full bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ 
                transformOrigin: "top",
                boxShadow: "0 0 10px hsl(var(--foreground) / 0.3), 0 0 20px hsl(var(--foreground) / 0.1)"
              }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className={`relative flex items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Milestone dot with glow */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-foreground"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      style={{
                        boxShadow: "0 0 10px hsl(var(--foreground) / 0.5), 0 0 20px hsl(var(--foreground) / 0.3)"
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <motion.div
                      className="premium-card p-6"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs text-muted-foreground tracking-wide uppercase mb-2">
                        {milestone.period}
                      </p>
                      <h3 className="font-poppins text-base font-medium mb-1 tracking-premium">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-foreground/80 font-medium mb-2">
                        {milestone.company}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Available to join immediately */}
          <AnimatedSection delay={0.6}>
            <div className="relative flex items-center justify-center mt-12">
              {/* Bottom dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full bg-foreground"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  style={{
                    boxShadow: "0 0 15px hsl(var(--foreground) / 0.6), 0 0 30px hsl(var(--foreground) / 0.4)"
                  }}
                />
              </div>
              
              {/* Available text */}
              <motion.div
                className="ml-12 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <p className="text-sm font-medium tracking-wide uppercase text-foreground/80">
                  Available to join immediately
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
