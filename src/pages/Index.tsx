import HeroSection from "@/components/HeroSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PortfolioGallery />
      <ExperienceTimeline />
      <ContactSection />
      <MadeWithDyad />
    </div>
  );
};

export default Index;