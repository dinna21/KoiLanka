import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaLeaf, FaTrophy } from 'react-icons/fa';
import { koiVarieties } from '../assets/assets';

const WhyChooseUs = () => {
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

  const features = [
    {
      icon: FaShieldAlt,
      title: "Verified Breeders Only",
      description: "Every breeder is thoroughly vetted and certified. Buy with confidence knowing you're getting healthy, authentic koi from trusted sources across Sri Lanka.",
      iconShell: 'bg-orange-500/15 border border-orange-500/35 text-orange-300'
    },
    {
      icon: FaUsers,
      title: "Thriving Community",
      description: "Join thousands of koi enthusiasts, share experiences, get expert advice, and connect with fellow hobbyists from Colombo to Galle.",
      iconShell: 'bg-red-500/15 border border-red-500/35 text-red-300'
    },
    {
      icon: FaLeaf,
      title: "Tropical Advantage",
      description: "Sri Lanka's year-round tropical climate provides perfect conditions for breeding world-class koi. Discover why our island produces exceptional quality fish.",
      iconShell: 'bg-orange-500/10 border border-orange-500/30 text-orange-200'
    },
    {
      icon: FaTrophy,
      title: "Award-Winning Stock",
      description: "Our breeders have won national and international competitions. Access champion bloodlines and show-quality koi right here in Sri Lanka.",
      iconShell: 'bg-red-500/10 border border-red-500/30 text-red-200'
    }
  ];

  const featureImagePrimary = koiVarieties[3]?.image || koiVarieties[0]?.image;
  const featureImageSecondary = koiVarieties[3]?.image || koiVarieties[2]?.image || featureImagePrimary;

  return (
    <Motion.section
      className="relative bg-black text-white pt-6 pb-12 md:pt-10 md:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        `}</style>

        <Motion.div variants={itemVariants} className="text-center mb-1 md:mb-8">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-2">Your Trusted Partner</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Sri Lankan Koi Lovers Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're more than a marketplace—we're the heart of Sri Lanka's koi community, bringing together passion, expertise, and quality
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 mx-auto mt-4" />
        </Motion.div>

        <Motion.div variants={itemVariants} style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="relative w-full max-w-2xl h-[300px] sm:h-[360px] md:h-[390px]">
              <div className="absolute top-4 left-2 sm:left-8 w-[78%] h-[72%] rounded-3xl border border-orange-500/20 overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.45)] rotate-[-8deg]">
                <img
                  className="w-full h-full object-cover"
                  src={featureImageSecondary}
                  alt="Koi variety showcase"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-transparent" />
              </div>

              <div className="absolute bottom-2 right-2 sm:right-6 w-[82%] h-[72%] rounded-3xl border border-red-500/25 overflow-hidden shadow-[0_22px_55px_rgba(0,0,0,0.55)] rotate-[5deg]">
                <img
                  className="w-full h-full object-cover"
                  src={featureImagePrimary}
                  alt="Premium koi highlight"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent" />
              </div>
            </div>

            <div className="space-y-5 md:space-y-6 px-2 md:px-0 w-full">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center justify-center md:justify-start gap-6 max-w-md group">
                  <div className={`p-5 aspect-square rounded-full transition-transform duration-300 group-hover:scale-105 ${feature.iconShell}`}>
                    {React.createElement(feature.icon, { className: 'text-2xl' })}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default WhyChooseUs;
