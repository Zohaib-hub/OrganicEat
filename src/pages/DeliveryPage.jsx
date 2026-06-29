import SEO from '../components/SEO'
import { BRAND } from '../config/constants'

const areas = [
  'DHA', 'Bahria Town', 'Gulberg', 'Model Town', 'Johar Town', 'Garden Town',
  'Faisal Town', 'Cantt', 'Shadman', 'Iqbal Town', 'Wapda Town', 'Township',
  'Allama Iqbal Town', 'Cavalry Ground', 'Askari', 'Punjabi Park', 'Samanabad',
  'Ichra', 'Anarkali', 'Raiwind Road', 'Ferozpur Road', 'Bedian Road', 'Valencia',
  'Lake City', 'Thokar Niaz Baig',
]

const deliveryDetails = [
  { iconKey: 'clock', title: 'Ready Time', desc: 'Food is ready by 10–11 AM daily. Delivery starts from that time. Order early to secure your portion before it sells out.' },
  { iconKey: 'delivery', title: 'Delivery Charge', desc: "Varies by distance. We'll tell you the exact charge when we confirm your order. No hidden fees — ever." },
  { iconKey: 'payment', title: 'Payment', desc: 'Cash on delivery or digital payment — Easypaisa, JazzCash, bank transfer. Both options available.' },
  { iconKey: 'masala', title: 'Masala Powder', desc: 'Spice products ship within 3 working days — separate from same-day food orders. Same WhatsApp ordering process.' },
]

function renderSvgIcon(key, color = '#214D41') {
  switch (key) {
    case 'clock':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    case 'delivery':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8h5l2 4v3h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    case 'payment':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    case 'masala':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      )
    default:
      return null
  }
}

export default function DeliveryPage() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <SEO title="Delivery Info" description="Organic Eat delivery details — areas we cover, timings, and how to track your order." />

      {/* ── HERO ── */}
      <section className="w-full bg-[#214D41] py-20 px-4 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/5 top-[-150px] right-[-100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.14em] block mb-4">Delivery in Lahore</span>
          <h1
            className="text-white font-black leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(38px, 6vw, 64px)', fontFamily: '"Inter", sans-serif' }}
          >
            WE DELIVER ACROSS LAHORE.
          </h1>
          <p className="text-white/70 text-base sm:text-lg">
            Not just one area. Most of Lahore. Send us your address and we'll confirm in minutes.
          </p>
        </div>
      </section>

      {/* ── MAIN MESSAGE ── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3">Where we deliver</span>
            <h2 className="text-[#214D41] font-extrabold leading-tight mb-5 text-3xl sm:text-4xl">
              If you're in Lahore, there's a good chance we come to you.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              We don't limit ourselves to a few neighbourhoods. Our customers are spread across Lahore and we go where they are.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
              The fastest way to check is to message us your address on WhatsApp. We'll confirm delivery availability and the estimated delivery charge within a few minutes. No waiting, no guessing.
            </p>
            <div className="bg-[#F0F7F0] border-l-4 border-[#214D41] rounded-r-2xl p-4 text-sm text-[#214D41] font-bold leading-relaxed">
              📍 Send us your address → we confirm delivery in minutes → you order → food at your door same day.
            </div>
          </div>

          {/* Right — Check area box */}
          <div className="bg-[#FDF5E6] rounded-2xl p-8 border border-[#548E0A]/25 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-[#214D41] font-extrabold text-xl mb-3">
              Check if we deliver to you
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Send us your address on WhatsApp right now. We'll confirm availability and delivery charge within minutes.
            </p>
            <a
              href={BRAND.whatsappOrderMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#548E0A] hover:bg-[#437208] text-white font-bold py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-md"
            >
              Check My Area on WhatsApp →
            </a>
            <p className="text-center text-xs text-gray-400 mt-3 italic">We reply within a few minutes during the morning.</p>
          </div>
        </div>
      </section>

      {/* ── AREAS SECTION ── */}
      <section className="bg-[#FDF5E6] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3">Areas we cover</span>
          <h2 className="text-[#214D41] font-extrabold text-3xl mb-4">
            Where we regularly deliver.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
            Here are areas we currently deliver to. If yours isn't listed, message us — we likely cover it too. This list is updated as we expand.
          </p>

          {/* Area pills */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {areas.map(area => (
              <span
                key={area}
                className="bg-white border border-gray-100 px-4 py-2 rounded-full text-sm font-bold text-[#214D41] hover:bg-[#F0F7F0] hover:border-[#214D41] transition-all duration-200 cursor-default"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="bg-[#FFF8ED] border border-[#548E0A]/20 rounded-xl p-4 text-sm text-[#437208] font-bold">
            Your area not listed?{' '}
            <a href={BRAND.whatsappUrl} className="text-[#437208] font-black underline" target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>{' '}
            — we cover more than this list and it's updated as we expand.
          </div>
        </div>
      </section>

      {/* ── DELIVERY DETAILS ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3">How delivery works</span>
          <h2 className="text-[#214D41] font-extrabold text-3xl mb-10">
            Same-day delivery. Every morning by 10–11 AM.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryDetails.map((card, i) => (
              <div key={i} className="bg-[#FDF5E6]/40 rounded-2xl p-6 border border-gray-100 text-center hover:bg-[#FDF5E6]/80 transition-colors duration-200">
                <span className="w-12 h-12 rounded-full bg-[#FDF5E6] flex items-center justify-center mx-auto mb-4 text-[#214D41]">
                  {renderSvgIcon(card.iconKey, '#214D41')}
                </span>
                <h3 className="text-xs font-bold text-[#214D41] mb-2 uppercase tracking-wider">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#214D41] py-16 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl mb-4">
            Want to check if we deliver to your area?
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed font-medium">
            Send us your address on WhatsApp. We'll confirm in minutes — and if we're there today, you could have fresh food at your door by noon.
          </p>
          <a
            href={BRAND.whatsappOrderMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#214D41] hover:bg-[#17362E] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-xl"
          >
            💬 Check My Area on WhatsApp →
          </a>
        </div>
      </section>

    </div>
  )
}
