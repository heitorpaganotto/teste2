import { Hero } from "@/components/Hero";
import { GamesSection } from "@/components/GamesSection";
import { SubscribeSection } from "@/components/SubscribeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Hero />
      <GamesSection />
      <SubscribeSection />
    </div>
  );
};

export default Index;
