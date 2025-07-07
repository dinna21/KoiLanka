import React, { useState } from 'react';
import { koiCarpList } from '../assets/assets';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [filter, setFilter] = useState({
    variety: '',
    breeder: '',
    sort: 'default',
  });

  // Extract unique values for filters
  const allVarieties = [...new Set(koiCarpList.map(k => k.variety))];
  const allBreeders = [...new Set(koiCarpList.map(k => k.breeder))];

  // Filtered list
  let filteredKoi = koiCarpList.filter(koi => {
    return (
      (filter.variety === '' || koi.variety === filter.variety) &&
      (filter.breeder === '' || koi.breeder === filter.breeder)
    );
  });

  // Sorting
  if (filter.sort === 'price-low') {
    filteredKoi.sort((a, b) => a.price - b.price);
  } else if (filter.sort === 'price-high') {
    filteredKoi.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="relative bg-black text-white min-h-screen pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Water-like background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-black/80 to-black/90 z-0" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/water-pattern.png')] opacity-20 animate-water-flow" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with animated title */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
            Premium Koi Collection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
            Discover our exquisite selection of hand-picked koi carp from the world's finest breeders
          </p>
        </div>

        {/* Premium filter bar */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border border-gray-800 shadow-2xl p-6 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <select
                  value={filter.variety}
                  onChange={e => setFilter({ ...filter, variety: e.target.value })}
                  className="bg-gray-900/80 text-white border border-gray-700 rounded-lg px-5 py-3 pr-10 appearance-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="">All Varieties</option>
                  {allVarieties.map(variety => (
                    <option key={variety} value={variety}>{variety}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  value={filter.breeder}
                  onChange={e => setFilter({ ...filter, breeder: e.target.value })}
                  className="bg-gray-900/80 text-white border border-gray-700 rounded-lg px-5 py-3 pr-10 appearance-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="">All Breeders</option>
                  {allBreeders.map(breeder => (
                    <option key={breeder} value={breeder}>{breeder}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <select
                value={filter.sort}
                onChange={e => setFilter({ ...filter, sort: e.target.value })}
                className="bg-gray-900/80 text-white border border-gray-700 rounded-lg px-5 py-3 pr-10 appearance-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              >
                <option value="default">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Koi Cards Grid */}
        {filteredKoi.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredKoi.map(koi => (
              <div
                key={koi.id}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image with water reflection effect */}
                <div className="relative overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={koi.image}
                      alt={koi.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent" />
                  
                  {/* Floating price tag */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                    Rs. {koi.price.toLocaleString()}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5 relative">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {koi.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm bg-gray-800/60 text-orange-400 px-2 py-1 rounded">
                      {koi.variety}
                    </span>
                    <Link
                      to={`/breeders/${koi.breederId}`}
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      by {koi.breeder}
                    </Link>
                  </div>

                  {/* View button with slide effect */}
                  <div className="overflow-hidden">
                    <Link
                      to={`/koi/${koi.id}`}
                      className="inline-block w-full text-center bg-gradient-to-r from-orange-500/10 via-orange-500/20 to-orange-500/10 hover:from-orange-500/20 hover:via-orange-500/30 hover:to-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg px-4 py-2 transition-all duration-300 transform hover:translate-x-1 group-hover:opacity-100"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-300 mb-2">No koi match your filters</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
              <button
                onClick={() => setFilter({ variety: '', breeder: '', sort: 'default' })}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes water-flow {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        .animate-water-flow {
          animation: water-flow 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Shop;