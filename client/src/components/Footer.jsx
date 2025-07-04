import React from 'react';
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
          <h3 className="text-2xl font-bold text-orange-500 mb-3">KoiCareLanka</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover, connect, and care with Sri Lanka’s trusted koi community. From rare koi to expert advice — it starts here.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition">Shop</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Breeders</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Community</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Guides</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Terms of Use</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition">
              <FaYoutube className="text-white" />
            </a>
            <a href="mailto:hello@koicarelanka.com" className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition">
              <FaEnvelope className="text-white" />
            </a>
          </div>
          <p className="text-sm text-gray-400">hello@koicarelanka.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-6 text-gray-500 text-xs">
        © {new Date().getFullYear()} KoiCareLanka. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
