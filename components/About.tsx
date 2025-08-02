"use client";

import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0,
  });
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

  useEffect(() => {
    if (isVisible) {
      const targets = { projects: 600, clients: 250, years: 15, awards: 12 };
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;

      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets];
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, stepTime);
      });
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Creating Dreams Into
              <span className="text-goldish-600 dark:text-goldish-400 block">
                Reality
              </span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At Hausline Interior, we believe that exceptional design has the
              power to transform not just spaces, but lives. Our team of
              passionate designers brings together creativity, functionality,
              and sustainability to create interiors that truly reflect who you
              are.
            </p>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              With over 15 years of experience in luxury interior design, we've
              helped hundreds of clients create their perfect spaces. From
              contemporary minimalism to timeless elegance, we craft
              environments that inspire and delight.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-goldish-600 rounded-full flex items-center justify-center">
                <i className="ri-award-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Award-Winning Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recognized excellence in interior design
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-goldish-600 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Sustainable Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Eco-friendly materials and practices
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20interior%20designer%20team%20working%20on%20luxury%20project%2C%20modern%20office%20space%20with%20design%20materials%2C%20fabric%20samples%2C%20color%20swatches%2C%20architectural%20plans%2C%20creative%20workspace%20atmosphere&width=600&height=400&seq=about1&orientation=landscape"
                alt="Design Process"
                className="rounded-lg shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-goldish-600 dark:text-goldish-400">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            {
              key: "projects",
              label: "Projects Completed",
              icon: "ri-home-4-line",
            },
            {
              key: "clients",
              label: "Happy Clients",
              icon: "ri-user-smile-line",
            },
            {
              key: "years",
              label: "Years Experience",
              icon: "ri-calendar-line",
            },
            { key: "awards", label: "Awards Won", icon: "ri-trophy-line" },
          ].map((item, index) => (
            <div
              key={item.key}
              className={`text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-goldish-100 dark:bg-goldish-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i
                  className={`${item.icon} text-2xl text-goldish-600 dark:text-goldish-400`}
                ></i>
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {counters[item.key as keyof typeof counters]}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
