import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const contributions = [
  {
    project: "Bitcoin Core",
    status: "Merged PR",
    description: "Fix: Remove back navigation from CreateConfirm and CreateBackup",
  },
  {
    project: "Rocket.Chat",
    status: "Open PR",
    description: "fix(http-router): resolve Hono method typing for Node 22 compatibility (#37804)",
  },
  {
    project: "WordPress Core",
    status: "Open PR",
    description: "Coming soon",
  },
];

export const OpenSource = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Open Source
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-4 tracking-premium">
            Contributing to real-world software
          </h2>
          <p className="text-body max-w-lg mb-16 text-muted-foreground/70">
            Actively contributing to production-grade open-source software.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {contributions.map((contribution, index) => (
              <AnimatedSection key={contribution.project} delay={index * 0.15}>
                <div className="relative group">
                  {/* Dot */}
                  <motion.div
                    className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-border bg-background z-10 group-hover:border-foreground/50 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Content */}
                  <div className="pt-14 text-center px-4">
                    <span
                      className={`inline-block text-[10px] uppercase tracking-widest px-2 py-1 rounded-full mb-3 ${
                        contribution.status === "Merged PR"
                          ? "bg-foreground/10 text-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {contribution.status}
                    </span>

                    <h3 className="font-poppins text-base font-medium tracking-premium mb-3">
                      {contribution.project}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      {contribution.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
