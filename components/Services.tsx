"use client";

import { useState, useRef, useEffect } from "react";

const services = [
  {
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary",
    icon: "ri-home-4-line",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    features: [
      "Space Planning",
      "Custom Furniture",
      "Color Consultation",
      "Lighting Design",
    ],
  },
  {
    title: "Commercial Spaces",
    description: "Professional environments that inspire productivity",
    icon: "ri-building-line",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    features: [
      "Office Design",
      "Retail Spaces",
      "Hospitality",
      "Brand Integration",
    ],
  },
  {
    title: "Renovation & Remodeling",
    description: "Breathe new life into existing spaces",
    icon: "ri-tools-line",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800",
    features: [
      "Kitchen Remodel",
      "Bathroom Update",
      "Layout Changes",
      "Material Selection",
    ],
  },
  {
    title: "3D Visualization",
    description: "See your dream space before it's built",
    icon: "ri-box-3-fill",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
    features: [
      "Photorealistic Renders",
      "Virtual Walkthrough",
      "Material Previews",
      "Design Iterations",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setImageLoaded(false);
  }, [activeService]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-goldish-500 to-goldish-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            From concept to completion, we offer comprehensive interior design
            services tailored to your unique needs and vision.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Services List */}
          <div className="space-y-4 order-2 lg:order-1">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={index}
                  className={`group p-5 md:p-6 rounded-xl cursor-pointer transition-all duration-500 relative 
                    ${
                      isActive
                        ? "border-2 border-goldish-500 bg-goldish-50/30 dark:bg-goldish-900/20"
                        : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-goldish-500 hover:shadow-md hover:scale-[1.01]"
                    }
                    hover:border-goldish-400 hover:shadow-md`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                        ${
                          isActive
                            ? "bg-goldish-500 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-goldish-100 dark:group-hover:bg-gray-600"
                        }`}
                    >
                      <i className={`${service.icon} text-lg md:text-xl`}></i>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-3">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                          >
                            <i className="ri-check-line text-goldish-500 text-sm"></i>
                            <span className="text-xs md:text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Display */}
          <div
            className={`transform transition-all duration-1000 order-1 lg:order-2 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] lg:h-[500px] xl:h-[600px]">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                  {services[activeService].title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 mb-4">
                  {services[activeService].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].features
                    .slice(0, 3)
                    .map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm border border-white/30"
                      >
                        {feature}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeService === index
                      ? "w-8 md:w-10 h-2 bg-goldish-500"
                      : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`View ${services[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
