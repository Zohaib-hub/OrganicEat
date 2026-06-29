import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlendBg from "../assets/blend-bg.png";
import { howItWorksContent as d } from '../data/howItWorksContent';
import { whyPoints, whyChooseUsContent as e } from '../data/homePageContent';
import { renderHomeIcon } from '../utils/homeIcons';
import CTAButton from '../components/CTAButton';


import HomeHeroImg from '../assets/images/A_creative,_high-end_food_art_202606152258.jpg'
import HomeBiryaniImg from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpg'
import HomeSpiceImg from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'
import TrustStrip from "../components/TrustStrip";
import FeaturedProducts from "../components/FeaturedProducts";
import { ourStoryContent as c } from '../data/ourStoryContent';
import { Link } from "react-router-dom";
import { BRAND } from '../config/constants';
import HowItWorks from "../components/HowItWorks";
import NumberStats from "../components/NumberStats";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeFAQ from "../components/HomeFAQ";
import HomeTestimonials from "../components/HomeTestimonials";



function WhatsAppButton({ className }) {
    return (
        <a
            href={c.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {c.whatsappLabel}
        </a>
    );
}

function renderIcon(key, color = '#1a1a1a') {
    switch (key) {
        case 'pot':
            return (
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
                    <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 6V4M16 6V4" />
                </svg>
            );
        case 'whatsapp':
            return (
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            );
        case 'truck':
            return (
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="1" />
                    <path d="M16 8h5l2 4v3h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            );
        case 'heart':
            return (
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            );
        default:
            return null;
    }
}



function StoryImage({ imageClass, overlayClass, labelClass, titleClass, cardClass, iconBg, iconColor, cardTitleClass, cardSubClass }) {
    return (
        <div className="flex justify-center relative items-center min-h-[300px] lg:min-h-[400px]">
            <div className={imageClass}>
                <img src={c.image.src} alt={c.image.alt} className="w-full h-full object-cover" />
                <div className={overlayClass}>
                    <div>
                        <span className={labelClass}>{c.image.overlayLabel}</span>
                        <h3 className={titleClass}>{c.image.overlayTitle}</h3>
                    </div>
                </div>
            </div>
            <div className={cardClass}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${iconBg}`}>
                    <PotIcon color={iconColor} />
                </span>
                <strong className={cardTitleClass}>{c.floatingCard.title}</strong>
                <span className={cardSubClass}>{c.floatingCard.sub}</span>
            </div>
        </div>
    );
}
function StoryButtons({ primaryClass, secondaryClass }) {
    return (
        <div className="flex flex-wrap gap-4 pt-2">
            <a
                href={c.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryClass}
            >
                {c.whatsappLabel}
            </a>
            <Link to={c.aboutPath} className={secondaryClass}>
                {c.aboutLabel}
            </Link>
        </div>
    );
}
function PotIcon({ color = '#548E0A' }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
            <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 6V4M16 6V4" />
        </svg>
    );
}

const Home4Page = () => {
    return (
        <>
            <Navbar />



            <section
                id="hero-section-new"
                className="w-full relative overflow-hidden flex items-center"
                style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #071a14 0%, #214D41 45%, #214D41 100%)',
                    fontFamily: '"Inter", sans-serif',
                }}
            >
                {/* ── Decorative blobs ── */}
                <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,142,10,0.18) 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(33,77,65,0.35) 0%, transparent 70%)' }} />
                {/* Fine dot grid */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">

                    {/* ── LEFT: Text ── */}
                    <div className="flex flex-col justify-center gap-8 lg:pr-12">

                        {/* Live pill */}
                        <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-pulse shrink-0" />
                            <span className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.2em]">Fresh Daily · Homemade · Lahore</span>
                        </div>

                        {/* Main headline */}
                        <div>
                            <h1
                                className="text-white font-black leading-[0.92] tracking-[-0.04em]"
                                style={{ fontSize: 'clamp(52px, 7.5vw, 96px)' }}
                            >
                                REAL<br />
                                HOMEMADE<br />
                                <span style={{ WebkitTextStroke: '2px #548E0A', color: 'transparent' }}>FOOD.</span>
                            </h1>
                            <h2
                                className="font-black leading-none tracking-[-0.03em] mt-2"
                                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#548E0A' }}
                            >
                                DELIVERED TODAY.
                            </h2>
                        </div>

                        {/* Sub-headline */}
                        <p className="text-white/80 font-medium leading-relaxed max-w-[480px]" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
                            Cooked this morning. At your door today.<br />
                            That's how it works — every single day.
                        </p>

                        {/* Body copy */}
                        <p className="text-white/45 text-sm leading-relaxed max-w-[440px]">
                            Not restaurant food. Not reheated food. The kind of food you grew up eating — made fresh every morning in a home kitchen and delivered to your door in Lahore before it gets a chance to go cold.
                        </p>

                        {/* Tag pills */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                { label: 'Cooked Today', bg: 'rgba(84,142,10,0.15)', border: 'rgba(84,142,10,0.4)', color: '#8bc34a' },
                                { label: 'Delivered Today', bg: 'rgba(33,77,65,0.8)', border: 'rgba(84,142,10,0.3)', color: '#fff' },
                                { label: 'Lahore Sourced', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' },
                            ].map(pill => (
                                <span
                                    key={pill.label}
                                    className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm"
                                    style={{ background: pill.bg, border: `1px solid ${pill.border}`, color: pill.color }}
                                >
                                    {pill.label}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <CTAButton
                                text="Order on WhatsApp"
                                href={BRAND.whatsappOrderMessage}
                                className="text-white"
                            />
                        </div>

                        {/* Stock indicator */}
                        <div className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                            <span className="w-2 h-2 rounded-full bg-[#548E0A] animate-ping shrink-0" />
                            Fresh stock ready now — limited daily portions
                        </div>
                    </div>

                    {/* ── RIGHT: Visual Mosaic ── */}
                    <div className="hidden lg:flex items-center justify-end relative">
                        <div className="relative w-full max-w-[520px]">

                            {/* Big main image */}
                            <div
                                className="rounded-[40px] overflow-hidden shadow-2xl"
                                style={{ border: '3px solid rgba(255,255,255,0.08)' }}
                            >
                                <img
                                    src={HomeHeroImg}
                                    alt="Home Kitchen Cooking"
                                    className="w-full h-full object-cover float-right"

                                />
                                {/* Overlay gradient */}
                                {/* <div className="absolute inset-0 rounded-[40px]" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(7,26,20,0.9) 100%)' }} /> */}

                                {/* Bottom tag */}
                                <div className="absolute top-6 left-6 right-6" style={{ background: 'rgba(7,26,20,0.75)', backdropFilter: 'blur(12px)', borderRadius: '16px', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color: '#548E0A' }}>Lahore Kitchen</span>
                                    <span className="block text-white font-bold text-sm mt-0.5">Family-cooked daily</span>
                                </div>
                            </div>

                            {/* Floating card — top right */}


                            {/* Floating card — bottom right */}


                            {/* Floating 100% badge — left */}
                            <div
                                className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center rounded-[24px] shadow-2xl"
                                style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #548E0A, #6aad0c)', border: '3px solid rgba(255,255,255,0.15)' }}
                            >
                                <span className="text-white font-black text-xl leading-none">100%</span>
                                <span className="text-white/80 text-[8px] font-bold uppercase tracking-widest mt-1">Homemade Food</span>
                            </div>

                            {/* Floating stat chip */}
                            <div
                                className="absolute top-[38%] -right-14 flex items-center gap-2 rounded-2xl px-4 py-3"
                                style={{ background: 'rgba(7,26,20,0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(84,142,10,0.3)', minWidth: '140px' }}
                            >
                                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(84,142,10,0.2)' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#548E0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold leading-none">Ready by 10AM</p>
                                    <p className="text-white/40 text-[9px] mt-0.5">Every morning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,26,20,0.6))' }} />
            </section >

            <TrustStrip variant="classic" />
            <FeaturedProducts variant="classic" />



            {/* our story */}
            <section
                id="about-section"
                className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                style={{ backgroundImage: `url(${BlendBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,142,10,0.12) 0%, transparent 70%)' }} />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <StoryImage
                        imageClass="relative w-full max-w-[520px] h-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 order-2 lg:order-1"
                        overlayClass="absolute inset-0 bg-gradient-to-t from-[#071a14]/80 to-transparent flex items-end p-6"
                        labelClass="text-[#548E0A] text-xs font-bold uppercase tracking-widest"
                        titleClass="text-white text-lg font-bold mt-1"
                        cardClass="absolute bottom-[-15px] right-[-5px] sm:right-[10px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl max-w-[190px] hover:bg-white/15 transition-all duration-300 z-50"
                        iconBg="bg-[#548E0A]"
                        iconColor="#ffffff"
                        cardTitleClass="text-white font-semibold text-sm block uppercase tracking-wide"
                        cardSubClass="text-[11px] font-medium text-white/70 block mt-1 leading-tight"
                    />
                    <div className="flex flex-col gap-6 order-1 lg:order-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10">
                        <span className="text-white text-xs font-medium uppercase tracking-[0.14em] block">{c.label}</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
                            {c.heading}
                        </h2>
                        {c.paragraphs.map((p, i) => (
                            <p key={i} className="text-white text-sm sm:text-base leading-relaxed">{p}</p>
                        ))}
                        <div className="border border-[#3A7C5F] bg-[#3A7C5F] rounded-2xl p-6 italic text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                            &ldquo;{c.quote}&rdquo;
                        </div>
                        <StoryButtons
                            primaryClass="bg-[#548E0A] hover:bg-[#6aad1a] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-lg shadow-sm"
                            secondaryClass="border-2 border-white/25 hover:bg-white/10 text-white font-medium px-7 py-3.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
                        />
                    </div>
                </div>
            </section>


            {/* How it works */}
            <section
                id="how-section"
                className="w-full py-14 md:py-20 text-center"
                style={{ background: '#FDF5E6' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <p className="text-[16px] font-normal uppercase tracking-[0.2em] text-black mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {d.label}
                    </p>
                    <h2
                        className="text-[#1a1a1a] font-semibold leading-tight mb-12 md:mb-16"
                        style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}
                    >
                        {d.heading}
                    </h2>

                    {/* Desktop: horizontal with triple arrows */}
                    <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
                        {d.steps.map((step, i) => (
                            <div key={step.num} className="flex items-center gap-4 md:gap-6 lg:gap-8">
                                {/* Step Card */}
                                <div className="flex flex-col items-center gap-4 max-w-[190px]">
                                    <div className="relative">
                                        <div
                                            className="w-[140px] h-[140px] md:w-[155px] md:h-[155px] lg:w-[165px] lg:h-[165px] rounded-full flex items-center justify-center"
                                            style={{ background: '#F2EBD9' }}
                                        >
                                            {renderIcon(step.iconKey, '#1a1a1a')}
                                        </div>
                                        <div
                                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                                            style={{ background: '#F9A825' }}
                                        >
                                            {step.num}
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-col items-center gap-1.5">
                                        <p className="text-[#1a1a1a] font-semibold text-[14px] md:text-[15px] text-center" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            {step.title}
                                        </p>
                                        <p className="text-gray-500 text-xs sm:text-sm text-center leading-snug" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                                {/* Triple Arrow between steps */}
                                {i < d.steps.length - 1 && (
                                    <div className="flex flex-row items-center gap-px text-black px-1 select-none">
                                        {['›', '›', '›'].map((ch, idx) => (
                                            <span key={idx} className="font-light leading-none text-black" style={{ fontSize: '38px', letterSpacing: '-4px' }}>
                                                {ch}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile: vertical with down arrows */}
                    <div className="flex sm:hidden flex-col items-center gap-4">
                        {d.steps.map((step, i) => (
                            <div key={step.num} className="flex flex-col items-center gap-4">
                                <div className="flex flex-col items-center gap-4 max-w-[200px]">
                                    <div className="relative">
                                        <div
                                            className="w-[130px] h-[130px] rounded-full flex items-center justify-center"
                                            style={{ background: '#F2EBD9' }}
                                        >
                                            {renderIcon(step.iconKey, '#1a1a1a')}
                                        </div>
                                        <div
                                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                                            style={{ background: '#F9A825' }}
                                        >
                                            {step.num}
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-col items-center gap-1.5">
                                        <p className="text-[#1a1a1a] font-semibold text-[15px] text-center" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            {step.title}
                                        </p>
                                        <p className="text-gray-500 text-sm text-center leading-snug" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                                {i < d.steps.length - 1 && (
                                    <div className="flex flex-col items-center gap-0 opacity-40 py-1">
                                        {[0, 1, 2].map(idx => (
                                            <svg key={idx} width="22" height="14" viewBox="0 0 24 14" fill="none"
                                                stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 2l10 10L22 2" />
                                            </svg>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* WhatsApp CTA Button */}
                    <div className="mt-12 md:mt-16">
                        <CTAButton
                            text={d.whatsappLabel}
                            href={d.whatsappUrl}
                        />
                    </div>
                </div>
            </section>

            <NumberStats variant="glass" customBg="#3A7C5F" customBgImage={BlendBg} />




            {/* why choose us */}
            <section className="bg-[#FDF5E6] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-[800px] mx-auto mb-16 lg:mb-20">
                        <span className="text-[#548E0A] text-sm font-bold uppercase tracking-[0.15em] block mb-4">{e.label}</span>
                        <h2 className="font-extrabold text-[#1a1a1a] leading-[1.1] text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight">{e.heading}</h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-6">{e.description}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {whyPoints.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-4xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-[#FDF5E6] flex items-center justify-center mb-6 text-[#548E0A] border border-[#548E0A]/10">
                                    {renderHomeIcon(item.iconKey, '#548E0A')}
                                </div>
                                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-3 leading-snug">{item.title}</h3>
                                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.6]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <HomeTestimonials variant="glass" customBg="#3A7C5F" customBgImage={BlendBg} />
            <HomeFAQ variant="glass" />


        </>
    );
};

export default Home4Page;