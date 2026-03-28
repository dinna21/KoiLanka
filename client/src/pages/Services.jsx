import React, { useEffect, useMemo, useState } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 6;

const serviceCatalog = [
  {
    id: 'srv_001',
    name: 'Pond Design & Build',
    category: 'Pond Services',
    tier: 'Premium',
    location: 'Colombo',
    priceLkr: 220000,
    responseTime: '24h',
    available: true,
    provider: 'AquaScape Lanka',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg',
    short: 'Custom koi pond architecture with filtration-first layouts.',
    description:
      'End-to-end koi pond construction with pump sizing, bio-media planning, and maintenance-friendly access points for long-term fish health.',
    contactEmail: 'design@aquascapelanka.example',
    phone: '+94770000111',
    whatsapp: '+94770000111',
  },
  {
    id: 'srv_002',
    name: 'Water Quality Audit',
    category: 'Pond Services',
    tier: 'Standard',
    location: 'Kandy',
    priceLkr: 18500,
    responseTime: 'Same day',
    available: true,
    provider: 'Koi Lab Care',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg',
    short: 'pH, ammonia, nitrite, nitrate and oxygen profiling.',
    description:
      'On-site testing and corrective action plan. Includes cycle stability review, filtration check, and follow-up recommendations.',
    contactEmail: 'support@koilabcare.example',
    phone: '+94770000112',
    whatsapp: '+94770000112',
  },
  {
    id: 'srv_003',
    name: 'Fish Health Consultation',
    category: 'Fish Healthcare',
    tier: 'Premium',
    location: 'Galle',
    priceLkr: 26500,
    responseTime: '12h',
    available: true,
    provider: 'VetKoi Sri Lanka',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/39351/animal-dog-pet-cute-39351.jpeg',
    short: 'Diagnosis and treatment plans for stress, ulcers, and parasites.',
    description:
      'Clinical assessment with treatment protocol, quarantine guidance, and feeding recovery strategy tailored for koi immune health.',
    contactEmail: 'care@vetkoi.example',
    phone: '+94770000113',
    whatsapp: '+94770000113',
  },
  {
    id: 'srv_004',
    name: 'Quarantine Tank Setup',
    category: 'Fish Healthcare',
    tier: 'Standard',
    location: 'Colombo',
    priceLkr: 42000,
    responseTime: '24h',
    available: true,
    provider: 'SafeStock Aquatics',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7862371/pexels-photo-7862371.jpeg',
    short: 'Biosecure quarantine setup for new koi arrivals.',
    description:
      'Temporary isolation tank planning with medication-safe filtration and acclimatization sequence to reduce disease transfer risk.',
    contactEmail: 'ops@safestock.example',
    phone: '+94770000114',
    whatsapp: '+94770000114',
  },
  {
    id: 'srv_005',
    name: 'Koi Pond Interior Styling',
    category: 'Pond Interior',
    tier: 'Premium',
    location: 'Negombo',
    priceLkr: 96000,
    responseTime: '48h',
    available: true,
    provider: 'Zen Pond Studio',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1061682/pexels-photo-1061682.jpeg',
    short: 'Natural stone, lighting, and viewing-angle enhancement.',
    description:
      'Aesthetic pond interior upgrades including rock composition, underwater lighting layout, and visual depth optimization.',
    contactEmail: 'hello@zenpond.example',
    phone: '+94770000115',
    whatsapp: '+94770000115',
  },
  {
    id: 'srv_006',
    name: 'Waterfall Feature Upgrade',
    category: 'Pond Interior',
    tier: 'Standard',
    location: 'Jaffna',
    priceLkr: 78000,
    responseTime: '72h',
    available: true,
    provider: 'FlowForm Koi Works',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
    short: 'Decorative waterfall with oxygenation benefit.',
    description:
      'Design and retrofit service for pond waterfalls balancing visual appeal with healthy water circulation and oxygen exchange.',
    contactEmail: 'sales@flowform.example',
    phone: '+94770000116',
    whatsapp: '+94770000116',
  },
  {
    id: 'srv_007',
    name: 'Live Fish Transport',
    category: 'Transport',
    tier: 'Standard',
    location: 'Island-wide',
    priceLkr: 24000,
    responseTime: 'Same day',
    available: true,
    provider: 'KoiMove Logistics',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5025519/pexels-photo-5025519.jpeg',
    short: 'Temperature-safe and oxygen-controlled koi transport.',
    description:
      'Specialized transport with stress-minimized handling protocol, oxygen packing, and condition checks at drop-off.',
    contactEmail: 'dispatch@koimove.example',
    phone: '+94770000117',
    whatsapp: '+94770000117',
  },
  {
    id: 'srv_008',
    name: 'Emergency Pond Recovery',
    category: 'Emergency',
    tier: 'Premium',
    location: 'Colombo',
    priceLkr: 36500,
    responseTime: '4h',
    available: true,
    provider: 'Rapid Koi Rescue',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/772287/pexels-photo-772287.jpeg',
    short: 'Rapid response for crash events and fish stress episodes.',
    description:
      'Emergency intervention for ammonia spikes, aeration failure, or disease outbreaks with immediate stabilization action plan.',
    contactEmail: 'urgent@rapidkoi.example',
    phone: '+94770000118',
    whatsapp: '+94770000118',
  },
  {
    id: 'srv_009',
    name: 'Filtration System Service',
    category: 'Pond Services',
    tier: 'Standard',
    location: 'Matara',
    priceLkr: 32000,
    responseTime: '24h',
    available: false,
    provider: 'PureFlow Koi Tech',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg',
    short: 'Mechanical and biological filtration tuning.',
    description:
      'Maintenance and performance calibration for drum filters, moving-bed systems, and UV units to keep water crystal clear.',
    contactEmail: 'service@pureflow.example',
    phone: '+94770000119',
    whatsapp: '+94770000119',
  },
  {
    id: 'srv_010',
    name: 'Koi Nutrition Program',
    category: 'Fish Healthcare',
    tier: 'Standard',
    location: 'Kurunegala',
    priceLkr: 14500,
    responseTime: '48h',
    available: true,
    provider: 'AquaDiet Advisory',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/3996565/pexels-photo-3996565.jpeg',
    short: 'Seasonal feed planning and growth optimization.',
    description:
      'Personalized nutrition chart by water temperature, koi age, and growth goals to improve body conformation safely.',
    contactEmail: 'coach@aquadiet.example',
    phone: '+94770000120',
    whatsapp: '+94770000120',
  },
  {
    id: 'srv_011',
    name: 'Viewing Deck & Glass Panel',
    category: 'Pond Interior',
    tier: 'Premium',
    location: 'Colombo',
    priceLkr: 310000,
    responseTime: '72h',
    available: true,
    provider: 'AquaView Interiors',
    rating: 5,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    short: 'Luxury viewing upgrades for collector ponds.',
    description:
      'Structural consultation and installation coordination for pond viewing windows and deck-side observation experiences.',
    contactEmail: 'projects@aquaview.example',
    phone: '+94770000121',
    whatsapp: '+94770000121',
  },
  {
    id: 'srv_012',
    name: 'Biosecurity Site Audit',
    category: 'Emergency',
    tier: 'Premium',
    location: 'Kandy',
    priceLkr: 28500,
    responseTime: '24h',
    available: true,
    provider: 'KoiSafe Protocols',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6954119/pexels-photo-6954119.jpeg',
    short: 'Risk mapping to prevent future disease outbreaks.',
    description:
      'Process-level audit covering quarantine flow, net disinfection, pond access control, and cross-contamination prevention.',
    contactEmail: 'audit@koisafe.example',
    phone: '+94770000122',
    whatsapp: '+94770000122',
  },
];

