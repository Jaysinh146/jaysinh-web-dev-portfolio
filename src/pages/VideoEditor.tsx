import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LionIcon } from "@/components/LionIcon";
import profileImage from "@/assets/profile.png";
import triplespeedMark from "@/assets/triplespeed-mark.png.asset.json";
import monarchLogo from "@/assets/monarch-media-house.png.asset.json";
import silverbridgeLogo from "@/assets/silverbridge-360.png.asset.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// All shorts videos for autoplay grid (5 per row)
const shortVideos = [
  // Row 1 — fresh work first
  { id: "LYPzTWDo0CE", label: "Ishita" },
  { id: "PGQMpsy0u9w", label: "NRI" },
  { id: "F9K17y0YkrY", label: "NRI" },
  { id: "lbPF1cufito" },
  { id: "eg35evUinI4" },
  // Row 2
  { id: "Tl-R1SBWzV0" },
  { id: "wzz5XLZLfpI" },
  { id: "TppPp2wQNuw" },
  { id: "TZtdZKZ1XlQ", label: "Allen" },
  { id: "poaplI90TxA", label: "Imagination" },
  // Row 3
  { id: "qhC-MJH-4HM", label: "Leclerc" },
  { id: "zp-HdcPpHEM", label: "Class Saathi" },
  { id: "xj_cGsEGiEc", label: "Ishita" },
  { id: "I3YpGt-_YXo" },
  { id: "DvLbM0ahY4Y", label: "AI Video" },
  // Row 4
  { id: "rzjQygTCkzE" },
  { id: "vBHGfe8mtAM" },
  { id: "OY7L41xb98E", label: "AI" },
  { id: "vpFaK3kfog4" },
  { id: "4K7p_WBi0N8", label: "Imagination" },
];

type ClientLink = { text: string; url: string };
type Client = {
  name: string;
  label: string;
  tag: string;
  reels: string[];
  links: ClientLink[];
};

const clients: Client[] = [
  {
    name: "ALLEN ONLINE",
    label: "Allen Online · EdTech",
    tag: "Reels · Short Form",
    reels: ["TZtdZKZ1XlQ", "ONdfzpaX2GE"],
    links: [],
  },
  {
    name: "CLASS SAATHI",
    label: "Class Saathi by TagHive · EdTech",
    tag: "Reels · Product",
    reels: ["zp-HdcPpHEM", "0wRNlsiNBr0", "-vaTByekDSA"],
    links: [],
  },
  {
    name: "IMAGINATION INC.",
    label: "Imagination Inc. · Interior Design",
    tag: "Brand Video · Reels",
    reels: ["poaplI90TxA", "vL5CbhK44uU", "4K7p_WBi0N8"],
    links: [
      { text: "Preview Video 1", url: "https://drive.google.com/file/d/1n1xuUmWPw7es6anW-6B1ibShBknUqC73/view" },
      { text: "Preview Video 2", url: "https://drive.google.com/file/d/1vHuC9SG7hP55a8YfM_nQ07MdItfLAxVQ/view" },
      { text: "Horizontal Reel", url: "https://drive.google.com/file/d/1ZT9jRem2sA9mosPYuH3E1CfYppdZXyQx/view" },
    ],
  },
  {
    name: "ISHITA SALUJA",
    label: "Ishita Saluja · 1.5M Instagram",
    tag: "Reels · Creator",
    reels: ["xj_cGsEGiEc"],
    links: [
      { text: "View Drive Folder", url: "https://drive.google.com/drive/folders/1OLgARQPp3TTw7frnIhkAzHvaD5ugUDZ-?usp=sharing" },
      { text: "Watch on YouTube", url: "https://youtu.be/EMDB7awyR6Y" },
    ],
  },
  {
    name: "REMEDY HOSPITAL",
    label: "Remedy Hospital Pune · Healthcare",
    tag: "Medical · Brand",
    reels: [],
    links: [
      { text: "Preview Video 1", url: "https://drive.google.com/file/d/11GWaBYB0p_Exdtg_7FGCEKW8PbmO9Yb8/view" },
      { text: "Preview Video 2", url: "https://drive.google.com/file/d/1eMOaCZf6OgIdwWOobIu1cwi0ZI-53DvC/view" },
      { text: "Preview Video 3", url: "https://drive.google.com/file/d/1QEOURps_XHlTS4IdkhXgk5lz7mxDfZiN/view" },
    ],
  },
  {
    name: "DR. PRIYANKA PATIL",
    label: "Dr. Priyanka Patil · Nashik",
    tag: "Medical · Personal Brand",
    reels: [],
    links: [
      { text: "Preview Video 1", url: "https://drive.google.com/file/d/1SxNVnjUC3fsfh2dbBG6u27eGj0ivKqdl/view" },
      { text: "Preview Video 2", url: "https://drive.google.com/file/d/1ILBQYg9dOFMuikGnHdA-YFdOmJhLZT_P/view" },
      { text: "Preview Video 3", url: "https://drive.google.com/file/d/13iCoucM-_WKe2LXsq_9UlsHxVAHMpnv5/view" },
    ],
  },
  {
    name: "OTHER WORK",
    label: "Charles Leclerc, Gym, Fashion, Café & more",
    tag: "Mixed · Creative",
    reels: ["qhC-MJH-4HM", "vPswiUOVcLg", "lbPF1cufito", "eg35evUinI4", "I3YpGt-_YXo", "TppPp2wQNuw", "Mj0qvix0Wvc"],
    links: [],
  },
];

