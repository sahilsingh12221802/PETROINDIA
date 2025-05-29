import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
      <div className="w-full px-4">
        {/* Top Contact Bar - Now visible on mobile too */}
        <div className="flex justify-between items-center py-3 md:py-4 border-b border-blue-800">
          <div className="flex items-center space-x-2 md:space-x-4">
            <a href="tel:+919812065730" className="flex items-center text-white text-xs md:text-sm">
              <FaPhone className="mr-1 md:mr-2 text-orange-500" />
              +91 98120 65730
            </a>
            <a href="mailto:petroindia@yahoo.co.in" className="flex items-center text-white text-xs md:text-sm">
              <FaEnvelope className="mr-1 md:mr-2 text-orange-500" />
              petroindia@yahoo.co.in
            </a>
          </div>
          <div className="text-white text-xs md:text-sm hidden sm:block">
            Govt. Registered Contractor
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo - Adjusted for mobile */}
          <div className="flex items-center">
            <img 
              src="/logo.jpeg" 
              alt="PetroIndia Logo" 
              className="h-10 md:h-12 mr-2"
            />
            <div>
              <h1 className="text-white font-bold text-sm md:text-xl leading-tight ancizar-serif">
                PETROINDIA & ENGINEERING COMPANY
              </h1>
              <p className="text-orange-400 text-xxs md:text-xs">
                ENGINEERS, SUPPLIERS & A-CLASS GOVT. CONTRACTORS
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a 
              href="#home" 
              className="text-white hover:text-orange-400 font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-orange-400 font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#experience" 
              className="text-white hover:text-orange-400 font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              EXPERIENCE
            </a>
            <a 
              href="#locations" 
              className="text-white hover:text-orange-400 font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              LOCATIONS
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-orange-400 font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-blue-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 flex flex-col space-y-2">
          <a 
            href="#home" 
            className="text-white hover:text-orange-400 py-2 border-b border-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-orange-400 py-2 border-b border-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
          <a 
            href="#experience" 
            className="text-white hover:text-orange-400 py-2 border-b border-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            EXPERIENCE
          </a>
          <a 
            href="#locations" 
            className="text-white hover:text-orange-400 py-2 border-b border-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            LOCATIONS
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-orange-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;