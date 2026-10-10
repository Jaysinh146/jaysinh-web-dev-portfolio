import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink, Menu, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LionIcon } from "@/components/LionIcon";
import { ScrollToTop } from "@/components/ScrollToTop";
import triplespeedMark from "@/assets/triplespeed-mark.png.asset.json";
import monarchLogo from "@/assets/monarch-media-house.png.asset.json";
import silverbridgeLogo from "@/assets/silverbridge-360.png.asset.json";

const shortVideos = [
  { id: "LYPzTWDo0CE", label: "Ishita" },
  { id: "PGQMpsy0u9w", label: "NRI" },
  { id: "F9K17y0YkrY", label: "NRI" },
  { id: "lbPF1cufito", label: "Creative" },
  { id: "eg35evUinI4", label: "Creative" },
  { id: "Tl-R1SBWzV0", label: "Short form" },
  { id: "wzz5XLZLfpI", label: "Short form" },
  { id: "TppPp2wQNuw", label: "Short form" },
  { id: "TZtdZKZ1XlQ", label: "Allen" },
  { id: "poaplI90TxA", label: "Imagination" },
  { id: "qhC-MJH-4HM", label: "Leclerc" },
  { id: "zp-HdcPpHEM", label: "Class Saathi" },
  { id: "xj_cGsEGiEc", label: "Ishita" },
  { id: "I3YpGt-_YXo", label: "Creative" },
  { id: "DvLbM0ahY4Y", label: "AI video" },
  { id: "rzjQygTCkzE", label: "Creative" },
  { id: "vBHGfe8mtAM", label: "Creative" },
  { id: "OY7L41xb98E", label: "AI" },
  { id: "vpFaK3kfog4", label: "Creative" },
  { id: "4K7p_WBi0N8", label: "Imagination" },
];

const longFormVideos = [
  { id: "Jp7DD4isQLU", title: "AI Film", type: "AI Direction" },
  { id: "EMDB7awyR6Y", title: "Ishita Saluja", type: "Creator Film" },
  { id: "-1KnEc5hmUo", title: "Stylebabe Academy", type: "YouTube" },
  { id: "UZodCcoFOPM", title: "Stylebabe Academy", type: "YouTube" },
  { id: "jsjW8_46de4", title: "AI Video", type: "AI Direction" },
  { id: "wf1Azsg8Hac", title: "Vlog", type: "Editorial" },
];

type ClientLink = { text: string; url: string };
type Client = {
  name: string;
  category: string;
  outcome: string;
  reels: string[];
  links: ClientLink[];
};

const clients: Client[] = [
  { name: "ALLEN ONLINE", category: "EdTech · Paid & Organic", outcome: "Short-form designed for clarity, retention and scale.", reels: ["TZtdZKZ1XlQ", "ONdfzpaX2GE"], links: [] },
  { name: "CLASS SAATHI", category: "EdTech · Product", outcome: "Product storytelling built for fast social attention.", reels: ["zp-HdcPpHEM", "0wRNlsiNBr0", "-vaTByekDSA"], links: [] },
  { name: "IMAGINATION INC.", category: "Interior Design · Brand", outcome: "A visual system translating spaces into scroll-stopping stories.", reels: ["poaplI90TxA", "vL5CbhK44uU", "4K7p_WBi0N8"], links: [
    { text: "Preview video 01", url: "https://drive.google.com/file/d/1n1xuUmWPw7es6anW-6B1ibShBknUqC73/view" },
    { text: "Preview video 02", url: "https://drive.google.com/file/d/1vHuC9SG7hP55a8YfM_nQ07MdItfLAxVQ/view" },
    { text: "Horizontal reel", url: "https://drive.google.com/file/d/1ZT9jRem2sA9mosPYuH3E1CfYppdZXyQx/view" },
  ] },
  { name: "ISHITA SALUJA", category: "Creator · 1.5M Instagram", outcome: "Fashion-led edits engineered for audience retention.", reels: ["xj_cGsEGiEc", "LYPzTWDo0CE"], links: [
    { text: "View Drive folder", url: "https://drive.google.com/drive/folders/1OLgARQPp3TTw7frnIhkAzHvaD5ugUDZ-?usp=sharing" },
    { text: "Watch on YouTube", url: "https://youtu.be/EMDB7awyR6Y" },
  ] },
  { name: "REMEDY HOSPITAL", category: "Healthcare · Brand", outcome: "Trust-led visual communication for a medical audience.", reels: [], links: [
    { text: "Preview video 01", url: "https://drive.google.com/file/d/11GWaBYB0p_Exdtg_7FGCEKW8PbmO9Yb8/view" },
    { text: "Preview video 02", url: "https://drive.google.com/file/d/1eMOaCZf6OgIdwWOobIu1cwi0ZI-53DvC/view" },
    { text: "Preview video 03", url: "https://drive.google.com/file/d/1QEOURps_XHlTS4IdkhXgk5lz7mxDfZiN/view" },
  ] },
  { name: "DR. PRIYANKA PATIL", category: "Healthcare · Personal Brand", outcome: "Expert-led content shaped into approachable social stories.", reels: [], links: [
    { text: "Preview video 01", url: "https://drive.google.com/file/d/1SxNVnjUC3fsfh2dbBG6u27eGj0ivKqdl/view" },
    { text: "Preview video 02", url: "https://drive.google.com/file/d/1ILBQYg9dOFMuikGnHdA-YFdOmJhLZT_P/view" },
    { text: "Preview video 03", url: "https://drive.google.com/file/d/13iCoucM-_WKe2LXsq_9UlsHxVAHMpnv5/view" },
  ] },
  { name: "OTHER WORK", category: "Culture · Fashion · Fitness", outcome: "A range of visual languages, adapted to audience and niche.", reels: ["qhC-MJH-4HM", "vPswiUOVcLg", "lbPF1cufito", "eg35evUinI4", "I3YpGt-_YXo", "TppPp2wQNuw", "Mj0qvix0Wvc"], links: [] },
];

