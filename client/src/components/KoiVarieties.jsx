import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { koiVarieties } from '../assets/assets';

const KoiCard = ({ koi, index, isActive, onHover, onLeave }) => {
  return (
    <div
      className={`group bg-[#111111] border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(249,115,22,0.15)] hover:border-orange-500/40 flex flex-col ${
        isActive ? 'scale-105 z-10' : 'scale-100'
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="w-full overflow-hidden">
        <img
          src={koi.image}
          alt={koi.name}
          loading="lazy"
          className="w-full h-44 sm:h-52 object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-4 transition-all duration-500 group-hover:w-20" />

        <span className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 mb-3">
          {koi.category}
        </span>

        <h3 className="text-lg font-bold text-white mb-2 leading-snug">
          {koi.name}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5 line-clamp-2 sm:line-clamp-3">
          {koi.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <Link
            to={`/shop?variety=${encodeURIComponent(koi.name)}`}
            className="inline-flex items-center gap-2 text-orange-300 text-xs font-semibold uppercase tracking-wider hover:text-orange-200 transition-colors duration-200 group"
          >
            View in Shop
            <svg
              width="18"
              height="12"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M4.583 7.5h12.834M11 3.125 17.417 7.5 11 11.875"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute top-1/2 left-1/12 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
    <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-orange-400/40 rounded-full animate-float" style={{ animationDuration: '6s' }} />
    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-red-400/40 rounded-full animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
    <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-yellow-400/40 rounded-full animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }} />
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-8 md:mb-10">
    <p className="text-orange-400 text-sm uppercase tracking-widest mb-2">Bred with Excellence</p>
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 mx-auto" />
  </div>
);

const CTA = () => (
  <div className="text-center mt-6 md:mt-8">
    <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 md:p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Koi Journey?</h3>
      <p className="text-gray-300 mb-6 max-w-xl mx-auto">Connect with Sri Lanka's finest breeders and find koi that match your passion and pond</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/shop" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50">
          Browse All Varieties
        </Link>
        <Link to="/breeders" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
          Meet Breeders
        </Link>
      </div>
    </div>
  </div>
);

const KoiVarieties = () => {
  const [activeCard, setActiveCard] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <Motion.section
      className="relative bg-black text-white py-12 md:py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <BackgroundElements />
      <div className="max-w-7xl mx-auto relative z-10">
        <Motion.div variants={itemVariants}>
          <SectionTitle
            title="Discover Premium Koi Varieties"
            subtitle="Authentic Japanese bloodlines, expertly bred and cared for in Sri Lanka's perfect climate"
          />
        </Motion.div>

        {/* 📌 UPDATED: more flexible and wider-spread layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {koiVarieties.slice(0, 4).map((koi, index) => (
            <Motion.div key={koi.id} variants={itemVariants}>
              <KoiCard
                koi={koi}
                index={index}
                isActive={activeCard === index}
                onHover={setActiveCard}
                onLeave={() => setActiveCard(null)}
              />
            </Motion.div>
          ))}
        </div>

        <Motion.div variants={itemVariants}>
          <CTA />
        </Motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </Motion.section>
  );
};

export default KoiVarieties;
