import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import styles from "./Contact.module.css";

export function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <span className={styles.label} data-contact-intro>
            <Sparkles aria-hidden="true" />
            Contact Krystal
          </span>
          <h1 data-contact-intro>
            Bring the idea. <span>We will shape the story.</span>
          </h1>
          <p className={styles.heroCopy} data-contact-intro>
            Tell us about your brand, your next launch, or the content you want to make feel
            unmistakably yours. We will turn the first conversation into a clear creative path.
          </p>
          <div className={styles.heroActions} data-contact-intro>
            <Link href="#project-brief" className={styles.primary}>
              Start a brief
              <ArrowDown size={16} />
            </Link>
            <a href={`mailto:${siteConfig.email}`} className={styles.secondary}>
              {siteConfig.email}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className={styles.heroPanel} aria-hidden="true">
          <div className={styles.availability}>
            <i />
            Select projects open
          </div>
          <div className={styles.imageFrame}>
            <Image
              src="/images/services/social-media/social-media.png"
              alt=""
              fill
              sizes="(max-width: 1000px) 90vw, 38vw"
              priority
            />
          </div>
          <div className={styles.noteCard}>
            <span>Creative note</span>
            <p>Your project should feel considered before it ever feels complicated.</p>
          </div>
        </div>
      </div>
      <div className={styles.quickStrip}>
        <div className={`container ${styles.quickStripInner}`}>
          <div data-contact-intro>
            <span>Services</span>
            <p>Graphic design, social media direction, reels, and brand-led content.</p>
          </div>
          <div data-contact-intro>
            <span>Response</span>
            <p>Project notes are reviewed with care before we suggest the next move.</p>
          </div>
          <div data-contact-intro>
            <span>Collaboration</span>
            <p>Remote-first, tidy communication, and a creative process that stays human.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
