import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PageCTA } from "@/components/ui/PageCTA";
import { StorySection } from "@/components/about/StorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { ProjectProcess } from "@/components/services/ProjectProcess";
export const metadata: Metadata = { title: "About", description: "Meet the creative thinking behind Krystal's graphic design, social media, and reels." };
export default function AboutPage() {
  return <><PageHero label="About" title="A little curiosity." accent="A lot of creative energy." description="We connect thoughtful strategy with expressive design to help your brand find its voice and show up with confidence." /><StorySection /><ValuesSection /><ProjectProcess /><PageCTA /></>;
}
