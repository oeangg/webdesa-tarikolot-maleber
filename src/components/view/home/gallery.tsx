import { useState } from "react";
import { cn } from "../../../lib/utils";
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
    <div className="relative w-full bg-gradient-to-r from-blue-200 to-backgroundSecondary py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row-reverse md:px-0">
        <div className="flex-1 space-y-5">
          <SubTitle margin="left" title="Potret Lembur" subtitle="Gallery" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            expedita nihil quidem. Molestias soluta sunt unde consequuntur aut
            vel repellendus officia ab numquam repudiandae quod hic similique
            vero asperiores eligendi temporibus incidunt accusamus, a rerum
            architecto maiores eius. Veritatis, voluptate.
          </p>
        </div>
        <div className="flex h-full w-full basis-2/3 flex-wrap items-center justify-center gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group h-28 max-w-36 overflow-hidden",
                index % 2 === 0 && "h-32 max-w-28",
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ objectFit: "cover", width: "auto", height: "100%" }}
                className="cursor-pointer duration-500 hover:scale-105 hover:opacity-90"
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
