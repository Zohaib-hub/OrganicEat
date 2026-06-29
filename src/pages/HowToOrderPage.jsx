import SEO from '../components/SEO'
import { BRAND } from '../config/constants'

const scheduleCards = [
  {
    iconKey: 'before10',
    time: 'Before 10 AM',
    title: 'Best Time to Order',
    desc: "Food is being cooked right now. Message us early and your spot is confirmed before the batch is ready.",
    color: 'bg-[#F0F7F0] border-[#214D41]/30',
  },
  {
    iconKey: 'ready',
    time: '10–11 AM',
    title: 'Food is Ready',
    desc: 'Delivery begins. You can still order at this point but portions are going fast. Message us to check availability.',
    color: 'bg-[#FDF5E6] border-[#548E0A]/30',
  },
  {
    iconKey: 'soldout',
    time: 'After Sell Out',
    title: 'Sold Out Today',
    desc: "We'll let you know immediately and send you a reminder the next morning when fresh stock is ready. You never lose your place.",
    color: 'bg-white border-[#214D41]/30',
  },
]

const steps = [
  {
    iconKey: 'phone',
    title: 'Step 1 — Save our number first',
    desc: "WhatsApp only delivers messages from contacts. Save our number before you message — otherwise your order might not come through.",
    note: '📞 Our WhatsApp number: +92 318 4267192 — save it now.',
  },
  {
    iconKey: 'whatsapp',
    title: 'Step 2 — Send us a message',
    desc: '"Hi, I want to order [dish name] and my address is [your address]." That\'s all we need to get started. Even just "I want biryani" works — we\'ll ask for the rest.',
    note: null,
  },
  {
    iconKey: 'pepper',
    title: 'Step 3 — Tell us your preferences',
    desc: 'For Biryani: mention your spice level — Mild, Medium, or Spicy. For Palak Murgh: no customisation needed. It comes exactly as it should.',
    note: null,
  },
  {
    iconKey: 'check',
    title: 'Step 4 — We confirm everything',
    desc: "We'll reply with your total, delivery time, and payment details. Usually within a few minutes. No long waits.",
    note: null,
  },
  {
    iconKey: 'delivery',
    title: 'Step 5 — Pay and your food arrives',
    desc: 'Pay via cash on delivery or digital transfer. Your food arrives hot and sealed, usually within the estimated time we gave you.',
    note: null,
  },
]

function renderSvgIcon(key, color = '#214D41') {
  switch (key) {
    case 'before10':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    case 'ready':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    case 'soldout':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#214D41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      )
    case 'phone':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    case 'pepper':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2A2 2 0 0 0 10 4A7.5 7.5 0 0 0 2.5 11.5c0 4.14 3.36 7.5 7.5 7.5c2.72 0 5.1-.96 6.43-2.5C18.66 14.54 22 10.3 22 10.3S17.47 5.76 12 2z" />
        </svg>
      )
    case 'check':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
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
    case 'cash':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    case 'digital':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    case 'masala':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      )
    default:
      return null
  }
}

