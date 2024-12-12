import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerRight from '../assets/icons/HamburgerRight.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Untuk mode hamburger

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 py-2 font-inter`}
    >
      {/* Logo */}
      <div className="text-lg font-bold text-black dark:text-white">
        <Link to="/">FurniShop</Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link to="/" className="text-black dark:text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black dark:text-white hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/features" className="text-black dark:text-white hover:underline">
            Features
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black dark:text-white hover:underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon (for mobile view) */}
      <button className="md:hidden p-2 rounded focus:outline-none" onClick={toggleMenu}>
        <img src={HamburgerRight} alt="Hamburger Menu" className="w-6 h-6" />
      </button>

      {/* Mobile Menu (Hamburger Open) */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-hamburgeropen flex flex-col 
                items-center justify-center space-y-6 z-50 transition-all duration-300`}
        >
          {/* Close Button */}
          <button className="absolute bottom-8 text-2xl font-bold text-white flex justify-center" onClick={toggleMenu}>
            &times;
          </button>
          <p className="text-lg font-bold text-white">FurniShop</p>
          <Link to="/" className="text-white text-lg hover:underline" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="text-white text-lg hover:underline" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/features" className="text-white text-lg hover:underline" onClick={toggleMenu}>
            Features
          </Link>
          <Link to="/features" className="text-white text-lg hover:underline" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
