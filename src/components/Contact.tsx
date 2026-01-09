import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-foreground text-background">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-wide-premium mb-6 opacity-60">
            Let's Talk
          </p>
          <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light mb-6 tracking-premium">
            Let's build something that feels{" "}
            <span className="font-accent text-3xl md:text-4xl lg:text-5xl">premium</span>
            <br />
            and performs.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.a
            href="mailto:patankararyan7@gmail.com"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium tracking-wide transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
          <motion.a
            href="#work"
            className="inline-flex items-center gap-2 mt-4 text-sm opacity-60 hover:opacity-100 transition-opacity"
            whileHover={{ x: 4 }}
          >
            See my work
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.a>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16">
            <a
              href="tel:+919561593047"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              +91 9561593047
            </a>
            <a
              href="https://x.com/jaysinh146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/jaysinh-patankar-b6a648253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/aryanpatankar146/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
