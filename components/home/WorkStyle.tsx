"use client";

import Image from "next/image";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Layers3,
  Lightbulb,
  MessageCircle,
  PenTool,
  Sparkles,
} from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type WorkStyle = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const workStyles: WorkStyle[] = [
  {
    number: "01",
    title: "Listen first",
    description: "We start by getting close to the real brief, audience, and ambition behind it.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Design with intent",
    description: "Every colour, type choice, and composition earns its place in the story.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build in layers",
    description: "We shape strong systems first, then add the details that make them memorable.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Refine relentlessly",
    description: "Good work gets sharper in the final passes, where craft becomes visible.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Partner openly",
    description: "Clear communication keeps the process collaborative, quick, and stress-free.",
    icon: Lightbulb,
  },
  {
    number: "06",
    title: "Launch for impact",
    description: "We make sure the finished work is ready to perform where your audience is.",
    icon: BarChart3,
  },
];

export function WorkStyle() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const selectors = gsap.utils.selector(sectionRef);
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        });

        timeline
          .from(
            selectors("[data-work-style-art-left]"),
            { opacity: 0, x: -180, duration: 0.8 },
            0.05,
          )
          .from(selectors("[data-work-style-art]"), { opacity: 0, duration: 0.8 }, 0.05)
          .from(selectors("[data-work-heading]"), { opacity: 0, y: 34, duration: 0.7 });
      });

      return () => motion.revert();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#100710] pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-16">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-pink-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div
        data-work-style-art-left
        className="pointer-events-none absolute left-4 top-6 z-10 hidden lg:block"
      >
        <Image
          src="/images/our-work/our-work-style.png"
          alt=""
          width={360}
          height={360}
          priority={false}
          className="h-auto w-[200px] xl:w-[260px]"
        />
      </div>
      <div
        data-work-style-art
        className="pointer-events-none absolute right-6 top-6 z-10 hidden lg:block"
      >
        <Image
          src="/images/our-work/our-work-style-1.png"
          alt=""
          width={360}
          height={360}
          priority={false}
          className="h-auto w-[200px] xl:w-[260px]"
        />
      </div>

      
      <div className="container relative z-[2]">
        <div data-work-heading className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Work Style</span>
          <h2 className="mt-6 font-heading text-4xl font-semibold leading-[0.94] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Made with purpose.
            <span className="block pink-gradient-text">Finished with feeling.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:grid-cols-2 lg:grid-cols-3">
          {workStyles.map((style) => {
            const Icon = style.icon;

            return (
              <article
                key={style.number}
                data-work-card
                className="group relative flex min-h-[19rem] flex-col overflow-hidden bg-[linear-gradient(145deg,rgba(31,15,29,0.96),rgba(15,9,16,0.98))] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-[linear-gradient(145deg,rgba(49,20,42,0.98),rgba(20,11,21,0.98))] sm:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,43,154,0.16),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,96,184,0.75),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-8 top-8 font-heading text-xs font-semibold tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-pink-bright">
                  {style.number}
                </span>
                <div className="relative flex size-14 items-center justify-center rounded-2xl border border-pink-primary/35 bg-pink-primary/10 text-pink-bright shadow-[0_0_30px_rgba(255,43,154,0.1)] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] group-hover:border-pink-bright group-hover:bg-pink-primary group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <div className="relative mt-auto pt-10">
                  <div className="mb-5 h-px w-10 bg-pink-bright/60 transition-all duration-500 group-hover:w-20" />
                  <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-white">
                  {style.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/64 transition-colors duration-300 group-hover:text-white/78">
                    {style.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


