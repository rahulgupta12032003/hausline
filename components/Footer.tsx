"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold font-pacifico text-amber-400 mb-6 block"
            >
              Hausline Interior
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your space into something extraordinary with our
              award-winning interior design services. We create beautiful,
              functional environments that reflect your unique style and enhance
              your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/hausline_interior_?igsh=MWpzcXM5MWFweThrYQ=="
                target="_blank"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <i className="ri-instagram-line text-white"></i>
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <i className="ri-twitter-x-line text-white"></i>
              </a> */}
              {/* <a
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <i className="ri-linkedin-fill text-white"></i>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-amber-400 mt-1"></i>
                <div>
                  <p className="text-gray-300">205, UK-1, Ecotech-III</p>
                  <p className="text-gray-300">
                    Greater Noida, 201306, Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-amber-400"></i>
                <p className="text-gray-300">+91 9811921686 (Abdul Jabbar)</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-amber-400"></i>
                <p className="text-gray-300">+91 8512864086 (Mohd. Sadiq)</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-amber-400"></i>
                <p className="text-gray-300">hauslineinterior@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hausline Interior. All rights reserved. |
            <a href="#" className="text-amber-400 hover:text-amber-300 ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="text-amber-400 hover:text-amber-300 ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
