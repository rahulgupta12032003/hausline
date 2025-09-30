"use client";

import { clients } from "@/constants/data";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};

export default function TrustedClients() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Detect screen size and adjust cards
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto-rotate clients
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + cardsPerView) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const visibleClients = clients.slice(index, index + cardsPerView);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Trusted{" "}
          <span className="text-goldish-600 dark:text-goldish-400">
            Clients
          </span>
        </h2>
        <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
          We proudly collaborate with industry-leading clients who share our
          commitment to quality and innovation.
        </p>

        <div
          className={`mt-16 grid gap-8 justify-center 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}
        >
          <AnimatePresence mode="wait">
            {visibleClients.map((partner) => (
              <motion.div
                key={partner.name + index}
                className="flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-6 h-40"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 w-[200px] object-contain"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
