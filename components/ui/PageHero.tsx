import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = { label: string; title: string; accent: string; description: string };

export function PageHero({ label, title, accent, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <Image src="/images/breadcrumb/breadcrumb.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
      <div className="container py-8 md:py-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-3 text-sm text-white/75">
            <li><Link href="/" className="transition hover:text-pink-bright">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
            <li aria-current="page" className="text-pink-bright">{label}</li>
          </ol>
        </nav>
        <div className="max-w-3xl pb-10 pt-12 md:pb-16 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-bright">{label} / Krystal Creative</p>
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-7xl">{title}<span className="pink-gradient-text block">{accent}</span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
