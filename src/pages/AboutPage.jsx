import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { BRAND } from '../config/constants'

import AboutHeroImg from '../assets/images/A_creative,_high-end_food_art_202606152257.jpeg'
import AboutBehindImg from '../assets/images/A_creative,_high-end_food_art_202606152258.jpeg'

const stats = [
  { big: '1', label: 'Fresh batch daily', sub: 'Cooked every morning. No second batch, no leftovers.' },
  { big: '0', label: 'Frozen meals sold', sub: "Not once. Not ever. That's not changing." },
  { big: '3', label: 'Homemade products', sub: 'All made with the same care — no shortcuts on any of them.' },
]

const values = [
  {
    iconKey: 'clock',
    title: "Fresh means today. Not yesterday.",
    desc: "We cook one batch every morning. When it's gone it's gone. We never reheat, never repackage, never pretend yesterday's food is today's.",
  },
  {
    iconKey: 'leaf',
    title: 'Real ingredients. Full stop.',
    desc: "No packet masalas. No artificial additives. No colour, no flavour enhancers, no fillers. If we wouldn't put it in food for our own family — it doesn't go in food for yours.",
  },
  {
    iconKey: 'shield',
    title: 'Honest about everything.',
    desc: "If a dish sells out — we say so. If we can't deliver to your area — we say so. If something isn't right — we fix it. No runaround. No excuses.",
  },
]

const timeline = [
  { iconKey: 'leaf', time: 'Early Morning', title: 'Fresh ingredients arrive', desc: "Everything bought the same day it's cooked. Nothing stored from the night before." },
  { iconKey: 'cook', time: 'Morning Prep', title: 'The family cooks together', desc: 'Masalas from scratch. Spices measured, vegetables cleaned, chicken prepped fresh.' },
  { iconKey: 'pot', time: 'Cooking', title: 'Slow, proper cooking', desc: "The kind that takes time because it should. No shortcuts — just the way it's always been done." },
  { iconKey: 'truck', time: '10–11 AM', title: 'Packed and ready', desc: 'Food is ready. Packed carefully. Delivered across Lahore.' },
  { iconKey: 'refresh', time: 'Next Morning', title: 'Starts fresh again', desc: "Whatever's left doesn't carry over. Tomorrow starts from scratch. Every single day." },
]

function renderSvgIcon(key, color = '#548E0A') {
  switch (key) {
    case 'clock':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    case 'leaf':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )
    case 'shield':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'cook':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'pot':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
          <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M8 6V4M16 6V4" />
        </svg>
      )
    case 'truck':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8h5l2 4v3h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    case 'refresh':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      )
    default:
      return null
  }
}

