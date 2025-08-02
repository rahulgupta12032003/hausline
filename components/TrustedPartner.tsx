"use client";

import { partners } from "@/constants/data";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function TrustedPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

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

  // Start the infinite scroll animation
  useEffect(() => {
    const animate = async () => {
      const container = marqueeRef.current;
      if (!container) return;

      const scrollWidth = container.scrollWidth / 2;
      while (true) {
        await controls.start({
          x: -scrollWidth,
          transition: {
            duration: 20,
            ease: "linear",
          },
        });

        controls.set({ x: 0 });
      }
    };

    animate();
  }, [controls]);

  return (
    <section
      id="trusted-partners"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Trusted{" "}
            <span className="text-goldish-600 dark:text-goldish-400">
              Partners
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            We proudly collaborate with industry-leading partners who share our
            commitment to quality and innovation.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={marqueeRef}
            className="flex space-x-12"
            animate={controls}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-40 w-[130px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
