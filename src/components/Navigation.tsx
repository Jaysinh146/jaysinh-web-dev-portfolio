import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLion, setShowLion] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSinhInteraction = () => {
    setShowLion(true);
    setAnimationKey(prev => prev + 1);
    setTimeout(() => setShowLion(false), 600);
  };

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
          <a href="#" className="font-poppins text-sm font-medium tracking-wide inline-flex items-center">
            Jay
            <span
              className="cursor-pointer relative inline-flex items-center"
              onMouseEnter={handleSinhInteraction}
              onClick={handleSinhInteraction}
            >
              sinh
              {/* Lion emoji easter egg */}
              <AnimatePresence>
                {showLion && (
                  <motion.span
                    key={animationKey}
                    initial={{ opacity: 0, scale: 0.5, y: 2 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -right-5 top-1/2 -translate-y-1/2 text-xs animate-lion-tilt"
                  >
                    🦁
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
            .
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Work
            </a>
            <a
              href="#video"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Video
            </a>
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Services
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