const categoryOptions = ['All', 'Pond Services', 'Fish Healthcare', 'Pond Interior', 'Transport', 'Emergency'];

const responseTimeRank = {
  '4h': 1,
  '12h': 2,
  '24h': 3,
  '48h': 4,
  '72h': 5,
  'Same day': 6,
};

const serviceCatalogPrepared = serviceCatalog.map((item) => ({
  ...item,
  searchableText: `${item.name} ${item.category} ${item.provider} ${item.short} ${item.location}`.toLowerCase(),
  responseRank: responseTimeRank[item.responseTime] ?? 99,
}));

function normalizeWhatsapp(value) {
  if (!value) return '';
  return value.replace(/[^\d]/g, '');
}

const tierStyles = {
  Premium: 'bg-gradient-to-r from-orange-500 to-red-600 text-white',
  Standard: 'bg-gradient-to-r from-gray-700 to-gray-800 text-white',
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();
  const [selectedService, setSelectedService] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    location: '',
    availability: '',
    sortBy: 'ratingHigh',
  });

  const locationOptions = useMemo(
    () => [...new Set(serviceCatalogPrepared.map((item) => item.location))].sort(),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 180);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const filteredServices = useMemo(() => {
    const normalizedSearch = debouncedSearch.trim().toLowerCase();

    const results = serviceCatalogPrepared.filter((item) => {
      return (
        (!normalizedSearch || item.searchableText.includes(normalizedSearch)) &&
        (filters.category === 'All' || item.category === filters.category) &&
        (!filters.location || item.location === filters.location) &&
        (!filters.availability || (filters.availability === 'available' ? item.available : !item.available))
      );
    });

    return results.sort((a, b) => {
      if (filters.sortBy === 'priceLowHigh') return a.priceLkr - b.priceLkr;
      if (filters.sortBy === 'priceHighLow') return b.priceLkr - a.priceLkr;
      if (filters.sortBy === 'responseFast') return a.responseRank - b.responseRank;
      if (filters.sortBy === 'nameAZ') return a.name.localeCompare(b.name);
      return b.rating - a.rating;
    });
  }, [debouncedSearch, filters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredServices.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedServices = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredServices.slice(start, start + ITEMS_PER_PAGE);
  }, [safeCurrentPage, filteredServices]);

  const activeFilters = [
    filters.category !== 'All' && { key: 'category', label: `Category: ${filters.category}` },
    filters.location && { key: 'location', label: `Location: ${filters.location}` },
    filters.availability && { key: 'availability', label: filters.availability === 'available' ? 'Available only' : 'Unavailable only' },
    searchInput.trim() && { key: 'search', label: `Search: ${searchInput.trim()}` },
  ].filter(Boolean);

  const clearSingleFilter = (key) => {
    if (key === 'search') {
      setSearchInput('');
      setDebouncedSearch('');
      return;
    }
    if (key === 'category') {
      setFilters((prev) => ({ ...prev, category: 'All' }));
      return;
    }
    setFilters((prev) => ({ ...prev, [key]: '' }));
  };

  const clearAllFilters = () => {
    setSearchInput('');
    setDebouncedSearch('');
    setFilters({ category: 'All', location: '', availability: '', sortBy: 'ratingHigh' });
  };

  return (
    <div className="bg-[#121212] text-white pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-14 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-14 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />

      <Motion.section
        variants={sectionVariants}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 sm:px-6 md:px-10 mb-10"
      >
        <div className="max-w-7xl mx-auto rounded-3xl border border-orange-500/30 bg-gradient-to-br from-[#202020] via-[#2b2b2b] to-[#171717] px-6 md:px-12 py-12 md:py-16 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            <Motion.div variants={itemVariants} className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 text-orange-300 text-xs uppercase tracking-[0.2em] mb-3 border border-orange-500/30 bg-orange-500/10 rounded-full px-4 py-1">
                Complete Koi Care Services
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Professional <span className="text-orange-500">Pond & Fish Services</span>
              </h1>
              <div className="h-1 w-28 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 mx-auto lg:mx-0 mb-5" />
              <p className="text-gray-100 text-base sm:text-lg leading-relaxed max-w-3xl">
                Browse trusted providers for pond build, fish healthcare, transport, emergency recovery, and luxury interior upgrades.
              </p>
            </Motion.div>

            <Motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-4 text-center">
                <p className="text-2xl font-bold text-orange-400">{serviceCatalog.length}+</p>
                <p className="text-xs text-gray-200 uppercase tracking-wider">Services</p>
              </div>
              <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-4 text-center">
                <p className="text-2xl font-bold text-orange-400">{categoryOptions.length - 1}</p>
                <p className="text-xs text-gray-200 uppercase tracking-wider">Categories</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center col-span-2">
                <p className="text-sm text-gray-100 leading-relaxed">Mobile-first booking flow with direct email, call, and WhatsApp actions.</p>
              </div>
            </Motion.div>
          </div>
        </div>
      </Motion.section>

      <Motion.section
        variants={sectionVariants}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 sm:px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2a2a2a] via-[#1e1e1e] to-[#161616] border border-orange-500/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <Motion.div variants={itemVariants} className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              Find The Right Service
            </h2>
            <p className="text-gray-200 text-sm sm:text-base">Search, filter, compare, and contact service providers in one place.</p>
          </Motion.div>

          <Motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <input
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search service, provider, location..."
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white placeholder:text-gray-300 focus:border-orange-500 focus:outline-none"
            />

            <select
              value={filters.category}
              onChange={(event) => setFilters((prev) => ({ ...prev, category: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            <select
              value={filters.location}
              onChange={(event) => setFilters((prev) => ({ ...prev, location: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Locations</option>
              {locationOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            <select
              value={filters.availability}
              onChange={(event) => setFilters((prev) => ({ ...prev, availability: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Availability</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>

            <select
              value={filters.sortBy}
              onChange={(event) => setFilters((prev) => ({ ...prev, sortBy: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="ratingHigh">Sort: Rating</option>
              <option value="priceLowHigh">Sort: Price Low to High</option>
              <option value="priceHighLow">Sort: Price High to Low</option>
              <option value="responseFast">Sort: Response Time</option>
              <option value="nameAZ">Sort: Name A-Z</option>
            </select>
          </Motion.div>

          <Motion.div variants={itemVariants} className="mt-5 flex flex-wrap gap-2 items-center justify-center md:justify-between">
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
                  {item.label} x
                </button>
              ))}
            </div>
            <button
              onClick={clearAllFilters}
              className="text-xs text-gray-100 border border-gray-400 rounded-full px-4 py-1.5 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition"
            >
              Reset Filters
            </button>
          </Motion.div>
        </div>
      </Motion.section>

      <Motion.section
        variants={sectionVariants}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 sm:px-6 md:px-10 mt-10"
      >
        <div className="max-w-7xl mx-auto">
          <Motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
            <p className="text-sm sm:text-base text-gray-100">
              Showing <span className="text-orange-400 font-semibold">{filteredServices.length}</span> service providers
            </p>
          </Motion.div>

          {filteredServices.length === 0 ? (
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#2e2e2e] to-[#1a1a1a] p-10 text-center">
              <h3 className="text-2xl font-bold mb-2">No services found</h3>
              <p className="text-gray-200 mb-5">Try adjusting your filters or search to discover available services.</p>
              <button
                onClick={clearAllFilters}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedServices.map((service) => {
                  const whatsapp = normalizeWhatsapp(service.whatsapp);

                  return (
                    <article
                      key={service.id}
                      className="group relative overflow-hidden rounded-2xl border border-gray-500/70 bg-gradient-to-br from-[#303030] to-[#1a1a1a] hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(249,115,22,0.18)]"
                      style={{ contentVisibility: 'auto', containIntrinsicSize: '380px' }}
                    >
                      <div className="absolute -top-16 -right-10 h-28 w-28 rounded-full bg-orange-500/10 blur-xl pointer-events-none" />

                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          loading="lazy"
                          decoding="async"
                          width="640"
                          height="420"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${tierStyles[service.tier]}`}>
                          {service.tier}
                        </span>
                        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${
                          service.available
                            ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200'
                            : 'bg-gray-700/50 border-gray-400/40 text-gray-200'
                        }`}>
                          {service.available ? 'Available' : 'Busy'}
                        </span>
                      </div>

                      <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.15em] text-orange-300 mb-1">{service.category}</p>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-200 mb-3">{service.provider} • {service.location}</p>

                        <p className="text-2xl font-bold text-orange-400 mb-4">
                          Rs. {service.priceLkr.toLocaleString()}
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-100 mb-4">
                          <p><span className="text-gray-300">Rating:</span> {service.rating}</p>
                          <p><span className="text-gray-300">Response:</span> {service.responseTime}</p>
                        </div>

                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 mb-5">{service.short}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <button
                            onClick={() => setSelectedService(service)}
                            className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition"
                          >
                            View Details
                          </button>
                          <a
                            href={`mailto:${service.contactEmail}`}
                            className="text-center border border-gray-400 text-gray-100 py-2.5 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-400 transition"
                          >
                            Contact
                          </a>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-xs">
                          <a href={`tel:${service.phone}`} className="text-orange-200 hover:text-orange-100">Call</a>
                          {whatsapp && (
                            <>
                              <span className="text-gray-500">•</span>
                              <a
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-orange-200 hover:text-orange-100"
                              >
                                WhatsApp
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <Pagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(Math.min(Math.max(1, page), totalPages))}
              />
            </>
          )}
        </div>
      </Motion.section>

      {selectedService && (
        <div className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4">
          <div className="hide-scrollbar w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#2f2f2f] to-[#1a1a1a] p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-200 hover:text-white text-xl"
              aria-label="Close details"
            >
              x
            </button>

            <img
              src={selectedService.image}
              alt={selectedService.name}
              decoding="async"
              width="920"
              height="520"
              className="w-full h-64 sm:h-80 object-cover rounded-xl border border-gray-500/70 mb-6"
            />

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">{selectedService.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierStyles[selectedService.tier]}`}>
                {selectedService.tier}
              </span>
            </div>

            <p className="text-2xl font-bold text-orange-400 mb-4">Rs. {selectedService.priceLkr.toLocaleString()}</p>
            <p className="text-gray-100 leading-relaxed mb-6">{selectedService.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
              <div className="rounded-lg border border-gray-500/70 bg-black/15 p-4">
                <p className="text-gray-300">Provider</p>
                <p className="text-white font-semibold">{selectedService.provider}</p>
                <p className="text-gray-100">{selectedService.location}</p>
                <p className="text-gray-100">Rating: {selectedService.rating} / 5</p>
              </div>
              <div className="rounded-lg border border-gray-500/70 bg-black/15 p-4">
                <p className="text-gray-300">Service Details</p>
                <p className="text-white">Category: {selectedService.category}</p>
                <p className="text-white">Response: {selectedService.responseTime}</p>
                <p className="text-white">Status: {selectedService.available ? 'Available' : 'Busy'}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`mailto:${selectedService.contactEmail}`}
                className="text-center bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition"
              >
                Email
              </a>
              <a
                href={`tel:${selectedService.phone}`}
                className="text-center border border-gray-400 text-gray-100 py-3 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-400 transition"
              >
                Call
              </a>
              <a
                href={`https://wa.me/${normalizeWhatsapp(selectedService.whatsapp)}`}
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
