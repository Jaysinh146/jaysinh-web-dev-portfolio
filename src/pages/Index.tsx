import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { WebProjects } from "@/components/WebProjects";
import { FullStackApps } from "@/components/FullStackApps";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Psychology } from "@/components/Psychology";
import { Services } from "@/components/Services";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Preloader } from "@/components/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen ${isLoading ? "overflow-hidden" : ""}`}>
        <Navigation />
        <Hero />
        <Skills />
        <WebProjects />
        <FullStackApps />
        <VideoShowcase />
        <Psychology />
        <Services />
        <Resume />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
