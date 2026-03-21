'use client';

import React from 'react';
import { FaShieldAlt, FaUsers, FaLeaf, FaTrophy } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => (
  <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
      <Icon className="text-white text-2xl" />
    </div>

    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
      {title}
    </h3>

    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>

    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Verified Breeders Only",
      description: "Every breeder is thoroughly vetted and certified. Buy with confidence knowing you're getting healthy, authentic koi from trusted sources across Sri Lanka.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FaUsers,
      title: "Thriving Community",
      description: "Join thousands of koi enthusiasts, share experiences, get expert advice, and connect with fellow hobbyists from Colombo to Galle.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: FaLeaf,
      title: "Tropical Advantage",
      description: "Sri Lanka's year-round tropical climate provides perfect conditions for breeding world-class koi. Discover why our island produces exceptional quality fish.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaTrophy,
      title: "Award-Winning Stock",
      description: "Our breeders have won national and international competitions. Access champion bloodlines and show-quality koi right here in Sri Lanka.",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-2">Your Trusted Partner</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Sri Lankan Koi Lovers Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We&apos;re more than a marketplace—we&apos;re the heart of Sri Lanka&apos;s koi community, bringing together passion, expertise, and quality
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
