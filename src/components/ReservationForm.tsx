"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { RESERVATION } from "@/data/content";

const fieldClass =
  "w-full min-w-0 rounded-[2px] border border-line bg-char px-3 py-2.5 text-base text-bone focus:border-ember focus:outline-none";
const labelClass = "font-display text-[0.72rem] font-semibold tracking-[0.14em] text-ash uppercase";

export default function ReservationForm() {
  const [sent, setSent] = useState(false);

  // Sample site: confirms in place. For a live client, POST to a route handler or a
  // booking provider's API — see pzaideletrato/src/app/api/contact/route.ts.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-0 border border-line bg-smoke p-[clamp(1.25rem,3vw,2.2rem)]">
      <div className="mb-6 flex flex-col gap-3">
        <span className="kicker">Reserve</span>
        <h2 className="font-display text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.02] font-light tracking-[-0.035em]">
          Book a table
        </h2>
      </div>

      {sent && (
        <div role="status" className="mb-5 border border-olive bg-olive/15 px-4 py-3.5 text-[0.95rem]">
          <b className="text-ember">Request sent.</b> {RESERVATION.confirmation} For tonight, ring us on{" "}
          {SITE.phone.display}.
        </div>
      )}

      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Date</span>
          <input name="date" type="date" required className={fieldClass} />
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Time</span>
          <select name="time" defaultValue={RESERVATION.defaultTime} className={fieldClass}>
            {RESERVATION.times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Guests</span>
          <select name="guests" defaultValue={RESERVATION.defaultGuests} className={fieldClass}>
            {RESERVATION.guests.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Name</span>
          <input name="name" type="text" autoComplete="name" required className={fieldClass} />
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Email</span>
          <input name="email" type="email" autoComplete="email" required className={fieldClass} />
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required className={fieldClass} />
        </label>
      </div>

      <label className="mb-4 flex flex-col gap-1.5">
        <span className={labelClass}>Allergies or anything else</span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Birthday, dietary requirements, a seat by the fire…"
          className={fieldClass}
        />
      </label>

      <button type="submit" className="btn btn-ember w-full">
        Request this table
      </button>
    </form>
  );
}
