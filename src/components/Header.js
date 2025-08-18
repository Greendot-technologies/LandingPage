

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons for mobile menu

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-gray-100/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        style={{ height: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <span className="flex items-center text-2xl font-bold font-chivo">
                <span className="text-green-600">Farms</span>
                <span className="text-black">easy</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-chivo">
              <a href="#HeroSection" className="text-black hover:text-green-500 font-medium transition">
                Home
              </a>
              <a href="#NewOpportunities" className="text-black hover:text-green-500 font-medium transition">
                Products
              </a>
              <a href="#Testimonials" className="text-black hover:text-green-500 font-medium transition">
                Teams
              </a>
              {/* <a href="#InvestmentOptions" className="text-black hover:text-green-500 font-medium transition">
                Invest
              </a>
              <a href="#CTASection" className="text-black hover:text-green-500 font-medium transition">
                Contact
              </a> */}
            </nav>

            {/* Download Button (Desktop) */}
            <div className="hidden md:block">
              <a
                href="https://farmseasy-app.s3.ap-south-1.amazonaws.com/app-release.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition animate-pulse-custom font-chivo"
              >
                Download
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-black focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100/95 shadow-md absolute top-[80px] left-0 w-full z-40">
            <nav className="flex flex-col space-y-4 p-5 font-chivo">
              <a
                href="#HeroSection"
                className="text-black hover:text-green-500 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#NewOpportunities"
                className="text-black hover:text-green-500 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Opportunities
              </a>
              <a
                href="#Testimonials"
                className="text-black hover:text-green-500 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Testimonial
              </a>
              <a
                href="#InvestmentOptions"
                className="text-black hover:text-green-500 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Invest
              </a>
              <a
                href="#CTASection"
                className="text-black hover:text-green-500 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

              {/* Download Button for Mobile */}
              <a
                href="https://farmseasy-app.s3.ap-south-1.amazonaws.com/app-release.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition animate-pulse-custom text-center"
              >
                Download
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes pulseCustom {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.8);
          }
        }
        .animate-pulse-custom {
          animation: pulseCustom 1.8s infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
