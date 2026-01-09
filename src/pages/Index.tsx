import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { WebProjects } from "@/components/WebProjects";
import { FullStackApps } from "@/components/FullStackApps";
import { OpenSource } from "@/components/OpenSource";
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
        <TechStack />
        <WebProjects />
        <FullStackApps />
        <OpenSource />
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
