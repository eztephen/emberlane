"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { NAV } from "@/data/content";
import FlameMark from "./FlameMark";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className="bg-char-deep font-display text-[0.8rem] tracking-[0.02em] text-ash">
        <div className="site-wrap flex flex-wrap justify-between gap-x-4 gap-y-1 py-2">
          <span className="hidden sm:inline">{SITE.address.short}</span>
          <span>{SITE.topbarNote}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line-soft bg-char/90 backdrop-blur-lg">
        <div className="site-wrap flex items-center justify-between gap-6 py-4">
          <a href="#top" onClick={closeMobile} className="flex items-center gap-2.5">
            <FlameMark className="size-[26px] shrink-0" />
            <span className="font-display text-[1.22rem] font-bold tracking-[-0.02em] text-bone">{SITE.name}</span>
          </a>

          <nav
            id="site-nav"
            className={`${
              mobileOpen ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col shadow-[0_14px_28px_rgb(0_0_0/0.12)] lg:shadow-none border-b border-line bg-smoke px-5 pt-1 pb-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}
          >
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="border-b border-line-soft py-3.5 font-display text-[0.84rem] font-medium tracking-[0.09em] text-ash uppercase transition-colors hover:text-ember lg:border-0 lg:py-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#reserve" className="btn btn-ember hidden sm:inline-flex">
              Reserve
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-[3.5px] border border-line px-2.5 py-2.5 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="site-nav"
            >
              <span className="block h-[1.5px] w-[19px] bg-bone" />
              <span className="block h-[1.5px] w-[19px] bg-bone" />
              <span className="block h-[1.5px] w-[19px] bg-bone" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
