import { ROOM } from "@/data/content";
import SectionHeading from "./SectionHeading";

const tiles = ["plate-bar", "plate-moss", "plate-brick", "plate-oak", "plate-dusk"];

export default function Room() {
  return (
    <section id="room" className="py-[clamp(3.5rem,8vw,6rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="The room" title={ROOM.headline} lede={ROOM.lede} />
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4" role="img" aria-label="Photographs of the dining room">
          {tiles.map((tone, i) => (
            <div key={tone} className={`plate ${tone} aspect-square ${i === 0 ? "col-span-2 row-span-2" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
