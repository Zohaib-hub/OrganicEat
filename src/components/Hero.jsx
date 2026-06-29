import Heroimage from "../assets/hero-image.png"
import CTAButton from "./CTAButton"

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full lg:min-h-[500px]">

        {/* ── LEFT COLUMN ─────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start justify-center gap-5 flex-1 w-full lg:max-w-[480px] text-center lg:text-left">

          {/* GIANT BOLD TITLE */}
          <h1
            className="text-black font-black leading-none tracking-tight"
            style={{
              fontSize: 'clamp(56px, 14vw, 110px)',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            TURMERIC
          </h1>

          {/* SUBTITLE */}
          <h2
            className="text-black font-extrabold"
            style={{
              fontSize: 'clamp(28px, 7vw, 60px)',
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            Our Turmeric Is<br />100% Organic
          </h2>

          {/* DESCRIPTION */}
          <p
            className="text-black max-w-[455px] mx-auto lg:mx-0"
            style={{ fontSize: '16px', lineHeight: '160%' }}
          >
            All 100% more responsibly sourced from Rainforest Alliance
            Certified Turmeric farms. Find out more at Organic.eat.
          </p>

          {/* CTA BUTTON */}
          <CTAButton 
            text="ORDER NOW" 
            onClick={() => document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })} 
          />
        </div>

        {/* ── RIGHT COLUMN — PRODUCT COMPOSITION ────── */}
        <div className="relative flex-1 flex items-center justify-center lg:justify-end min-h-[260px] sm:min-h-[340px] md:min-h-[400px] w-full">
          <img
            src={Heroimage}
            alt="Organic Turmeric"
            className="w-full max-w-[360px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-none lg:w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
