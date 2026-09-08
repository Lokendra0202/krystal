"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Graphics &\nLogo Design",
    description:
      "Distinct visual identities and design assets built to make your brand instantly recognizable.",
    image: "/images/services/logo-design-graphics/graphicsdesign.png",
    alt: "Graphic design and logo design work",
  },
  {
    number: "02",
    title: "Social Media\nMarketing",
    description:
      "Campaign-led content and social strategy that turns attention into a community around your brand.",
    image: "/images/services/social-media/social-media.png",
    alt: "Social media marketing creative work",
  },
  {
    number: "03",
    title: "Reels\nCreation",
    description:
      "Fast-moving, thumb-stopping short-form videos designed for reach, rhythm, and recall.",
    image: "/images/services/reel/reel-making.png",
    alt: "Reels creation and short-form video work",
  },
];

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const selectors = gsap.utils.selector(sectionRef);
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(selectors("[data-services-silver-sweep]"), {
          xPercent: 28,
          opacity: 0.8,
          duration: 5.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 74%",
            once: true,
          },
        });

        timeline
          .from(
            selectors("[data-services-cartoon-left]"),
            { opacity: 0, x: -180, duration: 0.85 },
            0.05,
          )
          .from(
            selectors("[data-services-cartoon]"),
            { opacity: 0, x: 180, duration: 0.85 },
            0.05,
          )
          .from(selectors("[data-services-heading]"), { opacity: 0, y: 32, duration: 0.7 })
          .from(
            selectors("[data-service-card]"),
            { opacity: 0, y: 46, scale: 0.96, duration: 0.65, stagger: 0.12 },
            "-=0.2",
          )
          .from(selectors("[data-services-action]"), { opacity: 0, y: 18, duration: 0.45 }, "-=0.2");
      });

      return () => motion.revert();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#080308] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(ellipse_at_76%_100%,rgba(213,218,224,0.14),transparent_32%),linear-gradient(115deg,transparent_18%,rgba(226,232,240,0.05)_42%,transparent_63%)]" />
      <div className="pointer-events-none absolute inset-x-[-30%] top-[28%] h-48 -rotate-12 bg-[linear-gradient(90deg,transparent_8%,rgba(226,232,240,0.02)_26%,rgba(255,255,255,0.3)_50%,rgba(226,232,240,0.02)_74%,transparent_92%)] blur-3xl" />
      <div
        data-services-silver-sweep
        className="pointer-events-none absolute inset-x-[-35%] top-[48%] h-36 -translate-x-[28%] -rotate-12 bg-[linear-gradient(90deg,transparent_12%,rgba(255,255,255,0.04)_34%,rgba(248,250,252,0.34)_50%,rgba(255,255,255,0.04)_66%,transparent_88%)] opacity-45 blur-2xl"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.22)_49%,transparent_50%)] [background-size:12px_12px]" />
      <div className="pointer-events-none absolute left-[-12rem] top-12 h-80 w-80 rounded-full bg-pink-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-10rem] h-96 w-96 rounded-full bg-pink-bright/10 blur-[140px]" />
      <div
        data-services-cartoon-left
        className="pointer-events-none absolute -left-6 top-0 z-10 hidden lg:block"
      >
        <Image
          src="/images/services/services-cartoon-left-side.png"
          alt=""
          width={360}
          height={360}
          priority={false}
          className="h-auto w-[180px] xl:w-[240px]"
        />
      </div>
      <div
        data-services-cartoon
        className="pointer-events-none absolute right-8 top-0 z-10 hidden translate-x-0 xl:right-12 lg:block"
      >
        <Image
          src="/images/services/services-cartoon.png"
          alt=""
          width={360}
          height={360}
          priority={false}
          className="h-auto w-[180px] xl:w-[240px]"
        />
      </div>

      
      <div className="container relative z-[2]">
        <div className="flex flex-col items-center border-b border-white/10 pb-10 text-center">
          <div data-services-heading className="max-w-3xl">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-6 font-heading text-4xl font-semibold leading-[0.94] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              The work that makes
              <span className="block pink-gradient-text">your brand move.</span>
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              data-service-card
              className="group relative min-h-[31rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,3,7,0.05)_18%,rgba(7,3,7,0.42)_48%,rgba(7,3,7,0.98)_100%)]" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                <span className="font-heading text-sm font-semibold tracking-[0.18em] text-white/90">
                  {service.number}
                </span>
                <span className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:border-pink-bright group-hover:bg-pink-primary">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="whitespace-pre-line font-heading text-3xl font-semibold leading-[0.94] tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">{service.description}</p>
                <div className="mt-5 h-px w-full origin-left bg-pink-bright/70 transition duration-500 group-hover:scale-x-100 md:scale-x-0" />
              </div>
            </article>
          ))}
        </div>

        <div data-services-action className="mt-10 flex justify-center">
          <Button
            href="/services"
            className="rounded-full !px-7 !py-3 text-sm uppercase tracking-[0.18em]"
          >
            Explore All Services <ArrowUpRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}


