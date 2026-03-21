import { useState, useRef, useEffect } from "react";
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
];

const LiveWebsiteCard = ({ project }: { project: typeof projects[0] }) => {
  const [canHover, setCanHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);

    update();
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
    } else {
      mq.addListener(update);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", update);
      } else {
        mq.removeListener(update);
      }
    };
  }, []);

  useEffect(() => {
    if (isHovered && canHover) {
      intervalRef.current = setInterval(() => {
        setScrollY((prev) => {
          const newVal = prev + 1;
          return newVal > 300 ? 0 : newVal;
        });
      }, 30);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setScrollY(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, canHover]);

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block premium-card overflow-hidden h-full"
      onMouseEnter={() => canHover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
        <div
          className="absolute inset-0 transition-transform duration-100 ease-linear"
          style={{ transform: `translateY(-${scrollY}px)` }}
        >
          <iframe
            src={project.url}
            title={project.name}
            className="w-full pointer-events-none"
            style={{
              height: "800px",
              transform: "scale(0.5)",
              transformOrigin: "top left",
              width: "200%",
            }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        <div className={`absolute inset-0 bg-foreground/5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs text-muted-foreground tracking-wide uppercase">
            {project.category}
          </span>
          <svg
            className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1"
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

        <div className="mt-4 pt-3 border-t border-border/50">
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            View Project →
          </span>
        </div>
      </div>
    </a>
  );
};

export const WebProjects = () => {
  return (
    <section id="work" className="section-spacing">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Client Work
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-4 tracking-premium">
            Deployed production-ready applications
          </h2>
          <p className="text-body max-w-lg mb-12">
            Clean UX. Business clarity. Conversion-focused layouts built for real results.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} delay={index * 0.1}>
              <LiveWebsiteCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
