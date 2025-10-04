const services = [
    {
        title: "Residential Design",
        description:
            "Complete home makeovers that reflect your lifestyle and personality with custom furniture, lighting, and decor solutions.",
        icon: "ri-home-4-line",
        image:
            "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
        features: [
            "Custom Furniture Design",
            "Space Planning",
            "Color Consultation",
            "Lighting Design",
        ],
    },
    {
        title: "Commercial Spaces",
        description:
            "Professional workspace design that enhances productivity and brand identity while creating inspiring environments.",
        icon: "ri-building-line",
        image:
            "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
        features: [
            "Brand Integration",
            "Workflow Optimization",
            "Ergonomic Solutions",
            "Acoustic Design",
        ],
    },
    {
        title: "Renovation & Remodeling",
        description:
            "Transform existing spaces into modern, functional environments with our comprehensive renovation services.",
        icon: "ri-hammer-line",
        image:
            "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
        features: [
            "Structural Changes",
            "Modern Updates",
            "Energy Efficiency",
            "Smart Home Integration",
        ],
    },
    {
        title: "Luxury Hospitality",
        description:
            "Create memorable experiences through exceptional hospitality design that combines comfort with sophistication.",
        icon: "ri-hotel-line",
        image:
            "https://readdy.ai/api/search-image?query=luxury%20residential%20interior%20design%2C%20modern%20living%20room%20with%20custom%20furniture%2C%20elegant%20lighting%20fixtures%2C%20premium%20materials%2C%20contemporary%20decor%2C%20sophisticated%20color%20scheme&width=600&height=400&seq=service1&orientation=landscape",
        features: [
            "Guest Experience Design",
            "Branding Integration",
            "Durability Focus",
            "Maintenance Planning",
        ],
    },
];

// TrustedPartners

const partners = [
    { name: "Century", logo: "/century.png" },
    { name: "Hettich", logo: "/hettich.png" },
    { name: "Actiontesa", logo: "/actiontesa.png" },
    { name: "Bosch", logo: "/Bosch.png" },
    { name: "Hafele", logo: "/hafele.png" },
    { name: "Merino", logo: "/merino.png" },
    { name: "Jaquar", logo: "/jaquar.png" },
];

const clients = [
    { name: "Century", logo: "/clients/bawana.png" },
    { name: "Hettich", logo: "/clients/one.png" },
    { name: "Actiontesa", logo: "/clients/strategic.png" },
    { name: "Bosch", logo: "/clients/sun_twilight.png" },
    { name: "Hafele", logo: "/clients/town.png" },
    { name: "Merino", logo: "/clients/vishal.png" },
];


// home slides 
const slides = [
    {
        title: "Get a Designer",
        subtitle: "Space You'll Love",
        description: "We create beautiful, functional interiors that reflect your personality and enhance your lifestyle with our innovative design solutions.",
        image: "https://readdy.ai/api/search-image?query=modern%20minimalist%20living%20room%20with%20neutral%20colors%2C%20natural%20lighting%2C%20contemporary%20furniture%2C%20clean%20lines%2C%20sophisticated%20interior%20design%2C%20warm%20wood%20accents%2C%20comfortable%20seating%20area%2C%20elegant%20decor&width=1200&height=800&seq=hero1&orientation=landscape"
    },
    {
        title: "Luxury Redefined",
        subtitle: "With Timeless Elegance",
        description: "Experience the perfect blend of luxury and comfort through our carefully curated designs that stand the test of time.",
        image: "https://res.cloudinary.com/ddkk2fg7o/image/upload/v1754161925/background-1_elfb3r.jpg"
    },
    {
        title: "Sustainable Design",
        subtitle: "For Modern Living",
        description: "Creating eco-friendly spaces that combine sustainability with style, using responsibly sourced materials and energy-efficient solutions.",
        image: "https://readdy.ai/api/search-image?query=sustainable%20modern%20bedroom%20with%20natural%20materials%2C%20organic%20textures%2C%20eco-friendly%20furniture%2C%20green%20plants%2C%20natural%20light%2C%20minimalist%20design%2C%20earth%20tones&width=1200&height=800&seq=hero3&orientation=landscape"
    }
];

const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "kitchens", name: "Modular Kitchens" },
    { id: "commercial", name: "Commercial" },
    { id: "hospitality", name: "Hospitality" },
    { id: "renovation", name: "Renovation" },
];

