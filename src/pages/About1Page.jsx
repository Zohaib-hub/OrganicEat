import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import { BRAND } from '../config/constants'

import AboutHeroImg from '../assets/images/A_creative,_high-end_food_art_202606152256.jpg'
import AboutBehindImg from '../assets/images/A_creative,_high-end_food_art_202606152258.jpg'

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
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            )
        case 'leaf':
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
            )
        case 'shield':
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            )
        case 'cook':
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        case 'pot':
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
                    <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                    <path d="M8 6V4M16 6V4" />
                </svg>
            )
        case 'truck':
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="1" />
                    <path d="M16 8h5l2 4v3h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            )
        case 'refresh':
            return (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
            )
        default:
            return null
    }
}

function About1Page() {
    return (
        <div className="w-full bg-white font-sans overflow-x-hidden">
            <Navbar />

            {/* ── HERO ── */}
            <section
                className="w-full relative overflow-hidden flex items-center"
                style={{
                    minHeight: '90vh',
                    background: '#FDF5E6',
                    fontFamily: '"Inter", sans-serif',
                }}
            >
                {/* Decorative blobs */}
                <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(33,77,65,0.08) 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,142,10,0.07) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(33,77,65,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">

                    {/* LEFT: Text */}
                    <div className="flex flex-col justify-center gap-8 lg:pr-12">

                        {/* Label pill */}
                        <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-[#214D41]/20 bg-[#214D41]/5">
                            <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-pulse shrink-0" />
                            <span className="text-[#214D41] text-[11px] font-semibold uppercase tracking-[0.2em]">Our Story · Lahore</span>
                        </div>

                        {/* Main headline */}
                        <div>
                            <h1
                                className="text-[#1a1a1a] font-black leading-[0.92] tracking-[-0.04em]"
                                style={{ fontSize: 'clamp(52px, 7.5vw, 96px)' }}
                            >
                                A FAMILY<br />
                                KITCHEN.<br />
                                <span style={{ WebkitTextStroke: '2px #214D41', color: 'transparent' }}>NOT A RESTAURANT.</span>
                            </h1>
                        </div>

                        {/* Sub-headline */}
                        <p className="text-[#214D41] font-bold leading-relaxed max-w-[480px]" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
                            Every plate that leaves our kitchen was made by someone in our family. That's not a marketing line. That's just how it works.
                        </p>

                        {/* Body copy */}
                        <p className="text-[#1a1a1a]/50 text-sm leading-relaxed max-w-[440px]">
                            We cook the way we cook for our own home. With clean ingredients, patience, and absolute care. No exceptions.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <CTAButton
                                text="Order on WhatsApp"
                                href={BRAND.whatsappOrderMessage}
                            />
                        </div>
                    </div>


                    {/* RIGHT: Image */}
                    <div className="hidden lg:flex items-center justify-end relative">
                        <div className="relative w-full max-w-[500px]">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl" style={{ border: '3px solid rgba(33,77,65,0.12)' }}>
                                <img
                                    src={AboutHeroImg}
                                    alt="Organic Eat Family Kitchen"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent flex items-end justify-start p-6">
                                    <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/20 w-full max-w-[260px]">
                                        <strong className="text-[#1a1a1a] font-extrabold block text-sm uppercase tracking-wide mb-1">Fresh Only</strong>
                                        <span className="text-xs text-gray-600 font-medium block leading-snug">Cooked daily. Never frozen. No exceptions.</span>
                                    </div>
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div
                                className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center rounded-[24px] shadow-2xl"
                                style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #214D41, #2d6b5a)', border: '3px solid rgba(255,255,255,0.4)' }}
                            >
                                <span className="text-white font-black text-xl leading-none">100%</span>
                                <span className="text-white/80 text-[8px] font-bold uppercase tracking-widest mt-1">Home Cooked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="w-full font-sans">

                {/* TOP BLOCK — Dark green: label + headline + 3-column stats */}
                <div
                    className="w-full px-4 sm:px-6 lg:px-8 pt-16 pb-0"
                    style={{ background: '#0d2e22' }}
                >
                    <div className="max-w-7xl mx-auto">
                        {/* Label */}
                        <span
                            className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-5"
                            style={{ color: '#548E0A' }}
                        >
                            WHO WE ARE
                        </span>

                        {/* Headline */}
                        <div className="mb-10 max-w-3xl">
                            <h2
                                className="text-white font-extrabold leading-[1.05] tracking-tight"
                                style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
                            >
                                We cook the way families cook.{' '}
                                <span style={{ color: '#548E0A' }}>Because we are one.</span>
                            </h2>
                        </div>

                        {/* Stats row — 3 columns separated by dividers */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/10">
                            {stats.map((s, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-col gap-2 py-10 px-6 ${i < stats.length - 1 ? 'sm:border-r border-white/10' : ''}`}
                                >
                                    <span
                                        className="font-black leading-none"
                                        style={{ fontSize: 'clamp(48px, 6vw, 72px)', color: '#548E0A' }}
                                    >
                                        {s.big}
                                    </span>
                                    <strong className="text-white text-[15px] font-bold tracking-wide mt-1">
                                        {s.label}
                                    </strong>
                                    <span className="text-white/55 text-sm leading-relaxed">
                                        {s.sub}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM BLOCK — White: left body text + right pull-quote */}
                <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left: body text */}
                        <div className="flex flex-col gap-5">
                            <p className="text-[#1a1a1a] text-base sm:text-lg leading-[1.75] font-normal">
                                Organic Eat isn't run by a chef. It's a family — cooking together every morning in a home kitchen in Lahore. Every morning, fresh ingredients come in. The food goes out the same day. Nothing is carried over. Nothing is frozen. If it wasn't made today, it doesn't leave our kitchen.
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base leading-[1.75]">
                                That's the whole commitment. It's not complicated — it's just harder to keep than most people think. And we've kept it every single day since we started.
                            </p>
                        </div>

                        {/* Right: pull-quote card */}
                        <div
                            className="rounded-3xl p-8 lg:p-10 flex flex-col gap-5"
                            style={{ background: '#f0f7e6', border: '1px solid rgba(84,142,10,0.15)' }}
                        >
                            {/* Quote mark */}
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl leading-none select-none"
                                style={{ background: '#214D41' }}
                            >
                                "
                            </div>

                            <p
                                className="italic leading-[1.75] font-medium"
                                style={{ color: '#214D41', fontSize: 'clamp(15px, 1.6vw, 18px)' }}
                            >
                                People in Lahore miss homemade food. Not fancy food. The kind that tastes like someone made it specifically for you — because someone actually did.
                            </p>

                            <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[#214D41]/10">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                                    style={{ background: '#214D41' }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <span className="text-[#214D41] text-sm font-semibold">Organic Eat Family</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="bg-[#FDF5E6] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(33,77,65,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#548E0A] text-sm font-bold uppercase tracking-[0.15em] block mb-4">What we believe in</span>
                        <h2 className="text-[#1a1a1a] font-extrabold text-4xl sm:text-5xl tracking-tight">
                            Three things we won't compromise on.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white rounded-4xl p-10 border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-[#FDF5E6] flex items-center justify-center mb-8 text-[#548E0A]">
                                    {renderSvgIcon(v.iconKey, '#548E0A')}
                                </div>
                                <h3 className="text-[19px] font-bold text-[#1a1a1a] mb-4 leading-snug">{v.title}</h3>
                                <p className="text-[15px] text-gray-600 leading-[1.7]">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BEHIND THE FOOD ── */}
            <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[550px] aspect-3/4 rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-gray-50">
                            <img
                                src={AboutBehindImg}
                                alt="Our family kitchen"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]" />
                        </div>
                    </div>
                    {/* Text */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#548E0A] text-sm font-bold uppercase tracking-[0.15em]">Behind the food</span>
                        <h2 className="text-[#1a1a1a] font-extrabold leading-[1.1] text-4xl sm:text-5xl tracking-tight">
                            The people who cook your food.
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light mt-2">
                            This is a family kitchen. The people cooking your food are the same people who eat this food. We know what it should taste like because we've been eating it our whole lives.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                            That's not something a commercial kitchen can replicate — no matter how big it is or how many chefs it has. When a family cooks together, the food tastes different. You know it when you eat it.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                            Every morning we show up together, cook together, and send food out together. That's been true since the first day. Nothing about that has changed.
                        </p>
                        <CTAButton
                            text="Order to Whatsap"
                            className='mt-6 w-[240px]'
                        />
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="bg-[#071a14] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,142,10,0.15) 0%, transparent 70%)' }} />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#8bc34a] text-sm font-bold uppercase tracking-widest block mb-4">Every single day</span>
                        <h2 className="text-white font-extrabold text-4xl sm:text-5xl tracking-tight">
                            What happens in our kitchen every morning.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {timeline.map((item, i) => (
                            <div key={i} className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#548E0A]/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-[#548E0A]/20 flex items-center justify-center mx-auto mb-5 text-[#8bc34a] border border-[#548E0A]/20">
                                    {renderSvgIcon(item.iconKey, '#8bc34a')}
                                </div>
                                <span className="text-[#8bc34a] text-[11px] font-bold uppercase tracking-[0.15em] block mb-2">{item.time}</span>
                                <strong className="text-white text-base font-bold block mb-3 leading-tight">{item.title}</strong>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-[#FDF5E6] py-20 lg:py-28 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-[#548E0A] text-sm font-bold uppercase tracking-widest block mb-5">Order today</span>
                    <h2 className="text-[#1a1a1a] font-extrabold mb-6 leading-[1.15] text-4xl sm:text-[2.75rem] tracking-tight">
                        This is the food we make. If that sounds like what you've been looking for — we're one message away.
                    </h2>
                    <p className="text-gray-600 text-lg mb-10 font-light">Fresh batch ready every morning by 10–11 AM. Limited portions daily.</p>
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <CTAButton
                            text="Order on WhatsApp"
                            href={BRAND.whatsappOrderMessage}
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default About1Page
