import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const apps = [
  {
    name: "Cheril",
    tagline: "Peer-to-peer rental marketplace",
    description: "A platform enabling free peer-to-peer rentals, reducing waste and building community trust. Built scalable REST APIs with Node.js and MongoDB.",
    url: "https://cheril.netlify.app/",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    role: "Full-Stack Development",
  },
  {
    name: "LinkedLabs",
    tagline: "Scientific equipment rentals",
    description: "Connecting research labs with shared equipment resources. Worked with MongoDB & MySQL, deployed production-ready applications.",
    url: "https://linkedlabs.netlify.app/",
    tech: ["React", "Express.js", "MongoDB", "JWT Auth"],
    role: "Full-Stack Development",
  },
];

const AppPreviewCard = ({ app }: { app: typeof apps[number] }) => {
  const [canHover, setCanHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    <motion.a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block premium-card overflow-hidden h-full"
      onMouseEnter={() => canHover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="relative h-40 md:h-48 overflow-hidden bg-muted">
        <div
          className="absolute inset-0 transition-transform duration-100 ease-linear"
          style={{ transform: `translateY(-${scrollY}px)` }}
        >
          <iframe
            src={app.url}
            title={app.name}
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
        <div
          className={`absolute inset-0 bg-foreground/5 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-poppins text-lg md:text-xl font-medium tracking-premium mb-1">
              {app.name}
            </h3>
            <p className="text-sm text-muted-foreground">{app.tagline}</p>
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

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{app.description}</p>

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
      </div>
    </motion.a>
  );
};

export const FullStackApps = () => {
  return (
    <section id="apps" className="section-spacing bg-secondary/30">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Full-Stack Applications
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-4 tracking-premium">
            Products with purpose
          </h2>
          <p className="text-body max-w-lg mb-16">
            Problem-solving applications built with React, Node.js, and clean architecture.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <AnimatedSection key={app.name} delay={index * 0.15}>
              <AppPreviewCard app={app} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
