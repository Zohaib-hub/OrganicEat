import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CTAButton from './CTAButton'

const thumbnails = [
  'https://images.unsplash.com/photo-1615485500704-8e3b5d9b4a02?w=300&q=80',
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
  'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=300&q=80',
  'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80',
]

const features = [
  'Unique designs inspired by the ocean and made for comfort',
  'Affordable Luxury That Fits You Lifestyle',
  'Exceptional Customer Service That Puts You First',
]

const accordionItems = [
  {
    label: 'About This Item',
    content: `1. Organic: Grown Without Synthetic Pesticides Or Fertilizers.\n2. Fair Trade: Ensures Fair Prices And Working Conditions For Farmers.\n3. Rainforest Alliance: Promotes Sustainable Farming And Conservation.\n4. Non-GMO: No Genetically Modified Organisms Used In Production.\n5. USDA Certified Organic with curcumin content of 5–7%.\n6. Cold-processed to preserve full nutrient profile and volatile oils.`,
  },
  {
    label: 'Shipping Policy',
    content: `Free standard shipping on all orders over $35. Express and overnight options available at checkout. Orders are processed within 1–2 business days. International shipping available to 40+ countries. Estimated delivery: 3–7 business days for domestic orders.`,
  },
  {
    label: 'Return Info',
    content: `We offer a 30-day satisfaction guarantee. If you are not completely happy with your purchase, contact us within 30 days for a full refund or exchange. Items must be unused and in original packaging. Return shipping is free on defective items.`,
  },
]

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

