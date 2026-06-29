import Logo from '../assets/white-logo.png'
import { Link } from 'react-router-dom'
import { BRAND } from '../config/constants'
import WhatsAppCTA from './WhatsAppCTA'

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #0a2e26 0%, #0d3b30 40%, #112e26 100%)', fontFamily: '"Inter", sans-serif' }} className="text-white relative overflow-hidden">

      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #E4A101, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #25D366, transparent 70%)', transform: 'translate(-40%, 40%)' }} />

      {/* ── CTA Banner ─────────────────────────────── */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#E4A101] text-xs font-bold uppercase tracking-[0.25em] mb-1">Order Fresh Today</p>
            <h2 className="text-white font-bold text-2xl md:text-3xl leading-tight">
              Homemade food, delivered <span className="text-[#E4A101]">to your door.</span>
            </h2>
          </div>
          <WhatsAppCTA text="WhatsApp Us" size="md" className="shrink-0 hover:-translate-y-0.5" />
        </div>
      </div>

      {/* ── Main Footer Body ────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr] gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-6">
            <img src={Logo} alt="Organic Eat" className="h-10 object-contain object-left" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Fresh homemade food and handmade spice blends, delivered daily in Lahore. All 100% responsibly sourced, cooked every morning.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {[
                { label: 'Facebook', href: BRAND.social.facebook, icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                {
                  label: 'Instagram', href: BRAND.social.instagram, icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  )
                },
                {
                  label: 'YouTube', href: BRAND.social.youtube, icon: (
                    <>
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </>
                  )
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#E4A101] border border-white/10 hover:border-[#E4A101] flex items-center justify-center transition-all duration-200 group focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white transition-colors">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <p className="text-white/60 text-xs mb-2 font-medium">Subscribe to our newsletter for updates</p>
              <form className="relative max-w-xs" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 rounded-full py-2.5 pl-4 pr-10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E4A101] transition-colors"
                />
                <button type="submit" className="absolute right-1 top-1 bottom-1 w-8 rounded-full bg-[#E4A101] hover:bg-[#c28800] flex items-center justify-center transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Column 2 — Products */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.15em] pb-3 border-b border-white/10">Products</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Palak Murgh', href: '/products/palak-murgh' },
                { label: 'Chicken Biryani', href: '/products/chicken-biryani' },
                { label: 'Masala Powder', href: '/products/pizza-dough-masala-powder' },

              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/55 hover:text-[#E4A101] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E4A101] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.15em] pb-3 border-b border-white/10">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'How to Order', href: '/how-to-order' },
                { label: 'Delivery Areas', href: '/delivery' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact Us', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/55 hover:text-[#E4A101] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E4A101] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & Payment */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.15em] pb-3 border-b border-white/10">Quick Contact</h4>

            <div className="flex flex-col gap-3">
              {/* WhatsApp */}
              <WhatsAppCTA text="WhatsApp Us" size="sm" href={BRAND.whatsappUrl} className="w-fit" />

              {/* Email */}
              <a
                href="mailto:order@organiceat.pk"
                className="inline-flex items-center gap-2.5 text-white/55 hover:text-white text-sm transition-colors duration-200 group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/8 group-hover:bg-white/15 flex items-center justify-center transition-colors" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                order@organiceat.pk
              </a>

              {/* Location */}
              <div className="inline-flex items-center gap-2.5 text-white/40 text-sm">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                Lahore, Pakistan
              </div>
            </div>

            {/* Payment badges */}
            {/* <div className="mt-1">
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3 font-semibold">Accepted Payments</p>
              <div className="flex items-center gap-2">
                <div className="h-7 px-2 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 38 24" width="34" height="18">
                    <circle cx="15" cy="12" r="9" fill="#EB001B" />
                    <circle cx="23" cy="12" r="9" fill="#F79E1B" fillOpacity="0.85" />
                    <path d="M19 5.35a9 9 0 0 1 0 13.3A9 9 0 0 1 19 5.35z" fill="#FF5F00" />
                  </svg>
                </div>
                <div className="h-7 px-3 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-[#1A1F71] font-black italic text-[11px] uppercase tracking-tighter">VISA</span>
                </div>
                <div className="h-7 px-2 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <span className="font-black text-[9px] tracking-tighter">
                    <span className="text-[#003087]">Pay</span><span className="text-[#009CDE]">Pal</span>
                  </span>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────── */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            Copyright © <Link to="/" className='hover:text-[#CF2F2E]'>OrganicEat</Link> 2026, All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/35 hover:text-white/70 text-xs transition-colors">Terms of Service</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="#" className="text-white/35 hover:text-white/70 text-xs transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
