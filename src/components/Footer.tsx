'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0d0d0d] to-black text-white pt-20 pb-10 px-2 sm:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-10">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-2xl font-bold text-orange-500">KoiCareLanka</h3>
            <span className="text-2xl">🇱🇰</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Sri Lanka&apos;s premier koi community connecting passionate breeders and collectors from Colombo to Kandy. Your trusted partner in the koi journey.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>🌊 Island-wide delivery</span>
            <span>•</span>
            <span>✓ Verified breeders</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/shop" className="hover:text-orange-400 transition">Shop</Link></li>
            <li><Link href="/breeders" className="hover:text-orange-400 transition">Breeders</Link></li>
            <li><Link href="/services" className="hover:text-orange-400 transition">Services</Link></li>
            <li><Link href="/community" className="hover:text-orange-400 transition">Community</Link></li>
            <li><Link href="/guides" className="hover:text-orange-400 transition">Guides</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-orange-400 transition">FAQs</Link></li>
            <li><Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-orange-400 transition">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <p className="text-gray-400 text-sm mb-3">Follow us for the latest koi updates and community events.</p>
          <div className="flex gap-3 mb-4">
            <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded-full transition-all transform hover:scale-110">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded-full transition-all transform hover:scale-110">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded-full transition-all transform hover:scale-110">
              <FaYoutube size={16} />
            </a>
            <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded-full transition-all transform hover:scale-110">
              <FaTwitter size={16} />
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaEnvelope />
            <span>info@koicarelanka.lk</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} KoiCareLanka. All rights reserved.</p>
        <p className="mt-1 text-xs">Proudly serving Sri Lanka&apos;s koi community since 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
