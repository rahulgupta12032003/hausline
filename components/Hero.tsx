
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transform Your Space",
      subtitle: "Into Something Extraordinary",
      description: "We create beautiful, functional interiors that reflect your personality and enhance your lifestyle with our innovative design solutions.",
      image: "https://readdy.ai/api/search-image?query=modern%20minimalist%20living%20room%20with%20neutral%20colors%2C%20natural%20lighting%2C%20contemporary%20furniture%2C%20clean%20lines%2C%20sophisticated%20interior%20design%2C%20warm%20wood%20accents%2C%20comfortable%20seating%20area%2C%20elegant%20decor&width=1200&height=800&seq=hero1&orientation=landscape"
    },
    {
      title: "Luxury Redefined",
      subtitle: "With Timeless Elegance",
      description: "Experience the perfect blend of luxury and comfort through our carefully curated designs that stand the test of time.",
      image: "https://readdy.ai/api/search-image?query=luxury%20modern%20dining%20room%20with%20marble%20table%2C%20designer%20chairs%2C%20ambient%20lighting%2C%20high-end%20finishes%2C%20sophisticated%20color%20palette%2C%20elegant%20chandelier%2C%20premium%20materials&width=1200&height=800&seq=hero2&orientation=landscape"
    },
    {
      title: "Sustainable Design",
      subtitle: "For Modern Living",
      description: "Creating eco-friendly spaces that combine sustainability with style, using responsibly sourced materials and energy-efficient solutions.",
      image: "https://readdy.ai/api/search-image?query=sustainable%20modern%20bedroom%20with%20natural%20materials%2C%20organic%20textures%2C%20eco-friendly%20furniture%2C%20green%20plants%2C%20natural%20light%2C%20minimalist%20design%2C%20earth%20tones&width=1200&height=800&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 sm:px-6 max-w-4xl animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                {slide.title}
                <br />
                <span className="text-amber-400">{slide.subtitle}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <button 
                  onClick={scrollToPortfolio}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap w-full sm:w-auto cursor-pointer"
                >
                  View Our Work
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap w-full sm:w-auto cursor-pointer"
                >
                  Get Consultation
                </button>
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
              index === currentSlide ? 'bg-amber-400 w-4 sm:w-8' : 'bg-white/50'
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
