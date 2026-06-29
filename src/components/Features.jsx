import choose from "../assets/choose.png"

export default function Features() {
  return (
    <section id="features-section" className="bg-white overflow-hidden">

      {/* ── TOP HIGHLIGHT BAR ─────────────────────────── */}
      <div style={{ background: '#FDF5E6' }} className="w-full py-5 border-b border-[#f0e0c0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-32 flex-wrap">
          {[
            {
              label: 'Natural',
              icon: (
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#6B4F2A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="16" />
                  <path d="M18 26c0-6-4-10-8-10 4 0 8-4 8-8 0 4 4 8 8 8-4 0-8 4-8 10z" />
                </svg>
              ),
            },
            {
              label: 'No Side Effects',
              icon: (
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#6B4F2A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="16" />
                  <path d="M13 18l3 3 7-7" />
                </svg>
              ),
            },
            {
              label: '100% Organic',
              icon: (
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#6B4F2A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="16" />
                  <path d="M12 20a6 6 0 1 0 6-6" />
                  <path d="M18 10l-3 4h6l-3-4z" />
                </svg>
              ),
            },
          ].map(item => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              {item.icon}
              <span className="text-sm font-semibold text-[#3d2a0e]" style={{ letterSpacing: '0.01em' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN TWO-COLUMN CONTENT ───────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* LEFT — Text Content */}
        <div className="flex flex-col gap-3">

          {/* Eyebrow */}
          <span className="text-xs font-normal uppercase tracking-[0.2em] text-black">
            WHY CHOOSE US
          </span>

          {/* Heading */}
          <h2
            className="text-black font-semibold leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}
          >
            Our Specialty Turmeric
          </h2>

          {/* Description */}
          <p className="text-black text-[16px] leading-relaxed max-w-sm">
            Indulge in our expertly crafted Turmeric blends, made from high-quality,
            small-batch beans.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-5 mt-2">
            {[
              {
                icon: (
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#014D40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="17" cy="17" r="15" />
                    <path d="M11 17l4 4 8-8" />
                  </svg>
                ),
                title: 'Quality',
                desc: "We're Obsessed With Serving The Best Turmeric Possible.",
              },
              {
                icon: (
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#014D40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="17" cy="17" r="15" />
                    <circle cx="17" cy="13" r="4" />
                    <path d="M9 27c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                ),
                title: 'Community',
                desc: 'We Believe In Fostering Connections And Building Meaningful Relationships.',
              },
              {
                icon: (
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#014D40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="17" cy="17" r="15" />
                    <path d="M12 22a5 5 0 0 1 0-10" />
                    <path d="M22 12a5 5 0 0 1 0 10" />
                    <path d="M17 12v10" />
                  </svg>
                ),
                title: 'Sustainability',
                desc: "We're Committed To Environmentally Friendly Practices And Fair Trade Sourcing.",
              },
            ].map(f => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5 w-[40px] sm:w-[47px] h-[44px] sm:h-[50px]">{f.icon}</div>
                <div className="max-w-full sm:max-w-[440px]">
                  <p className="font-semibold text-black text-[16px]">{f.title}</p>
                  <p className="text-black font-light text-[15px] sm:text-[16px] mt-0.5 leading-snug">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-3">
            <button
              type="button"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-[10px] bg-[#FE9C01] text-black font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#e09200] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 transform focus:outline-none"
              style={{ letterSpacing: '0.05em' }}
            >
              ABOUT US
              <span className="w-6 h-6 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT — Product Visuals: hidden on mobile, shown on lg */}
        <div className="relative flex items-end justify-center" style={{ minHeight: '280px' }}>
          <img
            src={choose}
            alt="Why Choose Us"
            className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
