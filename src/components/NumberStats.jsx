import { useEffect, useState, useRef } from 'react';
import { numberStats, numberStatsContent as c } from '../data/homePageContent';

function CountUp({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : '';
  const numValue = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : value;

  useEffect(() => {
    if (!match) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * numValue));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numValue);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, match, numValue, hasAnimated]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={elementRef}>
      {prefix}{hasAnimated ? count : 0}{suffix}
    </span>
  );
}

function ClassicStats() {
  return (
    <section className="bg-[#214D41] py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] background-size:[16px_16px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-[#548E0A] text-sm font-medium uppercase tracking-widest block mb-3">{c.label}</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14 tracking-tight max-w-2xl mx-auto">{c.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {numberStats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
              <span className="block text-5xl lg:text-6xl font-bold text-[#548E0A] leading-none mb-3"><CountUp value={stat.big} /></span>
              <strong className="text-sm font-medium text-white block mb-2 uppercase tracking-wider">{stat.title}</strong>
              <span className="text-xs text-white/70 leading-relaxed block">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassStats({ customBg, customBgImage }) {
  const sectionStyle = customBg ? {
    backgroundColor: customBg,
    ...(customBgImage && {
      backgroundImage: `url(${customBgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    })
  } : { background: 'linear-gradient(135deg, #071a14 0%, #0a2e22 100%)' };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={sectionStyle}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(84,142,10,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className={`${customBg ? 'text-white' : 'text-[#548E0A]'} text-sm font-medium uppercase tracking-widest block mb-3`}>{c.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">{c.heading}</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 max-w-5xl mx-auto">
          {numberStats.map((stat, i) => (
            <div key={i} className={`flex-1 flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl ${customBg ? 'hover:border-white/40' : 'hover:border-[#548E0A]/40'} transition-all duration-300`}>
              <span className={`text-4xl lg:text-5xl font-black ${customBg ? 'text-white' : 'text-[#548E0A]'} leading-none mb-3`}><CountUp value={stat.big} /></span>
              <strong className="text-xs font-semibold text-white block mb-2 uppercase tracking-wider">{stat.title}</strong>
              <span className={`text-[11px] ${customBg ? 'text-white' : 'text-white/45'} leading-relaxed`}>{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialStats() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-y-2 border-[#214D41]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#E4A101]" />
              <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.2em]">{c.label}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#214D41] tracking-tight leading-tight">{c.heading}</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#214D41]">
            {numberStats.map((stat, i) => (
              <div key={i} className={`p-6 text-center bg-[#F7F3EE] hover:bg-white transition-colors ${i < numberStats.length - 1 ? 'border-r-2 border-[#214D41]' : ''}`}>
                <span className="block text-4xl font-black text-[#214D41] leading-none mb-2"><CountUp value={stat.big} /></span>
                <div className="w-6 h-0.5 bg-[#E4A101] mx-auto mb-2" />
                <strong className="text-[10px] font-bold text-[#214D41] block mb-1 uppercase tracking-[0.12em]">{stat.title}</strong>
                <span className="text-[10px] text-gray-500 leading-relaxed block">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PremiumStats() {
  return (
    <section className="bg-[#FFEDD0] py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-[#007859] text-sm font-bold uppercase tracking-widest block mb-3">{c.label}</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-14 tracking-tight max-w-2xl mx-auto">{c.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {numberStats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-white border-2 border-[#007859]/20 rounded-3xl hover:border-[#007859]/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="block text-5xl lg:text-6xl font-black text-[#007859] leading-none mb-3"><CountUp value={stat.big} /></span>
              <strong className="text-sm font-bold text-black block mb-2 uppercase tracking-wider">{stat.title}</strong>
              <span className="text-xs text-black/70 leading-relaxed block">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function NumberStats({ variant = 'classic', customBg, customBgImage }) {
  if (variant === 'glass') return <GlassStats customBg={customBg} customBgImage={customBgImage} />;
  if (variant === 'editorial') return <EditorialStats />;
  if (variant === 'premium') return <PremiumStats />;
  return <ClassicStats />;
}
