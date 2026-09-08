import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ProjectProcess } from "@/components/services/ProjectProcess";
import { ServicesMotion } from "@/components/services/ServicesMotion";
import styles from "@/components/services/Services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore graphic and logo design, social media marketing, and reels creation at Krystal Creative.",
};
const questions = [
  ["Can I combine services?", "Absolutely. We can bring identity design, social content, and reels into one connected scope, or focus on the single service you need right now."],
  ["How is a project priced?", "Every scope is shaped around your deliverables, creative needs, and timeline. Share your brief and we’ll put together an approach for your project."],
  ["What do you need from me?", "Your goals, existing brand assets, examples you like, and a rough timeline are a great starting point. We’ll work through the details together."],
  ["How long will my project take?", "The timeline depends on the scope and feedback rounds. We’ll agree on milestones and delivery dates before creative work begins."],
];
export default function ServicesPage() {
  return (
    <ServicesMotion>
      <ServicesHero /><ServiceDetails /><ProjectProcess />
      <section className={styles.faq}><div className={`container ${styles.faqGrid}`}>
        <div><span className={styles.label}>A FEW GOOD QUESTIONS</span><h2>Before we<br /><span>get started.</span></h2><p>Something else on your mind?</p><Link href="/contact" className={styles.textLink}>Let’s talk it through <ArrowUpRight size={18} /></Link></div>
        <div>{questions.map(([question, answer]) => <details key={question} className={styles.question}><summary>{question}<Plus size={20} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
      </div></section>
      <section className={styles.cta}><div className="container"><div className={styles.ctaInner}>
        <div><span className={styles.label}>YOUR NEXT CHAPTER STARTS HERE</span><h2>Have a spark?<br />Let’s make it <span>something.</span></h2><p>Bring the idea. We’ll bring the creative energy.</p></div>
        <Link href="/contact" className={styles.primary}>Start a conversation <ArrowUpRight size={20} /></Link>
      </div></div></section>
    </ServicesMotion>
  );
}
