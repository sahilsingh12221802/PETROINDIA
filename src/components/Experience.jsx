import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const workCategories = [
    {
      title: "Civil Construction",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "With 25+ years in civil construction, we've completed 150+ projects including residential complexes, commercial buildings, and specialized petrol pump constructions across multiple states, adhering to strict quality and safety standards.",
        services: [
          "Complete building construction from foundation to finishing",
          "Petrol pump construction with explosion-proof fittings",
          "Structural repairs and concrete rehabilitation",
          "Pre-engineered buildings (PEB) construction",
          "Civil works for industrial plants and factories"
        ],
        expertise: "Our team of 50+ civil engineers specializes in RCC, steel, and composite structures. We use BIM modeling for complex projects and maintain ISO 9001:2015 certification for quality management systems.",
        clients: "HPCL, BPCL, IOCL, Reliance, Nayara, Essar, L&T"
      }
    },
    {
      title: "Mechanical Works",
      images: [
        "https://images.unsplash.com/photo-1581093450021-4a7360e9a7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Our mechanical division handles complex industrial installations for oil & gas sector, with specialized expertise in ASME and API standards compliance for pressure equipment and piping systems.",
        services: [
          "Fabrication and erection of structural steel",
          "Piping systems installation and maintenance",
          "Rotating equipment installation and alignment",
          "Tank fabrication and erection (API 650 standards)",
          "Mechanical maintenance shutdowns"
        ],
        expertise: "We maintain a team of ASME Section IX certified welders and API 510/570 certified inspectors. Our workshop is equipped with CNC plasma cutters and heavy fabrication capabilities up to 50mm thickness.",
        clients: "IOCL Panipat Refinery, HPCL Mumbai, BPCL Kochi, Nayara Vadinar"
      }
    },
    {
      title: "Industrial Painting",
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585152225-14cd673f9bb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Specialized protective coating services extending asset life by 3-5 times in corrosive environments, using certified marine-grade coating systems from PPG, Jotun, and AkzoNobel.",
        services: [
          "Tank painting (internal/external as per IOCL/BPCL specs)",
          "Pipeline coating and wrapping (3LPE/3LPP systems)",
          "Industrial floor painting (epoxy/polyurethane)",
          "Sandblasting (SA 2.5/SA 3 standards)",
          "Insulation and cladding works"
        ],
        expertise: "NACE Level 2 certified coating inspectors on all projects. We maintain SSPC-QP3 certification and use DFT gauges, holiday detectors for quality assurance. Specialized in tank floor lining with glass-flake coatings.",
        clients: "All OMCs, BORL Bina, HMEL Bathinda, MRPL Mangalore"
      }
    },
    {
      title: "Electrical Works",
      images: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600880291335-24a5a0b8a891?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Complete electrical solutions for hazardous areas (Zone 1 & 2) with ATEX certified equipment, including installation, maintenance, and troubleshooting of complex electrical systems.",
        services: [
          "HT/LT cable laying and termination",
          "Panel fabrication and installation (Exd/Exe)",
          "Substation erection and commissioning",
          "Lightning protection systems",
          "Earthing systems (IS 3043 compliance)"
        ],
        expertise: "Our team includes CPRI-certified electrical engineers specialized in hazardous area installations. We perform thermographic surveys and power quality analysis using Fluke power analyzers.",
        clients: "All major refineries, HPCL LPG terminals, IOCL depots"
      }
    },
    {
      title: "Horticulture & Landscaping",
      images: [
        "https://images.unsplash.com/photo-1600566752227-5849b466a9d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Comprehensive green solutions for industrial complexes including native species plantation, drip irrigation systems, and ongoing maintenance contracts with 95% plant survival rate.",
        services: [
          "Industrial landscaping with native species",
          "Vertical gardens and green walls",
          "Drip irrigation system installation",
          "Annual maintenance contracts (AMC)",
          "Soil testing and remediation"
        ],
        expertise: "Our horticulturists specialize in pollution-resistant species selection. We implement automated irrigation systems with soil moisture sensors and maintain 50+ acres of industrial green spaces across India.",
        clients: "IOCL Gujarat Refinery, BPCL Mumbai, HPCL Visakh Refinery"
      }
    },
    {
      title: "Road Construction",
      images: [
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607689032-9b3715c8da71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Complete road construction services including flexible and rigid pavements, with expertise in heavy-duty industrial roads capable of supporting 100+ ton loads.",
        services: [
          "Asphalt road construction (BM, DBM, BC layers)",
          "Concrete roads (PQC as per IRC-15)",
          "Speed breaker and road marking",
          "Drainage and culvert works",
          "Road rehabilitation and resurfacing"
        ],
        expertise: "We own modern hot-mix plants and sensor pavers for precision work. Our quality control includes density tests (nuclear gauge), core cutting, and surface regularity checks as per MORTH specifications.",
        clients: "NHAI projects, Refinery township roads, Industrial parks"
      }
    },
    {
      title: "Machinery Supply",
      images: [
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Heavy equipment rental and supply with certified operators, maintaining 95% equipment availability through our fleet of 200+ well-maintained machines.",
        services: [
          "Cranes (50T to 250T capacity)",
          "Hydra cranes and boom lifts",
          "Forklifts (3T to 15T capacity)",
          "JCBs and excavators",
          "Sweeping machines and road cleaners"
        ],
        expertise: "Our fleet includes modern machines with GPS tracking and scheduled maintenance. All operators are certified and undergo regular safety training. We provide 24/7 breakdown support.",
        clients: "All major construction firms, refinery turnarounds"
      }
    },
    {
      title: "Rack & TT Loading",
      images: [
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Specialized fuel handling services with 100% safety record, operating under strict PESO guidelines for hazardous material handling.",
        services: [
          "Petrol/Diesel loading from storage tanks",
          "Tank truck (TT) loading operations",
          "Product sampling and testing",
          "Pipeline transfer operations",
          "Vapor recovery system maintenance"
        ],
        expertise: "Our team undergoes rigorous safety training including HAZOP studies. We use calibrated meters and follow 10-point safety checklists for every loading operation. Certified in API RP 1004 standards.",
        clients: "All OMC terminals, Private fuel depots"
      }
    },
    {
      title: "Store Management",
      images: [
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      ],
      details: {
        overview: "Complete warehouse solutions including inventory management, packaging, and logistics support for industrial spare parts and consumables.",
        services: [
          "Inventory management systems",
          "Spare parts packaging and preservation",
          "Barcode/RFID tracking",
          "Stock auditing and reporting",
          "Material handling equipment supply"
        ],
        expertise: "We implement 5S methodology in store management and use SAP MM module for inventory tracking. Our team is trained in proper preservation techniques for sensitive equipment.",
        clients: "Refinery stores, Industrial plant warehouses"
      }
    }
  ];

  return (
    <section id="experience" className="py-12 bg-white lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-3 lg:text-4xl">
            Our <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-gray-600 lg:text-lg">
            Comprehensive solutions across multiple engineering disciplines
          </p>
        </motion.div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {workCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                className={`w-full flex justify-between items-center p-4 ${activeCategory === index ? 'bg-orange-500 text-white' : 'bg-gray-50 text-blue-900'}`}
              >
                <span className="font-semibold text-left">{category.title}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${activeCategory === index ? 'rotate-180 text-white' : 'text-orange-500'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeCategory === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4"
                >
                  {/* Hero Image */}
                  <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-md">
                    <img
                      src={category.images[0]}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Secondary Images */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.images.slice(1).map((image, idx) => (
                      <div key={idx} className="h-32 rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={image}
                          alt={`${category.title} ${idx + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Overview</h4>
                      <p className="text-gray-700 text-sm">{category.details.overview}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Our Services</h4>
                      <ul className="space-y-1 text-sm">
                        {category.details.services.map((service, idx) => (
                          <li key={idx} className="flex">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Our Expertise</h4>
                      <p className="text-gray-700 text-sm">{category.details.expertise}</p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-900 mb-1">Major Clients</h4>
                      <p className="text-gray-700 text-sm">{category.details.clients}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-8">
          {/* Category Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-xl sticky top-28 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Service Categories</h3>
              <ul className="space-y-3">
                {workCategories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveCategory(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeCategory === index ? 'bg-orange-500 text-white' : 'bg-white text-blue-900 hover:bg-gray-100'} shadow-sm`}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Category Content */}
          <div className="lg:w-3/4">
            {workCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCategory === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className={`bg-gray-50 rounded-xl overflow-hidden shadow-md mb-8 ${activeCategory === index ? 'block' : 'hidden'}`}
              >
                {/* Image Gallery */}
                <div className="h-96 overflow-hidden relative">
                  <img
                    src={category.images[0]}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4">
                  {category.images.slice(1).map((image, idx) => (
                    <div key={idx} className="h-48 overflow-hidden rounded-lg shadow-sm">
                      <img
                        src={image}
                        alt={`${category.title} ${idx + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Detailed Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Overview</h4>
                    <p className="text-gray-700">
                      {category.details.overview}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-900 mb-3">Our Services</h4>
                      <ul className="space-y-2">
                        {category.details.services.map((service, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-blue-900 mb-3">Our Expertise</h4>
                      <p className="text-gray-700">
                        {category.details.expertise}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Major Clients</h4>
                    <p className="text-gray-700">
                      {category.details.clients}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;