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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % clients.length);
    }, 3000); // every 3s move next set

    return () => clearInterval(interval);
  }, []);

  const visibleClients = clients.slice(index, index + 3);

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

        <div className="mt-16 flex justify-center space-x-12">
          <AnimatePresence mode="wait">
            {visibleClients.map((partner) => (
              <motion.div
                key={partner.name + index}
                className="flex-shrink-0 w-85 h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-6"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 w-[250px] object-contain"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
