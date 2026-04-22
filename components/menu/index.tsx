"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Arbeitsweise", href: "#arbeitsweise" },
  { label: "Über uns", href: "#ueber-uns" },
];

export default function MenuBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/10 bg-transparent">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="flex h-[88px] items-center justify-between md:h-[110px]">
          {/* Logo */}
          <Link
            href="#top"
            className="relative z-20 shrink-0"
            onClick={() => setMobileOpen(false)}
            aria-label="Zur Startseite"
          >
            <Image
              src="/logo.svg"
              alt="Soul2Soul Designstudio"
              width={180}
              height={80}
              priority
              className="h-auto w-[112px] md:w-[135px] xl:w-[150px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-10 lg:gap-16 xl:gap-24">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[15px] font-medium tracking-[0.06em] text-[#2f7b80] transition-opacity hover:opacity-70 lg:text-[17px] xl:text-[18px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="relative z-20 inline-flex h-10 w-10 items-center justify-center text-[#2f7b80] md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={[
          "overflow-hidden border-t border-black/10 bg-transparent transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[420px]" : "max-h-0 border-t-0",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-[1600px] px-6 pb-8 pt-6">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    block
                    font-heading
                    text-[clamp(1.4rem,5.5vw,1.8rem)]
                    leading-[1.15]
                    tracking-[0.01em]
                    text-[#2f7b80]
                    py-2
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}