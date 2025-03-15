import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* //menampilkan image */}
      <div
        ref={carouselRef}
        className="relative flex h-screenMinusNav w-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 flex -translate-y-1/2 transform items-center justify-center text-white/70"
      >
        <MdOutlineArrowBackIos size={36} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 flex -translate-y-1/2 transform items-center justify-center text-white/70"
      >
        <MdOutlineArrowForwardIos size={36} />
      </button>
      {/* Indicators */}
      <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index
                ? "bg-highlightColor"
                : "bg-backgroundColor"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
