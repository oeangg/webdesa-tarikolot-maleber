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
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center w-full   bg-black bg-opacity-70">
      <div className="relative  bg-white p-10  flex flex-row justify-between items-center gap-10 max-w-6xl max-h-[80vh] ">
        <IoClose
          size={32}
          onClick={onClose}
          className="absolute left-1/2 top-0 -translate-x-1/2 font-bold text-red-500 hover:text-red-700 cursor-pointer"
        />
        <MdOutlineArrowBackIosNew
          size={32}
          onClick={handlePrev}
          className="text-primaryColor/80 font-bold cursor-pointer "
        />
        <div className="w-full flex flex-col items-center justify-center ">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
          />
          <div className="absolute bottom-20 flex flex-col w-1/3 md:w-fit md:p-2 gap-2   md:flex-row items-center bg-black/40  justify-center text-white">
            <SlLocationPin size={16} />
            <p className=" w-2/3 md:w-full font-extralight text-center  md:font-medium text-xs md:text-sm tracking-wide">
              {images[currentIndex].caption}
            </p>
          </div>
        </div>
        <MdArrowForwardIos
          size={32}
          onClick={handleNext}
          className="text-primaryColor/80 font-bold cursor-pointer"
        />
      </div>
    </div>
  );
};
