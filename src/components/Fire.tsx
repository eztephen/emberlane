import { FIRE } from "@/data/content";
import Emphasis from "./Emphasis";

export default function Fire() {
  return (
    <section id="fire" className="py-[clamp(3.5rem,8vw,6rem)]">
      <div className="site-wrap grid items-center gap-[clamp(2rem,5vw,4rem)] md:grid-cols-2">
        <div className="grid grid-cols-2 gap-2.5" role="img" aria-label="The hearth, the kitchen and dishes from the fire">
          <div className="plate plate-hearth row-span-2 aspect-[3/4] h-full" />
          <div className="plate plate-greens aspect-[4/3]" />
          <div className="plate plate-coals aspect-[4/3]" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <span className="kicker">The fire</span>
          <h2 className="font-display text-[clamp(2rem,5.2vw,3.4rem)] leading-[1.02] font-light tracking-[-0.035em] text-balance">
            <Emphasis text={FIRE.headline} className="font-bold text-ember" />
          </h2>
          {FIRE.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="max-w-[62ch] text-ash">
              {p}
            </p>
          ))}
          <p className="max-w-[62ch] text-ash italic">{FIRE.credit}</p>
        </div>
      </div>
    </section>
  );
}