const longFormVideos = [
  { id: "Jp7DD4isQLU", title: "AI Film" },
  { id: "EMDB7awyR6Y", title: "Ishita Saluja" },
  { id: "-1KnEc5hmUo", title: "Stylebabe Academy" },
  { id: "UZodCcoFOPM", title: "Stylebabe Academy" },
  { id: "jsjW8_46de4", title: "AI Video" },
  { id: "wf1Azsg8Hac", title: "Vlog" },
];


const experience = [
  {
    title: "AI Video Editor",
    company: "",
    period: "Aug 2026 – Present",
    description: "App studio making products used by millions worldwide. Editing AI-driven video content at scale.",
    logo: triplespeedMark.url,
    logoAlt: "Triplespeed",
    logoClassName: "h-9 w-auto",
  },
  {
    title: "Video Editor",
    company: "Monarch Media House",
    period: "Aug 2025 – Mar 2026",
    description: "Produced brand films, cinematic edits, and high-quality video content for clients.",
    logo: monarchLogo.url,
    logoAlt: "Monarch Media House",
    logoClassName: "h-10 w-auto brightness-0",
  },
  {
    title: "Social Media Manager",
    company: "SilverBridge360",
    period: "Jan 2025 – Jan 2026",
    description: "Managed social media strategy, created video content and marketing campaigns.",
    logo: silverbridgeLogo.url,
    logoAlt: "SilverBridge360",
    logoClassName: "h-12 w-12 rounded-md object-cover",
  },
  {
    title: "Freelance Video Editor",
    company: "Independent",
    period: "2023 – Present",
    description: "Creating short-form content, YouTube edits, ad creatives, and motion graphics for various clients globally.",
    logo: null,
    logoAlt: "",
    logoClassName: "",
  },
];

