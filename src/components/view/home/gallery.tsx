import { useState } from "react";
import { cn } from "../../../tools/cn";
import { SubTitle } from "../../ui/sub-tittle";
import { ModalGallery } from "./gallery-modal";

const images = [
  {
    src: "/gallery/tarikolot_drone (1).jpg",
    alt: "gallery/tarikolot_drone (1)",
    caption: "Landscape Kampung Tarikolot",
  },
  {
    src: "/gallery/tarikolot_drone (2).jpg",
    alt: "gallery/tarikolot_drone (2)",
    caption: "Pesawahan di Kampung Tarikolot",
  },
  {
    src: "/gallery/pengajianibuibu.jpg",
    alt: "gallery/pengajianibuibu",
    caption: "Shalawatan Ibu Yasinan",
  },
  {
    src: "/gallery/volly.jpg",
    alt: "gallery/volly",
    caption: "Lomba Volly antar Dusun",
  },
  {
    src: "/gallery/tarikolot_drone (3).jpg",
    alt: "gallery/tarikolot_drone (4)",
    caption: "Pesawahan di Kampung Tarikolot",
  },
  {
    src: "/gallery/tarikolot_drone (4).jpg",
    alt: "gallery/tarikolot_drone (4)",
    caption: "Lapangan Volly kampung Tarikolot",
  },
  {
    src: "/gallery/tarikolot_drone (5).jpg",
    alt: "gallery/tarikolot_drone (5)",
    caption: "Kampung Tarikolot dengan perbatasan Ds Padamulya",
  },
  {
    src: "/gallery/tarikolot_drone (6).jpg",
    alt: "gallery/tarikolot_drone (6)",
    caption: "Kampung Tarikolot dengan perbatasan Ds Parakan",
  },
  {
    src: "/gallery/agustusan.jpg",
    alt: "gallery/agustusan",
    caption: "Lomba 17 Agustus",
  },
  {
    src: "/gallery/tarikolot_drone (7).jpg",
    alt: "gallery/tarikolot_drone (7)",
    caption: "Kampung Tarikolot dengan perbatasan Ds Kutamandarakan",
  },
  {
    src: "/gallery/mesjid_nurul_yaqin.jpg",
    alt: "gallery/mesjid_nurul_yaqin",
    caption: "Mesjid Nurul Yaqin Tarikolot",
  },

  {
    src: "/gallery/literasianak.jpg",
    alt: "gallery/literasianak",
    caption: "Kegiatan Literasi Anak",
  },
  {
    src: "/gallery/pawaiobor.jpg",
    alt: "gallery/pawaiobor",
    caption: "Pawai Obor 1 Muharram",
  },

  {
    src: "/gallery/lombaagustusan.jpg",
    alt: "gallery/lombaagustusan",
    caption: "Kegiatan Lomba 17 Agustus",
  },
];

export const GalleryImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleOpenModal = (index: number) => {
    setIsModalOpen(true);
    setModalIndex(index);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-200 to-backgroundSecondary py-20">
      <div className="max-w-6xl w-full flex flex-col  md:flex-row-reverse px-4 md:px-0 gap-10 mx-auto">
        <div className="space-y-5 flex-1">
          <SubTitle margin="left" title="Selayang Pandang" subtitle="Gallery" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            expedita nihil quidem. Molestias soluta sunt unde consequuntur aut
            vel repellendus officia ab numquam repudiandae quod hic similique
            vero asperiores eligendi temporibus incidunt accusamus, a rerum
            architecto maiores eius. Veritatis, voluptate.
          </p>
        </div>
        <div className="flex flex-wrap w-full h-full gap-2 justify-center items-center  basis-2/3">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "max-w-36 h-28 overflow-hidden group   ",
                index % 2 === 0 && "max-w-28 h-32"
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ objectFit: "cover", width: "auto", height: "100%" }}
                className="duration-500 hover:scale-105 hover:opacity-90 cursor-pointer "
                onClick={() => handleOpenModal(index)}
              />
            </div>
          ))}
        </div>

        <ModalGallery
          isOpen={isModalOpen}
          images={images}
          onClose={() => setIsModalOpen(false)}
          index={modalIndex}
        />
      </div>
    </div>
  );
};
