import { trustItems } from '../data/trustItems';

function renderIcon(key, color = '#548E0A') {
  switch (key) {
    case 'pot':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
          <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 6V4M16 6V4" />
        </svg>
      );
    case 'shield':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'truck':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8h5l2 4v3h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case 'leaf':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    default:
      return null;
  }
}

function ClassicStrip() {
  return (
    <section className="w-full bg-[#FDF5E6] py-8 border-t border-b border-[#214D41]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4 text-black px-2 pt-4 sm:pt-0 first:pt-0 sm:first:pl-4">
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center shrink-0 text-[#548E0A] hover:scale-110 hover:bg-white/15 transition-all duration-300">
                {renderIcon(item.iconKey, '#548E0A')}
              </div>
              <div>
                <strong className="text-base font-medium block mb-1 tracking-wide">{item.title}</strong>
                <span className="text-xs text-black/70 leading-none block">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassStrip() {
  return (
    <section
      className="w-full py-12 lg:py-14"
      style={{ background: 'linear-gradient(180deg, #071a14 0%, #0a2e22 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#548E0A]/20 flex items-center justify-center mb-4">
                {renderIcon(item.iconKey, '#548E0A')}
              </div>
              <strong className="text-white font-semibold text-sm sm:text-base block mb-2">{item.title}</strong>
              <span className="text-xs text-white/50 leading-relaxed">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialStrip() {
  return (
    <section className="w-full bg-[#F7F3EE] py-10 lg:py-12 border-t-2 border-b-2 border-[#214D41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="relative flex flex-col items-start gap-3 px-2">
              <span
                className="absolute -top-2 right-0 text-6xl font-black leading-none text-[#214D41]/8 select-none pointer-events-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-12 h-12 rounded-lg bg-white border-2 border-[#214D41]/20 flex items-center justify-center shrink-0">
                {renderIcon(item.iconKey, '#214D41')}
              </div>
              <div>
                <strong className="text-[#214D41] font-bold text-xs sm:text-sm uppercase tracking-[0.12em] block mb-2">
                  {item.title}
                </strong>
                <div className="w-8 h-0.5 bg-[#E4A101] mb-2" />
                <span className="text-gray-500 text-sm leading-relaxed block">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumStrip() {
  return (
    <section className="w-full bg-[#007859] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4 text-white px-2 group">
              <div className="w-12 h-12 rounded-full bg-[#FFEDD0] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {renderIcon(item.iconKey, '#007859')}
              </div>
              <div>
                <strong className="text-base font-bold block mb-1 tracking-wide">{item.title}</strong>
                <span className="text-xs text-white/80 leading-relaxed block">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TrustStrip({ variant = 'classic' }) {
  if (variant === 'glass') return <GlassStrip />;
  if (variant === 'editorial') return <EditorialStrip />;
  if (variant === 'premium') return <PremiumStrip />;
  return <ClassicStrip />;
}
