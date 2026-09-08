import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import styles from "./Services.module.css";

const offerings = [
  { id: "brand-design", category: "BUILD YOUR IDENTITY", title: "Graphics & logo design", text: "More than a logo. A visual language that makes your brand feel like itself, wherever people find you.", image: "/images/services/logo-design-graphics/graphicsdesign.png", items: ["Logo & visual identity", "Brand colours & typography", "Print & digital collateral", "Brand guidelines"], note: "For new beginnings, fresh perspectives, and brands ready to evolve.", action: "Let’s shape your identity" },
  { id: "social-media", category: "START A CONVERSATION", title: "Social media marketing", text: "Give people a reason to pause, connect, and come back. We bring a clear direction and a consistent voice to your corner of the internet.", image: "/images/services/social-media/social-media.png", items: ["Social content strategy", "Monthly content calendars", "Post & story design", "Campaign creative"], note: "For brands that want to show up with purpose, consistently.", action: "Let’s grow your presence" },
  { id: "reels", category: "MAKE EVERY SECOND COUNT", title: "Reels creation", text: "Small screens. Big personality. Short-form stories with a strong opening, purposeful editing, and a style your audience remembers.", image: "/images/services/reel/reel-making.png", items: ["Concepts & storyboards", "Short-form video editing", "Motion graphics & captions", "Platform-ready exports"], note: "For launches, everyday stories, and moments worth sharing.", action: "Let’s tell your story" },
];

export function ServiceDetails() {
  return (
    <section id="our-services" className={styles.services}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <div><span className={styles.label}>WHAT WE DO</span><h2>One brand.<br /><span>Every expression.</span></h2></div>
          <p>Start with one service or bring it all together. We build the creative around your goals, your audience, and your next chapter.</p>
        </div>
        <div className={styles.offerings}>
          {offerings.map((service, index) => (
            <article id={service.id} key={service.id} className={styles.offering}>
              <div className={styles.serviceVisual}>
                <Image src={service.image} alt={`${service.title} creative illustration`} fill sizes="(max-width: 800px) 100vw, 45vw" className={styles.serviceImage} />
                <span className={styles.imageNumber}>0{index + 1}</span>
                <span className={styles.imageLabel}>{service.category}</span>
              </div>
              <div className={styles.serviceContent}>
                <span className={styles.label}>0{index + 1} / {service.category}</span>
                <h3>{service.title}</h3><p>{service.text}</p>
                <div className={styles.deliverables}><h4>WHAT WE CAN CREATE</h4><ul>{service.items.map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></div>
                <p className={styles.serviceNote}>{service.note}</p>
                <Link href="/contact" className={styles.textLink}>{service.action}<ArrowUpRight size={19} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
