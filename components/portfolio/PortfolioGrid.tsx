"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Portfolio.module.css";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  { id: "identity", number: "01", title: "Identity in full colour", category: "Graphic Design", image: "/images/services/logo-design-graphics/graphicsdesign.png", description: "A bold visual world, built around the power of colour.", tags: ["Visual identity", "Art direction", "Graphic design"], idea: "Explore how an expressive palette and a consistent visual language can bring a brand together. This illustration captures the energy behind an identity, from early ideas to the details that make it recognisable.", focus: "Colour relationships, visual hierarchy, and a cohesive design direction.", service: "brand-design" },
  { id: "social", number: "02", title: "Made for the feed", category: "Social Media", image: "/images/services/social-media/social-media.png", description: "Playful compositions. A personality you can’t scroll past.", tags: ["Social content", "Campaign direction"], idea: "A playful exploration of social storytelling. Bold compositions and a connected creative direction show how a brand can build a recognisable presence across its everyday content.", focus: "Content consistency, expressive layouts, and a conversational brand personality.", service: "social-media" },
  { id: "motion", number: "03", title: "Stories in motion", category: "Reels", image: "/images/services/reel/reel-making.png", description: "Small-screen storytelling with a little more character.", tags: ["Short-form storytelling", "Motion direction"], idea: "An illustrated direction for short-form storytelling, exploring the relationship between an engaging opening, purposeful pacing, and a memorable finish. This is a visual concept, not a playable reel.", focus: "Story structure, visual rhythm, and a clear creative hook.", service: "reels" },
];
const filters = ["All work", "Graphic Design", "Social Media", "Reels"];

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All work");
  const grid = useRef<HTMLDivElement>(null);
  const visible = projects.filter(project => filter === "All work" || project.category === filter);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-project-card]", grid.current).forEach((card, index) => {
          gsap.from(card, { opacity: 0, y: 32, duration: 0.75, delay: index * 0.06, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: card, start: "top 94%", once: true } });
        });
      });
    }, grid);
    ScrollTrigger.refresh();
    return () => { media.revert(); context.revert(); };
  }, [filter]);

  return (
    <section id="creative-work" className={styles.work}>
      <div className="container">
        <div className={styles.workHeading}><div><span className={styles.label}>CREATIVE EXPLORATIONS</span><h2>A few ways<br /><span>we see things.</span></h2></div><p>Illustrative concepts across our core services. A glimpse into our creative direction, rather than client case studies.</p></div>
        <div className={styles.filterBar}><div role="group" aria-label="Filter creative work" className={styles.filters}>{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} aria-controls="portfolio-results" onClick={() => setFilter(item)}>{item}<span>{item === "All work" ? projects.length : projects.filter(p => p.category === item).length}</span></button>)}</div><p role="status">{String(visible.length).padStart(2, "0")} {visible.length === 1 ? "concept" : "concepts"}</p></div>
        <div id="portfolio-results" ref={grid} className={styles.gallery}>
          {visible.map((project) => <article key={project.id} data-project-card className={`${styles.card} ${project.id === "identity" ? styles.featured : ""} ${visible.length === 1 ? styles.single : ""}`}>
            <div className={styles.visual}><Image src={project.image} alt={`${project.title}: ${project.category.toLowerCase()} concept illustration`} fill sizes={project.id === "identity" || visible.length === 1 ? "(max-width: 760px) 100vw, 85vw" : "(max-width: 760px) 100vw, 45vw"} className={styles.cover} /><span className={styles.concept}>CREATIVE CONCEPT / {project.number}</span><div className={styles.visualCaption}><span>{project.category}</span><span>{project.number} / 03</span></div></div>
            <div className={styles.cardBody}><div className={styles.cardTitle}><h3>{project.title}</h3><span className={styles.projectNumber}>{project.number}</span></div><p>{project.description}</p><ul className={styles.tags}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <details className={styles.notes}><summary>Explore the concept <Plus size={18} aria-hidden="true" /></summary><div className={styles.notesBody}><h4>THE IDEA</h4><p>{project.idea}</p><h4>CREATIVE FOCUS</h4><p>{project.focus}</p><Link href={`/services#${project.service}`}>Explore this service <ArrowUpRight size={17} /></Link></div></details>
            </div>
          </article>)}
        </div>
        <div className={styles.galleryFoot}><span>Every brand has its own story. This is a glimpse of our approach.</span><Link href="/services">Discover our services <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  );
}
