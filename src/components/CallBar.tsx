import { SITE } from "@/config/site";

// Thumb-reach actions on phones; the page body reserves space for it in globals.css.
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px bg-line sm:hidden">
      <a
        href={SITE.phone.href}
        className="bg-smoke p-4 text-center font-display text-[0.82rem] font-bold tracking-[0.1em] text-bone uppercase"
      >
        Call
      </a>
      <a
        href="#reserve"
        className="bg-ember p-4 text-center font-display text-[0.82rem] font-bold tracking-[0.1em] text-[#1A0F08] uppercase"
      >
        Book a table
      </a>
    </div>
  );
}