const VideoCard = ({ videoId, label }: { videoId: string; label?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer bg-muted"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          title="Video"
          allow="autoplay; encrypted-media"
          className="w-full h-full border-0 pointer-events-none"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
        {label && (
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-foreground/80 text-background text-[10px] uppercase tracking-wider rounded-full backdrop-blur-sm">
            {label}
          </div>
        )}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[380px] p-0 overflow-hidden bg-background border-border/50">
          <DialogHeader className="sr-only">
            <DialogTitle>{label || "Video"}</DialogTitle>
            <DialogDescription>Video player</DialogDescription>
          </DialogHeader>
          <div className="aspect-[9/16] w-full bg-black">
            {open && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={label || "Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};


const LongFormCard = ({ videoId, title }: { videoId: string; title?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border/50">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-video rounded-xl overflow-hidden bg-muted cursor-pointer group border border-border/50"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm text-foreground flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ClientCard = ({ client, onOpen }: { client: Client; onOpen: () => void }) => {
  const preview = client.reels[0];
  const count = client.reels.length + client.links.length;

  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative w-full text-left rounded-2xl overflow-hidden border border-border/50 bg-background/60 backdrop-blur-sm group hover:border-border transition-colors"
    >
      <div className="relative aspect-[9/12] overflow-hidden bg-muted">
        {preview ? (
          <img
            src={`https://img.youtube.com/vi/${preview}/hqdefault.jpg`}
            alt={client.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-3 left-3 px-2 py-0.5 bg-background/80 text-foreground text-[10px] uppercase tracking-wider rounded-full backdrop-blur-sm border border-border/40">
          {client.tag}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-poppins text-sm font-medium tracking-premium mb-1">{client.name}</h3>
          <p className="text-[11px] text-muted-foreground line-clamp-1">{client.label}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-border/40">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {count} {count === 1 ? "Item" : "Items"}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-foreground/70 group-hover:text-foreground transition-colors">
          View
          <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </motion.button>
  );
};

const ClientDialog = ({ client, open, onOpenChange }: { client: Client | null; open: boolean; onOpenChange: (v: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {client && (
          <>
            <DialogHeader>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">{client.tag}</p>
              <DialogTitle className="font-poppins text-xl font-medium tracking-premium">{client.name}</DialogTitle>
              <DialogDescription>{client.label}</DialogDescription>
            </DialogHeader>

            {client.reels.length > 0 && (
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Reels</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {client.reels.map((id) => (
                    <a
                      key={id}
                      href={`https://www.youtube.com/shorts/${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <VideoCard videoId={id} />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {client.links.length > 0 && (
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Links & Drive</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {client.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs font-medium p-3 rounded-lg bg-secondary/40 border border-border/40 hover:bg-secondary hover:border-border transition-all group/link"
                    >
                      <span className="truncate pr-4 tracking-wide">{link.text}</span>
                      <svg className="w-4 h-4 opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const VideoEditor = () => {
  const [activeClient, setActiveClient] = useState<Client | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const openClient = (c: Client) => {
    setActiveClient(c);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="font-poppins text-sm font-medium tracking-wide flex items-center gap-1.5 group">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-5 group-hover:ml-0">
                <LionIcon size={14} />
              </span>
              Jaysinh.
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Engineering
              </Link>
              <a href="#showreel" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Showreel
              </a>
              <a href="#clients" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">
                Clients
              </a>
              <a href="#contact" className="text-sm font-medium">
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-6 flex flex-col gap-4 border-t border-border/50 pt-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Engineering
              </Link>
              <a href="#showreel" onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Showreel
              </a>
              <a href="#clients" onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Clients
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium">
                Contact
              </a>
            </div>
          )}
        </div>

      </motion.nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="text-subtle uppercase tracking-wide-premium mb-8">
                  Video Editor · Motion Designer · AI Artist
                </p>
                <h1 className="text-hero mb-8">
                  I'm <span className="font-medium">Jaysinh</span>.
                </h1>
                <p className="text-hero leading-relaxed">
                  I craft{" "}
                  <span className="font-accent text-2xl md:text-3xl lg:text-4xl">cinematic</span>{" "}
                  short-form content
                  <br className="hidden md:block" /> that captures attention and drives
                  <br className="hidden md:block" />{" "}
                  <span className="font-medium">engagement</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 text-subtle pt-4"
              >
                {["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading"].map((skill, index) => (
                  <span key={skill} className="flex items-center gap-3">
                    <span className="tracking-wide">{skill}</span>
                    {index < 4 && <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="pt-2"
              >
                <span className="inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground/70 border border-border/40 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                  Available for Freelance & Remote Work
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-2"
              >
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide link-underline">
                  Let's create together
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative max-w-[280px] mx-auto lg:max-w-[320px] lg:ml-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted-foreground/10 via-muted/20 to-transparent rounded-3xl blur-2xl" />
                <div className="absolute -inset-2 bg-gradient-to-tr from-transparent via-muted-foreground/5 to-muted/15 rounded-2xl blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent rounded-2xl transform rotate-3 scale-105" />
                <img
                  src={profileImage}
                  alt="Jaysinh"
                  className="relative rounded-2xl w-full object-cover shadow-xl shadow-black/10"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>
            </motion.div>
          </div>
        </div>

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

      {/* Video Showreel Grid */}
      <section id="showreel" className="section-spacing">
        <div className="container-wide">
          <AnimatedSection>
            <p className="text-subtle uppercase tracking-wide-premium mb-4">Showreel</p>
            <h2 className="font-poppins text-xl md:text-2xl font-light mb-4 tracking-premium">
              Short-form that <span className="font-accent text-2xl md:text-3xl">stops the scroll</span>
            </h2>
            <p className="text-body max-w-lg mb-16">
              A curated selection of ad creatives, reels, and motion work — designed to convert.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
            {shortVideos.map((video, index) => (
              <AnimatedSection key={video.id} delay={index * 0.04}>
                <VideoCard videoId={video.id} label={video.label} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <a
                href="https://drive.google.com/drive/folders/1d_jPrsh8Q7lWL2z2wNeLbDjdlqF3DfSN?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                View full video portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Clients — interactive slider */}
      <section id="clients" className="section-spacing bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-subtle uppercase tracking-wide-premium mb-4">Clients</p>
                <h2 className="font-poppins text-xl md:text-2xl font-light tracking-premium">
                  Trusted by brands & creators
                </h2>
              </div>
              <p className="hidden md:block text-xs text-muted-foreground">
                Tap a card to see all reels →
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-4">
                {clients.map((client) => (
                  <CarouselItem key={client.name} className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <ClientCard client={client} onOpen={() => openClient(client)} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </div>
            </Carousel>
          </AnimatedSection>
        </div>

        <ClientDialog client={activeClient} open={dialogOpen} onOpenChange={setDialogOpen} />
      </section>

      {/* Long Form Section */}
      <section className="section-spacing bg-secondary/10">
        <div className="container-wide">
          <AnimatedSection>
            <p className="text-subtle uppercase tracking-wide-premium mb-4">Long Form</p>
            <h2 className="font-poppins text-xl md:text-2xl font-light mb-12 tracking-premium">
              YouTube & Detailed Edits
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {longFormVideos.map((video, index) => (
              <AnimatedSection key={video.id} delay={index * 0.1}>
                <div className="flex flex-col gap-3">
                  <LongFormCard videoId={video.id} title={video.title} />
                  <p className="text-sm text-foreground/80 font-medium tracking-wide pl-1">{video.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-subtle uppercase tracking-wide-premium mb-4">Experience</p>
            <h2 className="font-poppins text-xl md:text-2xl font-light mb-12 tracking-premium">
              My Creative Journey
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent">
              <motion.div
                className="absolute inset-0 w-full bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-12">
              {experience.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <div className={`relative flex items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-foreground"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        style={{ boxShadow: "0 0 10px hsl(var(--foreground) / 0.5)" }}
                      />
                    </div>
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <motion.div className="premium-card p-6" whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                        {item.logo && (
                          <div className={`flex mb-5 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                            <div className="h-14 min-w-14 px-2.5 flex items-center justify-center rounded-lg border border-border/50 bg-background">
                              <img src={item.logo} alt={item.logoAlt} className={item.logoClassName} loading="lazy" />
                            </div>
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-2">{item.period}</p>
                        <h3 className="font-poppins text-base font-medium mb-1 tracking-premium">{item.title}</h3>
                        {item.company && <p className="text-sm text-foreground/80 font-medium mb-2">{item.company}</p>}
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-spacing bg-foreground text-background">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-wide-premium mb-6 opacity-60">Let's Talk</p>
            <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light mb-6 tracking-premium">
              Need a video that{" "}
              <span className="font-accent text-3xl md:text-4xl lg:text-5xl">stands out</span>?
              <br />
              Let's make it happen.
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16">
              <a href="tel:+919561593047" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                +91 9561593047
              </a>
              <a href="https://x.com/jaysinh146" target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/jaysinh-patankar-b6a648253/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/aryanpatankar146/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              © {new Date().getFullYear()} Jaysinh. Crafted with intention.
              <LionIcon size={10} className="opacity-20 hover:opacity-60 transition-opacity" />
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React & Tailwind
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default VideoEditor;
