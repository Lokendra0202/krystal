import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PortfolioMotion } from "@/components/portfolio/PortfolioMotion";
import styles from "@/components/portfolio/Portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore creative concepts in brand design, social media, and short-form storytelling at Krystal Creative.",
};

export default function PortfolioPage() {
  return (
    <PortfolioMotion>
      <PortfolioHero />
      <PortfolioGrid />
      <section className={styles.approach} data-portfolio-reveal>
        <div className={`container ${styles.approachInner}`}>
          <span className={styles.label}>THE THREAD THROUGH IT ALL</span>
          <h2>Different formats.<br /><span>The same attention to detail.</span></h2>
          <div className={styles.principles}>
            {[["01", "A clear idea", "Every direction starts with something worth saying."], ["02", "A distinct personality", "Colour, composition, and rhythm that feel like your brand."], ["03", "A connected experience", "Creative that belongs together, wherever it shows up."]].map(([n, title, text]) => <div key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>
      <section className={styles.cta} data-portfolio-reveal><div className="container"><div className={styles.ctaInner}>
        <div><span className={styles.label}><Sparkles size={15} /> YOUR NEXT CREATIVE CHAPTER</span><h2>Let’s make your brand<br /><span>the next story.</span></h2><p>Have something in mind? We’d love to hear it.</p></div>
        <Link href="/contact" className={styles.primary}>Start a conversation <ArrowUpRight size={19} /></Link>
      </div></div></section>
    </PortfolioMotion>
  );
}
