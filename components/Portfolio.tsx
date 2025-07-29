"use client";

import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
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

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "hospitality", name: "Hospitality" },
    { id: "renovation", name: "Renovation" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Penthouse",
      category: "residential",
      description:
        "Luxury penthouse with panoramic city views featuring contemporary design and premium materials.",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20modern%20penthouse%20interior%20design%2C%20panoramic%20city%20views%2C%20contemporary%20furniture%2C%20premium%20materials%2C%20floor-to-ceiling%20windows%2C%20sophisticated%20lighting%2C%20elegant%20living%20space&width=600&height=400&seq=portfolio1&orientation=landscape",
      details: "3 bedrooms, 4 bathrooms, 2800 sq ft",
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "commercial",
      description:
        "Award-winning office design promoting collaboration and productivity with sustainable materials.",
      image:
        "https://readdy.ai/api/search-image?query=modern%20corporate%20office%20headquarters%20interior%2C%20collaborative%20workspace%20design%2C%20sustainable%20materials%2C%20contemporary%20furniture%2C%20professional%20lighting%2C%20productive%20environment&width=600&height=400&seq=portfolio2&orientation=landscape",
      details: "15,000 sq ft, 200 employees",
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      description:
        "Elegant hotel lobby design combining comfort with sophisticated aesthetics and local cultural elements.",
      image:
        "https://readdy.ai/api/search-image?query=boutique%20hotel%20lobby%20interior%20design%2C%20elegant%20reception%20area%2C%20sophisticated%20aesthetics%2C%20comfortable%20seating%2C%20cultural%20elements%2C%20ambient%20lighting%2C%20welcoming%20atmosphere&width=600&height=400&seq=portfolio3&orientation=landscape",
      details: "5-star luxury hotel, 120 rooms",
    },
    {
      id: 4,
      title: "Victorian Home Renovation",
      category: "renovation",
      description:
        "Complete restoration of historic Victorian home blending original character with modern amenities.",
      image:
        "https://readdy.ai/api/search-image?query=Victorian%20home%20renovation%20interior%2C%20historic%20character%20preservation%2C%20modern%20amenities%20integration%2C%20restored%20original%20features%2C%20contemporary%20updates%2C%20elegant%20finishes&width=600&height=400&seq=portfolio4&orientation=landscape",
      details: "Built 1892, fully restored 2023",
    },
    {
      id: 5,
      title: "Minimalist Apartment",
      category: "residential",
      description:
        "Clean, functional design maximizing space efficiency while maintaining warmth and personality.",
      image:
        "https://readdy.ai/api/search-image?query=minimalist%20apartment%20interior%20design%2C%20clean%20lines%2C%20functional%20layout%2C%20space%20efficiency%2C%20warm%20materials%2C%20natural%20light%2C%20contemporary%20furniture%2C%20organized%20storage&width=600&height=400&seq=portfolio5&orientation=landscape",
      details: "1 bedroom, 800 sq ft",
    },
    {
      id: 6,
      title: "Tech Startup Office",
      category: "commercial",
      description:
        "Dynamic workspace design fostering creativity and innovation with flexible collaboration areas.",
      image:
        "https://readdy.ai/api/search-image?query=tech%20startup%20office%20interior%20design%2C%20creative%20workspace%2C%20innovation%20zones%2C%20flexible%20collaboration%20areas%2C%20modern%20furniture%2C%20vibrant%20colors%2C%20dynamic%20atmosphere&width=600&height=400&seq=portfolio6&orientation=landscape",
      details: "Open concept, 50 employees",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our{" "}
            <span className="text-amber-600 dark:text-amber-400">
              Portfolio
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our diverse collection of completed projects showcasing our
            expertise across various design styles and spaces.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-900 transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <i className="ri-eye-line text-3xl mb-2"></i>
                    <p className="text-sm">View Details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-md">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                    {
                      categories.find((cat) => cat.id === project.category)
                        ?.name
                    }
                  </span>
                  <i className="ri-arrow-right-line text-gray-400 group-hover:text-amber-600 transition-colors duration-300"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                  {
                    categories.find(
                      (cat) => cat.id === selectedProject.category
                    )?.name
                  }
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {selectedProject.details}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
