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
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-gray-900 dark:text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-goldish-500 to-goldish-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive interior design
            services tailored to your unique needs and vision.
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Services List */}
          <div className="w-full space-y-3 md:space-y-4 order-2 lg:order-1">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={index}
                  className={`w-full group p-4 md:p-5 lg:p-6 rounded-xl cursor-pointer transition-all duration-500 relative overflow-hidden
                    ${
                      isActive
                        ? "border-2 border-goldish-500 bg-goldish-50/50 dark:bg-goldish-900/30 shadow-lg"
                        : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                    }`}
                  onClick={() => setActiveService(index)}
                  style={{
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Glow Effect on Hover */}
                  {!isActive && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-goldish-400/20 via-goldish-500/20 to-goldish-600/20 blur-xl"></div>
                    </div>
                  )}

                  <div className="relative flex items-start gap-3 md:gap-4">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                        ${
                          isActive
                            ? "bg-gradient-to-br from-goldish-500 to-goldish-600 text-white shadow-md"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-goldish-100 dark:group-hover:bg-goldish-900/40 group-hover:text-goldish-600 dark:group-hover:text-goldish-400"
                        }`}
                    >
                      <i
                        className={`${service.icon} text-base md:text-lg lg:text-xl`}
                      ></i>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-2 md:mb-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-1.5 md:gap-2"
                          >
                            <i className="ri-check-line text-goldish-500 dark:text-goldish-400 text-xs md:text-sm flex-shrink-0"></i>
                            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">
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
            className="w-full order-1 lg:order-2"
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(20px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1s ease-out 300ms",
            }}
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
              {/* Responsive Height */}
              <div className="relative w-full pb-[75%] sm:pb-[66.67%] md:pb-[60%] lg:pb-[75%] xl:pb-[80%]">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                  <div
                    className={`transition-all duration-500 ${
                      imageLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                      {services[activeService].description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {services[activeService].features
                        .slice(0, 3)
                        .map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] sm:text-xs md:text-sm border border-white/30 whitespace-nowrap"
                          >
                            {feature}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Glows */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-goldish-500/30 to-goldish-600/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-tr from-goldish-500/20 to-goldish-600/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 gap-1.5 sm:gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeService === index
                      ? "w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 bg-gradient-to-r from-goldish-500 to-goldish-600"
                      : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-600 hover:bg-goldish-400 dark:hover:bg-goldish-500"
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
