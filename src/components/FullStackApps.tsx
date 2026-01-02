import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const apps = [
  {
    name: "Cheril",
    tagline: "Peer-to-peer rental marketplace",
    description: "A platform enabling free peer-to-peer rentals, reducing waste and building community trust.",
    url: "https://cheril.netlify.app/",
    tech: ["React", "Node.js", "MongoDB"],
    role: "Full-Stack Development",
  },
  {
    name: "LinkedLabs",
    tagline: "Scientific equipment rentals",
    description: "Connecting research labs with shared equipment resources, making science more accessible.",
    url: "https://linkedlabs.netlify.app/",
    tech: ["React", "Express", "PostgreSQL"],
    role: "Full-Stack Development",
  },
];

export const FullStackApps = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Full-Stack Applications
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-4 tracking-premium">
            Products with purpose
          </h2>
          <p className="text-body max-w-lg mb-16">
            Problem-solving applications built with product thinking and clean architecture.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <AnimatedSection key={app.name} delay={index * 0.15}>
              <motion.a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block premium-card p-8 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-poppins text-2xl font-medium tracking-premium mb-1">
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {app.tagline}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>

                <p className="text-body mb-6">
                  {app.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Role
                    </span>
                    <p className="text-sm mt-1">{app.role}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Stack
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {app.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-background rounded-md border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
