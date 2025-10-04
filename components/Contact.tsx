"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact({}: { theme?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setSubmitStatus(
          "✅ Thank you! Your message has been sent successfully."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("❌ Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Get In{" "}
            <span className="text-goldish-600 dark:text-goldish-400">
              Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your project and bring
            your vision to life.
          </p>
        </div>

        {/* Content Grid - Wrapped with overflow-hidden */}
        <div ref={sectionRef} className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-goldish-100 dark:bg-goldish-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-goldish-600 dark:text-goldish-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900 dark:text-white">
                      Visit Our Company
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      205, UK-1, Ecotech-III
                      <br />
                      Greater Noida, 201306
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-goldish-100 dark:bg-goldish-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-goldish-600 dark:text-goldish-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900 dark:text-white">
                      Call Us
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      +91 9811921686 (Abdul Jabbar)
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      +91 8512864086 (Mohd. Sadiq)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-goldish-100 dark:bg-goldish-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-goldish-600 dark:text-goldish-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900 dark:text-white">
                      Email Us
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      hauslineinterior@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  Our Location
                </h3>
                <div className="w-full h-56 sm:h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.763527035756!2d77.45325177495357!3d28.546826687968558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce940ac69c761%3A0x6fbee4bbaad25732!2sHausline%20interior!5e0!3m2!1sen!2sin!4v1753723671520!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <form
                id="hausline-contact"
                onSubmit={handleSubmit}
                className="space-y-6 bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-goldish-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-goldish-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-goldish-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-goldish-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm appearance-none pr-8"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Spaces</option>
                        <option value="renovation">
                          Renovation & Remodeling
                        </option>
                        <option value="hospitality">Luxury Hospitality</option>
                        <option value="consultation">
                          Design Consultation
                        </option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Project Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-goldish-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm appearance-none pr-8"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹100,000</option>
                      <option value="100k-250k">₹100,000 - ₹250,000</option>
                      <option value="over-250k">Over ₹250,000</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-goldish-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-goldish-600 hover:bg-goldish-700 disabled:bg-gray-400 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 disabled:scale-100 whitespace-nowrap"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg text-sm sm:text-base ${
                      submitStatus.includes("Thank you")
                        ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
                    }`}
                  >
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
