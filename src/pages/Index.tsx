import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { WebProjects } from "@/components/WebProjects";
import { FullStackApps } from "@/components/FullStackApps";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Psychology } from "@/components/Psychology";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <WebProjects />
      <FullStackApps />
      <VideoShowcase />
      <Psychology />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
