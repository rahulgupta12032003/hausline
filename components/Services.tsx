"use client";

import { useState, useRef, useEffect } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Residential Design",
      description:
        "Complete home makeovers that reflect your lifestyle and personality with custom furniture, lighting, and decor solutions.",
      icon: "ri-home-4-line",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
      features: [
        "Custom Furniture Design",
        "Space Planning",
        "Color Consultation",
        "Lighting Design",
      ],
    },
    {
      title: "Commercial Spaces",
      description:
        "Professional workspace design that enhances productivity and brand identity while creating inspiring environments.",
      icon: "ri-building-line",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
      features: [
        "Brand Integration",
        "Workflow Optimization",
        "Ergonomic Solutions",
        "Acoustic Design",
      ],
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces into modern, functional environments with our comprehensive renovation services.",
      icon: "ri-hammer-line",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
      features: [
        "Structural Changes",
        "Modern Updates",
        "Energy Efficiency",
        "Smart Home Integration",
      ],
    },
    {
      title: "Luxury Hospitality",
      description:
        "Create memorable experiences through exceptional hospitality design that combines comfort with sophistication.",
      icon: "ri-hotel-line",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
      features: [
        "Guest Experience Design",
        "Branding Integration",
        "Durability Focus",
        "Maintenance Planning",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our{" "}
            <span className="text-amber-600 dark:text-amber-400">Services</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive interior design
            services tailored to your unique needs and vision.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeService === index
                    ? "bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600"
                    : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                } ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeService === index
                        ? "bg-amber-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <i className={`${service.icon} text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-md dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <i className="ri-check-line text-amber-600 dark:text-amber-400 text-sm"></i>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-200">
                  {services[activeService].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
