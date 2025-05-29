import React from 'react';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Locations = () => {
  // Map configuration
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '12px'
  };

  const center = {
    lat: 23.5, // Centered on India
    lng: 78.5
  };

  // Client companies data
  const clients = [
    {
      id: 1,
      name: 'HPCL',
      logo: '/assets/images/hpcl.png',
      projects: [
        { location: 'Mumbai, Maharashtra', coords: { lat: 19.0760, lng: 72.8777 }, work: 'Refinery construction' },
        { location: 'Visakhapatnam, AP', coords: { lat: 17.6868, lng: 83.2185 }, work: 'Storage tank maintenance' }
      ]
    },
    {
      id: 2,
      name: 'BPCL',
      logo: '/assets/images/bpcl.jpg',
      projects: [
        { location: 'Mumbai, Maharashtra', coords: { lat: 19.0780, lng: 72.8790 }, work: 'Pipeline installation' },
        { location: 'Kochi, Kerala', coords: { lat: 9.9312, lng: 76.2673 }, work: 'Terminal construction' }
      ]
    },
    {
      id: 3,
      name: 'IOCL',
      logo: '/assets/images/iocl.png',
      projects: [
        { location: 'Panipat, Haryana', coords: { lat: 29.3909, lng: 76.9635 }, work: 'Refinery maintenance' },
        { location: 'Varanasi, UP', coords: { lat: 25.3176, lng: 82.9739 }, work: 'Depot construction' }
      ]
    },
    {
      id: 4,
      name: 'Reliance',
      logo: '/assets/images/reliance.png',
      projects: [
        { location: 'Jamnagar, Gujarat', coords: { lat: 22.4707, lng: 70.0577 }, work: 'Industrial painting' }
      ]
    },
    {
      id: 5,
      name: 'BORL',
      logo: '/assets/images/borl.png',
      projects: [
        { location: 'Bina, MP', coords: { lat: 24.1724, lng: 78.1749 }, work: 'Civil construction' }
      ]
    },
    {
      id: 6,
      name: 'Nayara',
      logo: '/assets/images/nayara.jpg',
      projects: [
        { location: 'Pune, Maharashtra', coords: { lat: 18.5204, lng: 73.8567 }, work: 'Mechanical works' }
      ]
    },
    {
      id: 7,
      name: 'Essar',
      logo: '/assets/images/essar.png',
      projects: [
        { location: 'Jamnagar, Gujarat', coords: { lat: 22.4807, lng: 70.0677 }, work: 'Steel structures' }
      ]
    },
    {
      id: 8,
      name: 'L&T',
      logo: '/assets/images/lnt.png',
      projects: [
        { location: 'Mumbai, Maharashtra', coords: { lat: 19.0750, lng: 72.8770 }, work: 'Electrical installations' }
      ]
    }
  ];

  // Flatten all projects for map markers
  const allProjects = clients.flatMap(client => 
    client.projects.map(project => ({
      ...project,
      clientName: client.name,
      clientLogo: client.logo
    }))
  );

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            Our <span className="text-orange-500">Clients & Locations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Serving India's leading companies with quality engineering services
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map(client => (
              <motion.div
                key={client.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-32 border border-gray-200"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-20 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-xl overflow-hidden shadow-lg border border-gray-200"
        >
          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={5}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                styles: [
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                  }
                ]
              }}
            >
              {allProjects.map((project, index) => (
                <Marker
                  key={index}
                  position={project.coords}
                  label={project.clientName.charAt(0)}
                  title={`${project.clientName} - ${project.location}`}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </motion.div>

        {/* Projects by Client */}
        <div className="space-y-12">
          {clients.map(client => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-6 border-b border-gray-200 flex items-center">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-12 mr-4 object-contain"
                />
                <h3 className="text-xl font-bold text-blue-900">{client.name}</h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {client.projects.map((project, pIndex) => (
                  <div key={pIndex} className="p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        {pIndex + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{project.location}</h4>
                        <p className="text-gray-600 mt-1">{project.work}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;