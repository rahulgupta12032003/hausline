"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-1.5 sm:py-2">
        <div className="flex items-center justify-between">
          <div>
            <Link
              href="/"
              className={`text-xl sm:text-2xl font-medium font-pacifico text-goldish-600 dark:text-goldish-400 font-gothic ${
                isScrolled
                  ? "text-goldish-500 dark:text-white"
                  : "text-white dark:text-white"
              }`}
            >
              Hausline Interior
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`uppercase font-gothic ${
                  isScrolled ? "text-black dark:text-gray-300" : "text-white"
                } hover:text-goldish-600 text-xs dark:hover:text-goldish-400 transition-colors duration-300 font-light cursor-pointer`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-goldish-100 dark:hover:bg-goldish-900 transition-all duration-300 group w-10 h-10 flex items-center justify-center"
            >
              <i
                className={`ri-${
                  theme === "light" ? "sun" : "moon"
                }-line text-lg sm:text-xl text-gray-700 dark:text-gray-300 group-hover:text-goldish-600 group-hover:rotate-180 transition-all duration-500`}
              ></i>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 w-10 h-10 flex items-center justify-center"
            >
              <i
                className={`ri-${
                  isMenuOpen ? "close" : "menu"
                }-line text-lg sm:text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-gray-700 dark:text-gray-300 hover:text-goldish-600 dark:hover:text-goldish-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