function Accordion({ label, content }) {
  const [open, setOpen] = useState(label === 'About This Item')
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

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 text-sm leading-relaxed pb-5 pt-1 whitespace-pre-line origin-top transition-opacity duration-300 ease-out">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Reusable Thumbnail Button ── */
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

export default function ProductDetail() {
  const [active, setActive] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const { addToCart } = useCart()

  const handleRedirect = (e, targetPage) => {
    e.preventDefault();
    e.stopPropagation();

    if (isRedirecting) return;
    setIsRedirecting(true);

    const safeQuantity = Number(quantity);
    console.log('Redirecting with quantity:', safeQuantity);

    const url = `https://organiceat.pk/${targetPage}/?add-to-cart=10871&quantity=${safeQuantity}`;
    window.location.href = url;
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: 10871,
      name: '100% Organic Turmeric',
      price: 15.99,
      quantity: quantity,
      image: thumbnails[0]
    });

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section id="product-section" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Outer 2-column: gallery | product info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14">

          {/* ── GALLERY COLUMN ──────────────────────────────── */}
          <div className="w-full relative h-full">
            {/* Sticky Wrapper inside the stretched column */}
            <div className="lg:sticky lg:top-[120px] w-full flex flex-col gap-3">

              {/* Desktop layout: vertical thumbs + main image side by side */}
              <div className="hidden lg:flex gap-3">
                {/* Vertical Thumbnails */}
                <div className="flex flex-col gap-3 shrink-0">
                  {thumbnails.map((src, i) => (
                    <ThumbBtn key={i} src={src} index={i} active={active} onClick={setActive} />
                  ))}
                  {/* Video thumb */}
                  <button className="w-[68px] h-[68px] rounded-xl border-2 border-gray-200 bg-[#F3F1ED] flex items-center justify-center hover:border-gray-300 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-800/20 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#444"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </button>
                </div>

                {/* Main image */}
                <MainImage active={active} setActive={setActive} />
              </div>

              {/* Mobile/Tablet layout: main image stacked above horizontal thumbnails */}
              <div className="flex flex-col gap-3 lg:hidden">
                <MainImage active={active} setActive={setActive} />

                {/* Horizontal scrollable thumbnail strip */}
                <div className="flex gap-3 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: 'touch' }}>
                  {thumbnails.map((src, i) => (
                    <ThumbBtn key={i} src={src} index={i} active={active} onClick={setActive} />
                  ))}
                  {/* Video thumb */}
                  <button className="w-[68px] h-[68px] shrink-0 rounded-xl border-2 border-gray-200 bg-[#F3F1ED] flex items-center justify-center hover:border-gray-300 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-800/20 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#444"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── PRODUCT INFO COLUMN ─────────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Viewing indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
              <span><strong className="text-[#014D40]">65 Users</strong> Are Viewing</span>
            </div>

            {/* Title */}
            <h2
              className="text-black font-extrabold"
              style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontFamily: '"Inter", sans-serif' }}
            >
              100% Organic Turmeric
            </h2>

            {/* Stars */}
            <StarRating rating={4.2} count={1378} />

            <div className="h-px bg-gray-100" />

            {/* Price row */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[#1a1a1a] font-black text-3xl">$15.99</span>
              <span className="text-gray-400 line-through text-lg font-medium">$18.00</span>
              <span className="bg-[#014D40] text-white text-xs font-bold px-3 py-1 rounded-full">Save $2.00</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Indulge in our expertly crafted Turmeric blends, made from high-quality,
              small-batch beans. From rich and smooth to bold and adventurous, our
              Turmeric is carefully designed to satisfy any palate
            </p>

            {/* Features */}
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[#1a1a1a] text-sm">Features</p>
              {features.map((f, i) => (
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
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 h-full hover:bg-gray-100 text-gray-600 font-bold text-lg transition-colors flex items-center focus:outline-none"
                >−</button>
                <span className="px-4 font-semibold text-gray-800 text-sm border-x border-gray-300 h-full flex items-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 h-full hover:bg-gray-100 text-gray-600 font-bold text-lg transition-colors flex items-center focus:outline-none"
                >+</button>
              </div>
              <CTAButton
                text="ADD TO CART"
                onClick={handleAddToCart}
                className="flex-1 min-w-[140px]"
              />
            </div>

            {/* Buy It Now */}
            <button
              onClick={(e) => handleRedirect(e, 'checkout')}
              disabled={isRedirecting}
              className={`w-full h-12 text-white font-bold text-base rounded-lg transition-all shadow-sm focus:outline-none ${isRedirecting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF9900] hover:bg-[#e68900] hover:shadow-md'}`}
            >
              {isRedirecting ? 'REDIRECTING...' : 'BUY IT NOW'}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#014D40" strokeWidth="1.5">
                      <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h5l2 4v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                  title: 'Free Shipping',
                  sub: 'Fast & secure shipping',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#014D40" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                  title: 'Pickup Service',
                  sub: 'Pick on your own behalf',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#014D40" strokeWidth="1.5">
                      <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  ),
                  title: 'Easy Pay',
                  sub: 'Easily pay online',
                },
              ].map(b => (
                <div key={b.title} className="flex flex-col items-center text-center gap-1.5">
                  {b.icon}
                  <p className="text-xs font-semibold text-[#1a1a1a]">{b.title}</p>
                  <p className="text-[11px] text-gray-400">{b.sub}</p>
                </div>
              ))}
            </div>

            {/* Payment methods */}
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-center text-xs text-gray-400 mb-3">100% Secure Payments, SSL – Secure Checkout</p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <div className="w-11 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden px-1">
                  <svg viewBox="0 0 38 24" width="38" height="24">
                    <circle cx="15" cy="12" r="9" fill="#EB001B" /><circle cx="23" cy="12" r="9" fill="#F79E1B" fillOpacity="0.85" />
                    <path d="M19 5.35a9 9 0 0 1 0 13.3A9 9 0 0 1 19 5.35z" fill="#FF5F00" />
                  </svg>
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
                <div className="w-11 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center px-1">
                  <svg viewBox="0 0 24 14" width="44" height="14">
                    <text x="0" y="12" fontSize="10" fontWeight="bold" fill="#000" fontFamily="sans-serif"> Pay</text>
                    <path d="M3.5 2.5c.3-.4.5-.9.5-1.4-.5 0-1 .3-1.4.7C2.2 2.3 2 2.8 2 3.3c.5 0 1-.2 1.5-.8z" fill="#000" />
                    <path d="M3.5 3.3c-.8 0-1.5.5-1.9.5S.5 3.3 0 3.3C0 5.8 1.8 9 3.3 9c.6 0 1-.4 1.6-.4s.9.4 1.6.4C8 9 9.5 5.8 9.5 3.3 9 3.3 8 4 7.2 4c-.8 0-1.5-.7-2.4-.7-.8 0-1.3.7-1.3-.7v.7z" fill="#000" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-2">
              {accordionItems.map(item => (
                <Accordion key={item.label} label={item.label} content={item.content} />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-100 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-[#014D40] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
          <span className="font-semibold text-sm tracking-wide">Item added to cart!</span>
        </div>
      </div>
    </section>
  )
}

/* ── Main Image sub-component ── */
function MainImage({ active, setActive }) {
  return (
    <div
      className="relative flex-1 rounded-2xl overflow-hidden bg-[#F3F1ED] flex items-center justify-center"
      style={{ minHeight: '280px' }}
    >
      {/* Best Seller badge */}
      <div className="absolute top-4 right-4 z-10 w-14 h-14 rounded-full bg-[#014D40] flex flex-col items-center justify-center shadow-lg">
        <span className="text-[#E4A101] text-[7px] font-black uppercase tracking-wide leading-none">BEST</span>
        <span className="text-white text-[7px] font-black uppercase tracking-wide leading-none">SELLER</span>
      </div>

      <img
        src={thumbnails[active]}
        alt="Organic Turmeric"
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{ maxHeight: '440px', objectFit: 'cover' }}
        onError={e => { e.target.src = 'https://placehold.co/500x440/F3F1ED/E4A101?text=Turmeric' }}
      />

      {/* Dot navigation */}
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
