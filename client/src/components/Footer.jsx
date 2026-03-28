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
    <footer className="bg-black pt-16 px-4">
      <div className="bg-[#131314] w-full max-w-[1350px] mx-auto text-white pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-orange-500">KoiCareLanka</h3>

            <p className="text-sm leading-relaxed text-neutral-300 max-w-sm">
              Sri Lanka's premier koi community connecting passionate breeders and collectors from Colombo to Kandy. Your trusted partner in the koi journey.
            </p>

            <div className="flex gap-5">
              <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                <FaEnvelope size={18} />
              </a>
            </div>

            <p className="text-sm text-gray-400">hello@koicarelanka.com</p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-start">
            <div>
              <h4 className="font-medium text-sm text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Breeders</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Guides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm text-white mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Use</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium text-sm text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Vision</a></li>
                <li className="flex items-center gap-2">
                  <a href="#" className="hover:text-orange-400 transition-colors">Careers</a>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-orange-950 border border-orange-400/40 text-orange-300">
                    HIRING
                  </span>
                </li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Island-wide Delivery</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Verified Breeders</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} KoiCareLanka. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400">
            Serving the island's koi community with pride.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-orange-500/20 rounded-full blur-[170px] pointer-events-none" />
          <h3 className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_rgba(249,115,22,0.25)] mt-6">
            KoiCareLanka
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