const proof = [
  { value: "$100K+", label: "Ad spend supported by AI creatives", detail: "SaaS + e-commerce" },
  { value: "500+", label: "Paid creatives tested", detail: "Concept to iteration" },
  { value: "10M+", label: "Organic views generated", detail: "Instagram" },
  { value: "1M+", label: "Audience brands & creators", detail: "Instagram + TikTok" },
];

const capabilities = [
  { index: "01", title: "AI creative direction", copy: "From concept and visual language to generation, edit and final delivery—one coherent creative point of view." },
  { index: "02", title: "Performance creative", copy: "High-volume SaaS and e-commerce ad systems built around hooks, angles, fast iteration and what the data teaches next." },
  { index: "03", title: "Organic strategy", copy: "Native social ideas, creator-led formats and AI-assisted production designed for reach, retention and repeatable output." },
  { index: "04", title: "Creative pipelines", copy: "Structured AI workflows that connect ideation, image generation, video models, enhancement, motion design and delivery." },
];

const toolGroups = [
  { label: "Generate", tools: "Seedance 2.5 · Kling · Flow · Wan 3.0 · MiniMax H3 Max · HappyHorse" },
  { label: "Create", tools: "GPT Image · Seedream · Higgsfield · Runway" },
  { label: "Enhance", tools: "Magnific · Magnific Spaces" },
  { label: "Direct", tools: "Claude Opus Motion · GPT Astra · AI creative pipelines" },
];

const experience = [
  { title: "AI Video Editor", company: "", period: "Aug 2026 — Present", description: "Building AI-led creative systems and video output for an app studio whose products are used by millions worldwide.", logo: triplespeedMark.url, logoAlt: "Triplespeed", logoClassName: "h-9 w-auto" },
  { title: "Video Editor", company: "Monarch Media House", period: "Aug 2025 — Mar 2026", description: "Directed the edit across brand films, cinematic content and client campaigns while maintaining a consistent visual bar.", logo: monarchLogo.url, logoAlt: "Monarch Media House", logoClassName: "h-10 w-auto brightness-0" },
  { title: "Social Media Manager", company: "SilverBridge360", period: "Jan 2025 — Jan 2026", description: "Owned content strategy, creative production and campaign execution across organic and marketing channels.", logo: silverbridgeLogo.url, logoAlt: "SilverBridge360", logoClassName: "h-12 w-12 rounded-md object-cover" },
  { title: "Freelance Video Editor", company: "Independent", period: "2023 — Present", description: "Partnering with brands and creators globally across short-form, YouTube, ad creative, motion and AI-assisted production.", logo: null, logoAlt: "", logoClassName: "" },
];

