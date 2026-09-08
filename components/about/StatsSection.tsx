"use client";

import Image from "next/image";

import { ArrowRight, BarChart3, Rocket, Sparkles, Trophy, Users } from "lucide-react";

import styles from "./StatsSection.module.css";

const aboutStats = [
  {
    value: "3",
    label: "Creative Services",
    icon: Users,
  },
  {
    value: "Logo",
    label: "Brand Identity",
    icon: Rocket,
  },
  {
    value: "Social",
    label: "Media Marketing",
    icon: Trophy,
  },
  {
    value: "Reels",
    label: "Short-Form Videos",
    icon: BarChart3,
  },
];

export function StatsSection() {
  return (
    <section className="w-full bg-black">
      <div className={`${styles.surface} relative isolate overflow-hidden border-y border-white/8 py-6 sm:py-8 lg:py-9`}>
        <div aria-hidden="true" className={styles.background}>
          <div className={styles.halo} />
          <div className={styles.sheen} />
          <div className={styles.reflection} />
          <div className={styles.vignette} />
        </div>
          
          <div className="relative z-[2] mx-auto w-[calc(100%-2rem)] max-w-[120rem] sm:w-[calc(100%-4rem)]">
            <div className="grid items-center gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-10">
              <div className="max-w-[46rem] xl:translate-x-6">
                <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/72">
                  <span className="size-2 rounded-full bg-pink-primary" />
                  <span>About Us</span>
                  <span className="h-px w-20 bg-white/16" />
                </div>
              
              <h2 data-home-reveal className="mt-5 max-w-[13ch] font-heading text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.25rem]">
                More Than a Team,
                <span className="mt-2 block pink-gradient-text">A Shared Vision.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/66 sm:text-[1.02rem]">
                We&apos;re a team of creative thinkers, strategists, and problem-solvers
                passionate about building digital experiences that make a real impact. Our
                goal is simple - to help brands grow, stand out, and succeed in an
                ever-evolving digital world.
              </p>
              <div className="mt-8 grid max-w-[50rem] gap-3 sm:grid-cols-2">
                {aboutStats.map(({ value, label, icon: Icon }) => (
                  <div
                    key={label} data-home-reveal

                    className="group relative flex min-h-24 items-center gap-4 overflow-hidden rounded-[1.5rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.055))] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.07))]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,77,184,0.12),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04] text-pink-bright">
                      <Icon className="size-6" strokeWidth={1.9} />
                    </div>
                    <div className="relative flex-1">
                      <p aria-label={value} className="font-heading text-3xl font-semibold leading-none text-white">
                        <span aria-hidden="true" data-stat-value={value}>{value}</span>
                      </p>
                      <p className="mt-2 text-sm text-white/72">{label}</p>
                    </div>
                    <ArrowRight className="relative ml-auto size-5 text-white/32 transition-all duration-300 group-hover:text-white/70" />
                    <span className="absolute inset-x-5 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,77,184,0),rgba(255,77,184,0.65),rgba(255,77,184,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            <div data-home-reveal className="relative mx-auto w-full max-w-[62rem] xl:mt-3">
              <div className="pointer-events-none absolute -left-[3%] top-[8%] h-[76%] w-[38%] rounded-[3rem] border border-white/8" />
              <div className="pointer-events-none absolute -right-[2%] bottom-[7%] h-[56%] w-[30%] rounded-[2.5rem] border border-white/7" />
              <div className="pointer-events-none absolute -inset-x-2 bottom-[-5%] h-20 rounded-full bg-black/50 blur-3xl" />
              <div className="relative aspect-[1.58/1] overflow-hidden rounded-[2.3rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.38)]">
                <div className="relative h-full overflow-hidden rounded-[2rem] bg-black">
                  <Image
                    src="/images/aboutus/aboutus.png"
                    alt="Creative team collaborating around a laptop"
                    fill
                    sizes="(max-width: 1279px) 100vw, 54vw"
                    className="object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,10,0.06),rgba(7,7,10,0.16)_65%,rgba(7,7,10,0.26))]" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/40 px-4 py-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-white/78 shadow-[0_12px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
                    <span className="block text-pink-bright">Build</span>
                    <span className="block">Clarity</span>
                    <span className="block">Momentum</span>
                  </div>
                  <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/45 px-4 py-2 text-xs text-white/84 backdrop-blur-md">
                    <Sparkles className="size-3.5 text-pink-bright" />
                    From ideas to execution
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



