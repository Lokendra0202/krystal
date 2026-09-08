"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidCursor } from "@/components/home/LiquidCursor";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

export function ServicesMotion({ children }: { children: ReactNode }) {
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
        const distance = desktop ? 42 : 24;
        const defaults = { duration: 0.85, ease: "power3.out", clearProps: "transform,opacity" };

        gsap.timeline({ defaults })
          .from(select(`${css("heroGrid")} > div:first-child > *`), {
            opacity: 0, y: distance, stagger: 0.1,
          })
          .from(select(css("heroArt")), { opacity: 0, y: 32, rotation: 2, scale: 0.96, duration: 1.1 }, 0.2)
          .from(select(`${css("serviceNav")} a`), { opacity: 0, y: 16, stagger: 0.12 }, 0.65);

        const reveal = (target: HTMLElement, children?: string) => {
          gsap.from(children ? target.querySelectorAll(children) : target, {
            ...defaults, opacity: 0, y: distance, stagger: children ? 0.1 : 0,
            scrollTrigger: { trigger: target, start: "top 92%", once: true },
          });
        };

        select(css("sectionHeading")).forEach((heading: HTMLElement) => reveal(heading, ":scope > *"));
        select(css("offering")).forEach((card: HTMLElement, index: number) => {
          gsap.timeline({
            defaults,
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          })
            .from(card.querySelector(css("serviceVisual")), {
              opacity: 0, x: desktop ? (index % 2 ? 35 : -35) : 0, y: desktop ? 0 : 24,
            })
            .from(card.querySelectorAll(`${css("serviceContent")} > *`), {
              opacity: 0, y: 24, stagger: 0.09,
            }, 0.15);

          if (desktop) {
            gsap.fromTo(card.querySelector(css("serviceImage")),
              { scale: 1.12, yPercent: -3 },
              { scale: 1.12, yPercent: 3, ease: "none",
                scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
              },
            );
          }
        });

        select(`${css("steps")} > li`).forEach((step: HTMLElement) => reveal(step, ":scope > *"));
        select(`${css("faqGrid")} > div:first-child`).forEach((intro: HTMLElement) => reveal(intro, ":scope > *"));
        select(css("question")).forEach((question: HTMLElement) => reveal(question));
        select(css("ctaInner")).forEach((cta: HTMLElement) => reveal(cta, ":scope > *"));

        if (desktop) {
          gsap.to(select(css("artBadge")), {
            y: -12, rotation: 2, duration: 2.4, ease: "sine.inOut", repeat: -1, yoyo: true,
            scrollTrigger: { trigger: select(css("hero"))[0], start: "top bottom", end: "bottom top", toggleActions: "play pause resume pause" },
          });
        }

        // Native details keeps keyboard behavior; animate only the answer after opening.
        const answers = select(css("question")) as HTMLDetailsElement[];
        const answerTweens = new Map<HTMLDetailsElement, gsap.core.Tween>();
        const onToggle = (event: Event) => {
          const question = event.currentTarget as HTMLDetailsElement;
          const answer = question.querySelector("p");
          answerTweens.get(question)?.revert();
          if (question.open && answer) {
            answerTweens.set(question, gsap.fromTo(answer, { opacity: 0, y: 8 }, {
              opacity: 1, y: 0, duration: 0.3, ease: "power2.out", clearProps: "transform,opacity",
            }));
          }
          ScrollTrigger.refresh();
        };
        answers.forEach(answer => answer.addEventListener("toggle", onToggle));
        return () => {
          answers.forEach(answer => answer.removeEventListener("toggle", onToggle));
          answerTweens.forEach(tween => tween.revert());
        };
      });
    }, element);

    // Font loading and accordion layout changes can move later scroll triggers.
    let disposed = false;
    let refreshFrame = 0;
    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => { if (!disposed) ScrollTrigger.refresh(); });
    };
    const resize = new ResizeObserver(refresh);
    resize.observe(element);
    document.fonts.ready.then(() => { if (!disposed) refresh(); });

    return () => {
      disposed = true;
      resize.disconnect();
      cancelAnimationFrame(refreshFrame);
      media.revert();
      context.revert();
    };
  }, []);

  return <div ref={root} className={styles.page}>{children}<LiquidCursor /></div>;
}
