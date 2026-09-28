"use client";

import { SITE } from "@/config/site";
import { useToday } from "@/lib/useToday";

export default function OpeningHours() {
  const today = useToday();

  return (
    <div className="border border-line">
      {SITE.hours.map((row) => {
        const isToday = today !== null && row.days.includes(today);
        return (
          <div
            key={row.label}
            className={`flex justify-between gap-4 border-b border-line-soft px-4 py-3 text-[0.95rem] last:border-b-0 ${
              isToday ? "bg-ember/10" : ""
            }`}
          >
            <span>
              {row.label}
              {isToday && " — tonight"}
            </span>
            <span className={`tabular-nums ${isToday ? "font-semibold text-ember" : "text-ash"}`}>{row.time}</span>
          </div>
        );
      })}
    </div>
  );
}
