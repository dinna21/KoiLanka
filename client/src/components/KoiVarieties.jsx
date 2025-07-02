// components/KoiVarieties.jsx
import React from 'react';
import { koiVarieties } from '../assets/assets';


export default function KoiVarieties() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-indigo-50 py-24 px-6 md:px-12">
      {/* Water surface decorative element */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-blue-400/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Title with decorative elements */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-70"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
            Discover Koi Varieties
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Explore the vibrant world of Sri Lanka's finest koi breeds
          </p>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-70"></div>
        </div>

        {/* Koi Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {koiVarieties.map((koi) => (
            <div
              key={koi.id}
              className="bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Image with water reflection effect */}
              <div className="relative overflow-hidden">
                <img
                  src={koi.image}
                  alt={koi.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Content with koi-themed colors */}
              <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-blue-900">{koi.name}</h3>
                  <span className="ml-auto px-3 py-1 rounded-full text-xs font-semibold" style={{
                    backgroundColor: koi.colorType === 'red' ? '#FECACA' : 
                                    koi.colorType === 'black' ? '#E5E7EB' : 
                                    koi.colorType === 'white' ? '#F3F4F6' : 
                                    koi.colorType === 'yellow' ? '#FEF3C7' : '#DBEAFE',
                    color: koi.colorType === 'red' ? '#DC2626' : 
                           koi.colorType === 'black' ? '#111827' : 
                           koi.colorType === 'white' ? '#374151' : 
                           koi.colorType === 'yellow' ? '#92400E' : '#1E40AF'
                  }}>
                    {koi.category}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{koi.description}</p>
                
                {/* Decorative water ripple */}
                <div className="flex space-x-1 mt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="h-1 rounded-full bg-blue-200 animate-pulse"
                      style={{
                        width: `${Math.random() * 10 + 10}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative bubbles */}
      <div className="absolute bottom-10 left-1/4 w-4 h-4 rounded-full bg-blue-300/30 animate-bubble"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full bg-orange-300/30 animate-bubble" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
}