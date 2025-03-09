// import carouselImage1 from "../../../assets/images/ciremai.jpg";
import { LuMapPinHouse } from "react-icons/lu";
import carouselImage1 from "../../../assets//images/hero image/mesjid.jpg";
import carouselImage2 from "../../../assets/images/hero image/tamal.jpg";
import carouselImage3 from "../../../assets/images/hero image/tamal2.jpg";
import carouselImage4 from "../../../assets/images/hero image/tamal4.jpg";

import { Carousel } from "../../ui/carousel";
import { LinkButton } from "../../ui/link";

export const HeroSection = () => {
  const images = [
    carouselImage2,
    carouselImage3,
    carouselImage1,
    carouselImage4,
  ];
  return (
    <div className="relative w-full h-screenMinusNav ">
      <Carousel images={images} />
      <div className="w-2/3 absolute text-center md:space-y-4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-black text-3xl md:text-5xl lg:text-7xl text-white  ">
        <h1>Wilujeung Sumping</h1>
        <h3 className="text-2xl md:text-4xl lg:text-6xl">
          di Tarikolot Maleber
        </h3>
        <div className="text-base md:text-lg font-medium lg:text-xl">
          <h3>Dusun VI tarikolot Desa Maleber Kecamatan Maleber</h3>
          <h3>Kabupaten Kuningan, Jawa Barat</h3>
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
