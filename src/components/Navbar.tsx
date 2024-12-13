import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Inline SVG Component
const HamburgerRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-gray-800" // Warna dikontrol di sini
  >
    <path
      d="M21 12H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 6H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 18H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 py-2 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/50'
      }`}
    >
      {/* Logo */}
      <div className="text-lg font-bold text-gray-800">
        <Link to="/">FurniShop</Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link to="/" className="text-gray-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/features" className="text-gray-800 hover:underline">
            Features
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-800 hover:underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon (for mobile view) */}
      <button className="md:hidden p-2 rounded focus:outline-none" onClick={toggleMenu}>
        <HamburgerRight />
      </button>

      {/* Mobile Menu (Hamburger Open) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col 
                     items-center justify-center space-y-6 z-50 transition-all duration-300"
        >
          {/* Close Button */}
          <button
            className="absolute bottom-8 text-2xl font-bold text-gray-800 flex justify-center"
            onClick={toggleMenu}
          >
            &times;
          </button>
          {/* Menu Items */}
          <p className="text-lg font-bold text-gray-800">FurniShop</p>
          <Link to="/" className="text-gray-800 text-lg font-bold hover:underline" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="text-gray-800 text-lg hover:underline" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/features" className="text-gray-800 text-lg hover:underline" onClick={toggleMenu}>
            Features
          </Link>
          <Link to="/contact" className="text-gray-800 text-lg hover:underline" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
