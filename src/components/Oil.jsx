import React from 'react';
import OilImage from '../assets/oil-image.png';
import CTAButton from './CTAButton';

// Floating leaf SVG
const LeafShape = ({ className }) => (
  <svg
    viewBox="0 0 54 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity: 0.05 }}
  >
    <path
      d="M26.5 0C26.5 0 0 20.5 0 42.5C0 64.5 26.5 85 26.5 85C26.5 85 53 64.5 53 42.5C53 20.5 26.5 0 26.5 0Z"
      stroke="#666"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Feature Icons SVGs
const OilIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    <path d="M12 11v6"></path>
    <path d="M9 14h6"></path>
  </svg>
);

const VitaminIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10l9-7 9 7-9 7-9-7z"></path>
    <path d="M3 14l9 7 9-7"></path>
  </svg>
);

const PolyphenolIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"></circle>
    <circle cx="5" cy="19" r="3"></circle>
    <circle cx="19" cy="19" r="3"></circle>
    <path d="M10.5 7.5l-4 8.5"></path>
    <path d="M13.5 7.5l4 8.5"></path>
    <path d="M8 19h8"></path>
  </svg>
);

const FatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <path d="M3.27 6.96L12 12.01l8.73-5.05"></path>
    <path d="M12 22.08V12"></path>
  </svg>
);

const ChemicalFreeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <path d="M11 8a3 3 0 0 0-3 3"></path>
  </svg>
);

const CarbsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18"></path>
    <path d="M3 12h18"></path>
    <circle cx="12" cy="12" r="4"></circle>
  </svg>
);

// Individual Feature Component
const FeatureItem = ({ align, icon, title, description }) => {
  const isRight = align === 'right'; // text on the left, icon on the right

  return (
    <div className={`flex flex-col-reverse sm:${isRight ? 'flex-row' : 'flex-row-reverse'} items-center gap-5 lg:w-[320px] xl:w-[350px] group`}>
      <div className="flex flex-col items-center sm:items-start flex-1 text-center sm:text-left" style={{ textAlign: isRight ? 'right' : 'left' }}>
        <h4 className={`w-full text-[19px] font-bold text-black mb-1 ${isRight ? 'sm:text-right' : 'sm:text-left'} text-center`} style={{ fontFamily: 'Inter, sans-serif' }}>
          {title}
        </h4>
        <p className={`w-full text-[15px] text-[#4B5563] leading-snug ${isRight ? 'sm:text-right' : 'sm:text-left'} text-center`} style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
      </div>
      <div className="shrink-0 w-[68px] h-[68px] rounded-full border-[1.5px] border-black flex items-center justify-center bg-white group-hover:shadow-md transition-shadow">
        {icon}
      </div>
    </div>
  );
};
const FeatureItem1 = ({ align, icon, title, description }) => {
  const isRight = align === 'right'; // text on the left, icon on the right

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-5 lg:w-[320px] xl:w-[350px] group`}>

      <div className="shrink-0 w-[68px] h-[68px] rounded-full border-[1.5px] border-black flex items-center justify-center bg-white group-hover:shadow-md transition-shadow">
        {icon}
      </div>
      <div className="flex flex-col items-center sm:items-start flex-1 text-center sm:text-left" style={{ textAlign: isRight ? 'right' : 'left' }}>
        <h4 className={`w-full text-[19px] font-bold text-black mb-1 ${isRight ? 'sm:text-right' : 'sm:text-left'} text-center`} style={{ fontFamily: 'Inter, sans-serif' }}>
          {title}
        </h4>
        <p className={`w-full text-[15px] text-[#4B5563] leading-snug ${isRight ? 'sm:text-right' : 'sm:text-left'} text-center`} style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Oil() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Decorative Floating Leaves */}
      <LeafShape className="absolute top-10 left-10 w-8 h-12 transform -rotate-45" />
      <LeafShape className="absolute top-40 right-20 w-10 h-14 transform rotate-12" />
      <LeafShape className="absolute bottom-40 left-1/4 w-8 h-12 transform rotate-45" />
      <LeafShape className="absolute top-1/2 left-8 w-6 h-10 transform -rotate-12" />
      <LeafShape className="absolute bottom-20 right-1/4 w-12 h-16 transform -rotate-45" />
      <LeafShape className="absolute bottom-10 right-10 w-8 h-12 transform rotate-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-[13px] font-semibold uppercase tracking-widest text-[#4B5563] mb-3 block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            OUR FEATURES
          </span>
          <h2
            className="text-4xl md:text-[3.25rem] md:leading-tight font-bold text-black"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The Perfect Blend
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4 xl:gap-8">

          {/* Left Features */}
          <div className="flex flex-col gap-8 lg:gap-16 sm:w-full lg:w-auto items-center lg:items-end order-2 lg:order-1">
            <FeatureItem
              align="right"
              icon={<OilIcon />}
              title="Oils"
              description="lipids, including triglycerides and phospholipids."
            />
            <FeatureItem
              align="right"
              icon={<VitaminIcon />}
              title="Vitamins"
              description="Traces of vitamins like B, C, and E."
            />
            <FeatureItem
              align="right"
              icon={<PolyphenolIcon />}
              title="Polyphenols"
              description="Antioxidants that help protect against cell damage."
            />
          </div>

          {/* Center Image */}
          <div className="w-full sm:w-[80%] lg:w-[480px] xl:w-[540px] shrink-0 flex justify-center order-1 lg:order-2 px-4 sm:px-0">
            <img
              // Providing a generic placeholder, the user intends to replace it or use a specific image.
              src={OilImage}
              alt="Turmeric product pouches and roots"
              className=""
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-8 lg:gap-16 sm:w-full lg:w-auto items-center lg:items-start order-3 lg:order-3">
            <FeatureItem1
              align="left"
              icon={<FatIcon />}
              title="Dietary Fats"
              description="Enzymes, acids, and other nitrogenous compounds."
            />
            <FeatureItem1
              align="left"
              icon={<ChemicalFreeIcon />}
              title="Chemical Free"
              description="A stimulant that provides energy and alertness."
            />
            <FeatureItem1
              align="left"
              icon={<CarbsIcon />}
              title="Carbohydrates"
              description="Mainly in the form of sugars and starches."
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-12 lg:mt-0 order-4">
          <CTAButton
            text="ORDER NOW"
            onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>

      </div>
    </section>
  );
}
