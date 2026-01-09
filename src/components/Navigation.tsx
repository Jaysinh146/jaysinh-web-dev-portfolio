import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LionIcon } from "./LionIcon";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-poppins text-sm font-medium tracking-wide flex items-center gap-1.5 group">
            {/* Easter egg: Lion appears before name on hover */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-5 group-hover:ml-0">
              <LionIcon size={14} />
            </span>
            Jaysinh.
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Work
            </a>
            <a
              href="#apps"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Web Apps
            </a>
            <a
              href="#video"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Video
            </a>
            <a
              href="#contact"
              className="text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
