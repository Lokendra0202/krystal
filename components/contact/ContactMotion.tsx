"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidCursor } from "@/components/home/LiquidCursor";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

export function ContactMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add({
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 801px) and (hover: hover) and (pointer: fine)",
      }, (match) => {
        if (!match.conditions?.motion) return;
        const desktop = match.conditions.desktop;
        const select = gsap.utils.selector(element);
        const css = (name: string) => `.${styles[name]}`;
        const defaults = { duration: 0.85, ease: "power3.out", clearProps: "transform,opacity" };

        gsap.timeline({ defaults })
          .from(select("[data-contact-intro]"), { opacity: 0, y: 32, stagger: 0.12 })
          .from(select(css("heroPanel")), { opacity: 0, y: 34, scale: 0.98, duration: 1.05 }, 0.2)
          .from(select(`${css("quickStripInner")} > div`), { opacity: 0, y: 18, stagger: 0.09 }, 0.55);

        element.querySelectorAll<HTMLElement>("[data-contact-reveal]").forEach((section) => {
          gsap.from(section, {
            ...defaults,
            opacity: 0,
            y: 36,
            scrollTrigger: { trigger: section, start: "top 90%", once: true },
          });
        });

        gsap.from(select(`${css("fields")} > label`), {
          opacity: 0,
          y: 22,
          stagger: 0.06,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: select(css("formShell"))[0], start: "top 82%", once: true },
        });

        if (desktop) {
          gsap.to(select(css("noteCard")), {
            y: -12,
            rotation: -1,
            duration: 2.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            scrollTrigger: { trigger: select(css("hero"))[0], start: "top bottom", end: "bottom top", toggleActions: "play pause resume pause" },
          });
        }
      });
    }, element);

    let disposed = false;
    let frame = 0;
    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!disposed) ScrollTrigger.refresh();
      });
    };
    const observer = new ResizeObserver(refresh);
    observer.observe(element);
    document.fonts.ready.then(() => {
      if (!disposed) refresh();
    });

    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <div ref={root} className={styles.page}>
      {children}
      <LiquidCursor />
    </div>
  );
}
