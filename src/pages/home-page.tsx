// import imgHero from "../assets/images/tamal.jpg";

import { HeroSection } from "../components/view/home/hero";
import { SambutanKadus } from "../components/view/home/sambutan-kadus";
import { StatisticPenduduk } from "../components/view/home/statistic";

export function Homepage() {
  return (
    <div className="w-full flex flex-col gap-20">
      <HeroSection />
      <SambutanKadus />
      <StatisticPenduduk />
    </div>
  );
}
