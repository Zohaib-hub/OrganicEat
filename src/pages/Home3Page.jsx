import TrustStrip from '../components/TrustStrip'
import OurStory from '../components/OurStory'
import HowItWorks from '../components/HowItWorks'
import FeaturedProducts from '../components/FeaturedProducts'
import NumberStats from '../components/NumberStats'
import WhyChooseUs from '../components/WhyChooseUs'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeFAQ from '../components/HomeFAQ'

import { BRAND } from '../config/constants'

import HomeHeroImg from '../assets/images/A_creative,_high-end_food_art_202606152256.jpg'
import HomeBiryaniImg from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpg'
import HomeSpiceImg from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'

export default function Home3Page() {
  return (
    <div className="w-full bg-[#FFEDD0] font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO — PREMIUM WARM BENTO (Home 3)
      ══════════════════════════════════════════════ */}
      <section
        id="hero-section-premium"
        className="w-full relative overflow-hidden flex items-center min-h-screen"
        style={{ background: '#FFEDD0' }}
      >
        {/* Decorative floating orbs */}
        <div className="absolute top-[12%] right-[8%] w-24 h-24 rounded-full bg-[#007859]/10 blur-2xl pointer-events-none animate-float" />
        <div className="absolute bottom-[30%] left-[5%] w-32 h-32 rounded-full bg-[#007859]/8 blur-3xl pointer-events-none animate-float-delayed" />
        <div className="absolute top-[40%] left-[40%] w-16 h-16 rounded-full border-2 border-[#007859]/15 pointer-events-none animate-float" />

        {/* Bottom green wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="#007859" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 w-full items-center pt-28 pb-32 lg:pt-32 lg:pb-40">

          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#007859]/30 bg-white/50 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#007859] animate-pulse" />
              <span className="text-black text-xs font-bold uppercase tracking-wider">Fresh Daily · Homemade · Lahore</span>
            </div>

            <div
              className="relative w-full animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-[#007859] hidden lg:block" />
              <h1
                className="text-black font-bold leading-none lg:pl-6"
                style={{
                  fontSize: 'clamp(40px, 5.5vw, 60px)',
                  letterSpacing: '-0.03em',
                }}
              >
                REAL HOMEMADE FOOD.
                <span className="block mt-4">
                  <span className="inline-block bg-[#007859] text-white px-6 py-2 rounded-full tracking-wide" style={{ fontSize: '0.85em' }}>
                    DELIVERED TODAY.
                  </span>
                </span>
              </h1>
            </div>

            <p
              className="text-black font-semibold leading-normal animate-fade-up"
              style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', animationDelay: '0.3s' }}
            >
              Cooked this morning. At your door today. That's how it works — every single day.
            </p>

            <p
              className="text-black/70 text-sm sm:text-base max-w-[485px] leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              Not restaurant food. Not reheated food. The kind of food you grew up eating — made fresh every morning in a home kitchen and delivered to your door in Lahore before it gets a chance to go cold.
            </p>

            {/* Pills */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              {[
                { label: 'Cooked Today', style: 'bg-white border-[#007859]/40 text-black' },
                { label: 'Delivered Today', style: 'bg-[#007859] border-[#007859] text-white' },
                { label: 'Lahore Sourced', style: 'bg-white border-black/15 text-black' },
              ].map(pill => (
                <span key={pill.label} className={`${pill.style} border px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm`}>
                  {pill.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full pt-2 animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button
                type="button"
                onClick={() => document.getElementById('featured-products-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#007859] hover:bg-[#005a42] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 flex items-center gap-2.5 text-sm uppercase tracking-wider shadow-md"
              >
                <span>See Today's Menu</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
              <a
                href={BRAND.whatsappOrderMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#007859] hover:bg-[#007859]/15 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2.5 text-sm uppercase tracking-wider"
              >
                Order on WhatsApp
              </a>
            </div>

            {/* Live note */}
            <div
              className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-black/60 uppercase tracking-wider mt-1 animate-fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#007859] shrink-0 animate-ping" />
              <span>Fresh stock ready now — limited daily portions</span>
            </div>
          </div>

          {/* Right Column — Bento Grid */}
          <div className="w-full flex items-center justify-center mt-8 lg:mt-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-12 grid-rows-6 gap-3 w-full max-w-[520px] h-[480px] sm:h-[520px]">
              {/* Main tall image */}
              <div className="col-span-7 row-span-6 relative rounded-[28px] overflow-hidden shadow-2xl border-4 border-white group animate-float">
                <img
                  src={HomeHeroImg}
                  alt="Organic Table Gatherings"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFEDD0]/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#007859]/20">
                  <span className="text-[10px] uppercase tracking-widest text-[#007859] font-extrabold block">Lahore Kitchen</span>
                  <span className="text-xs font-bold text-black block mt-0.5">Family-cooked daily</span>
                </div>
              </div>

              {/* Biryani */}
              <div className="col-span-5 row-span-3 relative rounded-[20px] overflow-hidden shadow-xl border-4 border-white group animate-float-delayed">
                <img
                  src={HomeBiryaniImg}
                  alt="Chicken Biryani"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#007859] text-white text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
                  Fresh
                </div>
              </div>

              {/* Spices */}
              <div className="col-span-5 row-span-2 relative rounded-[20px] overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src={HomeSpiceImg}
                  alt="Spices"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 100% badge */}
              <div className="col-span-5 row-span-1 bg-[#007859] text-white rounded-[20px] p-3 flex flex-col justify-center items-center text-center shadow-lg border-2 border-[#007859] hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-black leading-none">100%</span>
                <span className="text-[7px] font-bold uppercase tracking-widest mt-0.5">Homemade Food</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip variant="premium" />
      <FeaturedProducts variant="premium" />
      <OurStory variant="premium" />
      <HowItWorks variant="premium" />
      <NumberStats variant="premium" />
      <WhyChooseUs variant="premium" />
      <HomeTestimonials variant="premium" />
      <HomeFAQ variant="premium" />

    </div>
  )
}
