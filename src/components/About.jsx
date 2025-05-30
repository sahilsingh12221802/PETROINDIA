import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section id="about" className=" bg-white">
      {/* Full-Width Scrolling Text Animation */}
      <div className="w-full overflow-hidden bg-blue-900 py-4 mb-16">
        <motion.div
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="whitespace-nowrap text-2xl md:text-3xl font-bold text-orange-400 ancizar-serif"
        >
          {Array(4).fill("ENGINEER • SUPPLIERS • A-CLASS GOVT. CONTRACTORS • ").join("")}
        </motion.div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Company Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 ancizar-serif">
              About <span className="text-orange-500">PetroIndia & Engg Co.</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              PetroIndia & Engineering Company was established in 1998. We are a government-registered A-Class contractor with over 25+ years of experience in delivering high-quality construction and engineering services across multiple sectors.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in civil construction, mechanical works, electrical installations, and various other engineering services for major clients including HPCL, BPCL, IOCL, and Reliance.
            </p>
            <p className="text-lg text-gray-700">
              Our commitment to quality, safety, and timely project delivery has made us a trusted partner for government and private sector projects across the region.
            </p>
          </motion.div>

          {/* Owner Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              {/* Placeholder for owner image - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
                <span className="text-white text-xl">Owner's Photo</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg">Mr. Sanjay Singh</h3>
              <p className="text-sm">Founder & CEO</p>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '150+', label: 'Projects Completed' },
            { value: '100%', label: 'Completion Rate' },
            { value: '9', label: 'Service Categories' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg text-center"
            >
              <h3 className="text-3xl font-bold text-orange-500 mb-2">{item.value}</h3>
              <p className="text-blue-900">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;