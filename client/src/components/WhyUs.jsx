import React from 'react';
import { ShieldCheck, Truck, Users, BookOpen, HeartHandshake, Microscope } from 'lucide-react';

const features = [
  {
    Icon: ShieldCheck,
    title: 'Verified Quality',
    description: 'Every koi is health-checked and graded before listing. Buy with total confidence.',
  },
  {
    Icon: Truck,
    title: 'Island-Wide Delivery',
    description: 'Safe, oxygen-packed delivery to your door — anywhere in Sri Lanka.',
  },
  {
    Icon: Users,
    title: 'Breeder Community',
    description: 'Join a network of passionate breeders and hobbyists sharing expertise daily.',
  },
  {
    Icon: BookOpen,
    title: 'Expert Guides',
    description: 'Step-by-step care guides for every skill level — from first-time pond owners to champions.',
  },
  {
    Icon: Microscope,
    title: 'Water Testing Lab',
    description: 'On-site water analysis service to keep your pond parameters perfect year-round.',
  },
  {
    Icon: HeartHandshake,
    title: 'After-Sale Support',
    description: 'Our koi experts are just a call away, whenever you need guidance or help.',
  },
];

const WhyUs = () => (
  <section className="bg-[#111] py-20 px-4 sm:px-8 text-white">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-2 block">
          Why Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Why <span className="text-orange-500">KoiCare</span>Lanka?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          We're more than a marketplace — we're Sri Lanka's complete koi ecosystem, built by hobbyists for hobbyists.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mt-4" />
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const FeatureIcon = feature.Icon;
          return (
            <div
              key={feature.title}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-gray-800 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <FeatureIcon size={22} />
                </span>
                <h3 className="font-semibold text-white text-base">{feature.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyUs;
