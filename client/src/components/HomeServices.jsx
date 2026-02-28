import React, { useState } from 'react';
import { Droplets, Waves, Wrench, Leaf, Award, Star } from 'lucide-react';

const serviceCards = [
  {
    id: 1,
    Icon: Waves,
    title: 'Pond Design & Construction',
    front: 'Custom-designed water features built for your space',
    back: 'We create full ecosystems tailored to your koi — premium filtration, UV sterilisers, and natural rock-work.',
  },
  {
    id: 2,
    Icon: Droplets,
    title: 'Water Quality Management',
    front: 'Crystal-clear water, guaranteed every season',
    back: 'Regular on-site testing and treatment plans to maintain perfect pH, ammonia, and nitrate levels year-round.',
  },
  {
    id: 3,
    Icon: Wrench,
    title: 'Pond Maintenance & Repairs',
    front: 'Keep your pond in peak condition',
    back: 'Scheduled cleaning, pump servicing, liner repairs, and emergency call-outs so your koi stay healthy.',
  },
  {
    id: 4,
    Icon: Leaf,
    title: 'Aquatic Planting & Landscaping',
    front: 'Natural beauty around your koi paradise',
    back: 'Expert selection and planting of aquatic and marginal plants that enhance water quality and visual appeal.',
  },
];

const breederCards = [
  {
    id: 101,
    name: 'Hiroshi Tanaka',
    specialty: 'Kohaku & Sanke',
    front: '30 years breeding champion bloodlines',
    back: 'Master breeder from Niigata with 15 All Japan Koi Show awards. Stock available year-round.',
    koiBred: '1,200+',
    rating: 4.9,
    avatar: 'https://ui-avatars.com/api/?name=Hiroshi+Tanaka&background=c2410c&color=fff&size=80',
  },
  {
    id: 102,
    name: 'Yuki Nakamura',
    specialty: 'Showa & Utsuri',
    front: 'Black & red pattern specialist',
    back: 'Focuses on bold sumi patterns and deep beni coloration. Winner of multiple regional championships.',
    koiBred: '800+',
    rating: 4.7,
    avatar: 'https://ui-avatars.com/api/?name=Yuki+Nakamura&background=9a3412&color=fff&size=80',
  },
  {
    id: 103,
    name: 'Priya Fernando',
    specialty: 'Butterfly & Ogon',
    front: "Sri Lanka's leading metallic koi breeder",
    back: "Pioneered locally-bred platinum and gold Ogon lines that thrive in Sri Lanka's tropical climate.",
    koiBred: '500+',
    rating: 4.8,
    avatar: 'https://ui-avatars.com/api/?name=Priya+Fernando&background=b45309&color=fff&size=80',
  },
  {
    id: 104,
    name: 'Kenji Watanabe',
    specialty: 'Asagi & Shusui',
    front: 'Blue-scale artisan with rare Asagi lines',
    back: 'Specialises in the ancient Asagi variety and its scaleless twin, Shusui, prized for their serene elegance.',
    koiBred: '650+',
    rating: 4.8,
    avatar: 'https://ui-avatars.com/api/?name=Kenji+Watanabe&background=92400e&color=fff&size=80',
  },
];

const HomeServices = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Our <span className="text-orange-500">Koi</span> Ecosystem
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Everything a koi keeper needs — expert pond services, certified breeders, and a thriving community.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pond Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-orange-500/50 pb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-5 bg-orange-500 rounded-sm" />
              Premium Pond Services
            </h3>
            {serviceCards.map((service) => (
              <div
                key={service.id}
                onClick={() => toggleFlip(`service-${service.id}`)}
                className="relative h-52 cursor-pointer perspective group"
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-[#111] p-6 rounded-2xl shadow-xl shadow-orange-500/10 border border-gray-700/60 flex flex-col backface-hidden transform transition-all duration-500 ${
                    flippedCards[`service-${service.id}`] ? 'opacity-0 rotate-y-180' : 'opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="p-2 rounded-lg bg-orange-500/15 text-orange-400">
                      <service.Icon size={22} />
                    </span>
                    <h4 className="text-base font-semibold text-white">{service.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.front}</p>
                  <div className="mt-auto flex items-center gap-1 text-orange-400 text-sm font-medium">
                    <span>Click to learn more</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-orange-950/40 to-red-950/30 p-6 rounded-2xl shadow-xl shadow-orange-500/20 border border-orange-500/30 flex flex-col backface-hidden transform transition-all duration-500 ${
                    flippedCards[`service-${service.id}`] ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
                  }`}
                >
                  <h4 className="text-base font-semibold mb-2 text-orange-400">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.back}</p>
                  <button className="mt-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold px-5 py-2 rounded-xl shadow-lg transition-transform hover:scale-105 w-max text-sm">
                    Request Service →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Breeders */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-orange-500/50 pb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-5 bg-orange-500 rounded-sm" />
              Certified Breeder Network
            </h3>
            {breederCards.map((breeder) => (
              <div
                key={breeder.id}
                onClick={() => toggleFlip(`breeder-${breeder.id}`)}
                className="relative h-52 cursor-pointer perspective group"
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-[#111] p-6 rounded-2xl shadow-xl shadow-orange-500/10 border border-gray-700/60 flex items-start gap-4 backface-hidden transform transition-all duration-500 ${
                    flippedCards[`breeder-${breeder.id}`] ? 'opacity-0 rotate-y-180' : 'opacity-100'
                  }`}
                >
                  <img
                    src={breeder.avatar}
                    alt={breeder.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-orange-500/50 group-hover:ring-orange-400 transition-all duration-300"
                  />
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-white truncate">{breeder.name}</h4>
                    <p className="text-xs text-orange-400 mb-1">{breeder.specialty}</p>
                    <p className="text-sm text-gray-300 mb-2 line-clamp-2">{breeder.front}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1 text-yellow-400">
                        <Star size={12} fill="currentColor" />
                        {breeder.rating}
                      </span>
                      <span>•</span>
                      <span>{breeder.koiBred} koi bred</span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-orange-950/40 to-red-950/30 p-6 rounded-2xl shadow-xl shadow-orange-500/20 border border-orange-500/30 flex flex-col backface-hidden transform transition-all duration-500 ${
                    flippedCards[`breeder-${breeder.id}`] ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-orange-400" />
                    <h4 className="text-base font-semibold text-orange-400">{breeder.name}</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{breeder.back}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="bg-orange-500/10 text-orange-400 py-1 px-3 rounded-full text-xs border border-orange-500/20">
                      {breeder.specialty}
                    </span>
                    <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold py-2 px-4 rounded-xl text-xs transition-transform hover:scale-105 shadow-md">
                      View Stock →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flip Card Animations */}
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
    </section>
  );
};

export default HomeServices;
