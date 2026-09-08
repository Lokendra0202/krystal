"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidCursor } from "./LiquidCursor";

gsap.registerPlugin(ScrollTrigger);

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const select = gsap.utils.selector(root);
        select("[data-home-reveal], [data-work-card]").forEach((element: HTMLElement) => {
          gsap.from(element, {
            opacity: 0, y: 36, duration: 0.8, ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          });
        });

        const numbers = select("[data-stat-value]") as HTMLElement[];
        numbers.forEach((element) => {
          const original = element.dataset.statValue ?? "";
          if (!/^\d/.test(original)) return;
          const counter = { value: 0 };
          gsap.to(counter, {
            value: parseInt(original, 10), duration: 1.6, ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
            onUpdate: () => { element.textContent = `${Math.round(counter.value)}${original.replace(/^\d+/, "")}`; },
          });
        });
        return () => numbers.forEach((element) => { element.textContent = element.dataset.statValue ?? ""; });
      });

    }, root);
    return () => { media.revert(); context.revert(); };
  }, []);

  return <div ref={root}>{children}<LiquidCursor /></div>;
}
