"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "Free consultation with our experts",
  },
  {
    id: 2,
    title: "Design",
    description: "Customized 3D designs for your space",
  },
  {
    id: 3,
    title: "Production",
    description: "Precision manufacturing in our factory",
  },
  {
    id: 4,
    title: "Installation",
    description: "Professional installation in 45 days",
  },
];

export default function DesignProcess() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="design-process"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our{" "}
            <span className="text-goldish-600 dark:text-goldish-400">
              Design Process
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From consultation to installation, we ensure a seamless and
            professional journey for your interiors.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-goldish-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/918512864086?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20house%20interior%20design."
            target="_blank"
            className="inline-block bg-goldish-600 hover:bg-goldish-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
