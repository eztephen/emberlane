import { EVENTS } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function PrivateDining() {
  return (
    <section id="events" className="border-y border-line bg-smoke-lift py-[clamp(3.5rem,8vw,6rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="Private dining" title="Take the whole room, or just *the long table*." />
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {EVENTS.map((event) => (
            <article key={event.title} className="flex flex-col gap-2 bg-smoke px-6 py-7">
              <span className="font-display text-[1.9rem] leading-none font-extrabold tracking-[-0.03em] text-ember">
                {event.capacity}
                <span className="sr-only"> guests</span>
              </span>
              <h3 className="font-display text-[1.12rem] font-semibold tracking-[-0.015em]">{event.title}</h3>
              <p className="text-[0.92rem] text-ash">{event.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
