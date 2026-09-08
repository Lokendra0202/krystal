"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

const heroMessages = [
  { lead: "We make brands", accent: "impossible to ignore." },
  { lead: "We turn bold ideas", accent: "into digital momentum." },
];

export function Hero() {
  const [activeMessage, setActiveMessage] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActiveMessage((current) => (current + 1) % heroMessages.length);
    }, 4800);
    return () => window.clearInterval(interval);
  }, []);
  const message = heroMessages[activeMessage];

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const selectors = gsap.utils.selector(heroRef);
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .from(selectors("[data-hero-badge]"), { opacity: 0, y: 18, duration: 0.6 })
          .from(selectors("[data-hero-actions]"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.1")
          .from(selectors("[data-hero-selector]"), { opacity: 0, y: 12, duration: 0.45 }, "-=0.2");
      });
      return () => motion.revert();
    }, heroRef);
    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const motion = gsap.matchMedia();
    const selectors = gsap.utils.selector(heroRef);
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      if (!messageRef.current) return;
      const timeline = gsap.timeline();
      timeline.fromTo(messageRef.current,
        { opacity: 0, y: 28, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" })
        .to(selectors("[data-hero-progress]"), {
          scaleX: (index: number) => (index === activeMessage ? 1 : 0), duration: 0.35, ease: "power2.out",
        }, 0);
      return () => timeline.revert();
    });
    return () => motion.revert();
  }, [activeMessage]);

  return (
    <section ref={heroRef} data-home-hero className="relative isolate -mt-[10vh] overflow-hidden">
      <div className="relative min-h-[38rem] md:min-h-[44rem]">
        <div className="absolute -inset-y-[8%] inset-x-0">
          <div className="absolute inset-0 bg-[#f8dbe6]">
            <Image src="/images/hero/hero-image.png" alt="Pink creative studio desk with design tools and social media icons" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
        </div>
        
        <div className="container relative z-10 flex min-h-[38rem] items-end pb-18 pt-36 md:min-h-[44rem] md:pb-20 md:pt-44 lg:pb-24">
          <div className="max-w-3xl">
            <div data-hero-badge className="mb-7 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-black/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 shadow-[0_0_28px_rgba(0,0,0,0.7)] backdrop-blur-md">
              <span className="size-2 rounded-full bg-pink-bright shadow-[0_0_18px_#ff4db8]" />
              Independent creative agency
            </div>
            <div className="min-h-[17rem] sm:min-h-[15rem] lg:min-h-[18rem]">
              <div ref={messageRef} key={activeMessage}>
                <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white [-webkit-text-stroke:1px_rgba(0,0,0,0.55)] [paint-order:stroke_fill] drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
                  {message.lead} <span className="pink-gradient-text">{message.accent}</span>
                </h1>
              </div>
            </div>
            <div data-hero-actions className="mt-7 flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact">Start a project</MagneticButton>
              <Button href="/portfolio" variant="secondary" className="!border-white/20 !bg-black/85 shadow-[0_8px_24px_rgba(0,0,0,0.38)] hover:!bg-black">
                See selected work <ArrowUpRight className="ml-2 size-4" />
              </Button>
            </div>
            <div data-hero-selector className="mt-10 flex gap-2" aria-label="Hero message selector">
              {heroMessages.map((item, index) => (
                <button key={item.accent} type="button" aria-label={`Show message ${index + 1}`} aria-pressed={activeMessage === index} onClick={() => setActiveMessage(index)} className="group h-1.5 w-12 overflow-hidden rounded-full bg-white/25">
                  <span data-hero-progress className="block h-full origin-left bg-pink-bright" style={{ transform: `scaleX(${activeMessage === index ? 1 : 0})` }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
