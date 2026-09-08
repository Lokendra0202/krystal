"use client";

import Image from "next/image";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
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
    <section ref={heroRef} data-home-hero className="relative isolate -mt-[10vh] overflow-hidden bg-[#090809] pt-[10vh]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_42%,rgba(255,119,196,0.22),transparent_56%),linear-gradient(180deg,#100d10_0%,#090809_100%)]" />

      <div className="container relative z-10">


        <div className="grid min-h-[38rem] items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-[4.5rem] lg:min-h-[42rem]">
          <div>
            <div className="min-h-[11rem] sm:min-h-[10rem] lg:min-h-[12rem]">
              <div ref={messageRef} key={activeMessage}>
                <h1 className="relative max-w-[45rem] font-heading text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.98] tracking-normal text-white">
                  {message.lead} <span className="pink-gradient-text">{message.accent}</span>
                  <Asterisk className="absolute -right-2 -top-6 size-9 text-[#ff77c4] sm:right-8 md:size-11" aria-hidden="true" />
                </h1>
              </div>
            </div>
            <p className="mt-6 max-w-[26rem] text-sm leading-8 text-[#b2a8b6]">
              Brand identity, social content, and digital storytelling shaped into one sharp creative system for businesses ready to be seen.
            </p>
            <div data-hero-actions className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact">Start a project</MagneticButton>
              <Button href="/portfolio" variant="secondary" className="!border-white/18 !bg-white/8 shadow-[0_18px_50px_rgba(0,0,0,0.24)] hover:!bg-white/12">
                See selected work <ArrowUpRight className="ml-2 size-4" />
              </Button>
            </div>
            <div data-hero-selector className="mt-10 flex gap-2" aria-label="Hero message selector">
              {heroMessages.map((item, index) => (
                <button key={item.accent} type="button" aria-label={`Show message ${index + 1}`} aria-pressed={activeMessage === index} onClick={() => setActiveMessage(index)} className="group h-1.5 w-12 overflow-hidden rounded-full bg-white/18">
                  <span data-hero-progress className="block h-full origin-left bg-pink-bright" style={{ transform: `scaleX(${activeMessage === index ? 1 : 0})` }} />
                </button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[21rem] w-full max-w-[25rem] md:h-[27rem] md:max-w-none" aria-hidden="true" data-hero-badge>
            <div className="absolute right-0 top-2 h-[88%] w-[73%] rotate-[10deg] overflow-hidden border-[8px] border-[#bb75a1] bg-[#2a1422] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <Image src="/images/services/social-media/social-media.png" alt="" fill priority sizes="(max-width: 768px) 65vw, 28vw" className="object-cover object-center" />
            </div>
            <div className="absolute bottom-0 left-0 h-[90%] w-[80%] -rotate-[8deg] bg-[#f1e6ec] p-[9px] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <div className="relative h-[calc(100%-2.2rem)] overflow-hidden">
                <Image src="/images/services/logo-design-graphics/graphicsdesign.png" alt="" fill priority sizes="(max-width: 768px) 70vw, 31vw" className="object-cover object-center" />
              </div>
              <span className="flex items-center justify-between px-1 pt-3 text-[0.5rem] font-bold uppercase tracking-[0.07em] text-[#35172b]">
                Artwork built to be remembered.
                <Asterisk className="size-4" />
              </span>
            </div>
            <span className="absolute bottom-7 right-0 grid size-[6.6rem] rotate-[10deg] content-center rounded-full border border-[#ffbbdf] bg-[#ff78c6] text-center font-heading text-base leading-[1.1] text-[#2c1121] shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
              Fresh<br />point<br />of view.
            </span>
            <span className="absolute left-4 top-4 border border-white/20 bg-[#170b17cc] px-3 py-2 text-[0.5rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
              Creative direction
            </span>
          </div>
        </div>
      </div>

      <nav aria-label="Explore creative services" className="container relative z-10 grid border-y border-white/12 text-xs font-semibold uppercase tracking-[0.1em] text-[#c7baca] md:grid-cols-3">
        {[["01", "Brand identities", "/services#brand-design"], ["02", "Social stories", "/services#social-media"], ["03", "Reels and motion", "/services#reels"]].map(([number, title, href]) => (
          <Link href={href} key={href} className="flex min-h-16 items-center justify-between gap-4 border-white/12 px-5 py-4 transition hover:bg-white/[0.07] md:border-r md:last:border-r-0">
            <span className="text-pink-bright">{number}</span>
            <span>{title}</span>
            <ArrowDown className="size-4" />
          </Link>
        ))}
      </nav>
    </section>
  );
}
