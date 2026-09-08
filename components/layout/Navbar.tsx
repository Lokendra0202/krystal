"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { navigationItems } from "@/lib/data";

import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const scrollCurrentPageToTop = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky inset-x-0 top-0 z-50 border-b border-pink-primary/30 bg-[#080608]/92 shadow-[0_12px_36px_rgba(0,0,0,0.38),0_1px_0_rgba(255,77,184,0.12)] backdrop-blur-2xl"
    >
      <div className="relative flex h-[76px] w-full items-center justify-between px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Krystal home"
          onClick={() => scrollCurrentPageToTop("/")}
        >
          <Image
            src="/images/logo/logo.PNG"
            alt="Krystal"
            width={2048}
            height={748}
            className="h-12 w-auto rounded-md md:h-14"
            loading="eager"
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => scrollCurrentPageToTop(item.href)}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-white/10 font-medium text-white"
                    : "text-text-muted hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-pink-primary to-pink-bright shadow-[0_0_12px_rgba(255,43,154,0.8)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 xl:flex">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-text-muted">Available for select projects</span>
          </div>
          <Link
            href="/contact"
            onClick={() => scrollCurrentPageToTop("/contact")}
            className="group hidden items-center gap-2 rounded-full border border-pink-primary/35 bg-[#120b11] px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_28px_rgba(255,77,184,0.22)] transition-all duration-300 hover:scale-105 hover:border-pink-bright/70 hover:bg-pink-primary hover:px-6 hover:text-white hover:shadow-[0_0_42px_rgba(255,119,196,0.48)] md:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <div className="relative lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-primary/70 to-transparent" />
    </header>
  );
}
