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
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white text-center py-16 px-4 bg-[url('https://ik.imagekit.io/your_path/koi-banner.jpg')] bg-cover bg-center">
        <h1 className="text-4xl font-bold mb-2">Browse Our Premium Koi Collection</h1>
        <p className="mb-4">Discover exceptional quality koi from Sri Lanka's finest breeders</p>
        <button className="bg-white text-orange-500 px-6 py-2 rounded font-semibold">Explore Now</button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 px-6 py-6 justify-center bg-gray-100">
        <input type="text" placeholder="Search koi by name or breed..." className="px-4 py-2 rounded border" />
        <select onChange={(e) => setFilters({ ...filters, breed: e.target.value })} className="px-4 py-2 rounded border">
          <option value="">All Breeds</option>
          <option value="Showa">Showa</option>
          <option value="Sanke">Sanke</option>
          <option value="Kohaku">Kohaku</option>
          <option value="Ogon">Ogon</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, breeder: e.target.value })} className="px-4 py-2 rounded border">
          <option value="">All Breeders</option>
          <option value="Sakai Fish Farm">Sakai Fish Farm</option>
          <option value="Omosako Koi Farm">Omosako Koi Farm</option>
          <option value="Dainichi Koi Farm">Dainichi Koi Farm</option>
          <option value="Isa Koi Farm">Isa Koi Farm</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })} className="px-4 py-2 rounded border">
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Koi Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {sortedKoi.map((koi, index) => (
          <div key={index} className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <img src={koi.image} alt={koi.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-lg font-bold">{koi.name}</h2>
            <p className="text-orange-500 font-semibold text-sm">${koi.price.toLocaleString()}</p>
            <p className="text-sm text-gray-700">{koi.breeder}</p>
            <p className="text-sm text-gray-700">Breed: {koi.breed}</p>
            <p className="text-sm text-gray-700">Size: {koi.size}</p>
            <p className="text-sm text-gray-700">Age: {koi.age}</p>
            <p className="text-sm text-gray-600 mt-1">{koi.description}</p>
            <button className="mt-auto bg-orange-500 text-white py-2 rounded font-medium hover:bg-orange-600 w-full mt-4">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
