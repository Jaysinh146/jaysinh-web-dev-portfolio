import { AnimatedSection } from "./AnimatedSection";

const tools = {
  design: [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  ],
  video: [
    { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" },
    { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
  ],
  tech: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],
};

export const Skills = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4 text-center">
            Tools & Technologies
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light text-center mb-16 tracking-premium">
            What I work with
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Design Tools */}
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <p className="text-subtle tracking-wide mb-6">Design</p>
              <div className="flex justify-center gap-6">
                {tools.design.map((tool) => (
                  <div
                    key={tool.name}
                    className="group relative"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-10 h-10 icon-glow"
                    />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-muted-foreground">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Video Tools */}
          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <p className="text-subtle tracking-wide mb-6">Video</p>
              <div className="flex justify-center gap-6">
                {tools.video.map((tool) => (
                  <div
                    key={tool.name}
                    className="group relative"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-10 h-10 icon-glow"
                    />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-muted-foreground">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tech Stack */}
          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <p className="text-subtle tracking-wide mb-6">Development</p>
              <div className="flex justify-center gap-5">
                {tools.tech.map((tool) => (
                  <div
                    key={tool.name}
                    className="group relative"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-10 h-10 icon-glow"
                    />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-muted-foreground">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
