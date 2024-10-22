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
        <div className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute md:static bg-[#f8fafc] md:bg-transparent left-0 right-0 top-full md:top-auto`}>
          <div className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <a href="#home" className="py-2 font-semibold hover:text-gray-500">Home</a>
            <a href="#about" className="py-2 font-semibold hover:text-gray-500">About</a>
            <a href="#techstack" className="py-2 font-semibold hover:text-gray-500">TechStack</a>
            <a href="#projects" className="py-2 font-semibold hover:text-gray-500">Projects</a>
            <a href="#contact" className="py-2 font-semibold hover:text-gray-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;