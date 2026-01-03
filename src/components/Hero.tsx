import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";
import { FloatingTestimonials } from "./FloatingTestimonials";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-subtle uppercase tracking-wide-premium mb-8">
                Web Developer & Designer
              </p>
              <h1 className="text-hero mb-8">
                Hi, I'm <span className="font-medium">Jaysinh</span>.
              </h1>
              <p className="text-hero leading-relaxed">
                I'm a web developer who understands{" "}
                <span className="font-accent text-2xl md:text-3xl lg:text-4xl">design</span>,
                <br className="hidden md:block" /> customer psychology,
                and builds premium websites
                <br className="hidden md:block" /> that{" "}
                <span className="font-medium">convert</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-3 text-subtle pt-4"
            >
              {["Web", "Full-Stack", "Video", "Design", "Ads"].map((skill, index) => (
                <span key={skill} className="flex items-center gap-3">
                  <span className="tracking-wide">{skill}</span>
                  {index < 4 && <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide link-underline"
              >
                Let's work together
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
              </a>
            </motion.div>
          </div>

          {/* Profile Image with Floating Testimonials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative max-w-[280px] mx-auto lg:max-w-[400px] lg:ml-auto">
              {/* Floating Testimonials Background */}
              <div className="absolute -inset-12 lg:-inset-20">
                <FloatingTestimonials />
              </div>
              
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent rounded-2xl transform rotate-3 scale-105" />
                <img
                  src={profileImage}
                  alt="Jaysinh"
                  className="relative rounded-2xl w-full object-cover shadow-xl shadow-black/5 max-w-[280px] lg:max-w-[320px] mx-auto"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
