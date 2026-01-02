import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const videos = [
  { id: "lbPF1cufito", type: "short" },
  { id: "eg35evUinI4", type: "short" },
  { id: "-zKPd-M66KI", type: "short" },
  { id: "wzz5XLZLfpI", type: "short" },
  { id: "TppPp2wQNuw", type: "short" },
  { id: "I3YpGt-_YXo", type: "short" },
];

const VideoCard = ({ videoId }: { videoId: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <motion.div
      className="video-container group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        title="Video"
        allow="autoplay; encrypted-media"
        className="w-full h-full border-0"
        loading="lazy"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Play indicator on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const VideoShowcase = () => {
  return (
    <section id="video" className="section-spacing">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-subtle uppercase tracking-wide-premium mb-4">
            Video Editing
          </p>
          <h2 className="font-poppins text-xl md:text-2xl font-light mb-4 tracking-premium">
            A premium editor's eye
          </h2>
          <p className="text-body max-w-lg mb-16">
            Paired with a developer's structure. Short-form content that captures attention and holds it.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <AnimatedSection key={video.id} delay={index * 0.05}>
              <VideoCard videoId={video.id} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://drive.google.com/drive/folders/your-folder-id"
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
  );
};
