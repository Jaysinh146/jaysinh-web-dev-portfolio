import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const techStack = {
  "Languages": ["PHP", "JavaScript", "HTML", "CSS", "SQL"],
  "Web & Backend": ["WordPress (Themes, Plugins, REST API)", "MySQL"],
  "Frameworks & Libraries": ["React (basic)", "Node.js"],
  "Tools & Platforms": ["Git", "GitHub", "Linux (basic)", "Apache / Nginx"],
};

export const TechStack = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-12 text-center">
            Tech Stack
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {Object.entries(techStack).map(([category, skills], categoryIndex) => (
            <AnimatedSection key={category} delay={categoryIndex * 0.1}>
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wide-premium text-muted-foreground font-medium">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      className="text-sm text-foreground/80 font-light tracking-wide"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
