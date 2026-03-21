'use client';

import React, { useState } from 'react';
import { pondServices, breeders } from '@/data/koiData';

interface FlipCardProps {
  id: string;
  front: string;
  back: string;
  title: string;
  isFlipped: boolean;
  onClick: () => void;
}

const FlipCard = ({ front, back, title, isFlipped, onClick }: FlipCardProps) => (
  <div
    onClick={onClick}
    className="relative h-52 cursor-pointer transition-all duration-500 perspective group"
  >
    {/* Front */}
    <div
      className={`absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-black p-6 rounded-2xl shadow-xl shadow-orange-500/10 border border-gray-700 flex items-start backface-hidden transform transition-transform duration-500 ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
    >
      <div className="flex flex-col justify-between h-full w-full">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-300 text-sm mb-4">{front}</p>
        <div className="flex items-center justify-between">
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          <span className="text-xs text-orange-400 uppercase tracking-wider">Click to Learn More</span>
        </div>
      </div>
    </div>

    {/* Back */}
    <div
      className={`absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-600/90 p-6 rounded-2xl shadow-xl shadow-orange-500/20 border border-orange-500/30 flex items-center backface-hidden transform transition-transform duration-500 ${
        isFlipped ? '' : '-rotate-y-180'
      }`}
    >
      <div className="w-full">
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-white/90 text-sm leading-relaxed">{back}</p>
      </div>
    </div>
  </div>
);

const HomeServices = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const toggleFlip = (id: string) => {
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
            Sri Lanka&apos;s <span className="text-orange-500">Koi</span> Ecosystem
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
              <FlipCard
                key={service.id}
                id={`service-${service.id}`}
                title={service.title}
                front={service.front}
                back={service.back}
                isFlipped={flippedCards[`service-${service.id}`] || false}
                onClick={() => toggleFlip(`service-${service.id}`)}
              />
            ))}
          </div>

          {/* Breeders */}
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Certified Breeder Network</h3>
              <p className="text-gray-400 text-sm">Connect with Sri Lanka&apos;s most trusted and experienced koi breeders</p>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-3" />
            </div>
            {breeders.map((breeder) => (
              <FlipCard
                key={breeder.id}
                id={`breeder-${breeder.id}`}
                title={breeder.name}
                front={breeder.front}
                back={breeder.back}
                isFlipped={flippedCards[`breeder-${breeder.id}`] || false}
                onClick={() => toggleFlip(`breeder-${breeder.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

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
        .-rotate-y-180 {
          transform: rotateY(-180deg);
        }
      `}</style>
    </section>
  );
};

export default HomeServices;
