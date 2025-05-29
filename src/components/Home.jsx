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
    <section id="home" className="relative">
      {/* Carousel Section */}
      <div className="relative h-screen">
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
            <div key={image.id} className="h-screen relative">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-50 flex items-end pb-16 pl-8 md:pl-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                    {image.title}
                  </h2>
                  <p className="text-lg md:text-xl text-orange-300 mb-6">
                    {image.description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
                    View Our Work
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Stats Section */}
      <div className=" py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-2">25+</h3>
              <p className="text-lg text-black">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-2">150+</h3>
              <p className="text-lg text-black">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-2">50+</h3>
              <p className="text-lg text-black">Satisfied Clients</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;