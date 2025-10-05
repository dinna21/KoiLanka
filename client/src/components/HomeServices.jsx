import React, { useState } from 'react';
import { pondServices } from '../assets/assets';
import { breeders } from '../assets/assets';

const HomeServices = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-19 px-4 sm:px-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-2">Complete Koi Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sri Lanka's <span className="text-orange-500">Koi</span> Ecosystem
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">From award-winning breeders to professional pond services, everything you need for a thriving koi collection</p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Pond Services */}
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Premium Pond Services</h3>
              <p className="text-gray-400 text-sm">Professional design, maintenance & water quality management</p>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-3" />
            </div>
            {pondServices.map((service) => (
              <div
                key={service.id}
                onClick={() => toggleFlip(`service-${service.id}`)}
                className={`relative h-52 cursor-pointer transition-all duration-500 perspective group`}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-black p-6 rounded-2xl shadow-xl shadow-orange-500/10 border border-gray-700 flex flex-col backface-hidden transform transition-transform duration-500 ${
                    flippedCards[`service-${service.id}`]
                      ? 'opacity-0 rotate-y-180'
                      : 'opacity-100'
                  }`}
                >
                  <img src={service.icon} alt="" className="w-10 h-10 mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm">{service.front}</p>
                  <div className="mt-auto text-orange-400 text-sm underline">
                    Click to learn more →
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-orange-900/10 to-red-900/10 p-6 rounded-2xl shadow-xl shadow-orange-500/10 border border-orange-500/20 flex flex-col backface-hidden transform transition-transform duration-500 ${
                    flippedCards[`service-${service.id}`]
                      ? 'opacity-100 rotate-y-0'
                      : 'opacity-0 rotate-y-180'
                  }`}
                >
                  <h4 className="text-lg font-semibold mb-2 text-orange-400">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.back}</p>
                  <button className="mt-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-transform hover:scale-105 w-max">
                    Request Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Breeders */}
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Certified Breeder Network</h3>
              <p className="text-gray-400 text-sm">Connect with Sri Lanka's most trusted and experienced koi breeders</p>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-3" />
            </div>
            {breeders.map((breeder) => (
              <div
                key={breeder.id}
                onClick={() => toggleFlip(`breeder-${breeder.id}`)}
                className={`relative h-52 cursor-pointer transition-all duration-500 perspective group`}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-black p-6 rounded-2xl shadow-xl shadow-orange-500/10 border border-gray-700 flex items-start backface-hidden transform transition-transform duration-500 ${
                    flippedCards[`breeder-${breeder.id}`]
                      ? 'opacity-0 rotate-y-180'
                      : 'opacity-100'
                  }`}
                >
                  <img
                    src={breeder.image}
                    alt={breeder.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-orange-500/40 group-hover:ring-4 transition-all duration-300"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{breeder.name}</h4>
                    <p className="text-sm text-orange-400 mb-1">{breeder.specialty}</p>
                    <p className="text-sm text-gray-300 mb-2">{breeder.front}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="text-yellow-500">★ {breeder.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{breeder.koiBred} koi bred</span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-orange-900/10 to-red-900/10 p-6 rounded-2xl shadow-xl shadow-orange-500/10 border border-orange-500/20 flex flex-col backface-hidden transform transition-transform duration-500 ${
                    flippedCards[`breeder-${breeder.id}`]
                      ? 'opacity-100 rotate-y-0'
                      : 'opacity-0 rotate-y-180'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">{breeder.name}</h4>
                  <p className="text-sm text-gray-300 mb-3">{breeder.back}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="bg-orange-500/10 text-orange-400 py-1 px-3 rounded-full text-xs">
                      {breeder.specialty}
                    </span>
                    <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-1 px-4 rounded-lg text-sm transition-transform hover:scale-105">
                      View Stock
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flip Card Animations */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </section>
  );
};

export default HomeServices;
