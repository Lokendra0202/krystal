"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidCursor } from "@/components/home/LiquidCursor";
import styles from "./Portfolio.module.css";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(element.querySelectorAll("[data-portfolio-intro]"), { opacity: 0, y: 30, duration: 1, stagger: 0.15, ease: "power3.out", clearProps: "transform,opacity" });
        element.querySelectorAll<HTMLElement>("[data-portfolio-reveal]").forEach(section => {
          gsap.from(section, { opacity: 0, y: 36, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: section, start: "top 92%", once: true } });
        });
      });
    }, element);
    let disposed = false;
    let frame = 0;
    const refresh = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { if (!disposed) ScrollTrigger.refresh(); }); };
    const observer = new ResizeObserver(refresh);
    observer.observe(element);
    document.fonts.ready.then(() => { if (!disposed) refresh(); });
    return () => { disposed = true; observer.disconnect(); cancelAnimationFrame(frame); media.revert(); context.revert(); };
  }, []);
  return <div ref={root} className={styles.page}>{children}<LiquidCursor /></div>;
}
