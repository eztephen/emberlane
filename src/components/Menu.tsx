"use client";

import { useRef, useState } from "react";
import { MENU, MENU_INTRO, MENU_NOTE } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + MENU.length) % MENU.length;
    setActive(MENU[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="menu" className="border-y border-line bg-smoke py-[clamp(3.5rem,8vw,6rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="What we're cooking" title={MENU_INTRO.headline} lede={MENU_INTRO.lede} />

        <div role="tablist" aria-label="Menu sections" className="mb-9 flex flex-wrap border-b border-line">
          {MENU.map((tab, i) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`-mb-px border-b-2 px-5 pt-3.5 pb-3 font-display text-[0.84rem] font-semibold tracking-[0.11em] uppercase transition-colors first:pl-0 ${
                  selected ? "border-ember text-ember" : "border-transparent text-ash hover:text-bone"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {MENU.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== active}
            className="menu-panel"
          >
            {tab.courses.map((course) => (
              <div key={course.title} className="mb-7 last:mb-0">
                <h3 className="mb-3.5 border-b border-line pb-2 font-display text-[0.72rem] font-bold tracking-[0.24em] text-olive uppercase">
                  {course.title}
                </h3>
                <ul className="grid gap-x-[clamp(2rem,5vw,4.5rem)] md:grid-cols-2">
                  {course.items.map((item) => (
                    <li key={item.name} className="flex flex-wrap items-baseline gap-x-2.5 py-3">
                      <span className="font-semibold text-[1.03rem]">
                        {item.name}
                        {item.tag && (
                          <span className="ml-2 text-[0.78rem] font-normal tracking-[0.1em] text-olive">{item.tag}</span>
                        )}
                      </span>
                      <span className="leader" aria-hidden="true" />
                      <span className="font-semibold whitespace-nowrap text-ember tabular-nums">{item.price}</span>
                      <span className="basis-full text-[0.9rem] leading-snug font-light text-ash italic">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className="mt-10 flex flex-wrap justify-between gap-6 border-t border-line pt-6 text-[0.92rem] text-ash">
          <span>{MENU_NOTE.legend}</span>
          <span>{MENU_NOTE.extra}</span>
        </div>
      </div>
    </section>
  );
}
