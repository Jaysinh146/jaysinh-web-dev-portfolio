import { AnimatedSection } from "./AnimatedSection";

const principles = [
  {
    title: "Scalability",
    description: "Building systems that handle growth seamlessly",
  },
  {
    title: "Clean Architecture",
    description: "Maintainable, well-structured codebases",
  },
  {
    title: "API Design",
    description: "RESTful endpoints with proper authentication",
  },
  {
    title: "Performance",
    description: "Optimized applications that load fast and run smooth",
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
            Engineering that <span className="font-accent text-3xl">scales</span>
          </h2>
          <p className="text-body text-center max-w-xl mx-auto mb-16">
            I don't just write code. I build production-ready systems with clean architecture and scalable APIs.
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
            Every API is documented. Every component is reusable. Every application is built to perform.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
