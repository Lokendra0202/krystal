import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import styles from "./Services.module.css";

export function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <span className={styles.label}>CREATIVE SERVICES</span>
          <h1>Good ideas.<br />Great design.<br /><span>A brand that moves.</span></h1>
          <p className={styles.intro}>From your first impression to your next big moment. We bring design, social, and storytelling together to make your brand unmistakably you.</p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primary}>Let’s build your brand <ArrowUpRight size={18} /></Link>
            <a href="#our-services" className={styles.secondary}>Explore services <ArrowDown size={17} /></a>
          </div>
          <p className={styles.heroNote}>Thoughtful strategy. Distinctive creative. One connected brand.</p>
        </div>
        <div className={styles.heroArt}>
          <Image src="/images/services/logo-design-graphics/graphicsdesign.png" alt="Creative illustration of graphic design and branding" fill sizes="(max-width: 800px) 100vw, 45vw" loading="eager" className={styles.heroImage} />
          <div className={styles.artHeader}><Sparkles size={17} /><span>A LITTLE STRATEGY. A LOT OF IMAGINATION.</span></div>
          <div className={styles.artCaption}><span>Made to stand out.</span><span>Designed to connect.</span></div>
          <div className={styles.artBadge}><Sparkles size={22} /><span>Ideas into<br /><strong>impact.</strong></span></div>
        </div>
      </div>
      <nav aria-label="Explore our services" className={`container ${styles.serviceNav}`}>
        {[["01", "Graphics & logo design", "brand-design"], ["02", "Social media marketing", "social-media"], ["03", "Reels creation", "reels"]].map(([number, title, id]) => (
          <a href={`#${id}`} key={id}><span>{number}</span>{title}<ArrowDown size={18} /></a>
        ))}
      </nav>
    </section>
  );
}
