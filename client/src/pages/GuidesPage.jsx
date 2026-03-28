import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import communityImage1 from '../assets/community1.jpg';

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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const chapters = [
  {
    id: 'pond-setup',
    chapterLabel: 'Chapter 01',
    heading: 'Setting Up Your Koi Pond',
    highlight:
      'Minimum 5,000 litres for 5 koi. Minimum depth 1.5 metres. Avoid full sun more than 6 hours daily.',
    paragraphs: [
      'Koi need space and clean water above everything else. Size your pond for the fish you plan to keep at least 1,000 litres per adult koi and always build bigger than you think you need.',
      'EPDM rubber liner is the best choice for most home ponds. Avoid placing the pond in full sun all day partial shade prevents algae blooms and temperature spikes.',
    ],
    stats: [
      { label: 'Min Volume', value: '5,000 L', note: 'Up to 5 koi' },
      { label: 'Per Koi', value: '1,000 L', note: 'Minimum allowance' },
      { label: 'Min Depth', value: '1.5 m', note: 'Temperature stability' },
      { label: 'Max Sun', value: '6 hrs', note: 'Prevent algae' },
    ],
    alternateBg: false,
  },
  {
    id: 'water-quality',
    chapterLabel: 'Chapter 02',
    heading: 'Mastering Water Quality',
    highlight:
      'Ammonia and nitrite must always be zero. pH 7.0 to 8.0. Weekly 10-20% water changes. Cycle your pond 4-8 weeks before adding fish.',
    paragraphs: [
      'Water quality is everything in koi keeping. Koi excrete ammonia constantly your filter converts it to nitrite, then to harmless nitrate through the nitrogen cycle. Never add fish to an uncycled pond.',
      'Test your water weekly with a liquid test kit. Do a 10 to 20 percent water change every week and always dechlorinate tap water before it enters the pond.',
    ],
    stats: [
      { label: 'pH', value: '7.0-8.0', note: 'Slightly alkaline' },
      { label: 'Ammonia', value: '0 ppm', note: 'Zero at all times' },
      { label: 'Water Change', value: '10-20%', note: 'Every week' },
      { label: 'Cycle Time', value: '4-8 wks', note: 'Before fish' },
    ],
    alternateBg: true,
  },
  {
    id: 'choosing-koi',
    chapterLabel: 'Chapter 03',
    heading: 'Selecting Healthy Koi',
    highlight:
      'Buy fewer, better quality fish. Check body shape, white skin clarity, and swimming posture before purchasing.',
    paragraphs: [
      'A healthy koi has a deep torpedo-shaped body, brilliant white skin with no yellowing, and swims horizontally with all fins active. Avoid fish with clamped fins, ulcers, or that hang near the surface.',
      'Three excellent koi in a well-managed pond will always outshine twenty poor-quality fish. Buy the best you can afford koi improve with age and good nutrition.',
    ],
    stats: [
      { label: 'Body', value: 'Torpedo', note: 'Deep, wide shoulder' },
      { label: 'Shiroji', value: 'Pure White', note: 'No yellowing' },
      { label: 'Starter', value: '3-5 Fish', note: 'Per 5,000 litres' },
      { label: 'Swim', value: 'Horizontal', note: 'Active fins' },
    ],
    alternateBg: false,
  },
  {
    id: 'feeding',
    chapterLabel: 'Chapter 04',
    heading: 'Feeding Your Koi',
    highlight:
      'Feed only what koi eat in 5 minutes. Stop feeding completely below 10 degrees C. Switch to wheatgerm pellets below 18 degrees C.',
    paragraphs: [
      'Feed a high-protein pellet 2 to 3 times daily in warm months. Remove any uneaten food within 5 minutes decomposing food is a major cause of ammonia spikes and poor water quality.',
      'Temperature controls koi digestion completely. As water cools, reduce feeding frequency and switch to easier-to-digest wheatgerm. Below 10 degrees stop feeding entirely.',
    ],
    stats: [
      { label: 'Feed Time', value: '5 min', note: 'Remove leftovers' },
      { label: 'Warm Season', value: '2-3x day', note: 'Above 20C' },
      { label: 'Cool Season', value: 'Once day', note: '12-18C' },
      { label: 'Stop Feeding', value: 'Below 10C', note: 'Semi-dormant' },
    ],
    alternateBg: true,
  },
  {
    id: 'health-care',
    chapterLabel: 'Chapter 05',
    heading: 'Keeping Koi Healthy',
    highlight:
      'Watch your koi daily before feeding. Quarantine all new fish for 3-4 weeks. Salt at 3-5 g/L helps with stress and minor infections.',
    paragraphs: [
      'Daily observation is your best health tool. A koi that isolates itself, sits at the bottom, or loses appetite needs attention immediately. Catching problems early makes treatment far more effective.',
      'Never skip quarantine for new arrivals. A single infected fish can wipe out an entire pond in days. Four weeks of isolation protects everything you have built.',
    ],
    stats: [
      { label: 'Observe', value: 'Daily', note: 'Before feeding' },
      { label: 'Quarantine', value: '3-4 wks', note: 'All new fish' },
      { label: 'Salt Dose', value: '3-5 g/L', note: 'Stress relief' },
      { label: 'Act', value: 'Immediately', note: 'First sign of illness' },
    ],
    alternateBg: false,
  },
  {
    id: 'breeding',
    chapterLabel: 'Chapter 06',
    heading: 'Breeding Koi Fish',
    highlight:
      'Spawn at 18-20 degrees C in spring. Use 1 female to 2 males. Remove adults immediately after spawning koi eat their own eggs.',
    paragraphs: [
      'Koi spawn naturally when spring water warms to 18 to 20 degrees Celsius. Select a plump female aged 3 years or older and two active males. Provide spawning mops or brushes for egg attachment.',
      'Eggs hatch in 3 to 4 days. Remove parents immediately after spawning. Feed fry specialist fry food and begin culling deformed fish early a good spawn can produce over 100,000 eggs.',
    ],
    stats: [
      { label: 'Spawn Temp', value: '18-20C', note: 'Spring warmth' },
      { label: 'Female Age', value: '3+ yrs', note: 'Mature and plump' },
      { label: 'Hatch Time', value: '3-4 days', note: 'At 20 degrees C' },
      { label: 'Ratio', value: '1F : 2M', note: 'Best breeding trio' },
    ],
    alternateBg: true,
  },
  {
    id: 'growth-tips',
    chapterLabel: 'Chapter 07',
    heading: 'Maximising Koi Growth',
    highlight:
      "Three pillars of growth: water volume, water quality, and nutrition. In Sri Lanka koi can grow year-round thanks to warm water temperatures.",
    paragraphs: [
      'Koi grow fastest in large ponds with excellent water quality and consistent high-protein feeding. Stunted koi often recover quickly when moved to a larger system space is the most underrated growth factor.',
      "Feed a 38 to 42 percent protein growth formula twice daily throughout the warm season. Sri Lanka's warm climate allows year-round growth that temperate countries cannot match use that advantage.",
    ],
    stats: [
      { label: 'Max Size', value: '90+ cm', note: 'Champion koi' },
      { label: 'Lifespan', value: '30+ yrs', note: 'With good care' },
      { label: 'Protein', value: '38-42%', note: 'Growth formula' },
      { label: 'Growth', value: 'Year-round', note: 'Sri Lanka climate' },
    ],
    alternateBg: false,
  },
];

