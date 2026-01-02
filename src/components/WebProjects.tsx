import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const projects = [
  {
    name: "ZoopAnalysis",
    description: "Medical research firm with data-driven insights",
    url: "https://zoopanalysis.com/",
    category: "Research",
  },
  {
    name: "SilverBridge360",
    description: "Full-service marketing agency platform",
    url: "https://silverbridge360.com/",
    category: "Agency",
  },
  {
    name: "Nimitt Craftshack",
    description: "Art & craft institute with e-commerce",
    url: "https://nimittcraftshack4.com/",
    category: "E-commerce",
  },
  {
    name: "ShopVayo",
    description: "High-ticket family clothing brand",
    url: "https://shopvayo.com/",
    category: "Fashion",
  },
  {
    name: "Hilwitz",
    description: "AI marketplace startup platform",
    url: "https://hilwitz.com/",
    category: "Startup",
  },
  {
    name: "Dashly",
    description: "Hyperlocal delivery application",
    url: "https://dashly.hilwitz.com/",
    category: "App",
  },
];

export const WebProjects = () => {
  return (
    <section id="work" className="section-spacing">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Client Work
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-4 tracking-premium">
            Websites that work
          </h2>
          <p className="text-body max-w-lg mb-16">
            Clean UX. Business clarity. Conversion-focused layouts built for real results.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} delay={index * 0.1}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block premium-card p-6 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-muted-foreground tracking-wide uppercase">
                    {project.category}
                  </span>
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
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

                <h3 className="font-poppins text-lg font-medium mb-2 tracking-premium">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    View Project →
                  </span>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
