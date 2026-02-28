import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#0d0d0d] to-[#111] text-white pt-16 pb-8 px-4 sm:px-12 mt-0">
      {/* Newsletter Banner */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-orange-600/20 to-red-700/20 border border-orange-500/30 rounded-2xl px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              🐠 Stay in the <span className="text-orange-400">Koi Loop</span>
            </h3>
            <p className="text-gray-400 text-sm">New arrivals, breeder tips, and pond guides — straight to your inbox.</p>
          </div>
          {subscribed ? (
            <p className="text-green-400 font-semibold text-sm whitespace-nowrap">✓ You're subscribed!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 md:w-56 bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-3">KoiCareLanka</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover, connect, and care with Sri Lanka's trusted koi community. From rare koi to expert advice — it starts here.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Shop', 'Breeders', 'Services', 'Community', 'Guides'].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`} className="hover:text-orange-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-base font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Contact Us', 'FAQs', 'Privacy Policy', 'Terms of Use'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-base font-semibold text-white mb-4">Stay Connected</h4>
          <div className="flex space-x-3 mb-4">
            {[
              { icon: FaFacebookF, label: 'Facebook' },
              { icon: FaInstagram, label: 'Instagram' },
              { icon: FaTwitter, label: 'Twitter' },
              { icon: FaYoutube, label: 'YouTube' },
              { icon: FaEnvelope, href: 'mailto:hello@koicarelanka.com', label: 'Email' },
            ].map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href || '#'}
                  aria-label={social.label}
                  className="p-2 bg-white/10 hover:bg-orange-500 rounded-full transition-colors duration-200"
                >
                  <SocialIcon className="text-white w-4 h-4" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-gray-500">hello@koicarelanka.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-6 text-gray-600 text-xs">
        © {new Date().getFullYear()} KoiCareLanka. All rights reserved. Made with ❤️ for koi lovers.
      </div>
    </footer>
  );
};

export default Footer;
