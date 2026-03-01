import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

export default function Header() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={assets.koivideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient or dark tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="container mx-auto px-6 text-center md:text-left">
          {/* Logo or mini koi image */}
          {/* <img 
            // src={assets.koiRound} 
            alt="KoiCareLanka" 
            className="w-16 h-16 mx-auto md:mx-0 mb-4 animate-fadeIn" 
          /> */}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeInUp drop-shadow-2xl">
            Sri Lanka's Premier <span className="text-orange-400">Koi Community</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto md:mx-0 animate-fadeInUp delay-200 leading-relaxed">
            Join the island's most trusted network of breeders, collectors, and koi enthusiasts. From Colombo to Kandy, discover premium Japanese koi bred in Sri Lankan waters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp delay-300">
            <Link 
              to="/shop" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop Koi Fish
            </Link>
            <Link 
              to="/breeders" 
              className="bg-white/20 border-2 border-white text-white hover:bg-white/30 px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              Meet Breeders
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-30">
        <div className="bg-white/70 backdrop-blur-md rounded-lg mx-auto max-w-4xl p-4 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <StatItem number="250+" label="Koi Varieties" />
            <StatItem number="50+" label="Sri Lankan Breeders" />
            <StatItem number="1000+" label="Community Members" />
            <StatItem number="24/7" label="Expert Support" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Component
const StatItem = ({ number, label }) => (
  <div>
    <span className="block text-2xl md:text-3xl font-bold text-orange-500">{number}</span>
    <span className="text-gray-700">{label}</span>
  </div>
);

