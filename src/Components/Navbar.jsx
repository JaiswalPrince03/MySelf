import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8fafc] text-gray-800 px-4 md:px-8 lg:px-16 shadow-md">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 mr-2 cursor-pointer"
            onClick={handleLogoClick}
          />
          <a href="#" onClick={handleLogoClick} className="text-2xl font-bold">Prince Jaiswal</a>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <a href="#about" className="block md:inline-block px-4 py-2">About</a>
          <a href="#projects" className="block md:inline-block px-4 py-2">Projects</a>
          <a href="#contact" className="block md:inline-block px-4 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;