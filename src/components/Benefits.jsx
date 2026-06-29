import React from 'react';

// Icons using SVG for the 4 benefits
const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D4037" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2h5"></path>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M5 9.5v5"></path>
    <path d="M19 9.5v5"></path>
    <path d="M12 4a8 8 0 0 1 8 8c0 3.3-2 6.2-5 7.5a8.2 8.2 0 0 0-3 .5 8.2 8.2 0 0 0-3-.5c-3-1.3-5-4.2-5-7.5A8 8 0 0 1 12 4z"></path>
    <path d="M14 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"></path>
    <path d="M12 11v4"></path>
    <path d="M10 15h4"></path>
  </svg>
);

const MetabolismIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D4037" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4"></path>
    <path d="M12 18v4"></path>
    <path d="M4.93 4.93l2.83 2.83"></path>
    <path d="M16.24 16.24l2.83 2.83"></path>
    <path d="M2 12h4"></path>
    <path d="M18 12h4"></path>
    <path d="M4.93 19.07l2.83-2.83"></path>
    <path d="M16.24 7.76l2.83-2.83"></path>
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 10v4"></path>
    <path d="M10 12h4"></path>
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D4037" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
    <path d="M12 13l-1.5-1.5"></path>
    <path d="M12 13l1.5-1.5"></path>
    <path d="M9 10h1"></path>
    <path d="M14 15h2"></path>
    <path d="M15 14v2"></path>
  </svg>
);

const LiverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D4037" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 10a6 6 0 0 1 12 0c0 4-3 7-6 9-3-2-6-5-6-9z"></path>
    <path d="M9 13l2 2 4-4"></path>
    <path d="M7 6l2 2"></path>
    <path d="M17 6l-2 2"></path>
    <path d="M12 2v3"></path>
  </svg>
);

// Individual Benefit Card Object
const BenefitCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center text-center group cursor-pointer">
    {/* Circle with shadow and thin-line icon */}
    <div className="w-[120px] h-[120px] mb-5 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 transform group-hover:-translate-y-1">
      {icon}
    </div>
    {/* Label below the circle */}
    <h4 className="text-[17px] sm:text-lg font-semibold text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      {title}
    </h4>
  </div>
);

export default function Benefits() {
  const benefitsList = [
    {
      title: "Improve Cognitive",
      icon: <BrainIcon />
    },
    {
      title: "Boosts Metabolism",
      icon: <MetabolismIcon />
    },
    {
      title: "Improve Heart Health",
      icon: <HeartIcon />
    },
    {
      title: "Supports Liver Health",
      icon: <LiverIcon />
    }
  ];

  return (
    <section id="benefits" className="bg-[#FDF5E6] py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-[13px] font-semibold uppercase tracking-widest text-gray-700 mb-3 block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            TURMERIC BENEFITS
          </span>
          <h2
            className="text-4xl md:text-[3.25rem] font-semibold text-black tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Organic Turmeric
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
          {benefitsList.map((item, index) => (
            <BenefitCard key={index} title={item.title} icon={item.icon} />
          ))}
        </div>

      </div>
    </section>
  );
}
