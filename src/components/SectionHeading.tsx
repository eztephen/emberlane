import Emphasis from "./Emphasis";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  lede?: React.ReactNode;
  size?: "lg" | "md";
}

export default function SectionHeading({ kicker, title, lede, size = "lg" }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex max-w-[54ch] flex-col gap-3.5">
      <span className="kicker">{kicker}</span>
      <h2
        className={`font-display leading-[1.02] font-light tracking-[-0.035em] text-balance ${
          size === "lg" ? "text-[clamp(2rem,5.2vw,3.4rem)]" : "text-[clamp(1.7rem,4vw,2.4rem)]"
        }`}
      >
        <Emphasis text={title} className="font-bold text-ember" />
      </h2>
      {lede && <p className="max-w-[62ch] text-ash">{lede}</p>}
    </div>
  );
}
