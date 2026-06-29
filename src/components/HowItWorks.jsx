import { howItWorksContent as c } from '../data/howItWorksContent';

function renderIcon(key, color = '#214D41') {
  switch (key) {
    case 'pot':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
          <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 6V4M16 6V4" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
    case 'heart':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    default:
      return null;
  }
}

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

function ClassicHowItWorks() {
  return (
    <section id="how-section" className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#548E0A] text-sm font-medium uppercase tracking-[0.12em] block mb-3">{c.label}</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#214D41] mb-16 tracking-tight">
          {c.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-14 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 z-0" />
          {c.steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-[96px] h-[96px] rounded-full bg-[#FDF5E6] border-2 border-[#548E0A]/20 flex items-center justify-center mx-auto mb-5 relative group-hover:border-[#548E0A]/60 transition-all duration-300 shadow-sm">
                {renderIcon(step.iconKey, '#214D41')}
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#548E0A] text-white text-xs font-medium flex items-center justify-center shadow-md border-2 border-white">
                  {step.num}
                </span>
              </div>
              <h3 className="text-base font-medium text-[#214D41] mb-2.5 uppercase tracking-wider group-hover:text-[#548E0A] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[210px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        <WhatsAppButton className="inline-flex items-center gap-2 bg-[#548E0A] hover:bg-[#214D41] text-white font-medium px-8 py-4.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-xl hover:-translate-y-0.5 transform shadow-sm" />
      </div>
    </section>
  );
}

function GlassHowItWorks() {
  return (
    <section
      id="how-section"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a2e22 0%, #071a14 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-[#548E0A] text-sm font-medium uppercase tracking-[0.12em] block mb-3">{c.label}</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16 tracking-tight max-w-3xl mx-auto">
          {c.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
          {c.steps.map((step) => (
            <div
              key={step.num}
              className="flex items-start gap-5 text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#548E0A]/30 transition-all duration-300"
            >
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[#548E0A]/20 border border-[#548E0A]/30 flex items-center justify-center">
                  {renderIcon(step.iconKey, '#548E0A')}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#548E0A] text-white text-[10px] font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">{step.title}</h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <WhatsAppButton className="inline-flex items-center gap-2 bg-[#548E0A] hover:bg-[#6aad1a] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-xl hover:-translate-y-0.5 transform shadow-sm" />
      </div>
    </section>
  );
}

function EditorialHowItWorks() {
  return (
    <section id="how-section" className="bg-[#F7F3EE] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#E4A101]" />
            <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.2em]">{c.label}</span>
            <div className="w-8 h-0.5 bg-[#E4A101]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#214D41] tracking-tight max-w-3xl mx-auto">
            {c.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#214D41] mb-14">
          {c.steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative p-6 lg:p-8 bg-white hover:bg-[#F7F3EE] transition-colors duration-300 ${i < c.steps.length - 1 ? 'border-b sm:border-b-0 sm:border-r-2 border-[#214D41]' : ''}`}
            >
              <span className="text-5xl font-black text-[#214D41]/10 leading-none block mb-4">
                {String(step.num).padStart(2, '0')}
              </span>
              <div className="w-10 h-10 border-2 border-[#214D41]/20 flex items-center justify-center mb-4">
                {renderIcon(step.iconKey, '#214D41')}
              </div>
              <h3 className="text-xs font-bold text-[#214D41] mb-2 uppercase tracking-[0.15em]">{step.title}</h3>
              <div className="w-6 h-0.5 bg-[#E4A101] mb-3" />
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton className="inline-flex items-center gap-2 bg-[#214D41] hover:bg-[#1a3d33] text-white font-medium px-8 py-4 rounded-none transition-all duration-300 text-sm uppercase tracking-wider" />
        </div>
      </div>
    </section>
  );
}

function PremiumHowItWorks() {
  return (
    <section id="how-section" className="bg-[#007859] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(#FFEDD0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-[#FFEDD0] text-sm font-bold uppercase tracking-[0.12em] block mb-3">{c.label}</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16 tracking-tight max-w-3xl mx-auto">
          {c.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {c.steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center group">
              <div className="w-[96px] h-[96px] rounded-full bg-[#FFEDD0] border-2 border-[#FFEDD0]/50 flex items-center justify-center mx-auto mb-5 relative group-hover:scale-110 transition-all duration-300 shadow-lg">
                {renderIcon(step.iconKey, '#007859')}
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#FFEDD0] text-black text-xs font-bold flex items-center justify-center shadow-md border-2 border-[#007859]">
                  {step.num}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2.5 uppercase tracking-wider">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-[210px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        <WhatsAppButton className="inline-flex items-center gap-2 bg-[#FFEDD0] hover:bg-white text-black font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:scale-105 hover:shadow-xl hover:-translate-y-1" />
      </div>
    </section>
  );
}

export default function HowItWorks({ variant = 'classic' }) {
  if (variant === 'glass') return <GlassHowItWorks />;
  if (variant === 'editorial') return <EditorialHowItWorks />;
  if (variant === 'premium') return <PremiumHowItWorks />;
  return <ClassicHowItWorks />;
}
