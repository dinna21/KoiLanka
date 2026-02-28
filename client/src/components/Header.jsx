import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { assets } from '../assets/assets';

export default function Header() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background Video (hidden if src is unavailable) */}
      {assets.koivideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src={assets.koivideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay — stronger at top & bottom for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/75 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="container mx-auto px-6 text-center md:text-left">
          {/* Eyebrow label */}
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-400 uppercase mb-4 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full">
            🐟 Sri Lanka's #1 Koi Platform
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Discover Sri Lanka's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Koi Paradise
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Connect with passionate breeders, explore rare koi varieties, and design your dream pond — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/shop"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              🛒 Shop Koi Fish
            </Link>
            <Link
              to="/breeders"
              className="bg-white/15 border border-white/40 backdrop-blur-sm text-white hover:bg-white/25 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Meet Breeders
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-16 left-0 right-0 z-30">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mx-auto max-w-4xl p-4 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <StatItem number="250+" label="Koi Varieties" />
            <StatItem number="50+" label="Verified Breeders" />
            <StatItem number="1,000+" label="Happy Customers" />
            <StatItem number="24/7" label="Pond Support" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </div>
    </div>
  );
}

// Reusable Stat Component
const StatItem = ({ number, label }) => (
  <div>
    <span className="block text-2xl md:text-3xl font-extrabold text-orange-400">{number}</span>
    <span className="text-gray-200 text-sm">{label}</span>
  </div>
);

