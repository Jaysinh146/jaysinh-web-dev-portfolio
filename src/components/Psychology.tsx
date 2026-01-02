import { AnimatedSection } from "./AnimatedSection";

const principles = [
  {
    title: "Attention",
    description: "Capturing focus in the first 3 seconds",
  },
  {
    title: "Trust",
    description: "Building credibility through design language",
  },
  {
    title: "Hierarchy",
    description: "Guiding eyes to what matters most",
  },
  {
    title: "Intent",
    description: "Understanding what visitors actually want",
  },
];

export const Psychology = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4 text-center">
            Philosophy
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-6 tracking-premium text-center">
            Websites that <span className="font-accent text-3xl">convert</span>
          </h2>
          <p className="text-body text-center max-w-xl mx-auto mb-16">
            I don't just design websites. I understand the psychology behind why people click, trust, and buy.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <AnimatedSection key={principle.title} delay={index * 0.1}>
              <div className="flex gap-4 items-start">
                <span className="text-xs text-muted-foreground font-medium mt-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-poppins font-medium mb-1 tracking-premium">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-sm text-muted-foreground mt-16 max-w-md mx-auto">
            Every element is intentional. Every layout is tested. Every website is built to perform.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
