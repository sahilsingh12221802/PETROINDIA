import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const carouselImages = [
    {
      id: 1,
      src: 'https://media.istockphoto.com/id/1334138265/photo/surveyor-equipment-surveyor-u2019s-telescope-at-construction-site-or-surveying-for-making.jpg?s=612x612&w=0&k=20&c=jNHW2l4oYoYhHfN7DWRlOUterkDEEqVF60EV-1zD7Jg=',
      alt: 'Construction Site',
      title: 'Civil Construction Experts',
      description: 'Delivering quality construction projects since 1995'
    },
    {
      id: 2,
      src: 'https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=',
      alt: 'Mechanical Work',
      title: 'Mechanical Specialists',
      description: 'Precision engineering for industrial needs'
    },
    {
      id: 3,
      src: 'https://media.istockphoto.com/id/1469656864/photo/electrician-engineer-uses-a-multimeter-to-test-the-electrical-installation-and-power-line.jpg?s=612x612&w=0&k=20&c=h70UOpNbJYT5G2oGT-KUeIE3yXwEgsCpr25yR1rnGtU=',
      alt: 'Electrical Work',
      title: 'Electrical Solutions',
      description: 'Safe and reliable electrical installations'
    }
  ];

  return (
    <section id="home" className="relative overflow-x-hidden">
      {/* Carousel Section - Modified for mobile */}
      <div className="relative h-[70vh] md:h-screen"> {/* Reduced height on mobile */}
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={800}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
          className="h-full"
        >
          {carouselImages.map((image) => (
            <div key={image.id} className="h-[70vh] md:h-screen relative"> {/* Match parent height */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }} // Ensures consistent image focus
              />
              <div className="absolute inset-0  bg-opacity-40 flex items-end pb-8 md:pb-16 px-4 md:pl-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left max-w-md md:max-w-2xl"
                >
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                    {image.title}
                  </h2>
                  <p className="text-base md:text-lg text-orange-300 mb-4 md:mb-6">
                    {image.description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium md:font-bold py-2 px-4 md:py-2 md:px-6 rounded-full transition duration-300 transform hover:scale-105 text-sm md:text-base">
                    View Our Work
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Stats Section - Adjusted for mobile */}
      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">25+</h3>
              <p className="text-base md:text-lg text-gray-700">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">150+</h3>
              <p className="text-base md:text-lg text-gray-700">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100%</h3>
              <p className="text-base md:text-lg text-gray-700">Completion Rate</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;