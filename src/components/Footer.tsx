export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jaysinh. Crafted with intention.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
