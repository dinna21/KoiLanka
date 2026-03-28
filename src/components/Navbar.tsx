'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pathname = usePathname();
  const isShopPage = pathname === '/shop';

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl px-4 sm:px-6 lg:px-8 border-b shadow-sm rounded-xl mt-4
        ${isShopPage
          ? 'bg-black/90 backdrop-blur-md border-gray-200 text-orange-500'
          : 'bg-white/10 backdrop-blur-md border-white/30 text-white'}
      `}
    >
      <div className="flex justify-between h-20 items-center">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-xl shadow-md overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg"
              alt="KoiCareLanka Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            <span className="text-orange-500">Koi</span>
            <span className="text-orange-700">Care</span>
            <span className="text-orange-400">Lanka</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {['shop', 'breeders', 'services', 'community', 'guides'].map((item) => (
            <Link
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
            </Link>
          ))}
          <Link href="/auth/signin">
            <button className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-md">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2 animate-slideDown">
          {['shop', 'breeders', 'services', 'community', 'guides'].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="block text-white hover:text-orange-400 transition-colors duration-300 py-2 px-4 rounded-md hover:bg-white/10"
              onClick={() => handleLinkClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <Link href="/auth/signin" className="block">
            <button className="w-full mt-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-md">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
