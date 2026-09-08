import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { navigationItems, socialItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#080608] pt-16 md:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 -z-10 size-[500px] rounded-full bg-pink-primary/10 blur-[120px]" />
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:pb-16">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-bright">
              <Sparkles className="size-4" aria-hidden="true" />
              Great things start with a conversation
            </p>
            <h2 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Have a vision?<br />
              <span className="pink-gradient-text">Let&apos;s make it real.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-6 rounded-full bg-pink-primary px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_rgba(255,43,154,0.2)] transition-colors hover:bg-pink-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-bright"
          >
            Start a project
            <span className="flex size-9 items-center justify-center rounded-full bg-black/15">
              <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45 motion-reduce:transition-none" aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr] lg:gap-16 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-bright">
              <Image src="/images/logo/logo.PNG" alt="Krystal" width={2048} height={748} className="h-auto w-44 rounded-lg" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">
              Bold identities. Thoughtful digital experiences.
              We turn your next big idea into a brand people remember.
            </p>
            <span className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-text-secondary">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              Available for select projects
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Explore</h3>
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex min-h-10 items-center gap-3 text-sm text-text-secondary transition-colors hover:text-pink-bright focus-visible:outline-2 focus-visible:outline-pink-bright">
                    {item.label}
                    <ArrowRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Stay connected</h3>
            <div className="space-y-2">
              {socialItems.map((item) => (
                <Link key={item.label} href={item.href} className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3.5 text-sm text-text-secondary transition-colors hover:border-pink-primary/40 hover:bg-pink-primary/5 hover:text-white focus-visible:outline-2 focus-visible:outline-pink-bright">
                  {item.label}
                  <ArrowUpRight className="size-4 text-text-muted transition-colors group-hover:text-pink-bright" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">Made with intention. <span className="size-1 rounded-full bg-pink-primary" /> Designed to stand out.</p>
        </div>
      </div>
    </footer>
  );
}
