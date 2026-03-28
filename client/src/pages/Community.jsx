import React, { useEffect, useMemo, useState } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import Pagination from '../components/Pagination';
import CircularGallery from '../components/CircularGallery';
import { communityEvents } from '../assets/assets';

const ITEMS_PER_PAGE = 6;

const dateWindowOptions = ['All Upcoming', 'This Week', 'This Month', 'Next 3 Months'];

const eventTypeLabel = {
  Exhibition: 'Exhibition',
  Workshop: 'Workshop',
  Meetup: 'Meetup',
  Seminar: 'Seminar',
  Festival: 'Festival',
  Community: 'Community',
  'Health Camp': 'Health Camp',
  'Open Day': 'Open Day',
};

function getUpcomingEvents() {
  const now = new Date();
  const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return communityEvents
    .filter((event) => new Date(event.dateISO) >= startToday)
    .sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO));
}

function formatEventDate(dateISO) {
  return new Date(dateISO).toLocaleDateString('en-LK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  });
}

function getWindowEnd(window) {
  const now = new Date();
  const base = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (window === 'This Week') {
    const end = new Date(base);
    end.setDate(end.getDate() + 7);
    return end;
  }

  if (window === 'This Month') {
    return new Date(base.getFullYear(), base.getMonth() + 1, 0, 23, 59, 59, 999);
  }

  if (window === 'Next 3 Months') {
    return new Date(base.getFullYear(), base.getMonth() + 3, base.getDate(), 23, 59, 59, 999);
  }

  return null;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function CommunityPage() {
  const reduceMotion = useReducedMotion();
  const upcomingEvents = useMemo(() => getUpcomingEvents(), []);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filters, setFilters] = useState({
    eventType: '',
    city: '',
    dateWindow: 'All Upcoming',
    availability: '',
    sortBy: 'nearest',
  });

  const cityOptions = useMemo(
    () => [...new Set(upcomingEvents.map((event) => event.city))].sort(),
    [upcomingEvents]
  );

  const typeOptions = useMemo(
    () => [...new Set(upcomingEvents.map((event) => event.eventType))].sort(),
    [upcomingEvents]
  );

  const featuredEvents = useMemo(
    () => upcomingEvents.filter((event) => event.featured).slice(0, 4),
    [upcomingEvents]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 180);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const filteredEvents = useMemo(() => {
    const search = debouncedSearch.trim().toLowerCase();
    const endWindow = getWindowEnd(filters.dateWindow);

    const list = upcomingEvents.filter((event) => {
      const eventDate = new Date(event.dateISO);
      const searchable = `${event.title} ${event.city} ${event.organizer} ${event.venue} ${event.shortSummary}`.toLowerCase();
      const isOpen = event.slotsLeft > 0;

      return (
        (!search || searchable.includes(search)) &&
        (!filters.eventType || event.eventType === filters.eventType) &&
        (!filters.city || event.city === filters.city) &&
        (!filters.availability || (filters.availability === 'open' ? isOpen : !isOpen)) &&
        (!endWindow || eventDate <= endWindow)
      );
    });

    return list.sort((a, b) => {
      if (filters.sortBy === 'nameAZ') return a.title.localeCompare(b.title);
      if (filters.sortBy === 'feeLow') return a.entryFeeLkr - b.entryFeeLkr;
      if (filters.sortBy === 'feeHigh') return b.entryFeeLkr - a.entryFeeLkr;
      if (filters.sortBy === 'latest') return new Date(b.dateISO) - new Date(a.dateISO);
      return new Date(a.dateISO) - new Date(b.dateISO);
    });
  }, [debouncedSearch, filters, upcomingEvents]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedEvents = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredEvents.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEvents, safeCurrentPage]);

  const activeFilters = [
    filters.eventType && { key: 'eventType', label: `Type: ${filters.eventType}` },
    filters.city && { key: 'city', label: `City: ${filters.city}` },
    filters.dateWindow !== 'All Upcoming' && { key: 'dateWindow', label: filters.dateWindow },
    filters.availability && { key: 'availability', label: filters.availability === 'open' ? 'Open Events' : 'Sold Out' },
    searchInput.trim() && { key: 'search', label: `Search: ${searchInput.trim()}` },
  ].filter(Boolean);

  const clearSingleFilter = (key) => {
    if (key === 'search') {
      setSearchInput('');
      setDebouncedSearch('');
      return;
    }

    if (key === 'dateWindow') {
      setFilters((prev) => ({ ...prev, dateWindow: 'All Upcoming' }));
      return;
    }

    setFilters((prev) => ({ ...prev, [key]: '' }));
  };

  const clearAllFilters = () => {
    setSearchInput('');
    setDebouncedSearch('');
    setFilters({
      eventType: '',
      city: '',
      dateWindow: 'All Upcoming',
      availability: '',
      sortBy: 'nearest',
    });
  };

  return (
    <div className="bg-[#121212] text-white pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-14 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-14 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />

      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      <section className="px-4 sm:px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Featured Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredEvents.map((event) => (
              <article key={event.id} className="rounded-2xl border border-gray-600/70 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] p-4">
                <p className="text-xs text-orange-300 mb-1">{formatEventDate(event.dateISO)}</p>
                <p className="font-semibold text-white leading-tight mb-1">{event.title}</p>
                <p className="text-xs text-gray-300 mb-2">{event.venue} - {event.city}</p>
                <p className="text-xs text-gray-200 line-clamp-2">{event.shortSummary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              Find The Right Event
            </h2>
            <p className="text-gray-200 text-sm sm:text-base">Filter by type, city, date window, and event availability.</p>
          </Motion.div>

          <Motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <input
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search title, city, organizer..."
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white placeholder:text-gray-300 focus:border-orange-500 focus:outline-none"
            />
            <select
              value={filters.eventType}
              onChange={(event) => setFilters((prev) => ({ ...prev, eventType: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Types</option>
              {typeOptions.map((option) => (
                <option key={option} value={option}>{eventTypeLabel[option] || option}</option>
              ))}
            </select>
            <select
              value={filters.city}
              onChange={(event) => setFilters((prev) => ({ ...prev, city: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Cities</option>
              {cityOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <select
              value={filters.dateWindow}
              onChange={(event) => setFilters((prev) => ({ ...prev, dateWindow: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              {dateWindowOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <select
              value={filters.sortBy}
              onChange={(event) => setFilters((prev) => ({ ...prev, sortBy: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="nearest">Sort: Nearest Date</option>
              <option value="latest">Sort: Latest Date</option>
              <option value="feeLow">Sort: Fee Low to High</option>
              <option value="feeHigh">Sort: Fee High to Low</option>
              <option value="nameAZ">Sort: Name A-Z</option>
            </select>
          </Motion.div>

          <Motion.div variants={itemVariants} className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <select
              value={filters.availability}
              onChange={(event) => setFilters((prev) => ({ ...prev, availability: event.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-[#1b1b1b] text-white focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Availability</option>
              <option value="open">Open Registration</option>
              <option value="soldout">Sold Out</option>
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
              Showing <span className="text-orange-400 font-semibold">{filteredEvents.length}</span> upcoming events
            </p>
          </Motion.div>

          {filteredEvents.length === 0 ? (
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#2e2e2e] to-[#1a1a1a] p-10 text-center">
              <h3 className="text-2xl font-bold mb-2">No events found</h3>
              <p className="text-gray-200 mb-5">Adjust your filters to discover other upcoming koi events.</p>
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
                {paginatedEvents.map((eventItem) => {
                  const isOpen = eventItem.slotsLeft > 0;

                  return (
                    <article
                      key={eventItem.id}
                      className="group relative overflow-hidden rounded-2xl border border-gray-500/70 bg-gradient-to-br from-[#303030] to-[#1a1a1a] hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(249,115,22,0.18)]"
                    >
                      <div className="absolute -top-16 -right-10 h-28 w-28 rounded-full bg-orange-500/10 blur-xl pointer-events-none" />

                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={eventItem.image}
                          alt={eventItem.title}
                          loading="lazy"
                          decoding="async"
                          width="640"
                          height="420"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 border border-white/20 text-white">
                          {formatEventDate(eventItem.dateISO)}
                        </span>
                        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${
                          isOpen
                            ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200'
                            : 'bg-gray-700/50 border-gray-400/40 text-gray-200'
                        }`}>
                          {isOpen ? 'Open' : 'Sold Out'}
                        </span>
                      </div>

                      <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.15em] text-orange-300 mb-1">{eventTypeLabel[eventItem.eventType] || eventItem.eventType}</p>
                        <h3 className="text-xl font-bold text-white mb-1 leading-tight">{eventItem.title}</h3>
                        <p className="text-sm text-gray-200 mb-2">{eventItem.venue} - {eventItem.city}</p>
                        <p className="text-sm text-gray-300 mb-3">{eventItem.startTime} - {eventItem.endTime} | {eventItem.organizer}</p>

                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 mb-4">{eventItem.shortSummary}</p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-100 mb-4">
                          <p><span className="text-gray-300">Entry:</span> {eventItem.entryFeeLkr > 0 ? `LKR ${eventItem.entryFeeLkr.toLocaleString()}` : 'Free'}</p>
                          <p><span className="text-gray-300">Slots:</span> {eventItem.slotsLeft}/{eventItem.capacity}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <button
                            onClick={() => setSelectedEvent(eventItem)}
                            className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition"
                          >
                            View Details
                          </button>
                          <a
                            href={eventItem.registrationUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-center border border-gray-400 text-gray-100 py-2.5 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-400 transition"
                          >
                            Register
                          </a>
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

      {selectedEvent && (
        <div className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4">
          <div className="hide-scrollbar w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#2f2f2f] to-[#1a1a1a] p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-200 hover:text-white text-xl"
              aria-label="Close event details"
            >
              x
            </button>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              loading="lazy"
              decoding="async"
              width="920"
              height="520"
              className="w-full h-64 sm:h-80 object-cover rounded-xl border border-gray-500/70 mb-6"
            />

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">{selectedEvent.title}</h3>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white">
                {eventTypeLabel[selectedEvent.eventType] || selectedEvent.eventType}
              </span>
            </div>

            <p className="text-gray-100 mb-2"><span className="text-gray-300">Date:</span> {formatEventDate(selectedEvent.dateISO)}</p>
            <p className="text-gray-100 mb-2"><span className="text-gray-300">Time:</span> {selectedEvent.startTime} - {selectedEvent.endTime}</p>
            <p className="text-gray-100 mb-2"><span className="text-gray-300">Venue:</span> {selectedEvent.venue}, {selectedEvent.city}</p>
            <p className="text-gray-100 mb-4"><span className="text-gray-300">Organizer:</span> {selectedEvent.organizer}</p>

            <p className="text-gray-100 leading-relaxed mb-6">{selectedEvent.details}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
              <div className="rounded-lg border border-gray-500/70 bg-black/15 p-4">
                <p className="text-gray-300">Ticket & Capacity</p>
                <p className="text-white">Ticket: {selectedEvent.ticketType}</p>
                <p className="text-white">Entry: {selectedEvent.entryFeeLkr > 0 ? `LKR ${selectedEvent.entryFeeLkr.toLocaleString()}` : 'Free'}</p>
                <p className="text-white">Slots Left: {selectedEvent.slotsLeft}/{selectedEvent.capacity}</p>
              </div>
              <div className="rounded-lg border border-gray-500/70 bg-black/15 p-4">
                <p className="text-gray-300">Contact</p>
                <p className="text-white">Email: {selectedEvent.contactEmail}</p>
                <p className="text-white">Phone: {selectedEvent.contactPhone}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={selectedEvent.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition"
              >
                Register
              </a>
              <a
                href={`mailto:${selectedEvent.contactEmail}`}
                className="text-center border border-gray-400 text-gray-100 py-3 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-400 transition"
              >
                Email
              </a>
              <a
                href={`tel:${selectedEvent.contactPhone}`}
                className="text-center border border-gray-400 text-gray-100 py-3 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-400 transition"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
