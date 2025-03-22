import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

type PropsType = {
  images: { src: string; alt: string; caption: string }[];
  isOpen: boolean;
  onClose: () => void;
  index: number;
};

export const ModalGallery = ({ images, onClose, isOpen, index }: PropsType) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0,
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex w-full items-center justify-center bg-black bg-opacity-70">
      <IoClose
        size={44}
        onClick={onClose}
        className="absolute left-1/2 top-0 -translate-x-1/2 cursor-pointer font-bold text-red-500 transition-transform duration-300 ease-in-out"
      />
      <MdOutlineArrowBackIosNew
        size={32}
        onClick={handlePrev}
        className="cursor-pointer font-bold text-white/80"
      />
      <div className="flex w-full max-w-7xl flex-col items-center justify-center p-5">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          style={{ height: "auto", width: "100%", objectFit: "cover" }}
        />
        <div className="absolute bottom-20 flex w-1/3 flex-col items-center justify-center gap-2 bg-black/40 text-white md:w-fit md:flex-row md:p-2">
          <SlLocationPin size={16} />
          <p className="w-2/3 text-center text-xs font-extralight tracking-wide md:w-full md:text-sm md:font-medium">
            {images[currentIndex].caption}
          </p>
        </div>
      </div>
      <MdArrowForwardIos
        size={32}
        onClick={handleNext}
        className="cursor-pointer font-bold text-white/80"
      />
    </div>
  );
};
