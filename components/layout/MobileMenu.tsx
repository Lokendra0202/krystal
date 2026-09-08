"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { navigationItems } from "@/lib/data";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeAndScrollIfCurrent = (href: string) => {
    setOpen(false);
    if (pathname === href) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        className="flex size-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-white/40"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-white/12 bg-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
              Navigation
            </p>
            <p className="mt-1 font-heading text-lg font-semibold text-white">
              Explore Krystal
            </p>
          </div>

          <nav className="p-3">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "border border-pink-primary/45 bg-pink-primary/16 text-white shadow-[0_0_28px_rgba(255,77,184,0.18)]"
                      : "text-text-secondary hover:bg-white/[0.06] hover:text-white"
                  }`}
                  onClick={() => closeAndScrollIfCurrent(item.href)}
                >
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                  <ArrowRight className="size-4" />
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-3">
            <Link
              href="/contact"
              className="flex items-center justify-between rounded-lg border border-pink-primary/35 bg-[#171017] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,77,184,0.18)] transition hover:border-pink-bright/70 hover:bg-pink-primary hover:text-white"
              onClick={() => closeAndScrollIfCurrent("/contact")}
            >
              Let&apos;s talk
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
