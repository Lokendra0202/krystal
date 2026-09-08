import Image from "next/image";
import { ArrowDown, Asterisk } from "lucide-react";
import styles from "./Portfolio.module.css";

export function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroTop} data-portfolio-intro><span className={styles.label}>THE CREATIVE EDIT / PORTFOLIO</span><span className={styles.smallNote}>Design. Content. A different perspective.</span></div>
        <div className={styles.heroGrid}>
          <div data-portfolio-intro><h1>Ideas with<br /><span>personality.</span><Asterisk aria-hidden="true" /></h1><p>A look inside our creative world. Bold identities, expressive content, and stories made to stay with you.</p><a href="#creative-work" className={styles.explore}>Explore the work <ArrowDown size={18} /></a></div>
          <div className={styles.collage} aria-hidden="true" data-portfolio-intro>
            <div className={styles.backPrint}><Image src="/images/services/social-media/social-media.png" alt="" fill sizes="(max-width: 760px) 60vw, 25vw" className={styles.cover} /></div>
            <div className={styles.frontPrint}><div className={styles.printImage}><Image src="/images/services/logo-design-graphics/graphicsdesign.png" alt="" fill sizes="(max-width: 760px) 65vw, 28vw" loading="eager" className={styles.cover} /></div><span>COLOUR OUTSIDE THE ORDINARY. <Asterisk size={18} /></span></div>
            <span className={styles.sticker}>A fresh<br />point of view.</span>
          </div>
        </div>
        <div className={styles.heroBottom}><span>BRAND IDENTITIES</span><Asterisk size={14} /><span>SOCIAL STORIES</span><Asterisk size={14} /><span>CREATIVE MOTION</span></div>
      </div>
    </section>
  );
}
