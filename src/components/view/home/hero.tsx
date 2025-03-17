// import carouselImage1 from "../../../assets/images/ciremai.jpg";
import imgHero_1 from "/gallery/tarikolot_drone (1).jpg";
import imgHero_2 from "/gallery/mesjid_nurul_yaqin.jpg";
import imgHero_3 from "/gallery/tarikolot_drone (5).jpg";
import imgHero_4 from "/gallery/tarikolot_drone (6).jpg";
import imgHero_5 from "/gallery/tarikolot_drone (4).jpg";
import imgCTAProfil from "/icon/home_123.png";
import imgCTAHTPM from "/icon/person.png";
import imgCTAUMKM from "/icon/retailer.png";
import imgCTAsilsilah from "/icon/home.png";

import { Carousel } from "../../ui/carousel";
import { NavLink } from "react-router";
import { useState } from "react";
import { cn } from "../../../lib/utils";

export const HeroSection = () => {
  const images = [imgHero_1, imgHero_2, imgHero_3, imgHero_4, imgHero_5];

  const [openToolTips, setOpenToolTips] = useState<{ [key: number]: boolean }>(
    {},
  );

  const handleMouseEnter = (key: number) => {
    setOpenToolTips((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key: number) => {
    setOpenToolTips((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="relative h-screenMinusNav w-full">
      <Carousel images={images} />
      <div className="absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 space-y-5 text-center text-white md:space-y-5">
        <p className="font-Inter text-4xl font-black tracking-wide md:text-5xl lg:text-7xl">
          Wilujeung Sumping
        </p>
        <p className="font-Inter text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
          di Tarikolot Maleber
        </p>
        <div className="mx-auto grid w-2/3 grid-cols-2 items-center justify-items-center gap-5 md:grid-cols-4 lg:w-3/5">
          <NavLink
            to="/profil"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-lg font-semibold tracking-tight text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAProfil}
              alt="image cta profil"
              className="max-w-24 px-4 pb-4 pt-2"
            />

            <div
              className={cn(
                "absolute bottom-1 left-1/2 z-[99] -translate-x-1/2 transform text-xs font-semibold uppercase tracking-tight text-foregroundPrimary/80 transition-opacity duration-300 ease-in",
                openToolTips[1] ? "opacity-100" : "opacity-0",
              )}
            >
              Profil
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-hoverColor opacity-90 duration-300 group-hover:opacity-60"></div>
          </NavLink>
          <NavLink
            to="/hptm"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-sm font-semibold tracking-tighter text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAHTPM}
              alt="image cta profil"
              className="max-w-24 px-4 pb-4 pt-2"
            />

            <div
              className={cn(
                "absolute bottom-1 left-1/2 z-[99] -translate-x-1/2 transform text-xs font-semibold uppercase tracking-tight text-foregroundPrimary/80 transition-opacity duration-300 ease-in",
                openToolTips[2] ? "opacity-100" : "opacity-0",
              )}
            >
              Hptm
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-highlightColor/80 opacity-90 duration-300 group-hover:opacity-60"></div>
          </NavLink>
          <NavLink
            to="/umkm"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-base font-bold tracking-tighter text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAUMKM}
              alt="image cta profil"
              className="max-w-24 px-4 pb-4 pt-2"
            />

            <div
              className={cn(
                "absolute bottom-1 left-1/2 z-[99] -translate-x-1/2 transform text-xs font-semibold uppercase tracking-tight text-foregroundPrimary/80 transition-opacity duration-300 ease-in",
                openToolTips[3] ? "opacity-100" : "opacity-0",
              )}
            >
              Umkm
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-highlightColor/80 opacity-90 duration-300 group-hover:opacity-60"></div>
          </NavLink>

          <NavLink
            to="/silsilah"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-base font-bold tracking-tight text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAsilsilah}
              alt="image cta profil"
              className="max-w-24 px-4 pb-4 pt-2"
            />

            <div
              className={cn(
                "absolute bottom-1 left-1/2 z-[99] -translate-x-1/2 transform text-xs font-semibold uppercase tracking-tight text-foregroundPrimary/80 transition-opacity duration-300 ease-in",
                openToolTips[4] ? "opacity-100" : "opacity-0",
              )}
            >
              Silsilah
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-hoverColor opacity-90 duration-300 group-hover:opacity-60"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
