import TrustStrip from '../components/TrustStrip'
import OurStory from '../components/OurStory'
import HowItWorks from '../components/HowItWorks'
import FeaturedProducts from '../components/FeaturedProducts'
import NumberStats from '../components/NumberStats'
import WhyChooseUs from '../components/WhyChooseUs'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeFAQ from '../components/HomeFAQ'
import SEO from '../components/SEO'
import WhatsAppCTA from '../components/WhatsAppCTA'
import FadeInUp from '../components/FadeInUp'

import HomeHeroImg from '../assets/images/A_creative,_high-end_food_art_202606152256.jpeg'
import HomeBiryaniImg from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpeg'
import HomeSpiceImg from '../assets/images/High-end_retail_product_display_photography_202606152328.jpeg'

export default function HomePage() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <SEO title="Fresh Homemade Food Delivery" />

      {/* ── HERO SECTION ── */}
      <section id="hero-section" className="w-full bg-white py-16 lg:py-28 relative overflow-hidden min-h-[auto] lg:min-h-[90vh] flex items-center">
        {/* Glow Filters */}
        <div className="absolute top-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] rounded-full bg-[#214D41]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-[#548E0A]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 w-full items-center">

          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#214D41]/8 text-[#214D41] text-xs font-medium uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#548E0A] animate-pulse" />
              <span>Fresh Daily · Homemade · Lahore</span>
            </div>

            <h1
              className="text-[#214D41] font-black tracking-tight leading-none"
              style={{
                fontSize: 'clamp(32px, 5.5vw, 62px)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              REAL HOMEMADE FOOD. <br />
              <span className="text-[#548E0A]">DELIVERED TODAY.</span>
            </h1>

            <p className="text-[#214D41] font-medium text-[24px] sm:text-[30px] leading-normal">
              Cooked this morning. At your door today. That's how it works — every single day.
            </p>

            <p className="text-gray-500 text-sm sm:text-base max-w-[485px] leading-relaxed">
              Not restaurant food. Not reheated food. The kind of food you grew up eating — made fresh every morning in a home kitchen and delivered to your door in Lahore before it gets a chance to go cold.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full">
              {[
                { label: 'Cooked Today', color: 'bg-white border-[#548E0A]/30 text-[#548E0A]' },
                { label: 'Delivered Today', color: 'bg-[#214D41] border-transparent text-white' },
                { label: 'Lahore Sourced', color: 'bg-white border-gray-200 text-black' },
              ].map(pill => (
                <span key={pill.label} className={`${pill.color} border px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider shadow-sm`}>
                  {pill.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full pt-2">
              <button
                type="button"
                onClick={() => document.getElementById('featured-products-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#548E0A] hover:bg-[#214D41] text-white font-medium px-8 py-4.5 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 transform flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider shadow-md w-full sm:w-auto"
              >
                <span>See Today's Menu</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
              <WhatsAppCTA className="w-full sm:w-auto" />
            </div>

            {/* Live note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#548E0A] shrink-0 animate-ping" />
              <span>Fresh stock ready now — limited daily portions</span>
            </div>
          </div>

          {/* Right Column - Modern Asymmetric Editorial Grid */}
          <div className="lg:col-span-6 w-full flex items-center justify-center mt-8 lg:mt-0">
            
            {/* Mobile Single Image */}
            <div className="lg:hidden w-full max-w-[400px] relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] bg-white border-4 border-white mb-4">
              <img
                src={HomeHeroImg}
                alt="Organic Table Gatherings"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-sm border border-white/40">
                <span className="text-[10px] uppercase tracking-widest text-[#548E0A] font-extrabold block">Lahore Kitchen</span>
                <span className="text-xs font-bold text-[#214D41] block mt-0.5">Family-cooked daily</span>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-12 gap-4 w-full max-w-[500px]">
              {/* Main Tall Image (Family Kitchen / Cooking) */}
              <div className="col-span-7 relative rounded-[32px] overflow-hidden shadow-2xl aspect-3/4 bg-white border-4 border-white group">
                <img
                  src={HomeHeroImg}
                  alt="Organic Table Gatherings"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating glassmorphic tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-sm border border-white/40">
                  <span className="text-[10px] uppercase tracking-widest text-[#548E0A] font-extrabold block">Lahore Kitchen</span>
                  <span className="text-xs font-bold text-[#214D41] block mt-0.5">Family-cooked daily</span>
                </div>
              </div>

              {/* Stack of secondary items */}
              <div className="col-span-5 flex flex-col gap-4 justify-center">
                {/* Top square image (Biryani plate) */}
                <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-square bg-white border-4 border-white group">
                  <img
                    src={HomeBiryaniImg}
                    alt="Chicken Biryani"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#548E0A] text-white text-[8px] font-normal uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
                    Fresh
                  </div>
                </div>

                {/* Bottom square image (Spices) */}
                <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-square bg-white border-4 border-white group col-span-1">
                  <img
                    src={HomeSpiceImg}
                    alt="Spices"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Small badge overlay */}
                  <div className="absolute inset-0 bg-[#214D41]/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Floating Organic Quality Stamp */}
                <div className="bg-[#548E0A] text-[#FDF5E6] rounded-[24px] p-4 flex flex-col justify-center items-center text-center shadow-lg border border-[#548E0A]/20">
                  <span className="text-[20px] font-black leading-none">100%</span>
                  <span className="text-[8px] font-medium uppercase tracking-widest mt-1">Homemade Food</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <FadeInUp><TrustStrip variant="classic" /></FadeInUp>
      <FadeInUp><FeaturedProducts variant="classic" /></FadeInUp>
      <FadeInUp><OurStory variant="classic" /></FadeInUp>
      <FadeInUp><HowItWorks variant="classic" /></FadeInUp>
      <FadeInUp><NumberStats variant="classic" /></FadeInUp>
      <FadeInUp><WhyChooseUs variant="classic" /></FadeInUp>
      <FadeInUp><HomeTestimonials variant="classic" /></FadeInUp>
      <FadeInUp><HomeFAQ variant="classic" /></FadeInUp>

    </div>
  )
}
