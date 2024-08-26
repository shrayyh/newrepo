// Navbar.js
import React from 'react';
import { Link } from 'react-scroll'; // If you want smooth scrolling

const Navbar = () => {
  return (
    <nav className="bg-[#122314d9] text-white p-4 shadow-lg w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-[#7CA97C] hover:text-[#3E6040] transition-colors duration-300">
            Resources4u
          </a>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            to="home"
            smooth={true}
            className="text-white text-lg font- uppercase hover:text-[#7CA97C] cursor-pointer transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            className="text-white text-lg font- uppercase hover:text-[#7CA97C] cursor-pointer transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="text-white text-lg font-normal uppercase hover:text-[#7CA97C] cursor-pointer transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;