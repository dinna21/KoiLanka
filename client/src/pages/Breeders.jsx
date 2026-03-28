import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { breeders } from '../assets/assets';
import Pagination from '../components/Pagination';
import ChromaGrid from '../components/ChromaGrid';

const ITEMS_PER_PAGE = 6;

const ratingBands = [
  { label: 'All Ratings', value: '' },
  { label: '4.8 and above', value: '4.8' },
  { label: '4.5 and above', value: '4.5' },
  { label: '4.0 and above', value: '4.0' },
];

function normalizeWhatsapp(value) {
  if (!value) return null;
  return value.replace(/[^\d]/g, '');
}

export default function BreedersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreeder, setSelectedBreeder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    specialty: '',
    location: '',
    ratingMin: '',
    sortBy: 'ratingHigh',
  });

  const featuredBreeders = useMemo(
    () => breeders.filter((item) => item.featured).slice(0, 4),
    []
  );

  const specialtyOptions = useMemo(
    () => [...new Set(breeders.map((item) => item.specialty))].sort(),
    []
  );

  const locationOptions = useMemo(
    () => [...new Set(breeders.map((item) => item.location))].sort(),
    []
  );

  const filteredBreeders = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    const minRating = filters.ratingMin ? Number(filters.ratingMin) : null;

    const list = breeders.filter((item) => {
      const searchable = `${item.name} ${item.specialty} ${item.location} ${item.bio}`.toLowerCase();

      return (
        (!normalized || searchable.includes(normalized)) &&
        (!filters.specialty || item.specialty === filters.specialty) &&
        (!filters.location || item.location === filters.location) &&
        (minRating === null || item.rating >= minRating)
      );
    });

    return list.sort((a, b) => {
      if (filters.sortBy === 'nameAZ') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'experienceHigh') return b.experienceYears - a.experienceYears;
      if (filters.sortBy === 'koiBredHigh') {
        const aCount = Number(String(a.koiBred).replace(/[^\d]/g, ''));
        const bCount = Number(String(b.koiBred).replace(/[^\d]/g, ''));
        return bCount - aCount;
      }
      return b.rating - a.rating;
    });
  }, [filters, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredBreeders.length / ITEMS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedBreeders = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBreeders.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredBreeders]);

  const activeFilters = [
    filters.specialty && { key: 'specialty', label: `Specialty: ${filters.specialty}` },
    filters.location && { key: 'location', label: `Location: ${filters.location}` },
    filters.ratingMin && { key: 'ratingMin', label: `Rating >= ${filters.ratingMin}` },
    searchTerm.trim() && { key: 'search', label: `Search: ${searchTerm.trim()}` },
  ].filter(Boolean);

  const clearSingleFilter = (key) => {
    if (key === 'search') {
      setSearchTerm('');
      return;
    }
    setFilters((prev) => ({ ...prev, [key]: '' }));
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilters({
      specialty: '',
      location: '',
      ratingMin: '',
      sortBy: 'ratingHigh',
    });
  };

  const chromaItems = paginatedBreeders.map((breeder) => ({
    image: breeder.image,
    title: breeder.name,
    subtitle: breeder.specialty,
    handle: breeder.location,
    borderColor: '#f97316',
    gradient: 'linear-gradient(145deg, #fb923c, #3a2a1f)',
    url: '#',
    _raw: breeder,
  }));

  return (
    <div className="bg-[#121212] text-white pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-12 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-12 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />

      <section className="px-4 sm:px-6 md:px-10 mb-10">
        <div className="max-w-7xl mx-auto rounded-3xl border border-orange-500/30 bg-gradient-to-br from-[#1f1f1f] via-[#292929] to-[#171717] px-6 md:px-12 py-12 md:py-16 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 text-orange-300 text-xs uppercase tracking-[0.2em] mb-3 border border-orange-500/30 bg-orange-500/10 rounded-full px-4 py-1">
                Verified Breeder Network
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Meet Trusted <span className="text-orange-500">Koi Breeders</span>
              </h1>
              <div className="h-1 w-28 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 mx-auto lg:mx-0 mb-5" />
              <p className="text-gray-100 text-base sm:text-lg leading-relaxed max-w-3xl">
                Explore breeder profiles, compare specialties, and connect directly to their fish listings with a single click.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-4 text-center">
                <p className="text-2xl font-bold text-orange-400">{breeders.length}+</p>
                <p className="text-xs text-gray-200 uppercase tracking-wider">Breeders</p>
              </div>
              <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-4 text-center">
                <p className="text-2xl font-bold text-orange-400">{featuredBreeders.length}</p>
                <p className="text-xs text-gray-200 uppercase tracking-wider">Featured</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center col-span-2">
                <p className="text-sm text-gray-100 leading-relaxed">Built for fast page load and direct breeder discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Featured Breeders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredBreeders.map((breeder) => (
              <article key={breeder.id} className="rounded-2xl border border-gray-600/70 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={breeder.image}
                    alt={breeder.name}
                    loading="lazy"
                    width="56"
                    height="56"
                    className="w-14 h-14 rounded-xl object-cover border border-white/20"
                  />
                  <div>
                    <p className="font-semibold text-white leading-tight">{breeder.name}</p>
                    <p className="text-xs text-orange-300">⭐ {breeder.rating}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-200 mb-3">{breeder.specialty}</p>
                <Link
                  to={`/shop?breeder=${encodeURIComponent(breeder.name)}`}
                  className="inline-block text-xs font-semibold text-orange-300 hover:text-orange-200"
                >
                  View Fish →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2a2a2a] via-[#1d1d1d] to-[#161616] border border-orange-500/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              Find The Right Breeder
            </h2>
            <p className="text-gray-200 text-sm sm:text-base">Search, filter, compare, and contact in one place.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search breeder, location, specialty..."
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white placeholder:text-gray-300 focus:border-orange-500 focus:outline-none"
            />
            <select
              value={filters.specialty}
              onChange={(e) => setFilters((prev) => ({ ...prev, specialty: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Specialties</option>
              {specialtyOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <select
              value={filters.location}
              onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Locations</option>
              {locationOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <select
              value={filters.ratingMin}
              onChange={(e) => setFilters((prev) => ({ ...prev, ratingMin: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              {ratingBands.map((band) => (
                <option key={band.value || 'all'} value={band.value}>{band.label}</option>
              ))}
            </select>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="ratingHigh">Sort: Rating</option>
              <option value="experienceHigh">Sort: Experience</option>
              <option value="koiBredHigh">Sort: Koi Bred</option>
              <option value="nameAZ">Sort: Name A-Z</option>
            </select>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 items-center justify-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {activeFilters.length === 0 && (
                <span className="text-xs text-gray-300">No filters applied</span>
              )}
              {activeFilters.map((item) => (
                <button
                  key={item.key}
                  onClick={() => clearSingleFilter(item.key)}
                  className="text-xs bg-orange-500/15 text-orange-300 border border-orange-500/30 rounded-full px-3 py-1 hover:bg-orange-500/25 transition"
                >
                  {item.label} ×
                </button>
              ))}
            </div>
            <button
              onClick={clearAllFilters}
              className="text-xs text-gray-100 border border-gray-400 rounded-full px-4 py-1.5 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm sm:text-base text-gray-100">
              Showing <span className="text-orange-400 font-semibold">{filteredBreeders.length}</span> breeder profiles
            </p>
          </div>

          <div style={{ minHeight: '600px', position: 'relative' }}>
            <ChromaGrid
              items={chromaItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
              onCardClick={(index) => {
                if (paginatedBreeders[index]) {
                  setSelectedBreeder(paginatedBreeders[index]);
                }
              }}
            />
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {selectedBreeder && (
        <div className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="hide-scrollbar w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#2f2f2f] to-[#1a1a1a] p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedBreeder(null)}
              className="absolute top-4 right-4 text-gray-200 hover:text-white text-xl"
              aria-label="Close profile"
            >
              ×
            </button>

            <img
              src={selectedBreeder.image}
              alt={selectedBreeder.name}
              width="920"
              height="520"
              className="w-full h-64 sm:h-80 object-cover rounded-xl border border-gray-500/70 mb-6"
            />

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">{selectedBreeder.name}</h3>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-red-600 text-white">
                ⭐ {selectedBreeder.rating}
              </span>
            </div>

            <p className="text-gray-100 leading-relaxed mb-6">{selectedBreeder.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
              <div className="rounded-lg border border-gray-500/70 bg-black/15 p-4">
                <p className="text-gray-300">Specialty</p>
                <p className="text-white font-semibold">{selectedBreeder.specialty}</p>
                <p className="text-gray-100">Location: {selectedBreeder.location}</p>
                <p className="text-gray-100">Experience: {selectedBreeder.experienceYears} years</p>
              </div>
              <div className="rounded-lg border border-gray-500/70 bg-black/15 p-4">
                <p className="text-gray-300">Portfolio</p>
                <p className="text-white">Koi Bred: {selectedBreeder.koiBred}</p>
                <p className="text-white">Front Note: {selectedBreeder.front}</p>
                <p className="text-white">Back Note: {selectedBreeder.back}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                to={`/shop?breeder=${encodeURIComponent(selectedBreeder.name)}`}
                className="text-center bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition"
              >
                View Fish
              </Link>
              <a
                href={`mailto:${selectedBreeder.contactEmail}`}
                className="text-center border border-gray-400 text-gray-100 py-3 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-400 transition"
              >
                Email
              </a>
              <a
                href={selectedBreeder.whatsapp ? `https://wa.me/${normalizeWhatsapp(selectedBreeder.whatsapp)}` : '#'}
                target="_blank"
                rel="noreferrer"
                className="text-center border border-gray-400 text-gray-100 py-3 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-400 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
