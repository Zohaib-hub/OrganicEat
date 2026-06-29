import { useCart } from '../context/CartContext'
import { BRAND } from '../config/constants'
import BlendBg from '../assets/blend-bg.png'
import OilImage from '../assets/oil-image.png'
import Logo from '../assets/organic-eat-logo.png'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import CTAButton from '../components/CTAButton'

import Thumb1 from '../assets/images/A_commercial_product_photography_shot_202606152325.jpg'
import Thumb2 from '../assets/images/A_premium_e-commerce_product_photograph_202606152326.jpg'
import Thumb3 from '../assets/images/High-end_retail_food_photography_for_202606152328.jpg'
import Thumb4 from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'
import TrustStrip from '../components/TrustStrip'
import { useState } from 'react'

/* ─────────────────────────────────────────────────────────
   STAR RATING
───────────────────────────────────────────────────────── */
function StarRating({ rating = 4.2, count = 1378 }) {
  const fullStars = Math.floor(rating)
  const partial = rating - fullStars
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24"
            fill={i <= fullStars ? '#FF9900' : i === fullStars + 1 && partial > 0 ? 'url(#half)' : '#D1D5DB'}
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#FF9900" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span className="text-[#014D40] text-sm font-semibold">{rating}</span>
      <span className="text-gray-400 text-sm">Ratings By {count.toLocaleString()}</span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   ACCORDION
───────────────────────────────────────────────────────── */
function Accordion({ label, content, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-[#1a1a1a] text-sm">{label}</span>
        <span className={`text-[#014D40] transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-gray-500 text-sm leading-relaxed pb-5 pt-1 whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   THUMBNAIL BUTTON
───────────────────────────────────────────────────────── */
function ThumbBtn({ src, index, active, onClick }) {
  return (
    <button
      onClick={() => onClick(index)}
      className={`w-[68px] h-[68px] shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 bg-[#F3F1ED]
        ${active === index ? 'border-[#014D40] shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
    >
      <img
        src={src}
        alt={`View ${index + 1}`}
        className="w-full h-full object-cover"
        onError={e => { e.target.src = `https://placehold.co/72x72/E4A101/fff?text=${index + 1}` }}
      />
    </button>
  )
}

/* ─────────────────────────────────────────────────────────
   MAIN IMAGE
───────────────────────────────────────────────────────── */
function MainImage({ active, setActive, thumbnails, productName }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-[#F3F1ED]"
      style={{ aspectRatio: '1/1', width: '100%' }}
    >
      <div className="absolute top-4 right-4 z-10 w-14 h-14 rounded-full bg-[#014D40] flex flex-col items-center justify-center shadow-lg">
        <span className="text-[#E4A101] text-[7px] font-black uppercase tracking-wide leading-none">BEST</span>
        <span className="text-white text-[7px] font-black uppercase tracking-wide leading-none">SELLER</span>
      </div>
      <img
        src={thumbnails[active]}
        alt={productName}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        onError={e => { e.target.src = `https://placehold.co/540x540/F3F1ED/E4A101?text=${encodeURIComponent(productName)}` }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {thumbnails.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-200 ${active === i ? 'w-5 h-2 bg-[#014D40]' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}


/* ─────────────────────────────────────────────────────────
   HOW IT WORKS — TRIPLE ARROW
───────────────────────────────────────────────────────── */
const TripleArrow = ({ vertical = false }) => {
  if (vertical) {
    return (
      <div className="flex flex-col items-center gap-0 opacity-40 py-1">
        {[0, 1, 2].map(i => (
          <svg key={i} width="22" height="14" viewBox="0 0 24 14" fill="none"
            stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 2l10 10L22 2" />
          </svg>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-row items-center gap-px text-black px-1 select-none">
      {['›', '›', '›'].map((ch, i) => (
        <span key={i} className="font-light leading-none text-black" style={{ fontSize: '36px', letterSpacing: '-4px' }}>
          {ch}
        </span>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   STEP CARD ICONS
───────────────────────────────────────────────────────── */
const StepIcons = {
  whatsapp: (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  check: (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  truck: (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h5l2 4v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  pot: (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20" />
      <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
      <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M8 6V4" />
      <path d="M16 6V4" />
    </svg>
  ),
  spoon: (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 22l14-7-14-7v5.5l8 1.5-8 1.5V22z" />
    </svg>
  ),
  bowl: (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 3.54 1.84 6.65 4.6 8.4L12 22l5.4-1.6A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
      <path d="M7 13h10" />
    </svg>
  ),
  leaf: (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
}

/* ─────────────────────────────────────────────────────────
   STEP CARD
───────────────────────────────────────────────────────── */
function StepCard({ num, label, sub, icon, src }) {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[200px]">
      <div className="relative">
        <div
          className="w-[150px] h-[150px] md:w-[160px] md:h-[160px] lg:w-[170px] lg:h-[170px] rounded-full flex items-center justify-center"
          style={{ background: '#F2EBD9' }}
        >
          {icon && StepIcons[icon]
            ? StepIcons[icon]
            : <img src={src} alt={label} className="w-20 h-20 object-contain"
              onError={e => { e.target.src = `https://placehold.co/80x80/F2EBD9/014D40?text=${num}` }} />
          }
        </div>
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
          style={{ background: '#F9A825' }}
        >
          {num}
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-1.5">
        <p className="text-[#1a1a1a] font-semibold text-[15px] md:text-base text-center" style={{ fontFamily: '"Inter", sans-serif' }}>
          {label}
        </p>
        {sub && (
          <p className="text-gray-500 text-xs sm:text-sm text-center leading-snug" style={{ fontFamily: '"Inter", sans-serif' }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   COMPARISON TABLE
───────────────────────────────────────────────────────── */
const DEFAULT_COMPETITORS = ['Klassno', 'Costa', 'Nescafé', 'Folgers']

function ComparisonIcon({ variant }) {
  if (variant === 'comp-check') {
    return (
      <span className="w-9 h-9 rounded-full bg-[#22a84a] flex items-center justify-center shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
    )
  }
  if (variant === 'comp-x') {
    return (
      <span className="w-9 h-9 rounded-full bg-[#e8e8e8] flex items-center justify-center shrink-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </span>
    )
  }
  if (variant === 'oe-check') {
    return (
      <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22a84a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
    )
  }
  return (
    <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22a84a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </span>
  )
}

function ComparisonTable({ product }) {
  const rows = product.comparisonRows || [
    { label: 'Quality Ingredients', us: true, others: false },
    { label: 'No Preservatives', us: true, others: false },
    { label: 'Authentic Recipe', us: true, others: false },
    { label: 'Affordable Price', us: true, others: true },
    { label: 'Fresh Daily', us: true, others: false },
    { label: 'Fast Delivery', us: true, others: true },
  ]
  const competitors = product.comparisonCompetitors || DEFAULT_COMPETITORS

  const getOthersValue = (row, compIndex) => {
    if (Array.isArray(row.others)) return row.others[compIndex] ?? false
    return row.others
  }

  return (
    <>
      {/* <section className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-black font-bold leading-tight mb-10 md:mb-14 px-2"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', letterSpacing: '-0.02em' }}
        >
          {product.comparisonTitle || 'We Are Not Like Others'}
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <table className="w-full min-w-[640px] border-collapse bg-white">
            <thead>
              <tr>
                <th className="text-left py-5 px-4 sm:px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-white border-b border-[#eee] w-[28%]">
                  Ingredients
                </th>
                <th className="py-5 px-3 sm:px-4 bg-[#014D40] border-b border-[#014D40] min-w-[100px]">
                  <div className="flex items-center justify-center">
                    <img src={Logo} alt="Organic Eat" className="h-8 sm:h-10 w-auto object-contain brightness-0 invert" />
                  </div>
                </th>
                {competitors.map((name) => (
                  <th
                    key={name}
                    className="py-5 px-3 sm:px-4 text-center text-sm sm:text-base font-semibold text-black bg-white border-b border-[#eee] min-w-[72px]"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const rowBg = i % 2 === 0 ? 'bg-[#f5f5f5]' : 'bg-[#fff0e0]'
                return (
                  <tr key={row.label}>
                    <td className={`py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold uppercase tracking-wide text-black ${rowBg}`}>
                      {row.label}
                    </td>
                    <td className="py-4 px-3 sm:px-4 bg-[#014D40] text-center">
                      <div className="flex justify-center">
                        <ComparisonIcon variant={row.us ? 'oe-check' : 'oe-x'} />
                      </div>
                    </td>
                    {competitors.map((name, compIndex) => (
                      <td key={`${row.label}-${name}`} className={`py-4 px-3 sm:px-4 text-center ${rowBg}`}>
                        <div className="flex justify-center">
                          <ComparisonIcon variant={getOthersValue(row, compIndex) ? 'comp-check' : 'comp-x'} />
                        </div>
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section> */}
    </>
  )
}

/* ─────────────────────────────────────────────────────────
   MAIN TEMPLATE EXPORT
───────────────────────────────────────────────────────── */
export default function ProductPageTemplate({ product }) {
  const [active, setActive] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)
  const { addToCart } = useCart()

  const thumbnails = product.thumbnails || [
    Thumb1,
    Thumb2,
    Thumb3,
    Thumb4,
  ]

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const numPrice = typeof product.price === 'string'
      ? parseFloat(product.price.replace(/Rs\./i, '').replace(/[^\d.]/g, ''))
      : product.price;

    addToCart({
      id: product.id,
      name: product.name,
      price: numPrice,
      quantity,
      image: thumbnails[0]
    })
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="w-full">
      <SEO title={product.name} description={product.description} />

      {/* ══════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════ */}
      <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full lg:min-h-[400px]">

          {/* Left: Text */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-5 flex-1 w-full lg:max-w-[520px] text-center lg:text-left">
            <h1
              className="text-black font-black leading-none tracking-tight"
              style={{
                fontSize: 'clamp(42px, 10vw, 90px)',
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              {product.heroTitle || product.name}
            </h1>
            <h2
              className="text-black font-extrabold"
              style={{
                fontSize: 'clamp(28px, 7vw, 46px)',
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              {product.second}<br />{product.second1}
            </h2>

            <p
              className="text-black max-w-[460px] mx-auto lg:mx-0"
              style={{ fontSize: '16px', lineHeight: '160%' }}
            >
              {product.heroSubtitle}
            </p>

            <CTAButton
              text="ORDER NOW"
              onClick={() => document.getElementById('product-detail-section')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex-1 flex items-center justify-center lg:justify-end min-h-[200px] sm:min-h-[280px] w-full">
            <img
              src={product.heroImage || thumbnails[0]}
              alt={product.name}
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[480px] object-contain drop-shadow-2xl"
              onError={e => { e.target.src = `https://placehold.co/500x420/FDF5E6/014D40?text=${encodeURIComponent(product.name)}` }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURES TOP BAR
      ══════════════════════════════════════════════════ */}
      <TrustStrip variant='classic' />
      {/* <div className="w-full bg-[#FDF5E6] py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center divide-black/10 gap-y-4 sm:gap-y-0">
            {(product.featureBadges || [
              { icon: 'leaf', title: 'All Natural', sub: 'No artificial additives' },
              { icon: 'shield', title: 'No Preservatives', sub: 'Pure & clean ingredients' },
              { icon: 'award', title: '100% Organic', sub: 'Certified & lab tested' },
              { icon: 'truck', title: 'Fast Delivery', sub: 'Quick & secure shipping' },
            ]).map((item, i) => (
              <div key={i} className="flex items-center justify-start gap-3 px-0 sm:px-8 lg:px-10 py-1 first:pl-0 last:pr-0">
                {/* Icon Circle */}
      {/* <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                  {item.icon === 'leaf' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                  {item.icon === 'award' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  )}
                  {item.icon === 'truck' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="1" />
                      <path d="M16 8h5l2 4v3h-7V8z" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  )}
                  {item.icon === 'pan' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 8h14" />
                      <path d="M5 8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2" />
                      <path d="M19 8V5" />
                      <path d="M3 12h1" />
                      <circle cx="12" cy="13" r="2" />
                    </svg>
                  )}
                  {item.icon === 'fire' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
                    </svg>
                  )}
                  {item.icon === 'clock' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                  {item.icon === 'check' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                  {item.icon === 'star' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#E4A101" stroke="#E4A101" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )}
                  {item.icon === 'pot' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12h20" />
                      <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
                      <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                      <path d="M8 6V4" />
                      <path d="M16 6V4" />
                    </svg>
                  )}
                  {item.icon === 'spoon' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 22l14-7-14-7v5.5l8 1.5-8 1.5V22z" />
                    </svg>
                  )}
                  {item.icon === 'bowl' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E4A101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 3.54 1.84 6.65 4.6 8.4L12 22l5.4-1.6A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                      <path d="M7 13h10" />
                    </svg>
                  )}
                </div>
                {/* Text */}
      {/* <div className="flex flex-col leading-tight">
                  <span className="text-black font-semibold text-sm sm:text-[15px]">{item.title}</span>
                  <span className="text-black/50 text-xs sm:text-[10px] mt-0.5">{item.sub}</span>
                </div> */}
      {/* </div> */}
      {/* ))}
          </div>
        </div> */}
      {/* </div> */}

      {/* ══════════════════════════════════════════════════
          PRODUCT DETAIL SECTION
      ══════════════════════════════════════════════════ */}
      <section id="product-detail-section" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14">

            {/* Gallery Column */}
            <div className="w-full relative h-full">
              <div className="lg:sticky lg:top-[120px] w-full flex flex-col gap-3">

                {/* Desktop: vertical thumbs + main */}
                <div className="hidden lg:flex gap-3">
                  <div className="flex flex-col gap-3 shrink-0">
                    {thumbnails.map((src, i) => (
                      <ThumbBtn key={i} src={src} index={i} active={active} onClick={setActive} />
                    ))}
                    <button className="w-[68px] h-[68px] rounded-xl border-2 border-gray-200 bg-[#F3F1ED] flex items-center justify-center hover:border-gray-300 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gray-800/20 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#444"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </button>
                  </div>
                  <MainImage active={active} setActive={setActive} thumbnails={thumbnails} productName={product.name} />
                </div>

                {/* Mobile: stacked */}
                <div className="flex flex-col gap-3 lg:hidden">
                  <MainImage active={active} setActive={setActive} thumbnails={thumbnails} productName={product.name} />
                  <div className="flex gap-3 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {thumbnails.map((src, i) => (
                      <ThumbBtn key={i} src={src} index={i} active={active} onClick={setActive} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info Column */}
            <div className="flex flex-col gap-5">

              {/* Viewing indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
                <span><strong className="text-[#014D40]">65 Users</strong> Are Viewing</span>
              </div>

              {/* Title */}
              <h2 className="text-black font-extrabold" style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontFamily: '"Inter", sans-serif' }}>
                {product.name1}
              </h2>

              <StarRating rating={product.rating || 4.2} count={product.reviewCount || 1378} />
              <div className="h-px bg-gray-100" />

              {/* Price */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[#1a1a1a] font-black text-3xl">{product.price}</span>
                {product.originalPrice && <span className="text-gray-400 line-through text-lg font-medium">{product.originalPrice}</span>}
                {product.savings && <span className="bg-[#014D40] text-white text-xs font-bold px-3 py-1 rounded-full">Save {product.savings}</span>}
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>

              {/* Features list */}
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[#1a1a1a] text-sm">Features</p>
                {(product.features || []).map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#014D40] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-500 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gray-100" />

              {/* Qty + Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-11">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 h-full hover:bg-gray-100 text-gray-600 font-bold text-lg transition-colors flex items-center focus:outline-none">−</button>
                  <span className="px-4 font-semibold text-gray-800 text-sm border-x border-gray-300 h-full flex items-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="px-3 h-full hover:bg-gray-100 text-gray-600 font-bold text-lg transition-colors flex items-center focus:outline-none">+</button>
                </div>
                <CTAButton
                  text="ADD TO CART"
                  onClick={handleAddToCart}
                  className="flex-1 items-center justify-center"
                />
              </div>

              {/* Order on WhatsApp */}
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}.%20Quantity:%20${quantity}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 text-white font-bold text-base rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] hover:shadow-md decoration-none"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                ORDER ON WHATSAPP
              </a>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                {[
                  { icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#014D40" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h5l2 4v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>), title: 'Free Shipping', sub: 'Fast & secure shipping' },
                  { icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#014D40" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>), title: 'Pickup Service', sub: 'Pick on your behalf' },
                  { icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#014D40" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>), title: 'Easy Pay', sub: 'Easily pay online' },
                ].map(b => (
                  <div key={b.title} className="flex flex-col items-center text-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 cursor-default">
                    {b.icon}
                    <p className="text-xs font-semibold text-[#1a1a1a]">{b.title}</p>
                    <p className="text-[11px] text-gray-400">{b.sub}</p>
                  </div>
                ))}
              </div>

              {/* Payment methods */}
              {/* <div className="border border-gray-200 rounded-xl p-4">
                <p className="text-center text-xs text-gray-400 mb-3">100% Secure Payments, SSL – Secure Checkout</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <div className="w-11 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden px-1">
                    <svg viewBox="0 0 38 24" width="38" height="24"><circle cx="15" cy="12" r="9" fill="#EB001B" /><circle cx="23" cy="12" r="9" fill="#F79E1B" fillOpacity="0.85" /><path d="M19 5.35a9 9 0 0 1 0 13.3A9 9 0 0 1 19 5.35z" fill="#FF5F00" /></svg>
                  </div>
                  <div className="w-11 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center px-1">
                    <span className="text-[#1A1F71] font-black italic text-sm">VISA</span>
                  </div>
                  <div className="w-11 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center px-1">
                    <span className="font-black text-xs"><span className="text-[#003087]">Pay</span><span className="text-[#009CDE]">Pal</span></span>
                  </div>
                  <div className="w-11 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center px-1">
                    <span className="text-xs font-bold"><span className="text-[#4285F4]">G</span><span className="text-gray-700">Pay</span></span>
                  </div>
                </div>
              </div> */}

              {/* Accordions */}
              <div className="mt-2">
                {(product.accordions || [
                  { label: 'About This Item', content: 'Premium quality product from Organic Eat.', defaultOpen: true },
                  { label: 'Shipping Policy', content: 'Free standard shipping on all orders over Rs. 1500. Express options available at checkout.' },
                  { label: 'Return Info', content: 'We offer a 30-day satisfaction guarantee. Contact us for a full refund or exchange.' },
                ]).map(item => (
                  <Accordion key={item.label} label={item.label} content={item.content} defaultOpen={item.defaultOpen} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Toast */}
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-100 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
          <div className="bg-[#014D40] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="font-semibold text-sm tracking-wide">Item added to cart!</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section className="bg-white overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-normal uppercase tracking-[0.2em] text-black">WHY CHOOSE US</span>
            <h2 className="text-black font-semibold leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
              {product.whyTitle || `Our Specialty ${product.name}`}
            </h2>
            <p className="text-black text-[16px] leading-relaxed">{product.whyDesc || product.description}</p>
            <div className="flex flex-col gap-5 mt-2">
              {(product.whyPoints || [
                { title: 'Quality', desc: "We're Obsessed With Serving The Best Product Possible." },
                { title: 'Community', desc: 'We Believe In Fostering Connections And Building Meaningful Relationships.' },
                { title: 'Sustainability', desc: "We're Committed To Environmentally Friendly Practices And Fair Trade Sourcing." },
              ]).map(f => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="shrink-0">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#014D40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="17" cy="17" r="15" /><path d="M11 17l4 4 8-8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-[16px]">{f.title}</p>
                    <p className="text-black font-light text-[15px] mt-0.5 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <CTAButton
                text="ORDER NOW"
                onClick={() => document.getElementById('product-detail-section')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center" style={{ minHeight: '280px' }}>
            <img
              src={product.whyImage || OilImage}
              alt={`Why choose ${product.name}`}
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[480px] object-contain drop-shadow-2xl"
              onError={e => { e.target.src = `https://placehold.co/480x400/FDF5E6/014D40?text=${encodeURIComponent(product.name)}` }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════ */}
      <section className="w-full py-14 md:py-20" style={{ background: '#FDF5E6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[16px] font-normal uppercase tracking-[0.2em] text-black mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>
            {product.howItWorksLabel || 'HOW TO USE'}
          </p>
          <h2
            className="text-[#1a1a1a] font-semibold leading-tight mb-12 md:mb-16"
            style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}
          >
            {product.howItWorksTitle || `${product.name} Ready To Use In Easy 3 Steps`}
          </h2>

          {/* Desktop */}
          <div className="hidden sm:flex items-center justify-center gap-6 md:gap-8 lg:gap-10">
            {(product.steps || []).map((step, i) => (
              <div key={step.num} className="flex items-center gap-6 md:gap-8 lg:gap-10">
                <StepCard {...step} />
                {i < (product.steps.length - 1) && <TripleArrow />}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex sm:hidden flex-col items-center gap-4">
            {(product.steps || []).map((step, i) => (
              <div key={step.num} className="flex flex-col items-center gap-4">
                <StepCard {...step} />
                {i < (product.steps.length - 1) && <TripleArrow vertical />}
              </div>
            ))}
          </div>

          {/* Optional CTA Button below steps */}
          {product.howItWorksButton && (
            <div className="mt-12 md:mt-16">
              <a
                href={product.howItWorksButton.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 transform text-base"
                style={{ background: '#25D366' }}
              >
                {/* WhatsApp Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                {product.howItWorksButton.label || 'Order on WhatsApp'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PERFECT BLEND / INGREDIENTS CAROUSEL
      ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundImage: `url(${BlendBg})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white mb-3">Our Features</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {product.blendTitle || 'The Perfect Blend'}
            </h2>
          </div>
          <div className="flex justify-center gap-7">
            {(product.recipes || []).map((recipe, i) => (
              <article key={i} className="flex flex-col items-center max-w-[400px] w-full gap-4 group select-none">
                <div className="w-full overflow-hidden rounded-2xl shadow-lg bg-gray-50" style={{ aspectRatio: '1 / 1' }}>
                  <img
                    src={recipe.img}
                    alt={recipe.title}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    onError={e => { e.currentTarget.src = `https://placehold.co/500x500/e8f4f1/014D40?text=${encodeURIComponent(recipe.title)}` }}
                  />
                </div>
                <p className="text-white text-sm sm:text-xl font-medium tracking-wide text-center leading-snug">{recipe.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E4A101] text-sm font-semibold uppercase tracking-widest">Social Proof</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#014D40] mt-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Customers Are Saying
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Over 12,000 happy customers across 40+ countries trust Organic Eat for their daily wellness ritual.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex gap-1">{[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#E4A101] text-2xl">★</span>)}</div>
              <span className="text-3xl font-extrabold text-[#014D40]">4.9</span>
              <span className="text-gray-400 text-sm">from 12,000+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(product.testimonials || [
              { name: 'Sarah Johnson', role: 'Nutritionist', img: 'https://randomuser.me/api/portraits/women/32.jpg', quote: 'Absolutely love this product! The quality is outstanding and the taste is incredible. Highly recommended!', stars: 5 },
              { name: 'Marcus Williams', role: 'Fitness Coach', img: 'https://randomuser.me/api/portraits/men/45.jpg', quote: 'I\'ve tried many similar products but this one is in a league of its own. The quality is unbeatable for the price.', stars: 5 },
              { name: 'Priya Patel', role: 'Home Chef', img: 'https://randomuser.me/api/portraits/women/68.jpg', quote: 'The aroma, the flavor, the depth — this is not your typical product. I\'ve been using it for months now. Incredible!', stars: 5 },
              { name: 'Dr. Emily Chen', role: 'Health Expert', img: 'https://randomuser.me/api/portraits/women/12.jpg', quote: 'I recommend Organic Eat to everyone. The lab reports confirm their purity claims — that\'s rare in today\'s market.', stars: 5 },
            ]).map((r, i) => (
              <div key={i} className="bg-[#F5F5DC]/50 rounded-3xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-[#E4A101]/20">
                <div className="flex gap-0.5">{Array.from({ length: r.stars }).map((_, j) => <span key={j} className="text-[#E4A101] text-sm">★</span>)}</div>
                <p className="text-gray-700 text-sm leading-relaxed italic">"{r.quote}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                  <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#E4A101]"
                    onError={e => { e.target.src = `https://placehold.co/48x48/014D40/fff?text=${r.name[0]}` }} />
                  <div>
                    <p className="font-bold text-sm text-[#014D40]">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mt-16 bg-[#014D40] rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ val: '12K+', label: 'Happy Customers' }, { val: '4.9★', label: 'Average Rating' }, { val: '40+', label: 'Countries Served' }, { val: '100%', label: 'Satisfaction Rate' }].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-[#E4A101]">{s.val}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════════════ */}
      <ComparisonTable product={product} />

      <FAQSection
        faqs={product.faqs || [
          { q: `What makes ${product.name} different?`, a: 'Our products are made with the finest ingredients, carefully selected and processed to maintain maximum quality and flavor.' },
          { q: 'How do I use this product?', a: 'Follow the instructions on the packaging. Our products are designed to be easy to use and deliver consistent results every time.' },
          { q: 'Is it safe for daily use?', a: 'Yes! Our products are free of harmful additives and preservatives. They are safe for daily consumption as directed.' },
          { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide. Orders over Rs. 2000 qualify for free shipping.' },
          { q: 'What is your return policy?', a: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund." },
        ]}
        label="FAQs"
        heading="Frequently Asked Questions"
        description={`Everything you need to know about ${product.name}.`}
        sectionClassName="bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        footer={{
          note: 'Still have questions?',
          label: 'Contact Our Team',
          href: '/contact',
        }}
      />

    </div>
  )
}
