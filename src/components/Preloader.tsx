import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    // Enter phase complete after 0.8s
    const enterTimer = setTimeout(() => setPhase("hold"), 800);
    
    // Hold for 0.5s then exit
    const holdTimer = setTimeout(() => setPhase("exit"), 1300);
    
    // Complete after exit animation
    const exitTimer = setTimeout(() => onComplete(), 2100);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : (
        <motion.div
          key="preloader-exit"
          className="fixed inset-0 z-[100] bg-foreground flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1]
          }}
        />
      )}
      
      {phase === "exit" ? null : (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] bg-foreground flex items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          <motion.div
            initial={{ 
              opacity: 0, 
              y: 40,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: phase === "enter" ? 1 : 1, 
              y: phase === "enter" ? 0 : 0,
              filter: "blur(0px)"
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-6xl md:text-8xl"
          >
            🦁
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
