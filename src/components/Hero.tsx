import { SITE } from "@/config/site";
import { HERO } from "@/data/content";
import Emphasis from "./Emphasis";

export default function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden pt-[clamp(4rem,11vw,8.5rem)] pb-[clamp(3rem,7vw,5.5rem)]">
      <div className="site-wrap relative z-10 flex flex-col items-start gap-6">
        <span className="kicker">{SITE.tagline}</span>
        <h1 className="max-w-[14ch] font-display text-[clamp(3rem,10vw,7.2rem)] leading-[1.02] font-light tracking-[-0.045em] text-balance">
          <Emphasis text={HERO.headline} className="font-extrabold text-ember" />
        </h1>
        <p className="max-w-[46ch] text-[clamp(1.05rem,2.3vw,1.3rem)] font-light text-ash italic">{HERO.sub}</p>
        <div className="mt-1.5 flex flex-wrap gap-3">
          <a href="#reserve" className="btn btn-ember">
            Book a table
          </a>
          <a href="#menu" className="btn btn-line">
            Read the menu
          </a>
        </div>
        <div className="mt-7 flex w-full flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 font-display text-[0.78rem] tracking-[0.13em] text-ash uppercase">
          {HERO.strip.map((item) => (
            <span key={item.strong}>
              <b className="font-semibold text-bone">{item.strong}</b> {item.rest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
