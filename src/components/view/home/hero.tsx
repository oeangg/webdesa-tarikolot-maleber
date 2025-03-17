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

export const HeroSection = () => {
  const images = [imgHero_1, imgHero_2, imgHero_3, imgHero_4, imgHero_5];
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
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-lg font-semibold tracking-tight text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAProfil}
              alt="image cta profil"
              className="max-w-20 px-4 pt-2"
            />
            Profil
            <div className="absolute inset-0 bg-hoverColor/80 opacity-50 duration-300 group-hover:opacity-30"></div>
          </NavLink>
          <NavLink
            to="/hptm"
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-sm font-semibold tracking-tighter text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAHTPM}
              alt="image cta profil"
              className="max-w-20 px-4 pt-2"
            />
            Karang Taruna
            <div className="absolute inset-0 bg-highlightColor/80 opacity-50 group-hover:opacity-30"></div>
          </NavLink>
          <NavLink
            to="/umkm"
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-base font-bold tracking-tighter text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAUMKM}
              alt="image cta profil"
              className="max-w-20 px-4 pt-2"
            />
            U M K M
            <div className="absolute inset-0 bg-highlightColor/80 opacity-50 group-hover:opacity-30"></div>
          </NavLink>

          <NavLink
            to="/silsilah"
            className="group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl bg-backgroundColor font-Inter text-base font-bold tracking-tight text-primaryColor/70 duration-300 ease-in-out hover:text-primaryColor hover:shadow-md hover:shadow-backgroundColor/70"
          >
            <img
              src={imgCTAsilsilah}
              alt="image cta profil"
              className="max-w-20 px-4 pt-2"
            />
            Silsilah
            <div className="absolute inset-0 bg-hoverColor/80 opacity-50 group-hover:opacity-30"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
