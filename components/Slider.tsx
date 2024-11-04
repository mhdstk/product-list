"use client";

import { useState, useEffect } from 'react';

export default function Slider() {
  const [index, setIndex] = useState(0);
  const images: string[] = ['slider1.jpg', 'slide2.jpg', 'Slider3.jpg']; // Ensure image paths are correct

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  // Set up auto-scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [index]);

  return (
    <div className="relative flex items-center w-full h-[130px] md:h-[590px] overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-gray-800 bg-transparent border-none cursor-pointer p-2 md:p-4 hover:bg-gray-200 rounded-full"
      >
        ‹
      </button>
      <div className="w-full h-full">
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover "
        />
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-gray-800 bg-transparent border-none cursor-pointer p-2 md:p-4 hover:bg-gray-200 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
