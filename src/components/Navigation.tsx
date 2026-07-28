import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            <Link
              to="/video-editor"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Video
            </Link>
            <a
              href="#contact"
              className="text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 pt-4 flex flex-col gap-4 border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#apps" onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Web Apps
            </a>
            <Link to="/video-editor" onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Video
            </Link>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium">
              Contact
            </a>
          </div>
        )}

      </div>
    </motion.nav>
  );
};
