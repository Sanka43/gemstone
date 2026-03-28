"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-md"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="luxury-container flex min-h-14 items-center justify-between gap-3 py-3 sm:min-h-16 sm:py-0">
        <Link
          href="/"
          className="min-h-11 min-w-0 shrink font-serif text-lg font-semibold leading-tight tracking-tight text-zinc-950 sm:text-xl md:text-2xl"
        >
          <span className="block sm:hidden">Sandaru</span>
          <span className="hidden sm:block">Sandaru Gemstone</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex md:gap-6" aria-label="Main">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm tracking-wide ${
                  active ? "text-[#8f7744]" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" id="mobile-nav">
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-zinc-200 bg-white shadow-xl"
            style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
            aria-label="Mobile main"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
              <span className="font-serif text-lg text-zinc-950">Menu</span>
              <button
                type="button"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-zinc-600"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex min-h-12 items-center rounded-xl px-4 text-base font-medium ${
                        active
                          ? "bg-[#c6a25b]/15 text-[#5c4a22]"
                          : "text-zinc-800 active:bg-zinc-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-zinc-100 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Link
                href="/shop"
                className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#c6a25b] text-sm font-semibold text-zinc-950"
                onClick={() => setOpen(false)}
              >
                Browse shop
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
