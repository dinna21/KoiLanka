'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { koiCarpList } from '@/data/koiData';

export default function ShopPage() {
  const [filters, setFilters] = useState({ variety: '', breeder: '', sortBy: '' });

  const filteredKoi = koiCarpList.filter((koi) => {
    return (
      (!filters.variety || koi.variety === filters.variety) &&
      (!filters.breeder || koi.breeder === filters.breeder)
    );
  });

  const sortedKoi = [...filteredKoi].sort((a, b) => {
    if (filters.sortBy === 'priceLowHigh') return a.price - b.price;
    if (filters.sortBy === 'priceHighLow') return b.price - a.price;
    if (filters.sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="bg-white text-gray-800 mt-0">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-br from-orange-600 via-red-500 to-orange-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
            Sri Lanka&apos;s Finest Koi Collection
          </h1>
          <p className="mb-6 text-lg text-white/90 max-w-2xl mx-auto">
            Discover exceptional quality koi from verified Sri Lankan breeders. Champion bloodlines, perfect health, delivered island-wide.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Browse Collection
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300">
              Contact Breeders
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={filters.variety}
            onChange={(e) => setFilters({ ...filters, variety: e.target.value })}
          >
            <option value="">All Varieties</option>
            <option value="Kohaku">Kohaku</option>
            <option value="Sanke">Sanke</option>
            <option value="Showa">Showa</option>
            <option value="Ogon">Ogon</option>
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={filters.breeder}
            onChange={(e) => setFilters({ ...filters, breeder: e.target.value })}
          >
            <option value="">All Breeders</option>
            <option value="Shinoda Koi Farm">Shinoda Koi Farm</option>
            <option value="Dainichi Koi Farm">Dainichi Koi Farm</option>
            <option value="Marudo Koi Farm">Marudo Koi Farm</option>
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={filters.sortBy}
            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
          >
            <option value="">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Koi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedKoi.map((koi) => (
            <div
              key={koi.id}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={koi.image}
                  alt={koi.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{koi.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{koi.variety}</p>
                <p className="text-sm text-gray-500 mb-4">Breeder: {koi.breeder}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">
                    Rs. {koi.price.toLocaleString()}
                  </span>
                  <Link href={`/koi/${koi.id}`}>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
