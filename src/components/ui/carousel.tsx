import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
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
        className="flex  w-full h-screenMinusNav  transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ objectFit: "cover" }}
            className="w-full flex-shrink-0 "
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform h-9 w-9 flex items-center justify-center -translate-y-1/2 bg-black bg-opacity-25 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform h-9 w-9 flex items-center justify-center -translate-y-1/2 bg-black bg-opacity-25 text-white p-2 rounded-full"
      >
        &gt;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-[6px] w-10 rounded-full opacity-75 ${
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
