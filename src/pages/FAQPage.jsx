import SEO from '../components/SEO'
import { FAQAccordionList } from '../components/FAQSection'
import { BRAND } from '../config/constants'

const faqCategories = [
  {
    iconKey: 'ordering',
    title: 'Ordering',
    faqs: [
      { q: 'How do I place an order?', a: "WhatsApp us. Tell us what you want and your delivery address. We'll confirm everything within minutes. No app, no account, no checkout needed." },
      { q: 'Do I need to create an account?', a: 'No. No app, no account, no signup. Just WhatsApp.' },
      { q: 'Can I order in advance for tomorrow?', a: "Yes. Message us today and we'll note your order for tomorrow's batch. We'll confirm when it's ready and give you the delivery time." },
      { q: 'Can I order multiple dishes at once?', a: "Yes. Just mention both in your message and we'll sort the quantity and total together." },
    ],
  },
  {
    iconKey: 'food',
    title: 'Freshness & Food',
    faqs: [
      { q: 'Do you actually cook fresh every day?', a: "Every morning. One batch. Nothing is carried over from the day before. No frozen backup. Fresh only — that's the whole point." },
      { q: 'What time is the food ready?', a: 'By 10–11 AM every morning. Order early — limited portions go fast, especially biryani.' },
      { q: 'Do you use frozen chicken?', a: "Never. Fresh chicken, bought that morning, cooked the same day. This is something we don't compromise on." },
      { q: 'Is there anything artificial in your food?', a: "No. Real ingredients only. No preservatives, no artificial flavouring, no colour, no fillers. What we say is in it — is in it." },
      { q: 'Can I choose the spice level for Biryani?', a: "Yes. Mild, Medium, or Spicy. Just mention it when you order and we'll make sure it's right." },
      { q: 'What if I have a food allergy?', a: "Message us before ordering. We'll tell you exactly what goes into each dish so you can make an informed choice. We never want to guess with this." },
    ],
  },
  {
    iconKey: 'delivery',
    title: 'Delivery',
    faqs: [
      { q: 'Which areas do you deliver to?', a: "Most areas in Lahore. Send us your address on WhatsApp and we'll confirm in minutes. We go wherever our customers are." },
      { q: 'Is delivery free?', a: "Delivery charges vary by distance. We'll give you the exact amount when we confirm your order. No surprises." },
      { q: 'How long does delivery take?', a: "Depends on your area. We'll give you an estimated delivery time when we confirm your order and update you if anything changes." },
      { q: 'What if my food arrives cold?', a: "That shouldn't happen — we pack carefully and deliver promptly. But if something is wrong, message us straight away and we'll make it right." },
      { q: "What if today's stock runs out?", a: "We'll let you know immediately and send you a reminder the next morning when a fresh batch is ready. You never lose your place." },
    ],
  },
  {
    iconKey: 'payment',
    title: 'Payment',
    faqs: [
      { q: 'How do I pay?', a: "Cash on delivery or digital payment via Easypaisa, JazzCash or bank transfer. Your choice. We'll share the details when we confirm your order." },
      { q: 'Do I pay upfront?', a: "Not required. Cash on delivery is available. If you prefer to pay in advance by digital transfer, that's also fine." },
      { q: 'Is there a minimum order?', a: "No minimum. You can order one plate." },
    ],
  },
  {
    iconKey: 'masala',
    title: 'Masala Powder',
    faqs: [
      { q: 'How is the masala powder different from the food orders?', a: "The Pizza Dough Masala Powder is not a fresh daily item. It ships within 3 working days instead of same-day. Same WhatsApp ordering process." },
      { q: 'Can I order the masala powder anytime?', a: "Yes. Unlike our fresh food, the masala powder is available any time — not limited by daily batches. Order whenever you like." },
      { q: 'Does the masala powder contain preservatives?', a: "No artificial preservatives. It's a clean, handmade spice blend with no additives." },
    ],
  },
]

function renderSvgIcon(key, color = '#214D41') {
  switch (key) {
    case 'ordering':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    case 'food':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.54 1.84 6.65 4.6 8.4L12 22l5.4-1.6A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
          <path d="M7 13h10" />
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

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({})

  const toggle = (catIdx, faqIdx) => {
    const key = `${catIdx}-${faqIdx}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <SEO title="FAQs" description="Frequently asked questions about Organic Eat's food, delivery, and ordering process." />

      {/* ── HERO ── */}
      <section className="w-full bg-[#214D41] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.14em] block mb-4">Questions</span>
          <h1
            className="text-white font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 64px)', fontFamily: '"Inter", sans-serif' }}
          >
            EVERYTHING YOU NEED TO KNOW.
          </h1>
          <p className="text-white/70 text-base sm:text-lg">
            If your question isn't here, just ask us directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* ── QUICK ANSWER BOX ── */}
      <div className="bg-[#FDF5E6] py-8 px-4 border-b border-[#E8DCC2]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div>
            <h2 className="font-bold text-[#214D41] text-base sm:text-lg">Don't see your question?</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">We respond on WhatsApp within minutes during the morning.</p>
          </div>
          <a
            href={BRAND.whatsappOrderMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#548E0A] hover:bg-[#437208] text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-lg"
          >
            Ask on WhatsApp →
          </a>
        </div>
      </div>

      {/* ── FAQ CATEGORIES ── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#FDF5E6] flex items-center justify-center text-[#214D41]">
                  {renderSvgIcon(cat.iconKey, '#214D41')}
                </span>
                <h2 className="text-lg font-bold text-[#214D41] uppercase tracking-wide">
                  {cat.title}
                </h2>
              </div>

              {/* FAQ items */}
              <div className="flex flex-col gap-3">
                <FAQAccordionList
                  faqs={cat.faqs}
                  isOpen={(faqIdx) => !!openItems[`${catIdx}-${faqIdx}`]}
                  onToggle={(faqIdx) => toggle(catIdx, faqIdx)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#214D41] py-16 px-4 text-center text-white ">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl mb-4">
            Ready to Order?
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
            Order on WhatsApp Now →
          </a>
          <p className="text-white/40 text-xs mt-4 italic font-bold">Limited portions daily — order early.</p>
        </div>
      </section>

    </div>
  )
}
