// import carouselImage1 from "../../../assets/images/ciremai.jpg";
import { LuMapPinHouse } from "react-icons/lu";
import imgHero_1 from "/gallery/tarikolot_drone (1).jpg";
import imgHero_2 from "/gallery/mesjid_nurul_yaqin.jpg";
import imgHero_3 from "/gallery/tarikolot_drone (5).jpg";
import imgHero_4 from "/gallery/tarikolot_drone (6).jpg";
import imgHero_5 from "/gallery/tarikolot_drone (4).jpg";

import { Carousel } from "../../ui/carousel";
import { LinkButton } from "../../ui/link";

export const HeroSection = () => {
  const images = [imgHero_1, imgHero_2, imgHero_3, imgHero_4, imgHero_5];
  return (
    <div className="relative w-full h-screenMinusNav ">
      <Carousel images={images} />
      <div className="w-2/3 absolute text-center md:space-y-5 left-1/2 top-1/2 space-y-3 -translate-y-1/2 -translate-x-1/2  text-white  ">
        <p className="font-black text-4xl md:text-5xl lg:text-7xl font-Inter">
          Wilujeung Sumping
        </p>
        <p className="text-2xl md:text-4xl lg:text-6xl font-Inter">
          di Tarikolot Maleber
        </p>
        <div className="text-base md:text-lg  font-normal lg:text-xl">
          <p>Dusun VI tarikolot Desa Maleber Kecamatan Maleber</p>
          <p>Kabupaten Kuningan, Jawa Barat</p>
        </div>

        <div className="flex justify-center">
          <LinkButton href="/profil" theme="bg" size="md">
            Profil Kampung <LuMapPinHouse size={20} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
