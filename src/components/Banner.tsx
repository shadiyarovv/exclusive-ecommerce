"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides = [1, 2, 3, 4];

  const onPreviousSlide = () => {
    const firstSlide = 0;
    const lastSlide = slides.length - 1;
    setCurrentSlide(currentSlide === firstSlide ? lastSlide : currentSlide - 1);
  };

  const onNextSlide = () => {
    const firstSlide = 0;
    const lastSlide = slides.length - 1;
    setCurrentSlide(currentSlide === lastSlide ? firstSlide : currentSlide + 1);
  };

  return (
    <div className="relative w-[1000px] h-[325px] bg-gray-200">
      <div className="flex justify-between px-4 absolute top-1/2 -translate-y-1/2 w-full">
        <button
          className="p-3 rounded-full bg-gray-400 text-white"
          onClick={onPreviousSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="p-3 rounded-full bg-gray-400 text-white"
          onClick={onNextSlide}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-2 right-1/2 translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => {
          return (
            <button
              key={i}
              className={`w-3 h-3 border border-black rounded-full ${
                i === currentSlide ? "bg-black" : ""
              }`}
              onClick={() => setCurrentSlide(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
