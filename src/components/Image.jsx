import React, { useState, useEffect } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

// Import images directly
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

const Image = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] overflow-hidden bg-blue-50 group font-serif">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 transition-duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white  p-2 rounded-full  transition-colors opacity-0 hover:opacity-100"
      >
        <FaAnglesLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white  p-2 rounded-full  transition-colors opacity-0 hover:opacity-100"
      >
        <FaAnglesRight />
      </button>
    </div>
  );
};

export default Image;
