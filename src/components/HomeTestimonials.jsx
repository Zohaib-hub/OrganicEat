import { reviews, testimonialsContent as c } from '../data/homePageContent';

function Stars({ count, className }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: count }).map((_, j) => (
        <span key={j}>★</span>
      ))}
    </div>
  );
}

function ClassicTestimonials() {
  return (
    <section className="bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#548E0A] text-sm font-medium uppercase tracking-widest block mb-3">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#214D41] tracking-tight">{c.heading}</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="font-bold text-[#214D41] text-lg">{c.rating}</span>
            <span className="text-gray-400 text-sm">{c.ratingSub}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((t, idx) => (
            <div key={idx} className="bg-[#FDF5E6]/40 rounded-3xl p-8 flex flex-col gap-5 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <Stars count={t.stars} className="text-sm text-[#548E0A]" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic font-medium">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200/50">
                <div className="w-10 h-10 rounded-full bg-[#214D41] text-white flex items-center justify-center font-bold text-sm">{t.initial}</div>
                <div>
                  <p className="font-bold text-sm text-[#214D41]">{t.name}</p>
                  <p className="text-[11px] text-gray-400 font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassTestimonials({ customBg, customBgImage }) {
  const sectionStyle = customBg ? {
    backgroundColor: customBg,
    ...(customBgImage && {
      backgroundImage: `url(${customBgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    })
  } : { background: 'linear-gradient(180deg, #0a2e22 0%, #071a14 100%)' };

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={sectionStyle}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`${customBg ? 'text-white' : 'text-[#548E0A]'} text-sm font-medium uppercase tracking-widest block mb-3`}>{c.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{c.heading}</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className={`font-bold ${customBg ? 'text-white' : 'text-[#548E0A]'} text-lg`}>{c.rating}</span>
            <span className={`${customBg ? 'text-white' : 'text-white/40'} text-sm`}>{c.ratingSub}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((t, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-5 hover:bg-white/10 transition-all duration-300">
              <Stars count={t.stars} className={`text-sm ${customBg ? 'text-white' : 'text-[#548E0A]'}`} />
              <p className={`${customBg ? 'text-white' : 'text-white/70'} text-sm sm:text-base leading-relaxed italic`}>&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full ${customBg ? 'bg-white text-[#3A7C5F]' : 'bg-[#548E0A] text-white'} flex items-center justify-center font-bold text-sm`}>{t.initial}</div>
                <div>
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className={`text-[11px] ${customBg ? 'text-white' : 'text-white/40'} font-semibold`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialTestimonials() {
  return (
    <section className="bg-[#F7F3EE] py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 border-b-2 border-[#214D41] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#E4A101]" />
              <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.2em]">{c.label}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#214D41] tracking-tight">{c.heading}</h2>
          </div>
          <div className="text-left lg:text-right">
            <span className="font-black text-[#214D41] text-2xl block">{c.rating}</span>
            <span className="text-gray-500 text-sm">{c.ratingSub}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-[#214D41]">
          {reviews.map((t, idx) => (
            <div key={idx} className={`bg-white p-8 flex flex-col gap-5 hover:bg-[#F7F3EE] transition-colors ${idx < reviews.length - 1 ? 'border-b lg:border-b-0 lg:border-r-2 border-[#214D41]' : ''}`}>
              <span className="text-6xl text-[#214D41]/10 font-serif leading-none">&ldquo;</span>
              <Stars count={t.stars} className="text-sm text-[#E4A101]" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-[#214D41]/10">
                <div className="w-10 h-10 bg-[#214D41] text-white flex items-center justify-center font-bold text-sm">{t.initial}</div>
                <div>
                  <p className="font-bold text-xs text-[#214D41] uppercase tracking-wider">{t.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumTestimonials() {
  return (
    <section className="bg-[#007859] py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FFEDD0] text-sm font-bold uppercase tracking-widest block mb-3">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{c.heading}</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="font-bold text-white text-lg">{c.rating}</span>
            <span className="text-white/80 text-sm">{c.ratingSub}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((t, idx) => (
            <div key={idx} className="bg-[#FFEDD0] rounded-3xl p-8 flex flex-col gap-5 border-2 border-[#FFEDD0] hover:border-black/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <Stars count={t.stars} className="text-sm text-[#007859]" />
              <p className="text-black text-sm sm:text-base leading-relaxed italic font-medium">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-black/10">
                <div className="w-10 h-10 rounded-full bg-[#007859] text-white flex items-center justify-center font-bold text-sm">{t.initial}</div>
                <div>
                  <p className="font-bold text-sm text-black">{t.name}</p>
                  <p className="text-[11px] text-black/50 font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomeTestimonials({ variant = 'classic', customBg, customBgImage }) {
  if (variant === 'glass') return <GlassTestimonials customBg={customBg} customBgImage={customBgImage} />;
  if (variant === 'editorial') return <EditorialTestimonials />;
  if (variant === 'premium') return <PremiumTestimonials />;
  return <ClassicTestimonials />;
}
