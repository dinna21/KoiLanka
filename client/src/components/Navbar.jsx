import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets'; // Adjust the path based on your project structure
 // <-- adjust this path based on your project

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-100 to-orange-200 shadow-md sticky top-0 z-50 backdrop-blur-lg bg-opacity-80 border-b border-orange-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={assets.koiRound}
              alt="KoiCareLanka Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl shadow-md"
            />
            <div className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight leading-tight">
              <span className="text-orange-500">Koi</span>
              <span className="text-orange-700">Care</span>
              <span className="text-orange-400">Lanka</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['shop', 'breeders', 'services', 'community', 'guides'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative px-2 py-1 text-gray-800 hover:text-orange-700 transition-all duration-200 font-medium ${
                  activeLink === item ? 'text-orange-900 font-semibold' : ''
                }`}
                onClick={() => handleLinkClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeLink === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 rounded-full animate-underline"></span>
                )}
              </a>
            ))}
            <div className="ml-6">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-400/40 flex items-center">
                <span>Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-orange-800 focus:outline-none p-2 rounded-full hover:bg-orange-300 transition-colors"
            >
              {isOpen ? <X size={28} className="text-orange-700" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-orange-100 to-orange-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-slideDown">
          {['shop', 'breeders', 'services', 'community', 'guides'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`block px-4 py-3 rounded-lg text-orange-900 hover:bg-orange-300 transition-colors font-medium ${
                activeLink === item ? 'bg-orange-200 text-ornage-800 font-semibold' : ''
              }`}
              onClick={() => handleLinkClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button className="w-full mt-4 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg">
            Login
          </button>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        .animate-underline {
          animation: underlineGrow 0.3s ease-out forwards;
        }
        @keyframes underlineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </nav>
  );
}