const VideoDialog = ({ video, onClose }: { video: { id: string; title: string; vertical: boolean } | null; onClose: () => void }) => (
  <Dialog open={Boolean(video)} onOpenChange={(open) => !open && onClose()}>
    <DialogContent className={video?.vertical ? "max-w-[390px] overflow-hidden p-0" : "max-w-5xl overflow-hidden p-0"}>
      <DialogHeader className="sr-only">
        <DialogTitle>{video?.title ?? "Video"}</DialogTitle>
        <DialogDescription>Video player</DialogDescription>
      </DialogHeader>
      <div className={video?.vertical ? "aspect-[9/16] bg-foreground" : "aspect-video bg-foreground"}>
        {video && <iframe src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full border-0" />}
      </div>
    </DialogContent>
  </Dialog>
);

const PlayButton = ({ label }: { label: string }) => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-background/40 bg-background/90 text-foreground transition-transform duration-300 group-hover:scale-110" aria-label={`Play ${label}`}>
    <Play className="h-4 w-4 fill-current" />
  </span>
);

const VideoEditor = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string; vertical: boolean } | null>(null);
  const [activeClient, setActiveClient] = useState<Client | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Jaysinh — AI Video Editor & Creative Director";
    return () => { document.title = previousTitle; };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="container-wide flex h-16 items-center justify-between">
          <Link to="/" className="font-poppins text-sm font-medium">Jaysinh.</Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Video portfolio navigation">
            <a href="#work" className="text-xs uppercase tracking-wide-premium text-muted-foreground transition-colors hover:text-foreground">Work</a>
            <a href="#approach" className="text-xs uppercase tracking-wide-premium text-muted-foreground transition-colors hover:text-foreground">Approach</a>
            <a href="#experience" className="text-xs uppercase tracking-wide-premium text-muted-foreground transition-colors hover:text-foreground">Experience</a>
            <a href="#contact" className="text-xs uppercase tracking-wide-premium">Contact</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="container-wide flex flex-col gap-5 border-t border-border/60 py-6 md:hidden" aria-label="Mobile video portfolio navigation">
            <a href="#work" onClick={closeMenu} className="text-sm">Work</a>
            <a href="#approach" onClick={closeMenu} className="text-sm">Approach</a>
            <a href="#experience" onClick={closeMenu} className="text-sm">Experience</a>
            <a href="#contact" onClick={closeMenu} className="text-sm">Contact</a>
            <Link to="/" onClick={closeMenu} className="text-sm text-muted-foreground">Engineering portfolio</Link>
          </nav>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-16">
          <img src="https://img.youtube.com/vi/Jp7DD4isQLU/maxresdefault.jpg" alt="Still from Jaysinh's AI-directed film" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/35 to-transparent" />
          <div className="container-wide relative z-10 pb-12 pt-32 text-background md:pb-16 lg:pb-20">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 0.7, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 text-xs uppercase tracking-wide-premium">
              AI Video Editor · AI Creative Director
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl font-poppins text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
              AI creatives with taste,<br />built to perform.
            </motion.h1>
            <div className="mt-8 grid gap-8 border-t border-background/30 pt-6 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-sm leading-relaxed text-background/75 md:text-base">
                I turn strategy, visual direction and the newest AI models into ad systems and organic creative that can move at the speed of culture—and scale with the business.
              </p>
              <a href="#work" className="group inline-flex items-center gap-3 text-sm font-medium">
                See selected work <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Portfolio results" className="border-b border-border bg-background">
          <div className="container-wide grid grid-cols-2 lg:grid-cols-4">
            {proof.map((item, index) => (
              <div key={item.value} className={`py-8 ${index % 2 === 0 ? "pr-4" : "border-l border-border pl-4"} lg:border-l lg:px-6 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0`}>
                <p className="font-poppins text-3xl font-medium md:text-4xl">{item.value}</p>
                <p className="mt-3 text-xs font-medium leading-snug">{item.label}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide-premium text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden border-b border-border py-4" aria-label="AI creative capabilities">
          <motion.div animate={reduceMotion ? undefined : { x: [0, -900] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <p key={copy} className="pr-10 font-poppins text-sm uppercase tracking-wide-premium text-muted-foreground">
                AI Direction · Performance Creative · Organic Strategy · Visual Editing · Motion Design · Creative Systems · AI Direction · Performance Creative · Organic Strategy ·
              </p>
            ))}
          </motion.div>
        </section>

        <section id="work" className="section-spacing">
          <div className="container-wide">
            <AnimatedSection className="mb-12 grid gap-5 border-b border-border pb-8 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-wide-premium text-muted-foreground">01 / Selected work</p>
                <h2 className="font-poppins text-3xl font-medium md:text-5xl">The work wall.</h2>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:justify-self-end">AI films, performance creatives, social edits and visual experiments. Every piece opens in focus.</p>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              {shortVideos.map((video, index) => (
                <motion.button key={video.id} type="button" onClick={() => setActiveVideo({ id: video.id, title: video.label, vertical: true })} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className={`group relative overflow-hidden bg-muted text-left ${index === 0 || index === 7 ? "md:col-span-2 md:row-span-2" : ""}`}>
                  <div className="aspect-[9/16]">
                    <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={`${video.label} video thumbnail`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-background md:p-4">
                    <span className="text-[10px] uppercase tracking-wide-premium">{video.label}</span>
                    <span className="hidden group-hover:inline-flex"><PlayButton label={video.label} /></span>
                  </div>
                </motion.button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <a href="https://drive.google.com/drive/folders/1d_jPrsh8Q7lWL2z2wNeLbDjdlqF3DfSN?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium">Full portfolio <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-foreground text-background">
          <div className="container-wide">
            <AnimatedSection className="mb-12 flex items-end justify-between border-b border-background/25 pb-8">
              <div>
                <p className="mb-4 text-xs uppercase tracking-wide-premium text-background/60">02 / Longer narratives</p>
                <h2 className="font-poppins text-3xl font-medium md:text-5xl">Direction needs range.</h2>
              </div>
            </AnimatedSection>
            <div className="grid gap-x-5 gap-y-10 md:grid-cols-2">
              {longFormVideos.map((video, index) => (
                <motion.button key={video.id} type="button" onClick={() => setActiveVideo({ id: video.id, title: video.title, vertical: false })} whileHover={{ y: -4 }} className="group text-left">
                  <div className="relative aspect-video overflow-hidden bg-background/10">
                    <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={`${video.title} thumbnail`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/5" />
                    <div className="absolute bottom-4 right-4"><PlayButton label={video.title} /></div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="font-poppins text-lg">{video.title}</h3>
                    <span className="text-[10px] uppercase tracking-wide-premium text-background/60">{video.type} / {String(index + 1).padStart(2, "0")}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section-spacing">
          <div className="container-wide grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-xs uppercase tracking-wide-premium text-muted-foreground">03 / What I bring</p>
              <h2 className="max-w-md font-poppins text-3xl font-medium leading-tight md:text-5xl">Creative judgment, at AI speed.</h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">Not just prompting. I connect insight, taste, production and iteration into creative systems that teams can actually use.</p>
            </AnimatedSection>
            <div className="border-t border-border">
              {capabilities.map((item) => (
                <AnimatedSection key={item.index} className="grid gap-5 border-b border-border py-8 md:grid-cols-[64px_1fr_1.2fr] md:items-start">
                  <span className="text-xs text-muted-foreground">{item.index}</span>
                  <h3 className="font-poppins text-xl font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 py-12 md:py-16">
          <div className="container-wide">
            <p className="mb-8 text-xs uppercase tracking-wide-premium text-muted-foreground">AI production stack</p>
            <div className="divide-y divide-border border-y border-border">
              {toolGroups.map((group) => (
                <div key={group.label} className="grid gap-3 py-5 md:grid-cols-[160px_1fr] md:items-baseline">
                  <p className="text-xs uppercase tracking-wide-premium">{group.label}</p>
                  <p className="font-poppins text-base leading-relaxed text-muted-foreground md:text-xl">{group.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing" id="clients">
          <div className="container-wide">
            <AnimatedSection className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-wide-premium text-muted-foreground">04 / Client work</p>
                <h2 className="font-poppins text-3xl font-medium md:text-5xl">Built for the audience.</h2>
              </div>
              <p className="text-sm text-muted-foreground md:justify-self-end">Select a client to view the work.</p>
            </AnimatedSection>
            <div className="grid border-t border-border md:grid-cols-2">
              {clients.map((client, index) => (
                <motion.button key={client.name} type="button" onClick={() => setActiveClient(client)} whileHover={{ x: 4 }} className={`group grid min-h-48 gap-8 border-b border-border p-6 text-left md:p-8 ${index % 2 === 0 ? "md:border-r" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-wide-premium text-muted-foreground">{String(index + 1).padStart(2, "0")} / {client.category}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="self-end">
                    <h3 className="font-poppins text-xl font-medium md:text-2xl">{client.name}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{client.outcome}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-spacing bg-secondary/40">
          <div className="container-wide">
            <AnimatedSection className="mb-10 border-b border-border pb-8">
              <p className="mb-4 text-xs uppercase tracking-wide-premium text-muted-foreground">05 / Experience</p>
              <h2 className="font-poppins text-3xl font-medium md:text-5xl">Creative ownership.</h2>
            </AnimatedSection>
            <div className="divide-y divide-border border-b border-border">
              {experience.map((item, index) => (
                <AnimatedSection key={`${item.title}-${item.period}`} className="grid gap-5 py-8 md:grid-cols-[90px_1fr_200px] md:items-center">
                  <div className="flex h-16 w-20 items-center justify-center border border-border bg-background px-3">
                    {item.logo ? <img src={item.logo} alt={item.logoAlt} loading="lazy" className={item.logoClassName} /> : <LionIcon size={24} className="opacity-40" />}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wide-premium text-muted-foreground">{String(index + 1).padStart(2, "0")} / {item.period}</p>
                    <h3 className="mt-2 font-poppins text-xl font-medium">{item.title}</h3>
                    {item.company && <p className="mt-1 text-sm">{item.company}</p>}
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <p className="text-xs uppercase tracking-wide-premium text-muted-foreground md:text-right">Creative · Strategy · Delivery</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-foreground py-20 text-background md:py-28">
          <div className="container-wide">
            <AnimatedSection>
              <p className="mb-6 text-xs uppercase tracking-wide-premium text-background/60">Available for select roles and projects</p>
              <h2 className="max-w-5xl font-poppins text-4xl font-medium leading-tight md:text-6xl">Need creative that can carry the spend?</h2>
              <div className="mt-10 grid gap-8 border-t border-background/25 pt-8 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-xl text-sm leading-relaxed text-background/65">AI video, creative direction, performance systems and organic strategy—from the first idea to the next winning iteration.</p>
                <Button asChild variant="outline" className="border-background bg-transparent text-background hover:bg-background hover:text-foreground">
                  <a href="mailto:patankararyan7@gmail.com">Start a conversation <ArrowRight /></a>
                </Button>
              </div>
              <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-xs text-background/60">
                <a href="tel:+919561593047" className="hover:text-background">+91 9561593047</a>
                <a href="https://www.linkedin.com/in/jaysinh-patankar-b6a648253/" target="_blank" rel="noopener noreferrer" className="hover:text-background">LinkedIn</a>
                <a href="https://www.instagram.com/aryanpatankar146/" target="_blank" rel="noopener noreferrer" className="hover:text-background">Instagram</a>
                <a href="https://x.com/jaysinh146" target="_blank" rel="noopener noreferrer" className="hover:text-background">Twitter</a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-7">
        <div className="container-wide flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Jaysinh. AI creative portfolio.</p>
          <Link to="/" className="hover:text-foreground">View engineering portfolio</Link>
        </div>
      </footer>

      <VideoDialog video={activeVideo} onClose={() => setActiveVideo(null)} />
      <Dialog open={Boolean(activeClient)} onOpenChange={(open) => !open && setActiveClient(null)}>
        <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto">
          {activeClient && (
            <>
              <DialogHeader className="border-b border-border pb-5 text-left">
                <DialogDescription className="text-[10px] uppercase tracking-wide-premium">{activeClient.category}</DialogDescription>
                <DialogTitle className="font-poppins text-2xl font-medium">{activeClient.name}</DialogTitle>
                <p className="max-w-xl text-sm text-muted-foreground">{activeClient.outcome}</p>
              </DialogHeader>
              {activeClient.reels.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {activeClient.reels.map((id) => (
                    <button key={id} type="button" onClick={() => setActiveVideo({ id, title: activeClient.name, vertical: true })} className="group relative aspect-[9/16] overflow-hidden bg-muted">
                      <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={`${activeClient.name} reel`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/15"><PlayButton label={`${activeClient.name} reel`} /></div>
                    </button>
                  ))}
                </div>
              )}
              {activeClient.links.length > 0 && (
                <div className="grid gap-2 sm:grid-cols-2">
                  {activeClient.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-border p-4 text-sm transition-colors hover:bg-secondary">
                      {link.text}<ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
      <ScrollToTop />
    </div>
  );
};

export default VideoEditor;
