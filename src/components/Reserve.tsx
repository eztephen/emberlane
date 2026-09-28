import { SITE } from "@/config/site";
import OpeningHours from "./OpeningHours";
import ReservationForm from "./ReservationForm";

export default function Reserve() {
  return (
    <section id="reserve" className="py-[clamp(3.5rem,8vw,6rem)]">
      <div className="site-wrap grid items-start gap-[clamp(2rem,5vw,4rem)] md:grid-cols-2">
        <ReservationForm />

        <div className="flex min-w-0 flex-col gap-5">
          <div className="flex flex-col gap-3.5">
            <span className="kicker">Find us</span>
            <h2 className="font-display text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.02] font-light tracking-[-0.035em]">
              {SITE.address.line1},
              <br />
              {SITE.address.line2}
            </h2>
            <p className="max-w-[62ch] text-ash">{SITE.directions}</p>
          </div>
          <OpeningHours />
          <p className="max-w-[62ch] text-[0.93rem] text-ash">{SITE.access}</p>
          <a href={SITE.phone.href} className="btn btn-line self-start">
            Call {SITE.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
