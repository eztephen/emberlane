import Hero from "@/components/Hero";
import Tonight from "@/components/Tonight";
import Fire from "@/components/Fire";
import Menu from "@/components/Menu";
import Room from "@/components/Room";
import PrivateDining from "@/components/PrivateDining";
import Reserve from "@/components/Reserve";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Tonight />
      <Fire />
      <Menu />
      <Room />
      <PrivateDining />
      <Reserve />
    </main>
  );
}
