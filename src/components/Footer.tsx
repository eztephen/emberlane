import { SITE } from "@/config/site";

const YEAR = new Date().getFullYear();

const headingClass = "mb-3.5 font-display text-[0.7rem] font-bold tracking-[0.2em] text-ember uppercase";
const linkClass = "block py-1 text-ash transition-colors hover:text-bone";

const columns = [
  {
    title: "Eat",
    links: [
      { href: "#menu", label: "Dinner menu" },
      { href: "#menu", label: "Weekend lunch" },
      { href: "#menu", label: "Drinks & wine" },
      { href: "#events", label: "Private dining" },
      { href: "#reserve", label: "Reserve a table" },
    ],
  },
  {
    title: SITE.name,
    links: [
      { href: "#fire", label: "The fire" },
      { href: "#room", label: "The room" },
      { href: "#events", label: "Chef's counter" },
      { href: "#reserve", label: "Opening hours" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-char-deep pt-14 pb-6 text-[0.95rem] text-ash">
      <div className="site-wrap">
        <div className="grid gap-8 border-b border-line-soft pb-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">
          <div>
            <div className="mb-3 font-display text-[1.5rem] font-extrabold tracking-[-0.03em] text-bone">{SITE.name}</div>
            <p>
              {SITE.address.short}
              <br />
              Down the alley, no sign.
            </p>
            <p className="mt-3">
              <a href={SITE.phone.href} className="inline-block py-1.5 font-semibold text-bone">
                {SITE.phone.display}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="inline-block py-1.5 break-all hover:text-bone">
                {SITE.email}
              </a>
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className={headingClass}>{col.title}</h4>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-5 text-[0.8rem] text-[#6E6058]">
          <span>
            © {YEAR} {SITE.name}. A fictional restaurant, built as a design sample.
          </span>
          <span>Instagram · Privacy · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
