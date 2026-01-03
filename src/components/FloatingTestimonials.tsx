import { motion } from "framer-motion";

const testimonials = [
  { text: "Exceptional work!", author: "Client" },
  { text: "Clean & professional", author: "Agency" },
  { text: "Delivered on time", author: "Startup" },
  { text: "Great attention to detail", author: "Brand" },
  { text: "Highly recommended", author: "Partner" },
  { text: "Exceeded expectations", author: "CEO" },
];

export const FloatingTestimonials = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Row 1 - moving left */}
      <motion.div
        className="absolute top-[10%] flex gap-6 whitespace-nowrap"
        animate={{ x: [0, -800] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`row1-${index}`}
            className="px-4 py-2 rounded-xl bg-card/40 backdrop-blur-md border border-border/30 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          >
            <p className="text-xs text-muted-foreground/70 italic">"{testimonial.text}"</p>
            <p className="text-[10px] text-muted-foreground/50 mt-0.5">— {testimonial.author}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Row 2 - moving right */}
      <motion.div
        className="absolute top-[35%] flex gap-6 whitespace-nowrap"
        animate={{ x: [-400, 400] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials.slice(2), ...testimonials.slice(0, 2), ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`row2-${index}`}
            className="px-4 py-2 rounded-xl bg-card/30 backdrop-blur-sm border border-border/20 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "easeInOut",
            }}
          >
            <p className="text-xs text-muted-foreground/60 italic">"{testimonial.text}"</p>
            <p className="text-[10px] text-muted-foreground/40 mt-0.5">— {testimonial.author}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Row 3 - moving left slower */}
      <motion.div
        className="absolute top-[60%] flex gap-6 whitespace-nowrap"
        animate={{ x: [200, -600] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`row3-${index}`}
            className="px-4 py-2 rounded-xl bg-card/35 backdrop-blur-md border border-border/25 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.25, 0.55, 0.25] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: index * 0.6,
              ease: "easeInOut",
            }}
          >
            <p className="text-xs text-muted-foreground/65 italic">"{testimonial.text}"</p>
            <p className="text-[10px] text-muted-foreground/45 mt-0.5">— {testimonial.author}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Row 4 - bottom, moving right */}
      <motion.div
        className="absolute top-[85%] flex gap-6 whitespace-nowrap"
        animate={{ x: [-200, 600] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`row4-${index}`}
            className="px-4 py-2 rounded-xl bg-card/25 backdrop-blur-sm border border-border/15 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut",
            }}
          >
            <p className="text-xs text-muted-foreground/55 italic">"{testimonial.text}"</p>
            <p className="text-[10px] text-muted-foreground/35 mt-0.5">— {testimonial.author}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
