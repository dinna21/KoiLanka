import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const location = useLocation();
  const isShopPage = location.pathname === '/shop';


  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
      <nav
        className={`fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl px-4 sm:px-6 lg:px-8 border-b shadow-sm rounded-xl mt-4
          $${isShopPage
            ? 'bg-black/90 backdrop-blur-md border-gray-200 text-orange-500'
            : 'bg-white/10 backdrop-blur-md border-white/30 text-white'}
        `}
      >
      <div className="flex justify-between h-20 items-center">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img
            src={assets.koiRound}
            alt="KoiCareLanka Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl shadow-md"
          />
          <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            <span className="text-orange-500">Koi</span>
            <span className="text-orange-700">Care</span>
            <span className="text-orange-400">Lanka</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {['shop', 'breeders', 'services', 'community', 'guides'].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className={`relative text-sm md:text-base px-2 py-1 hover:text-orange-400 transition-colors duration-300 ${
                activeLink === item ? 'font-semibold text-orange-300' : 'text-white'
              }`}
              onClick={() => handleLinkClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeLink === item && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full animate-underline"></span>
              )}
            </a>
          ))}
          <button className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-md">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-full hover:bg-orange-500/20 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-orange-900 via-orange-700 to-orange-600 px-4 pt-3 pb-5 space-y-3 shadow-lg animate-slideDown rounded-xl mt-2 text-white">
          {['shop', 'breeders', 'services', 'community', 'guides'].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className={`block px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300 ${
                activeLink === item ? 'bg-orange-600 font-semibold' : ''
              }`}
              onClick={() => handleLinkClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button className="w-full mt-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-md">
            Login
          </button>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes underlineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-underline {
          animation: underlineGrow 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
