'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { koiVarieties } from '@/data/koiData';

interface KoiCardProps {
  koi: typeof koiVarieties[0];
  index: number;
  isActive: boolean;
  onHover: (index: number) => void;
  onLeave: () => void;
}

const KoiCard = ({ koi, index, isActive, onHover, onLeave }: KoiCardProps) => {
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
          <div className="relative w-full h-[360px]">
            <Image
              src={koi.image}
              alt={koi.name}
              fill
              className={`object-cover transition-all duration-1000 ${
                isActive ? 'scale-110 brightness-110' : 'scale-100'
              }`}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-16 relative z-10">
    <p className="text-orange-400 text-sm uppercase tracking-widest mb-3">Discover Excellence</p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
      {title}
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6" />
  </div>
);

const KoiVarieties = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-[#0d0d0d] to-black overflow-hidden">
      <BackgroundElements />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Premium Koi Varieties"
          subtitle="Explore Sri Lanka's finest selection of purebred Japanese koi, each variety showcasing unique beauty and character"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default KoiVarieties;
