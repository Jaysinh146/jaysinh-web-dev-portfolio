import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    title: "Website Design & Development",
    description: "Premium, conversion-focused websites",
  },
  {
    title: "Full-Stack Web Applications",
    description: "Custom apps with robust architecture",
  },
  {
    title: "Video Editing",
    description: "Short-form content & ad creatives",
  },
  {
    title: "Brand & Visual Design",
    description: "Identity systems that resonate",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Services
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-16 tracking-premium">
            What I can do for you
          </h2>
        </AnimatedSection>

        <div className="space-y-0">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="py-6 border-b border-border/50 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="font-poppins font-medium tracking-premium group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
