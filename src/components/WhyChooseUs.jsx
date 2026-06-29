import { whyPoints, whyChooseUsContent as c } from '../data/homePageContent';
import { renderHomeIcon } from '../utils/homeIcons';

function ClassicWhy() {
  return (
    <section className="bg-[#FDF5E6] py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[#548E0A] text-sm font-medium uppercase tracking-[0.12em] block mb-3">{c.label}</span>
          <h2 className="font-bold text-[#214D41] leading-tight text-3xl sm:text-4xl lg:text-5xl tracking-tight">{c.heading}</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-5">{c.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPoints.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#FDF5E6] flex items-center justify-center mb-6 text-[#214D41]">{renderHomeIcon(item.iconKey, '#214D41')}</div>
              <h3 className="text-base font-bold text-[#214D41] mb-2 uppercase tracking-wider">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassWhy() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[#548E0A] text-sm font-medium uppercase tracking-[0.12em] block mb-3">{c.label}</span>
          <h2 className="font-bold text-[#214D41] leading-tight text-3xl sm:text-4xl lg:text-5xl tracking-tight">{c.heading}</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-5">{c.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {whyPoints.map((item, idx) => (
            <div key={idx} className="flex gap-5 p-6 rounded-2xl border-2 border-[#0a2e22]/10 bg-[#F7F3EE] hover:border-[#548E0A]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0a2e22] flex items-center justify-center shrink-0">{renderHomeIcon(item.iconKey, '#548E0A')}</div>
              <div>
                <h3 className="text-sm font-bold text-[#214D41] mb-2 uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialWhy() {
  return (
    <section className="bg-[#214D41] py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E4A101]" />
            <span className="text-[#E4A101] text-xs font-bold uppercase tracking-[0.2em]">{c.label}</span>
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-5">{c.heading}</h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">{c.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/20">
          {whyPoints.map((item, idx) => (
            <div key={idx} className={`p-8 hover:bg-white/5 transition-colors ${idx < whyPoints.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-white/20' : ''}`}>
              <span className="text-[#E4A101] text-3xl font-black block mb-4">{String(idx + 1).padStart(2, '0')}</span>
              <div className="w-10 h-10 border border-[#E4A101]/40 flex items-center justify-center mb-4">{renderHomeIcon(item.iconKey, '#E4A101')}</div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-3">{item.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumWhy() {
  return (
    <section className="bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[#007859] text-sm font-bold uppercase tracking-[0.12em] block mb-3">{c.label}</span>
          <h2 className="font-bold text-black leading-tight text-3xl sm:text-4xl lg:text-5xl tracking-tight">{c.heading}</h2>
          <p className="text-black/70 text-sm sm:text-base leading-relaxed mt-5">{c.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPoints.map((item, idx) => (
            <div key={idx} className="bg-[#FFEDD0]/50 rounded-3xl p-8 border-2 border-[#007859]/20 hover:border-[#007859]/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-[#007859]/15 flex items-center justify-center mb-6 text-[#007859] group-hover:scale-110 transition-all duration-300">
                {renderHomeIcon(item.iconKey, '#007859')}
              </div>
              <h3 className="text-sm font-bold text-black mb-2 uppercase tracking-wider">{item.title}</h3>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyChooseUs({ variant = 'classic' }) {
  if (variant === 'glass') return <GlassWhy />;
  if (variant === 'editorial') return <EditorialWhy />;
  if (variant === 'premium') return <PremiumWhy />;
  return <ClassicWhy />;
}