export default function HowToOrderPage() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <SEO title="How to Order" description="Step-by-step guide to ordering fresh homemade food from Organic Eat in Lahore." />

      {/* ── HERO ── */}
      <section className="w-full bg-[#FDF5E6] py-20 px-4 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#214D41]/5 top-[-150px] right-[-100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.14em] block mb-4">Ordering is simple</span>
          <h1
            className="text-[#214D41] font-black leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(38px, 6vw, 64px)', fontFamily: '"Inter", sans-serif' }}
          >
            ONE WHATSAPP MESSAGE. THAT'S ALL.
          </h1>
          <p className="text-[#214D41] font-semibold text-base sm:text-lg leading-relaxed">
            No app. No account. No checkout. Just a message and we'll sort everything.
          </p>
        </div>
      </section>

      {/* ── SCHEDULE / WHEN TO ORDER ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3">Know before you order</span>
          <h2 className="text-[#214D41] font-extrabold mb-10 text-3xl sm:text-4xl">
            When to order and what to expect.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {scheduleCards.map((card, i) => (
              <div key={i} className={`${card.color} border rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300`}>
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-5 text-[#214D41]">
                  {renderSvgIcon(card.iconKey, card.iconKey === 'soldout' ? '#DC2626' : '#214D41')}
                </span>
                <span className="block text-[#214D41] font-extrabold text-lg mb-1.5">
                  {card.time}
                </span>
                <h3 className="text-xs font-bold text-[#214D41] mb-2 uppercase tracking-wider">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="bg-[#FDF5E6] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3 text-center">Step by step</span>
          <h2 className="text-[#214D41] font-extrabold mb-10 text-center text-3xl sm:text-4xl">
            Here's exactly what to do.
          </h2>
          <div className="flex flex-col divide-y divide-[#548E0A]/25">
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-[50px_1fr] gap-6 items-start py-7">
                <div className="w-10 h-10 rounded-full bg-[#214D41] flex items-center justify-center text-[#548E0A] flex-shrink-0">
                  {renderSvgIcon(step.iconKey, '#548E0A')}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#214D41] mb-2 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  {step.note && (
                    <div className="mt-3 bg-white rounded-xl p-4 text-xs text-[#214D41] font-semibold border-l-4 border-[#548E0A]">
                      {step.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYMENT ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3 text-center">How to pay</span>
          <h2 className="text-[#214D41] font-extrabold mb-10 text-center text-3xl sm:text-4xl">
            Two ways to pay. Both are easy.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#F0F7F0] rounded-2xl p-8 text-center border border-[#214D41]/10 hover:shadow-lg transition-shadow duration-300">
              <span className="w-12 h-12 rounded-full bg-[#F0F7F0] border border-[#214D41]/30 flex items-center justify-center mx-auto mb-4 text-[#214D41]">
                {renderSvgIcon('cash', '#214D41')}
              </span>
              <h3 className="font-extrabold text-[#214D41] text-lg mb-3">Cash on Delivery</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">Pay when your food arrives. No upfront payment needed.</p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#214D41]/70">Most popular with first-time customers</span>
            </div>
            <div className="bg-[#FFF8ED] rounded-2xl p-8 text-center border border-[#548E0A]/10 hover:shadow-lg transition-shadow duration-300">
              <span className="w-12 h-12 rounded-full bg-[#FDF5E6] border border-[#548E0A]/30 flex items-center justify-center mx-auto mb-4 text-[#548E0A]">
                {renderSvgIcon('digital', '#548E0A')}
              </span>
              <h3 className="font-extrabold text-[#214D41] text-lg mb-3">Digital Payment</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">Easypaisa · JazzCash · Bank Transfer. Pay before delivery. We send account details at confirmation.</p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#548E0A]/70">Fastest for repeat customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMPLATE BOX ── */}
      <section className="bg-[#214D41] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3">Copy this if you want</span>
          <h2 className="text-white font-extrabold mb-3 text-3xl">
            Not sure what to say? Use this.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            You don't need to be this formal — even just "I want biryani" works fine. But if you prefer a template, here it is.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#548E0A] flex items-center justify-center font-bold text-black text-xs">You</div>
              <div>
                <strong className="text-white text-sm font-bold block">To: Organic Eat</strong>
                <span className="text-white/50 text-xs">WhatsApp message</span>
              </div>
            </div>
            <div className="text-white/85 text-sm leading-relaxed whitespace-pre-line">
{`Hi Organic Eat! I want to order:

[Dish name + quantity]
[For Biryani: Mild / Medium / Spicy]

My delivery address: [your address]
Preferred delivery time: [if any]

Payment: Cash on delivery / Digital`}
            </div>
          </div>
          <p className="text-white/40 text-xs mt-5 italic text-center">Even just "I want biryani" is enough. We'll ask for what else we need.</p>
        </div>
      </section>

      {/* ── MASALA NOTE ── */}
      <section className="bg-[#FDF5E6] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-7 border border-[#548E0A]/20 flex flex-col sm:flex-row gap-6 items-start">
          <span className="w-12 h-12 rounded-full bg-[#FFF8ED] border border-[#548E0A]/30 flex items-center justify-center flex-shrink-0 text-[#548E0A]">
            {renderSvgIcon('masala', '#548E0A')}
          </span>
          <div>
            <h3 className="font-bold text-[#214D41] mb-2 text-lg">
              Ordering Masala Powder works a little differently.
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The Pizza Dough Masala Powder is not a fresh daily item. It's available any time — but delivery takes 3 working days instead of same-day. Same process though: WhatsApp us, mention the masala powder, give us your address, and we'll confirm delivery timing right away.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#214D41] py-16 px-4 text-center text-white text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl mb-4">
            Ready to order?
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed font-medium">
            Today's fresh batch is ready right now. Message us and we'll take care of the rest.
          </p>
          <a
            href={BRAND.whatsappOrderMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#214D41] hover:bg-[#17362E] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-xl"
          >
            💬 Order on WhatsApp Now →
          </a>
          <p className="text-black/55 text-xs mt-4 italic font-bold">Limited portions daily — order early.</p>
        </div>
      </section>

    </div>
  )
}
