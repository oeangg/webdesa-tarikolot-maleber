// import carouselImage1 from "../../../assets/images/ciremai.jpg";
import imgHero_1 from "/gallery/tarikolot_drone (1).jpg";
import imgHero_2 from "/gallery/mesjid_nurul_yaqin.jpg";
import imgHero_3 from "/gallery/tarikolot_drone (5).jpg";
import imgHero_4 from "/gallery/tarikolot_drone (6).jpg";
import imgHero_5 from "/gallery/tarikolot_drone (4).jpg";

import { Carousel } from "../../ui/carousel";
import { NavLink } from "react-router";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import { CiShop } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";

const CtaHeros = [
  {
    id: 1,
    href: "/profil",
    text: "Profil",
    icon: "GoHome",
  },
  {
    id: 2,
    href: "/hptm/profil",
    text: "H.P.T.M",
    icon: "FaPersonShelter",
  },
  {
    id: 3,
    href: "/umkm",
    text: "U.M.K.M",
    icon: "CiShop",
  },
  {
    id: 4,
    href: "/silsilah",
    text: "Silsilah",
    icon: "MdLibraryBooks",
  },
];

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
    <div className="relative h-screen w-full">
      {/* <div className="relative h-screenMinusNav w-full"> */}
      <Carousel images={images} />
      <div className="absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 space-y-5 text-center text-white lg:space-y-8">
        <div className="space-y-1">
          <p className="font-Inter text-4xl font-black tracking-wide md:text-5xl lg:text-7xl">
            Wilujeung Sumping
          </p>
          <p className="font-Inter text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
            di Tarikolot Maleber
          </p>
        </div>
        <div className="mx-auto grid w-2/3 grid-cols-2 items-center justify-items-center gap-10 md:grid-cols-4 md:gap-5 lg:w-3/5">
          {CtaHeros.map((cta) => (
            <div className="relative">
              <NavLink
                to={cta.href}
                key={cta.id}
                onMouseEnter={() => handleMouseEnter(cta.id)}
                onMouseLeave={() => handleMouseLeave(cta.id)}
                className="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-hoverColor p-1 font-Inter text-lg font-semibold tracking-tight text-primaryColor/80 transition-colors duration-300 ease-in-out hover:bg-highlightColor hover:text-hoverColor"
              >
                {cta.icon === "GoHome" && <GoHome size={72} />}
                {cta.icon === "FaPersonShelter" && <FaPeopleRoof size={60} />}
                {cta.icon === "CiShop" && <CiShop size={72} />}
                {cta.icon === "MdLibraryBooks" && <MdLibraryBooks size={64} />}
              </NavLink>

              <div
                className={cn(
                  "absolute -bottom-8 left-1/2 w-full -translate-x-1/2 rounded-full bg-backgroundColor py-1 text-sm font-semibold uppercase tracking-tight text-primaryColor/80 transition-opacity duration-300 ease-in-out",
                  openToolTips[cta.id] ? "opacity-100" : "opacity-0",
                )}
              >
                {cta.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
