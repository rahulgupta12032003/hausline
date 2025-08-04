"use client";

import { slides } from "@/constants/data";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="p-3 flex justify-center">
              <div
                className="relative text-center text-white py-10 px-6 max-w-4xl animate-fade-in-up
      before:content-[''] before:absolute before:inset-0 before:-z-10 
      before:blur-2xl before:rounded-full 
      before:bg-black/40
      w-[60vw] h-[300px] sm:h-[350px] rounded-full flex flex-col justify-center items-center"
              >
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-playfair mb-2 md:mb-4 leading-tight tracking-[4px] whitespace-nowrap">
                  {slide.title}
                  <br />
                </h1>
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-playfair mb-3 md:mb-4 leading-tight tracking-[4px] whitespace-nowrap">
                  {slide.subtitle}
                </h1>

                <div className="mt-[20px] flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <button
                    onClick={scrollToPortfolio}
                    className="bg-goldish-500 hover:bg-goldish-600 text-[12px] sm:text-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap w-full sm:w-auto cursor-pointer uppercase font-pacifico font-light"
                  >
                    View Our Work
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="border-2 border-white text-white text-[12px] sm:text-sm hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap w-full sm:w-auto cursor-pointer uppercase font-pacifico"
                  >
                    Get Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "bg-goldish-400 w-4 sm:w-8"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-white text-xl sm:text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