export default function AboutPage() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <SEO title="Our Story" description="Learn about Organic Eat — a Lahore-based home kitchen delivering fresh, homemade food daily." />

      {/* ── HERO ── */}
      <section className="w-full bg-[#FDF5E6] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#214D41]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.14em] block mb-4">Our Story · Lahore</span>
            <h1
              className="text-[#214D41] font-black leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(38px, 6vw, 64px)', fontFamily: '"Inter", sans-serif' }}
            >
              A FAMILY KITCHEN. NOT A RESTAURANT.
            </h1>
            <p className="text-[#214D41] font-semibold text-lg leading-relaxed mb-4">
              Every plate that leaves our kitchen was made by someone in our family. That's not a marketing line. That's just how it works.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[480px]">
              We cook the way we cook for our own home. With clean ingredients, patience, and absolute care. No exceptions.
            </p>
          </div>
          {/* Right visual */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl relative bg-gray-100">
              <img
                src={AboutHeroImg}
                alt="Organic Eat Family Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent flex items-end p-6">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-lg border border-gray-100">
                  <strong className="text-[#214D41] font-extrabold block text-sm uppercase">Fresh Only</strong>
                  <span className="text-[11px] text-gray-500 font-bold block mt-0.5">Cooked daily. Never frozen. No exceptions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE / STORY ── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Story text */}
          <div className="flex flex-col gap-5">
            <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em]">Who we are</span>
            <h2 className="text-[#214D41] font-extrabold leading-tight text-3xl sm:text-4xl">
              We cook the way families cook. Because we are one.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Organic Eat isn't run by a chef. It's not backed by a restaurant group. It's a family — cooking together every morning in a home kitchen in Lahore, the same way food has always been made here.
            </p>
            <div className="bg-[#FDF5E6] border-l-4 border-[#548E0A] rounded-r-2xl p-5 italic text-sm sm:text-base text-[#214D41] font-medium leading-relaxed">
              "It started because we kept noticing the same thing. People in Lahore miss homemade food. Not fancy food. Not restaurant food. The kind of food that tastes like someone made it specifically for you — because someone actually did."
            </div>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              So we started cooking. Every morning, fresh ingredients come in. Every morning, we cook together. Every morning, the food goes out the same day. Nothing is carried over. Nothing is frozen. If it wasn't made today, it doesn't leave our kitchen.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              That's the whole commitment. It's not complicated. It's just harder to keep than most people think — and we've kept it every single day since we started.
            </p>
          </div>

          {/* Stat cards */}
          <div className="flex flex-col gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#214D41] rounded-2xl p-7 flex items-center gap-6 border border-[#17362E] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                <span className="text-[#548E0A] font-black shrink-0 text-5xl">
                  {s.big}
                </span>
                <div>
                  <strong className="text-white text-sm font-extrabold block mb-1 uppercase tracking-wider">{s.label}</strong>
                  <span className="text-white/70 text-xs leading-relaxed">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#FDF5E6] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em] block mb-3">What we believe in</span>
            <h2 className="text-[#214D41] font-extrabold text-3xl sm:text-4xl">
              Three things we won't compromise on.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#FDF5E6] flex items-center justify-center mb-5 text-[#214D41]">
                  {renderSvgIcon(v.iconKey, '#214D41')}
                </div>
                <h3 className="text-sm font-bold text-[#214D41] mb-3 uppercase tracking-wide">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEHIND THE FOOD ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-[420px] aspect-4/3 rounded-3xl overflow-hidden shadow-xl relative bg-gray-50">
              <img
                src={AboutBehindImg}
                alt="Our family kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text */}
          <div className="flex flex-col gap-5">
            <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.12em]">Behind the food</span>
            <h2 className="text-[#214D41] font-extrabold leading-tight text-3xl sm:text-4xl">
              The people who cook your food.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              This is a family kitchen. The people cooking your food are the same people who eat this food. We know what it should taste like because we've been eating it our whole lives.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              That's not something a commercial kitchen can replicate — no matter how big it is or how many chefs it has. When a family cooks together, the food tastes different. You know it when you eat it.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Every morning we show up together, cook together, and send food out together. That's been true since the first day. Nothing about that has changed.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-[#214D41] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#548E0A] text-xs font-bold uppercase tracking-widest block mb-3">Every single day</span>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl">
              What happens in our kitchen every morning.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {timeline.map((item, i) => (
              <div key={i} className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-[#548E0A]">
                  {renderSvgIcon(item.iconKey, '#548E0A')}
                </div>
                <span className="text-[#548E0A] text-[10px] font-bold uppercase tracking-wider block mb-1.5">{item.time}</span>
                <strong className="text-white text-xs font-bold block mb-1.5">{item.title}</strong>
                <p className="text-white/60 text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#FDF5E6] py-16 lg:py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-[#548E0A] text-xs font-bold uppercase tracking-widest block mb-4">Order today</span>
          <h2 className="text-[#214D41] font-extrabold mb-4 leading-tight text-3xl sm:text-4xl">
            This is the food we make. If that sounds like what you've been looking for — we're one message away.
          </h2>
          <p className="text-gray-500 text-sm mb-8">Fresh batch ready every morning by 10–11 AM. Limited portions daily.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="bg-[#548E0A] hover:bg-[#437208] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-lg"
            >
              See Today's Menu →
            </Link>
            <a
              href={BRAND.whatsappOrderMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#214D41] hover:bg-[#214D41]/5 text-[#214D41] font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
