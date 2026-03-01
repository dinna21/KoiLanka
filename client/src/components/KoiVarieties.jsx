import React, { useState } from 'react';
import { koiVarieties } from '../assets/assets';

const KoiCard = ({ koi, index, isActive, onHover, onLeave }) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-700 ${
        isActive ? 'scale-105 z-10' : 'scale-100'
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
        <div className="relative h-90 overflow-hidden">
          <img
            src={koi.image}
            alt={koi.name}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isActive ? 'scale-110 brightness-110' : 'scale-100'
            }`}
            loading="lazy"
          />
          <div className="relative inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className=" inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/30">
            <span className="text-white font-bold text-sm tracking-wide">{koi.name}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-4 relative">
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mb-4 transition-all duration-500 group-hover:w-20" />
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 mb-3">
            {koi.category}
          </button>
          <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            {koi.description}
          </p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/50 transition-all duration-500" />
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
  <div className="text-center mb-16">
    <p className="text-orange-400 text-sm uppercase tracking-widest mb-2">Bred with Excellence</p>
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 mx-auto" />
  </div>
);

const CTA = () => (
  <div className="text-center mt-16">
    <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Koi Journey?</h3>
      <p className="text-gray-300 mb-6 max-w-xl mx-auto">Connect with Sri Lanka's finest breeders and find koi that match your passion and pond</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50">
          Browse All Varieties
        </button>
        <button className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
          Meet Breeders
        </button>
      </div>
    </div>
  </div>
);

const KoiVarieties = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-12 overflow-hidden">
      <BackgroundElements />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Discover Premium Koi Varieties"
          subtitle="Authentic Japanese bloodlines, expertly bred and cared for in Sri Lanka's perfect climate"
        />

        {/* 📌 UPDATED: more flexible and wider-spread layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {koiVarieties.map((koi, index) => (
            <KoiCard
              key={koi.id}
              koi={koi}
              index={index}
              isActive={activeCard === index}
              onHover={setActiveCard}
              onLeave={() => setActiveCard(null)}
            />
          ))}
        </div>

        <CTA />
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
    </section>
  );
};

export default KoiVarieties;