const projects = [
    {
        id: 1,
        title: "Living Room",
        category: "residential",
        description:
            "Elegant living room design featuring modern furniture, cozy ambiance, and tasteful décor for comfortable gatherings.",
        image: "/portfolio/14.avif",
        details: "3 bedrooms, 4 bathrooms, 2800 sq ft",
    },
    {
        id: 2,
        title: "Kid's Room",
        category: "residential",
        description:
            "Playful and functional kid’s room with bright colors, creative storage, and safe furniture for a joyful environment.",
        image: "/portfolio/16.avif",
        details: "Open concept, 50 employees",
    },
    {
        id: 3,
        title: "Minimalist Apartment",
        category: "residential",
        description:
            "Minimalist apartment design with clean lines, neutral tones, and smart storage solutions for a clutter-free lifestyle.",
        image: "https://readdy.ai/api/search-image?query=minimalist%20apartment%20interior%20design%2C%20clean%20lines%2C%20functional%20layout%2C%20space%20efficiency%2C%20warm%20materials%2C%20natural%20light%2C%20contemporary%20furniture%2C%20organized%20storage&width=600&height=400&seq=portfolio5&orientation=landscape",
        details: "1 bedroom, 800 sq ft",
    },
    {
        id: 4,
        title: "Luxury Interior",
        category: "hospitality",
        description:
            "Opulent interior design with rich materials, grand lighting, and refined details creating a luxurious atmosphere.",
        image: "https://readdy.ai/api/search-image?query=boutique%20hotel%20lobby%20interior%20design%2C%20elegant%20reception%20area%2C%20sophisticated%20aesthetics%2C%20comfortable%20seating%2C%20cultural%20elements%2C%20ambient%20lighting%2C%20welcoming%20atmosphere&width=600&height=400&seq=portfolio3&orientation=landscape",
        details: "5-star luxury hotel, 120 rooms",
    },
    {
        id: 5,
        title: "Commercial Spaces",
        category: "commercial",
        description:
            "Modern commercial space design with collaborative layouts, ergonomic furniture, and energy-efficient lighting.",
        image: "/portfolio/12.jpg",
        details: "15,000 sq ft, 200 employees",
    },
    {
        id: 6,
        title: "Home Renovation",
        category: "renovation",
        description:
            "Comprehensive home renovation blending preserved character with modern upgrades, comfort, and aesthetics.",
        image: "https://readdy.ai/api/search-image?query=Victorian%20home%20renovation%20interior%2C%20historic%20character%20preservation%2C%20modern%20amenities%20integration%2C%20restored%20original%20features%2C%20contemporary%20updates%2C%20elegant%20finishes&width=600&height=400&seq=portfolio4&orientation=landscape",
        details: "Built 1892, fully restored 2023",
    },
    {
        id: 7,
        title: "Open Kitchen",
        category: "kitchens",
        description:
            "Airy open kitchen seamlessly merging with living areas, featuring modern cabinetry and abundant natural light.",
        image: "/kitchens/27.png",
        details: "Open concept, contemporary finish",
    },
    {
        id: 8,
        title: "L-Shape Kitchen",
        category: "kitchens",
        description:
            "Practical L-shaped kitchen design maximizing corners with stylish countertops and efficient storage.",
        image: "/kitchens/10.jpg",
        details: "Compact yet functional",
    },
    {
        id: 9,
        title: "U-Shape Kitchen",
        category: "kitchens",
        description:
            "Spacious U-shaped kitchen layout offering maximum worktop area and storage with sleek modern finishes.",
        image: "/kitchens/3.jpg",
        details: "Spacious design, family-friendly",
    },
    {
        id: 10,
        title: "Island Kitchen",
        category: "kitchens",
        description:
            "Contemporary island kitchen with a central workspace perfect for cooking, dining, and socializing.",
        image: "/kitchens/23.jpg",
        details: "Island with seating & storage",
    },
    {
        id: 11,
        title: "Parallel/Galley Kitchen",
        category: "kitchens",
        description:
            "Streamlined parallel kitchen with dual counters for efficient workflow and smart storage in compact spaces.",
        image: "/kitchens/28.jpg",
        details: "Ideal for apartments and compact spaces",
    },
    {
        id: 12,
        title: "Customized Kitchen",
        category: "kitchens",
        description:
            "Bespoke kitchen tailored to client’s preferences, balancing functionality with personalized design aesthetics.",
        image: "/kitchens/13.jpg",
        details: "Modular design, fully customizable",
    },
];



export { services, partners, slides, categories, projects, clients }