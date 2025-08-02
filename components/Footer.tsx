"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-medium font-pacifico text-white mb-6 block"
            >
              Hausline Interior
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed text-xs md:text-md">
              Transform your space into something extraordinary with our
              award-winning interior design services. We create beautiful,
              functional environments that reflect your unique style and enhance
              your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-goldish-500 rounded-full flex items-center justify-center hover:bg-goldish-600 transition-colors duration-300"
              >
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/hausline_interior_?igsh=MWpzcXM5MWFweThrYQ=="
                target="_blank"
                className="w-10 h-10 bg-goldish-500 rounded-full flex items-center justify-center hover:bg-goldish-600 transition-colors duration-300"
              >
                <i className="ri-instagram-line text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-gray-300 text-xs md:text-md hover:text-goldish-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-500">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-goldish-500 mt-1"></i>
                <div>
                  <p className="text-gray-300 text-xs md:text-md">
                    205, UK-1, Ecotech-III
                  </p>
                  <p className="text-gray-300 text-xs md:text-md">
                    Greater Noida, 201306, Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-goldish-500"></i>
                <p className="text-gray-300 text-xs md:text-md">
                  +91 9811921686 (Abdul Jabbar)
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-goldish-500"></i>
                <p className="text-gray-300 text-xs md:text-md">
                  +91 8512864086 (Mohd. Sadiq)
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-goldish-500"></i>
                <p className="text-gray-300 text-xs md:text-md">
                  hauslineinterior@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2024 Hausline Interior. All rights reserved. |
            <a
              href="#"
              className="text-goldish-500 hover:text-goldish-400 ml-1"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="text-goldish-500 hover:text-goldish-400 ml-1"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
