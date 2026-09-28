import { TONIGHT } from "@/data/content";

export default function Tonight() {
  return (
    <div className="bg-ember text-[#1A0F08]">
      <div className="site-wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4 font-display">
        <span className="text-[0.72rem] font-extrabold tracking-[0.22em] uppercase">{TONIGHT.label}</span>
        <span className="min-w-60 flex-1 text-[clamp(1.05rem,2.6vw,1.45rem)] font-medium tracking-[-0.02em]">
          {TONIGHT.dish}
        </span>
        <span className="text-[1.25rem] font-extrabold tabular-nums">{TONIGHT.price}</span>
      </div>
    </div>
  );
}
