import { ArrowUpRight, Globe2, Mail, MessagesSquare, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import styles from "./Contact.module.css";

export function ContactInfo() {
  return (
    <aside className={styles.info} data-contact-reveal>
      <span className={styles.label}>Let&apos;s connect</span>
      <h2>
        Great work starts with <span>a conversation.</span>
      </h2>
      <p className={styles.infoText}>
        Have a clear brief or just the beginning of an idea? Send the shape of it, and we
        will help turn it into the right design, content, or launch plan.
      </p>
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <Mail aria-hidden="true" />
          <span>Email us</span>
          <a href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className={styles.infoItem}>
          <Phone aria-hidden="true" />
          <span>Call us</span>
          <a href={siteConfig.phoneHref}>
            {siteConfig.phone}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className={styles.infoItem}>
          <Globe2 aria-hidden="true" />
          <span>Location</span>
          <strong>Remote-first studio</strong>
          <p>Collaborating with brands wherever the right idea needs to travel.</p>
        </div>
        <div className={styles.infoItem}>
          <MessagesSquare aria-hidden="true" />
          <span>Best for</span>
          <strong>Brands ready to look sharper</strong>
          <p>Identity, social content, campaign visuals, reels, and fresh creative direction.</p>
        </div>
      </div>
    </aside>
  );
}
