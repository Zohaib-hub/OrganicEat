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

export default function Home1Page() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO — DARK GLASSMORPHIC (Demo 1)
      ══════════════════════════════════════════════ */}
      <section
        id="hero-section-new"
        className="w-full relative overflow-hidden flex items-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #071a14 0%, #0a2e22 45%, #0d3b2c 100%)',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {/* ── Decorative blobs ── */}
        <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,142,10,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(33,77,65,0.35) 0%, transparent 70%)' }} />
        {/* Fine dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col justify-center gap-8 lg:pr-12">

            {/* Live pill */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-pulse shrink-0" />
              <span className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.2em]">Fresh Daily · Homemade · Lahore</span>
            </div>

            {/* Main headline */}
            <div>
              <h1
                className="text-white font-black leading-[0.92] tracking-[-0.04em]"
                style={{ fontSize: 'clamp(52px, 7.5vw, 96px)' }}
              >
                REAL<br />
                HOMEMADE<br />
                <span style={{ WebkitTextStroke: '2px #548E0A', color: 'transparent' }}>FOOD.</span>
              </h1>
              <h2
                className="font-black leading-none tracking-[-0.03em] mt-2"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#548E0A' }}
              >
                DELIVERED TODAY.
              </h2>
            </div>

            {/* Sub-headline */}
            <p className="text-white/80 font-medium leading-relaxed max-w-[480px]" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
              Cooked this morning. At your door today.<br />
              That's how it works — every single day.
            </p>

            {/* Body copy */}
            <p className="text-white/45 text-sm leading-relaxed max-w-[440px]">
              Not restaurant food. Not reheated food. The kind of food you grew up eating — made fresh every morning in a home kitchen and delivered to your door in Lahore before it gets a chance to go cold.
            </p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Cooked Today', bg: 'rgba(84,142,10,0.15)', border: 'rgba(84,142,10,0.4)', color: '#8bc34a' },
                { label: 'Delivered Today', bg: 'rgba(33,77,65,0.8)', border: 'rgba(84,142,10,0.3)', color: '#fff' },
                { label: 'Lahore Sourced', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' },
              ].map(pill => (
                <span
                  key={pill.label}
                  className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm"
                  style={{ background: pill.bg, border: `1px solid ${pill.border}`, color: pill.color }}
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => document.getElementById('featured-products-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-3 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #548E0A, #6aad0c)', color: '#fff', boxShadow: '0 8px 32px rgba(84,142,10,0.35)' }}
              >
                <span>See Today's Menu</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              </button>

              <a
                href={BRAND.whatsappOrderMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'rgba(37,211,102,0.12)', border: '1.5px solid rgba(37,211,102,0.4)', color: '#25D366' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>

            {/* Stock indicator */}
            <div className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-ping shrink-0" />
              Fresh stock ready now — limited daily portions
            </div>
          </div>

          {/* ── RIGHT: Visual Mosaic ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-[520px]">

              {/* Big main image */}
              <div
                className="rounded-[40px] overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/5', border: '3px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src={HomeHeroImg}
                  alt="Home Kitchen Cooking"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.85)' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 rounded-[40px]" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(7,26,20,0.9) 100%)' }} />

                {/* Bottom tag */}
                <div className="absolute bottom-6 left-6 right-6" style={{ background: 'rgba(7,26,20,0.75)', backdropFilter: 'blur(12px)', borderRadius: '16px', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: '#548E0A' }}>Lahore Kitchen</span>
                  <span className="block text-white font-bold text-sm mt-0.5">Family-cooked daily</span>
                </div>
              </div>

              {/* Floating card — top right */}
              <div
                className="absolute -top-6 -right-8 rounded-[28px] overflow-hidden shadow-2xl"
                style={{ width: '170px', height: '170px', border: '3px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src={HomeBiryaniImg}
                  alt="Chicken Biryani"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-wider" style={{ background: '#548E0A', color: '#fff' }}>
                  Fresh
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div
                className="absolute -bottom-6 -right-8 rounded-[28px] overflow-hidden shadow-2xl"
                style={{ width: '155px', height: '155px', border: '3px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src={HomeSpiceImg}
                  alt="Spices"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating 100% badge — left */}
              <div
                className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center rounded-[24px] shadow-2xl"
                style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #548E0A, #6aad0c)', border: '3px solid rgba(255,255,255,0.15)' }}
              >
                <span className="text-white font-black text-xl leading-none">100%</span>
                <span className="text-white/80 text-[8px] font-bold uppercase tracking-widest mt-1">Homemade Food</span>
              </div>

              {/* Floating stat chip */}
              <div
                className="absolute top-[38%] -right-14 flex items-center gap-2 rounded-2xl px-4 py-3"
                style={{ background: 'rgba(7,26,20,0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(84,142,10,0.3)', minWidth: '140px' }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(84,142,10,0.2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#548E0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">Ready by 10AM</p>
                  <p className="text-white/40 text-[9px] mt-0.5">Every morning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,26,20,0.6))' }} />
      </section>

      <TrustStrip variant="glass" />
      <FeaturedProducts variant="glass" />
      <OurStory variant="glass" />
      <HowItWorks variant="glass" />
      <NumberStats variant="glass" />
      <WhyChooseUs variant="glass" />
      <HomeTestimonials variant="glass" />
      <HomeFAQ variant="glass" />

    </div>
  )
}
