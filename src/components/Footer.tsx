import { LionIcon } from "./LionIcon";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © {new Date().getFullYear()} Jaysinh. Crafted with intention.
            {/* Subtle lion easter egg */}
            <LionIcon size={10} className="opacity-20 hover:opacity-60 transition-opacity" />
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
