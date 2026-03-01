import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const koiData = [
  {
    name: 'Champion Showa',
    price: 4200,
    breeder: 'Sakai Fish Farm',
    breed: 'Showa',
    size: '60cm',
    age: '3 years',
    image: 'https://ik.imagekit.io/your_path/showa1.jpg',
    description: 'Award-winning koi from champion bloodline.'
  },
  {
    name: 'Gin Sanke',
    price: 3800,
    breeder: 'Omosako Koi Farm',
    breed: 'Sanke',
    size: '55cm',
    age: '2 years',
    image: 'https://ik.imagekit.io/your_path/sanke1.jpg',
    description: 'Striking silver pattern with great balance.'
  },
  {
    name: 'Golden Ogon',
    price: 1800,
    breeder: 'Koda Farm',
    breed: 'Ogon',
    size: '45cm',
    age: '1.5 years',
    image: 'https://ik.imagekit.io/your_path/ogon.jpg',
    description: 'Brilliant golden metallic scales.'
  },
  {
    name: 'Grand Champion Kohaku',
    price: 8500,
    breeder: 'Dainichi Koi Farm',
    breed: 'Kohaku',
    size: '70cm',
    age: '4 years',
    image: 'https://ik.imagekit.io/your_path/grand-kohaku.jpg',
    description: 'Top-tier show quality Kohaku.'
  },
  {
    name: 'Premium Kohaku',
    price: 2500,
    breeder: 'Marudo Koi Farm',
    breed: 'Kohaku',
    size: '50cm',
    age: '2 years',
    image: 'https://ik.imagekit.io/your_path/kohaku.jpg',
    description: 'Clean, crisp red and white pattern.'
  },
  {
    name: 'Young Showa',
    price: 1200,
    breeder: 'Isa Koi Farm',
    breed: 'Showa',
    size: '40cm',
    age: '1 year',
    image: 'https://ik.imagekit.io/your_path/young-showa.jpg',
    description: 'Great potential and deep colors.'
  }
];

export default function ShopPage() {
  const [filters, setFilters] = useState({ breed: '', breeder: '', sortBy: '' });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const filteredKoi = koiData.filter(koi => {
    return (
      (!filters.breed || koi.breed === filters.breed) &&
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
<div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white text-center py-20 px-4 bg-cover bg-center mt-25 overflow-hidden">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
  <div className="relative z-10 max-w-4xl mx-auto">
    <p className="text-orange-200 text-sm uppercase tracking-widest mb-3">Premium Selection</p>
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">Sri Lanka's Finest Koi Collection</h1>
    <p className="mb-6 text-lg text-white/90 max-w-2xl mx-auto">Discover exceptional quality koi from verified Sri Lankan breeders. Champion bloodlines, perfect health, delivered island-wide.</p>
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
      <div className="bg-gradient-to-b from-gray-50 to-white py-8 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Find Your Perfect Koi</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <input
              type="text"
              placeholder="Search by name or breed..."
              className="px-5 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors shadow-sm min-w-[250px]"
            />
            <select
              onChange={(e) => setFilters({ ...filters, breed: e.target.value })}
              className="px-5 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors shadow-sm bg-white"
            >
              <option value="">All Breeds</option>
              <option value="Showa">Showa</option>
              <option value="Sanke">Sanke</option>
              <option value="Kohaku">Kohaku</option>
              <option value="Ogon">Ogon</option>
            </select>
            <select
              onChange={(e) => setFilters({ ...filters, breeder: e.target.value })}
              className="px-5 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors shadow-sm bg-white"
            >
              <option value="">All Breeders</option>
              <option value="Sakai Fish Farm">Sakai Fish Farm</option>
              <option value="Omosako Koi Farm">Omosako Koi Farm</option>
              <option value="Dainichi Koi Farm">Dainichi Koi Farm</option>
              <option value="Isa Koi Farm">Isa Koi Farm</option>
            </select>
            <select
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="px-5 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors shadow-sm bg-white"
            >
              <option value="">Sort By</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Koi Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing <span className="font-semibold text-orange-600">{sortedKoi.length}</span> premium koi
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedKoi.map((koi, index) => (
            <div key={index} className="group bg-white border-2 border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2">
              <div className="relative overflow-hidden bg-gray-100">
                <img src={koi.image} alt={koi.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Premium
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">{koi.name}</h2>
                <p className="text-2xl font-bold text-orange-600 mb-3">Rs. {(koi.price * 300).toLocaleString()}</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Breeder:</span>
                    <span>{koi.breeder}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Breed:</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-medium">{koi.breed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span><span className="font-semibold text-gray-700">Size:</span> {koi.size}</span>
                    <span><span className="font-semibold text-gray-700">Age:</span> {koi.age}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{koi.description}</p>
                <button className="mt-auto bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 w-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
