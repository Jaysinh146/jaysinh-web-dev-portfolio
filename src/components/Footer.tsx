export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 group">
            © {new Date().getFullYear()} Jaysinh. Crafted with intention.
            {/* Subtle lion easter egg */}
            <span className="opacity-20 group-hover:opacity-80 transition-opacity text-[10px] group-hover:animate-lion-tilt">
              🦁
            </span>
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
