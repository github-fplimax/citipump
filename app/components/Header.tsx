"use client";

import { List, X } from "@phosphor-icons/react";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Desktop Header */}
      <header className="bg-white w-full flex justify-between items-center fixed top-0 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center py-5 px-4 md:px-8">
          <div className="flex items-center space-x-6">
            <a href="#">
              <img src="/CITI PUMP INDONESIA.png" alt="Logo" className="h-14" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-black hover:text-red-500 transition-all"
            >
              About
            </a>
            <a
              href="#mobile"
              className="text-black hover:text-red-500 transition-all"
            >
              Mobile Concrete Pump
            </a>
            <a
              href="#stationary"
              className="text-black hover:text-red-500 transition-all"
            >
              Stationary Concrete Pump
            </a>
            <a
              href="#portfolio"
              className="text-black hover:text-red-500 transition-all"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-white px-2 py-2 bg-red-500 hover:text-black transition-all rounded-full"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:text-red-500 focus:outline-none"
            >
              {/* Hamburger menu icon */}
              <List size={32} weight="thin" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="border-b-2 border-red-500"></div>
            {/* <div className="border-b-2 border-black"></div> */}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full bg-white z-40">
          <div className="container mx-auto py-5 px-5">
            <nav className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <a
                  href="#about"
                  className="text-black hover:text-red-500 transition-all"
                >
                  About
                </a>
                <button
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-red-500 focus:outline-none"
                >
                  {/* Hamburger menu icon */}
                  <X size={32} weight="thin" />
                </button>
              </div>
              {/* <a
                href="#product"
                className="text-black hover:text-red-500 transition-all"
              >
                Product
              </a> */}
              <a
                href="#mobile"
                className="text-black hover:text-red-500 transition-all"
              >
                Mobile Concrete Pump
              </a>
              <a
                href="#stationary"
                className="text-black hover:text-red-500 transition-all"
              >
                Stationary Concrete Pump
              </a>
              <a
                href="#portfolio"
                className="text-black hover:text-red-500 transition-all"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-black hover:text-red-500 transition-all"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
