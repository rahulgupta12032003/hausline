"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const countersRef = useRef(null);
  const isCountersInView = useInView(countersRef, { once: true });

  const [counters, setCounters] = useState({
    projects: 0,
    cities_served: 0,
    years: 0,
    quality_checks: 0,
  });

  useEffect(() => {
    if (isCountersInView) {
      const targets = {
        projects: 1650,
        cities_served: 35,
        years: 18,
        quality_checks: 95,
      };
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
  }, [isCountersInView]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
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
              With over 18 years of experience in luxury interior design, we've
              helped hundreds of clients create their perfect spaces. From
              contemporary minimalism to timeless elegance, we craft
              environments that inspire and delight.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-goldish-600 rounded-full flex items-center justify-center">
                <i className="ri-pencil-ruler-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Customized Designs
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tailor-made interiors crafted for your lifestyle
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-goldish-600 rounded-full flex items-center justify-center">
                <i className="ri-scissors-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Precision Craftsmanship
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  High-quality finishes with attention to detail
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-goldish-600 rounded-full flex items-center justify-center">
                <i className="ri-tools-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Professional Installation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Delivered & installed by skilled experts
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-goldish-600 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Sustainable Materials
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Eco-friendly solutions for a healthier home
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3 }}
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
                    18+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Counters Section */}
        <div ref={countersRef} className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            {
              key: "projects",
              label: "Projects Completed",
              icon: "ri-home-4-line",
            },
            {
              key: "quality_checks",
              label: "Quality Checks",
              icon: "ri-trophy-line",
            },
            {
              key: "cities_served",
              label: "Cities Served",
              icon: "ri-user-smile-line",
            },
            {
              key: "years",
              label: "Years Experience",
              icon: "ri-calendar-line",
            },
          ].map((item, index) => (
            <motion.div
              key={item.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition-transform"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