const chapterPills = [
  { id: 'pond-setup', label: 'Pond Setup' },
  { id: 'water-quality', label: 'Water Quality' },
  { id: 'choosing-koi', label: 'Choosing Koi' },
  { id: 'feeding', label: 'Feeding' },
  { id: 'health-care', label: 'Health & Care' },
  { id: 'breeding', label: 'Breeding' },
  { id: 'growth-tips', label: 'Growth Tips' },
];

const chapterDurations = ['2 mins', '4 mins', '3 mins', '3 mins', '3 mins', '4 mins', '3 mins'];

function SquareGridBackdrop({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
  );
}

function TimelineStep({ chapter, duration, reduceMotion }) {
  return (
    <Motion.section
      id={chapter.id}
      variants={sectionVariants}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.15 }}
      className="relative pl-14 sm:pl-20 md:pl-24 pb-14 sm:pb-16"
    >
      <Motion.div
        className="absolute left-[15px] sm:left-[27px] md:left-[35px] top-1 h-6 w-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 shadow-[0_0_22px_rgba(239,68,68,0.45)]"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
      />

      <Motion.div variants={itemVariants} className="max-w-4xl">
        <p className="text-sm text-gray-400 mb-2">{duration}</p>

        <p className="inline-flex border border-orange-500/30 bg-orange-500/10 text-orange-300 text-[11px] uppercase tracking-[0.2em] rounded-full px-3 py-1 mb-4">
          {chapter.chapterLabel}
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{chapter.heading}</h2>
        <div className="h-0.5 w-20 bg-gradient-to-r from-orange-500 to-red-600 mt-4 mb-4" />

        <p className="text-sm sm:text-base text-orange-200 leading-relaxed mb-4">{chapter.highlight}</p>

        {chapter.paragraphs.map((paragraph) => (
          <p key={`${chapter.id}-${paragraph}`} className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 last:mb-0">
            {paragraph}
          </p>
        ))}

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
          {chapter.stats.map((stat, statIndex) => (
            <p key={`${chapter.id}-${stat.label}`} className="text-xs sm:text-sm text-gray-300">
              <span className="text-orange-300">{stat.label}:</span> {stat.value} <span className="text-gray-400">{stat.note}</span>
              {statIndex < chapter.stats.length - 1 ? <span className="text-gray-600 ml-3">|</span> : null}
            </p>
          ))}
        </div>
      </Motion.div>
    </Motion.section>
  );
}

