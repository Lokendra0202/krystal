import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageCTA() {
  return <section className="section pt-0"><div className="container"><div className="relative overflow-hidden rounded-3xl border border-pink-primary/25 bg-[radial-gradient(ellipse_at_top_right,rgba(255,43,154,0.22),transparent_65%)] p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-14"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-bright">Your next chapter</p><h2 className="mt-4 max-w-xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">Let’s make something worth noticing.</h2><p className="mt-4 text-text-secondary">Bring the idea. We’ll bring the creative energy.</p></div><Link href="/contact" className="mt-8 inline-flex shrink-0 items-center gap-3 rounded-full bg-pink-primary px-7 py-4 text-sm font-semibold transition hover:bg-pink-bright md:mt-0">Start a conversation <ArrowUpRight className="size-5" /></Link></div></div></section>;
}
