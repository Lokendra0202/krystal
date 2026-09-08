import { StatsSection } from "@/components/about/StatsSection";
import { Hero } from "@/components/home/Hero";
import { HomeMotion } from "@/components/home/HomeMotion";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WorkStyle } from "@/components/home/WorkStyle";

export default function HomePage() {
  return (
    <HomeMotion>
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <WorkStyle />
    </HomeMotion>
  );
}