function BottomStyleCard({ title, price, subtitle, badge }) {
  return (
    <Motion.article
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl border border-orange-500/20 bg-[#0f0f12]/90 p-6 sm:p-7"
    >
      <SquareGridBackdrop className="opacity-20" />
      {badge ? (
        <span className="absolute left-6 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      ) : null}

      <div className="relative z-10 pt-7">
        <p className="text-xs uppercase tracking-wider text-gray-300">{title}</p>
        <p className="mt-4 text-4xl font-bold text-white">{price}</p>
        <p className="mt-3 text-base text-gray-300">{subtitle}</p>
        <div className="mt-6 h-px w-full bg-white/10" />
        <p className="mt-5 text-2xl font-semibold text-white">What&apos;s Included</p>
      </div>
    </Motion.article>
  );
}

function BottomStructureSection({ reduceMotion }) {
  return (
    <Motion.section
      variants={sectionVariants}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.15 }}
      className="px-4 sm:px-6 md:px-10 pb-12"
    >
      <div className="max-w-7xl mx-auto relative rounded-[28px] border border-orange-500/10 bg-[#111114] px-4 sm:px-6 md:px-8 pt-16 md:pt-20 pb-10 md:pb-12 overflow-hidden">
        <SquareGridBackdrop className="opacity-25" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-40 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-14 right-10 h-44 w-60 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-end">
          <BottomStyleCard
            title="Guided Learning Track"
            price="159"
            subtitle="Structured timeline with practical koi milestones."
            badge="Best Value"
          />
          <BottomStyleCard
            title="Advanced Koi Track"
            price="399"
            subtitle="Full-depth progression for serious keepers."
          />
        </div>
      </div>
    </Motion.section>
  );
}

export default function GuidesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#121212] text-white pt-28 md:pt-32">
      <div className="absolute -top-24 -left-14 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-14 h-72 w-72 rounded-full bg-red-500/15 blur-3xl pointer-events-none" />

      <Motion.section
        variants={sectionVariants}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.15 }}
        className="px-4 sm:px-6 md:px-10 pb-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <Motion.p
            variants={itemVariants}
            className="inline-flex border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs uppercase tracking-[0.2em] rounded-full px-4 py-1"
          >
            Complete Koi Keeping Guide
          </Motion.p>

          <Motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 leading-tight">
            Everything You Need to Know About <span className="text-orange-500">Keeping Koi</span>
          </Motion.h1>

          <Motion.div
            variants={itemVariants}
            className="h-1 w-28 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 mx-auto mt-5"
          />

          <Motion.p variants={itemVariants} className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto text-center mt-5">
            From pond setup to breeding - a quick visual guide for every stage of your koi keeping journey.
          </Motion.p>

          <Motion.div
            variants={itemVariants}
            className="mt-8 overflow-hidden rounded-2xl border border-orange-500/25 bg-gradient-to-br from-[#1e1e1e] to-[#121212]"
          >
            <img
              src={communityImage1}
              alt="Golden koi fish swimming in reflective pond water"
              loading="lazy"
              decoding="async"
              className="h-52 sm:h-64 md:h-72 w-full object-cover"
            />
          </Motion.div>
        </div>
      </Motion.section>

      <div className="sticky top-[64px] z-40 bg-[#121212]/95 backdrop-blur-sm border-b border-orange-500/10 py-3 px-4">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide flex gap-3 justify-start md:justify-center">
          {chapterPills.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="text-xs uppercase tracking-widest text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 hover:border-orange-500/50 hover:text-orange-300 transition whitespace-nowrap"
            >
              {chapter.label}
            </a>
          ))}
        </div>
      </div>

      <section className="px-4 sm:px-6 md:px-10 py-12 sm:py-14 bg-[#121212]">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-white/5 bg-[#101012] px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          <SquareGridBackdrop className="opacity-15" />
          <div className="absolute left-[26px] sm:left-[38px] md:left-[46px] top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/70 via-red-500/70 to-orange-400/50" />

          <div className="relative z-10">
            {chapters.map((chapter, index) => (
              <TimelineStep
                key={chapter.id}
                chapter={chapter}
                reduceMotion={reduceMotion}
                duration={chapterDurations[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <BottomStructureSection reduceMotion={reduceMotion} />

      <section className="px-0 pb-1">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-[#202020] via-[#2b2b2b] to-[#171717] p-8 md:p-12 text-center mx-4 sm:mx-6 md:mx-10 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Koi Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Connect with breeders, explore services, or shop for your first koi today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg hover:shadow-[0_8px_20px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Browse Services
            </Link>
            <Link
              to="/shop"
              className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Shop Koi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
