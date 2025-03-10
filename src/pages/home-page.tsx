// import imgHero from "../assets/images/tamal.jpg";

import { BeritaTerbaru } from "../components/view/home/berita";
import { HeroSection } from "../components/view/home/hero";
import { SambutanKadus } from "../components/view/home/sambutan-kadus";
import { StatisticPenduduk } from "../components/view/home/statistic";
import { TulisanTerbaru } from "../components/view/home/tulisan";

export function Homepage() {
  return (
    <div className="w-full flex flex-col gap-20 mb-20">
      <HeroSection />
      <SambutanKadus />
      <TulisanTerbaru />
      <StatisticPenduduk />
      <BeritaTerbaru />
    </div>
  );
}
