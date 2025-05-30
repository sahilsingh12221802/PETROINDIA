import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Contact Bar */}
      <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-xs md:text-sm">
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="tel:+919812065730" className="flex items-center hover:text-orange-300 transition">
            <FaPhone className="mr-1 md:mr-2 text-orange-400" />
            +91 98120 65730
          </a>
          <a href="mailto:petroindia@yahoo.co.in" className="flex items-center hover:text-orange-300 transition">
            <FaEnvelope className="mr-1 md:mr-2 text-orange-400" />
            petroindia@yahoo.co.in
          </a>
        </div>
        <div className="text-orange-300 hidden sm:block">
          Govt. Registered Contractor
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center py-3 px-4 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="PetroIndia Logo" 
            className="h-10 md:h-20 mr-2"
          />
          <div>
            <h1 className="text-blue-900 font-bold text-sm md:text-lg leading-tight">
              PETROINDIA & ENGINEERING COMPANY
            </h1>
            <p className="text-orange-500 text-xxs md:text-xs">
              ENGINEERS, SUPPLIERS & A-CLASS GOVT. CONTRACTORS
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#home" className="text-blue-900 hover:text-orange-500 font-medium transition duration-300">
            HOME
          </a>
          <a href="#about" className="text-blue-900 hover:text-orange-500 font-medium transition duration-300">
            ABOUT
          </a>
          <a href="#experience" className="text-blue-900 hover:text-orange-500 font-medium transition duration-300">
            EXPERIENCE
          </a>
          <a href="#locations" className="text-blue-900 hover:text-orange-500 font-medium transition duration-300">
            LOCATIONS
          </a>
          <a href="#contact" className="text-blue-900 hover:text-orange-500 font-medium transition duration-300">
            CONTACT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <FaBars className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Now with smooth animation */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-2 flex flex-col space-y-2">
          <a 
            href="#home" 
            className="text-blue-900 hover:text-orange-500 py-2 border-b border-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
          >
            HOME
          </a>
          <a 
            href="#about" 
            className="text-blue-900 hover:text-orange-500 py-2 border-b border-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
          >
            ABOUT
          </a>
          <a 
            href="#experience" 
            className="text-blue-900 hover:text-orange-500 py-2 border-b border-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
          >
            EXPERIENCE
          </a>
          <a 
            href="#locations" 
            className="text-blue-900 hover:text-orange-500 py-2 border-b border-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
          >
            LOCATIONS
          </a>
          <a 
            href="#contact" 
            className="text-blue-900 hover:text-orange-500 py-2 transition-colors duration-300"
            onClick={toggleMenu}
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;