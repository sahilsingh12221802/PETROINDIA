import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <img 
                src="/logo.jpeg" 
                alt="PetroIndia Logo" 
                className="h-12 mr-3"
              />
              <h3 className="text-xl font-bold">PETROINDIA</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Engineers, Suppliers & A-Class Govt. Contractors
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#experience" className="text-blue-200 hover:text-orange-400 transition-colors">Our Services</a></li>
              <li><a href="#locations" className="text-blue-200 hover:text-orange-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Civil Construction</a></li>
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Mechanical Works</a></li>
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Industrial Painting</a></li>
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Electrical Works</a></li>
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Road Construction</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-blue-200 space-y-3">
              <p>H.No C-1163, Ansal Sushant City Panipat</p>
              <p>Haryana - 132103, India</p>
              <p>
                <a href="tel:+919812065730" className="hover:text-orange-400 transition-colors">
                  +91 98120 65730
                </a>
              </p>
              <p>
                <a href="mailto:petroindia@yahoo.co.in" className="hover:text-orange-400 transition-colors">
                  petroindia@yahoo.co.in
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-blue-800 text-center text-blue-300"
        >
          <p>&copy; {new Date().getFullYear()} PetroIndia & Engineering Company. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-orange-400 transition-colors ml-2">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;