// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // If you want smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#122314d9] text-white p-4 shadow-lg w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-[#7CA97C] hover:text-[#3E6040] transition-colors duration-300">
            Resources4u
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full bg-[#122314d9] lg:bg-transparent lg:space-x-8 lg:flex-row flex-col lg:items-center`}
        >
          <Link
            to="home"
            smooth={true}
            className="text-white text-lg font-semibold uppercase hover:text-[#7CA97C] cursor-pointer transition-colors duration-300 block lg:inline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            className="text-white text-lg font-semibold uppercase hover:text-[#7CA97C] cursor-pointer transition-colors duration-300 block lg:inline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="text-white text-lg font-semibold uppercase hover:text-[#7CA97C] cursor-pointer transition-colors duration-300 block lg:inline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
