import React, { useMemo, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { pondServices, breeders } from '../assets/assets';

const HomeServices = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const topRatedBreeders = useMemo(
    () =>
      [...breeders]
        .sort((a, b) => {
          if (b.rating !== a.rating) return b.rating - a.rating;
          if (b.experienceYears !== a.experienceYears) return b.experienceYears - a.experienceYears;
          return a.name.localeCompare(b.name);
        })
        .slice(0, 2),
    []
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Motion.section
      className="relative py-24 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#111111] via-[#171717] to-[#111111] text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="pointer-events-none absolute -top-20 -left-12 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-32 -right-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Motion.div variants={itemVariants} className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-orange-300 text-xs uppercase tracking-[0.2em] mb-3 border border-orange-500/30 bg-orange-500/10 rounded-full px-4 py-1">
            Complete Koi Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Sri Lanka's <span className="text-orange-500">Koi</span> Ecosystem
          </h2>
          <div className="h-1 w-28 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 mx-auto mb-4" />
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto">
            From premium pond services to elite breeders, everything you need for a thriving koi collection.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Motion.div variants={itemVariants} className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                Premium Pond Services
              </h3>
              <p className="text-gray-300 text-sm">Professional design, maintenance, and water quality management.</p>
            </div>

            {pondServices.map((service) => (
              <Motion.div
                key={service.id}
                variants={itemVariants}
                onClick={() => toggleFlip(`service-${service.id}`)}
                className="relative h-56 cursor-pointer perspective group"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

                <div
                  className={`absolute inset-0 rounded-2xl border border-gray-500/70 bg-gradient-to-br from-[#303030] to-[#1a1a1a] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex flex-col backface-hidden transform transition-all duration-500 ${
                    flippedCards[`service-${service.id}`]
                      ? 'opacity-0 rotate-y-180'
                      : 'opacity-100 group-hover:border-orange-500/50'
                  }`}
                >
                  <img src={service.icon} alt={service.title} loading="lazy" className="w-12 h-12 rounded-lg object-cover border border-white/20 mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-200">{service.front}</p>
                  <p className="mt-auto text-xs text-orange-300 uppercase tracking-wider">Tap to see details</p>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#2a2a2a] to-[#171717] p-5 shadow-[0_12px_30px_rgba(249,115,22,0.15)] flex flex-col backface-hidden transform transition-all duration-500 ${
                    flippedCards[`service-${service.id}`]
                      ? 'opacity-100 rotate-y-0'
                      : 'opacity-0 rotate-y-180'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-200 mb-4">{service.back}</p>
                  <button
                    type="button"
                    className="mt-auto w-max bg-gradient-to-r from-orange-500 to-red-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    Request Service
                  </button>
                </div>
              </Motion.div>
            ))}
          </Motion.div>

          <Motion.div variants={itemVariants} className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                Top Rated Breeders
              </h3>
              <p className="text-gray-300 text-sm">Showing the highest-rated 2 breeders for quick trusted discovery.</p>
            </div>

            {topRatedBreeders.map((breeder) => (
              <Motion.div
                key={breeder.id}
                variants={itemVariants}
                onClick={() => toggleFlip(`breeder-${breeder.id}`)}
                className="relative h-56 cursor-pointer perspective group"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

                <div
                  className={`absolute inset-0 rounded-2xl border border-gray-500/70 bg-gradient-to-br from-[#303030] to-[#1a1a1a] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex items-start backface-hidden transform transition-all duration-500 ${
                    flippedCards[`breeder-${breeder.id}`]
                      ? 'opacity-0 rotate-y-180'
                      : 'opacity-100 group-hover:border-orange-500/50'
                  }`}
                >
                  <img
                    src={breeder.image}
                    alt={breeder.name}
                    loading="lazy"
                    className="w-16 h-16 rounded-xl object-cover mr-4 border border-white/20"
                  />
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white leading-tight mb-1">{breeder.name}</h4>
                    <p className="text-sm text-orange-300 mb-2">{breeder.specialty}</p>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">{breeder.front}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold">
                        ★ {breeder.rating}
                      </span>
                      <span>{breeder.koiBred} koi bred</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-[#2a2a2a] to-[#171717] p-5 shadow-[0_12px_30px_rgba(249,115,22,0.15)] flex flex-col backface-hidden transform transition-all duration-500 ${
                    flippedCards[`breeder-${breeder.id}`]
                      ? 'opacity-100 rotate-y-0'
                      : 'opacity-0 rotate-y-180'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{breeder.name}</h4>
                  <p className="text-sm text-gray-200 mb-3 line-clamp-2">{breeder.back}</p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-wider border border-orange-500/30 bg-orange-500/10 text-orange-200 rounded-full px-2 py-1">
                      {breeder.specialty}
                    </span>
                    <button
                      type="button"
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                    >
                      View Stock
                    </button>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
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
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </Motion.section>
  );
};

export default HomeServices;
