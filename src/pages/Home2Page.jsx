import TrustStrip from '../components/TrustStrip'
import OurStory from '../components/OurStory'
import HowItWorks from '../components/HowItWorks'
import FeaturedProducts from '../components/FeaturedProducts'
import NumberStats from '../components/NumberStats'
import WhyChooseUs from '../components/WhyChooseUs'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeFAQ from '../components/HomeFAQ'

import HomeHeroImg from '../assets/images/A_creative,_high-end_food_art_202606152256.jpg'
import HomePalakImg from '../assets/images/A_commercial_product_photography_shot_202606152325.jpg'
import HomeBiryaniImg from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpg'
import { BRAND } from '../config/constants'

export default function Home2Page() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO — EDITORIAL SPLIT / MAGAZINE STYLE (Demo 2)
      ══════════════════════════════════════════════ */}
      <section
        id="hero-section-v3"
        className="w-full relative overflow-hidden"
        style={{ minHeight: '100vh', background: '#F7F3EE', fontFamily: '"Inter", sans-serif' }}
      >
        {/* ── Marquee ticker top ── */}
        <div
          className="w-full overflow-hidden border-b"
          style={{ background: '#214D41', borderColor: '#1a3d33', padding: '10px 0' }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-6 mx-6 text-white/80 text-[11px] font-bold uppercase tracking-[0.2em] shrink-0">
                <span className="text-[#E4A101]">✦</span>
                <span>Cooked Every Morning</span>
                <span className="text-[#E4A101]">✦</span>
                <span>Never Frozen</span>
                <span className="text-[#E4A101]">✦</span>
                <span>Real Homemade Food</span>
                <span className="text-[#E4A101]">✦</span>
                <span>Lahore Delivery</span>
                <span className="text-[#E4A101]">✦</span>
                <span>Fresh Daily</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-41px)]">

          {/* ── LEFT PANEL ── */}
          <div
            className="flex flex-col justify-between p-8 sm:p-12 lg:p-16 lg:w-[55%] relative"
            style={{ background: '#F7F3EE' }}
          >
            {/* Top row — label + year */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-pulse" />
                <span className="text-[#214D41] text-[11px] font-bold uppercase tracking-[0.2em]">Fresh Daily · Homemade · Lahore</span>
              </div>
              <span className="text-[#214D41]/30 text-sm font-semibold tracking-widest">2025</span>
            </div>

            {/* Giant editorial headline */}
            <div className="flex-1 flex flex-col justify-center py-10 lg:py-0">

              {/* Huge background number — decorative */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 font-black leading-none pointer-events-none select-none"
                style={{
                  fontSize: 'clamp(180px, 25vw, 320px)',
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(33,77,65,0.07)',
                  letterSpacing: '-0.06em',
                  lineHeight: 1,
                  zIndex: 0,
                }}
              >
                01
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                {/* Label */}
                <span
                  className="inline-block self-start px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.25em]"
                  style={{ background: '#E4A101', color: '#fff', borderRadius: '6px' }}
                >
                  Real Homemade Food
                </span>

                {/* Main heading */}
                <h1
                  className="font-black leading-[0.88] tracking-[-0.045em] text-[#1a1a1a]"
                  style={{ fontSize: 'clamp(56px, 8vw, 108px)' }}
                >
                  REAL<br />
                  HOME<span style={{ color: '#548E0A' }}>MADE</span><br />
                  FOOD.
                </h1>

                {/* Divider line with text */}
                <div className="flex items-center gap-4 py-2">
                  <div className="flex-1 h-px bg-[#214D41]/15" />
                  <span className="text-[#214D41]/50 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">Delivered Today</span>
                  <div className="flex-1 h-px bg-[#214D41]/15" />
                </div>

                {/* Sub-headline */}
                <p
                  className="font-semibold leading-snug text-[#214D41]"
                  style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', maxWidth: '480px' }}
                >
                  Cooked this morning. At your door today. That's how it works — every single day.
                </p>

                {/* Body text */}
                <p className="text-[#214D41]/55 text-sm leading-relaxed" style={{ maxWidth: '440px' }}>
                  Not restaurant food. Not reheated food. The kind of food you grew up eating — made fresh every morning in a home kitchen and delivered to your door in Lahore before it gets a chance to go cold.
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { label: 'Cooked Today', style: { background: 'rgba(84,142,10,0.1)', border: '1px solid rgba(84,142,10,0.3)', color: '#3a6306' } },
                    { label: 'Delivered Today', style: { background: '#214D41', border: '1px solid #214D41', color: '#fff' } },
                    { label: 'Lahore Sourced', style: { background: '#fff', border: '1px solid rgba(33,77,65,0.2)', color: '#214D41' } },
                  ].map(p => (
                    <span key={p.label} className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest" style={p.style}>
                      {p.label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => document.getElementById('featured-products-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2.5 font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: '#214D41', color: '#fff', borderRadius: '14px', boxShadow: '0 6px 24px rgba(33,77,65,0.25)' }}
                  >
                    See Today's Menu
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                  </button>

                  <a
                    href={BRAND.whatsappOrderMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: '#25D366', color: '#fff', borderRadius: '14px', boxShadow: '0 6px 24px rgba(37,211,102,0.25)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Order on WhatsApp
                  </a>
                </div>

                {/* Live badge */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-ping shrink-0" />
                  <span className="text-[#214D41]/45 text-[11px] font-bold uppercase tracking-widest">Fresh stock ready now — limited daily portions</span>
                </div>
              </div>
            </div>

            {/* Bottom row — stats */}
            <div className="flex items-center gap-8 border-t border-[#214D41]/10 pt-6">
              {[
                { num: '1', label: 'Fresh batch daily' },
                { num: '0', label: 'Frozen meals ever' },
                { num: '10AM', label: 'Ready every morning' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-black text-[#214D41] leading-none" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>{s.num}</span>
                  <span className="text-[#214D41]/45 text-[10px] font-semibold uppercase tracking-wider mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT PANEL — Full-bleed image ── */}
          <div className="lg:w-[45%] relative overflow-hidden" style={{ minHeight: '420px' }}>
            {/* Main image */}
            <img
              src={HomeHeroImg}
              alt="Fresh homemade cooking"
              className="w-full h-full object-cover absolute inset-0"
              style={{ filter: 'brightness(0.78) saturate(1.1)' }}
            />

            {/* Warm color overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, rgba(228,161,1,0.15) 0%, rgba(33,77,65,0.55) 100%)' }}
            />

            {/* Top-left: floating tag */}
            <div
              className="absolute top-8 left-8 px-4 py-2 flex items-center gap-2"
              style={{ background: 'rgba(247,243,238,0.95)', borderRadius: '12px', backdropFilter: 'blur(8px)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-pulse" />
              <span className="text-[#214D41] text-xs font-black uppercase tracking-widest">Lahore Kitchen</span>
            </div>

            {/* Bottom overlay card */}
            <div
              className="absolute bottom-0 left-0 right-0 p-8"
              style={{ background: 'linear-gradient(to top, rgba(10,20,15,0.95) 0%, transparent 100%)' }}
            >
              {/* Food cards row */}
              <div className="flex gap-3 mb-6">
                {[
                  { img: HomePalakImg, label: 'Palak Murgh', price: 'Rs. 1,299' },
                  { img: HomeBiryaniImg, label: 'Chicken Biryani', price: 'Rs. 1,399' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 flex-1"
                    style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderRadius: '16px', padding: '10px', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs leading-tight">{item.label}</p>
                      <p className="font-black mt-0.5" style={{ color: '#E4A101', fontSize: '13px' }}>{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Family-cooked label */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-black leading-tight" style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}>Family-cooked daily.</p>
                  <p className="text-white/50 text-xs mt-1 font-medium">One fresh batch · Same day delivery</p>
                </div>
                <div
                  className="flex flex-col items-center justify-center text-center rounded-2xl"
                  style={{ width: '72px', height: '72px', background: '#548E0A', border: '2px solid rgba(255,255,255,0.2)' }}
                >
                  <span className="text-white font-black text-lg leading-none">100%</span>
                  <span className="text-white/70 text-[7px] font-bold uppercase tracking-wider mt-0.5">Homemade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee keyframes */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      <TrustStrip variant="editorial" />
      <FeaturedProducts variant="editorial" />
      <OurStory variant="editorial" />
      <HowItWorks variant="editorial" />
      <NumberStats variant="editorial" />
      <WhyChooseUs variant="editorial" />
      <HomeTestimonials variant="editorial" />
      <HomeFAQ variant="editorial" />

    </div>
  )
}
