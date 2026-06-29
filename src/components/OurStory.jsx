import { Link } from 'react-router-dom';
import { ourStoryContent as c } from '../data/ourStoryContent';

function PotIcon({ color = '#548E0A' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
      <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 6V4M16 6V4" />
    </svg>
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

function ClassicStory() {
  return (
    <section id="about-section" className="bg-[#FDF5E6] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-[#548E0A] text-xs font-medium uppercase tracking-[0.14em] block">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#214D41] leading-tight tracking-tight">
            {c.heading}
          </h2>
          {c.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-500 text-sm sm:text-base leading-relaxed">{p}</p>
          ))}
          <div className="bg-white border-l-4 border-[#548E0A] rounded-r-2xl p-6 italic text-sm sm:text-base text-[#214D41] font-semibold shadow-sm leading-relaxed">
            &ldquo;{c.quote}&rdquo;
          </div>
          <StoryButtons
            primaryClass="bg-[#548E0A] hover:bg-[#214D41] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-lg shadow-sm"
            secondaryClass="border-2 border-[#214D41] hover:bg-[#214D41]/5 text-[#214D41] font-medium px-7 py-3.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
          />
        </div>
        <StoryImage
          imageClass="relative w-full max-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-50"
          overlayClass="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
          labelClass="text-[#548E0A] text-xs font-bold uppercase tracking-widest"
          titleClass="text-white text-lg font-bold mt-1"
          cardClass="absolute bottom-[-15px] right-[-5px] sm:right-[10px] bg-white rounded-2xl p-5 shadow-xl max-w-[190px] border border-gray-100 hover:scale-105 transition-transform duration-300"
          iconBg="bg-[#FDF5E6] text-[#548E0A]"
          iconColor="#548E0A"
          cardTitleClass="text-[#214D41] font-semibold text-sm block uppercase tracking-wide"
          cardSubClass="text-[10px] font-medium text-gray-400 block mt-1 leading-tight"
        />
      </div>
    </section>
  );
}

function GlassStory() {
  return (
    <section
      id="about-section"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071a14 0%, #0a2e22 50%, #0d3b2c 100%)' }}
    >
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(84,142,10,0.12) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <StoryImage
          imageClass="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15 order-2 lg:order-1"
          overlayClass="absolute inset-0 bg-gradient-to-t from-[#071a14]/80 to-transparent flex items-end p-6"
          labelClass="text-[#548E0A] text-xs font-bold uppercase tracking-widest"
          titleClass="text-white text-lg font-bold mt-1"
          cardClass="absolute bottom-[-15px] right-[-5px] sm:right-[10px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl max-w-[190px] hover:bg-white/15 transition-all duration-300"
          iconBg="bg-[#548E0A]/25"
          iconColor="#548E0A"
          cardTitleClass="text-white font-semibold text-sm block uppercase tracking-wide"
          cardSubClass="text-[10px] font-medium text-white/50 block mt-1 leading-tight"
        />
        <div className="flex flex-col gap-6 order-1 lg:order-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10">
          <span className="text-[#548E0A] text-xs font-medium uppercase tracking-[0.14em] block">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
            {c.heading}
          </h2>
          {c.paragraphs.map((p, i) => (
            <p key={i} className="text-white/60 text-sm sm:text-base leading-relaxed">{p}</p>
          ))}
          <div className="border border-[#548E0A]/30 bg-[#548E0A]/10 rounded-2xl p-6 italic text-sm sm:text-base text-white/90 font-medium leading-relaxed">
            &ldquo;{c.quote}&rdquo;
          </div>
          <StoryButtons
            primaryClass="bg-[#548E0A] hover:bg-[#6aad1a] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:shadow-lg shadow-sm"
            secondaryClass="border-2 border-white/25 hover:bg-white/10 text-white font-medium px-7 py-3.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
          />
        </div>
      </div>
    </section>
  );
}

function EditorialStory() {
  return (
    <section id="about-section" className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="border-t-2 border-b-2 border-[#214D41] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-[#E4A101]" />
                <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.2em]">{c.label}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#214D41] leading-[1.1] tracking-tight">
                {c.heading}
              </h2>
              {c.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed border-l border-[#E4A101]/40 pl-4">{p}</p>
              ))}
              <StoryButtons
                primaryClass="bg-[#214D41] hover:bg-[#1a3d33] text-white font-medium px-8 py-4 rounded-none transition-all duration-300 text-sm uppercase tracking-wider"
                secondaryClass="border-2 border-[#214D41] hover:bg-[#214D41] hover:text-white text-[#214D41] font-medium px-7 py-3.5 rounded-none transition-all duration-300 text-sm uppercase tracking-wider"
              />
            </div>

            <div className="lg:col-span-7 relative">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#E4A101] pointer-events-none" />
                <div className="relative aspect-16/10 overflow-hidden bg-[#F7F3EE]">
                  <img src={c.image.src} alt={c.image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#214D41]/70 to-transparent flex items-end p-6 lg:p-8">
                    <div>
                      <span className="text-[#E4A101] text-[10px] font-bold uppercase tracking-[0.25em]">{c.image.overlayLabel}</span>
                      <h3 className="text-white text-xl lg:text-2xl font-bold mt-1 tracking-tight">{c.image.overlayTitle}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#F7F3EE] border-l-4 border-[#E4A101] p-6 lg:p-8 relative">
                <span className="absolute top-2 left-4 text-5xl text-[#214D41]/10 font-serif leading-none select-none" aria-hidden="true">&ldquo;</span>
                <p className="text-[#214D41] text-sm sm:text-base italic font-medium leading-relaxed relative z-10 pl-6">
                  {c.quote}
                </p>
              </div>

              <div className="absolute -bottom-6 -right-2 lg:right-4 bg-white border-2 border-[#214D41] p-5 shadow-lg max-w-[200px]">
                <span className="w-8 h-8 rounded-none bg-[#F7F3EE] border border-[#214D41]/20 flex items-center justify-center mb-3">
                  <PotIcon color="#214D41" />
                </span>
                <strong className="text-[#214D41] font-bold text-xs block uppercase tracking-[0.15em]">{c.floatingCard.title}</strong>
                <span className="text-[10px] text-gray-500 block mt-1 leading-tight">{c.floatingCard.sub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PremiumStory() {
  return (
    <section id="about-section" className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-[#007859] text-xs font-bold uppercase tracking-[0.14em] block">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
            {c.heading}
          </h2>
          <div className="w-12 h-1 bg-[#007859] rounded-full" />
          {c.paragraphs.map((p, i) => (
            <p key={i} className="text-black/70 text-sm sm:text-base leading-relaxed">{p}</p>
          ))}
          <div className="bg-[#FFEDD0] border-l-4 border-[#007859] rounded-r-2xl p-6 italic text-sm sm:text-base text-black font-semibold shadow-sm leading-relaxed">
            &ldquo;{c.quote}&rdquo;
          </div>
          <StoryButtons
            primaryClass="bg-[#007859] hover:bg-[#005a42] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            secondaryClass="border-2 border-[#007859] hover:bg-[#007859]/15 text-black font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider hover:scale-105"
          />
        </div>
        <StoryImage
          imageClass="relative w-full max-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#FFEDD0] border-4 border-[#007859]/20"
          overlayClass="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6"
          labelClass="text-[#FFEDD0] text-xs font-bold uppercase tracking-widest"
          titleClass="text-white text-lg font-bold mt-1"
          cardClass="absolute bottom-[-15px] right-[-5px] sm:right-[10px] bg-[#FFEDD0] rounded-2xl p-5 shadow-xl max-w-[190px] border-2 border-[#007859]/30 hover:scale-105 transition-transform duration-300"
          iconBg="bg-[#007859]/20"
          iconColor="#007859"
          cardTitleClass="text-black font-bold text-sm block uppercase tracking-wide"
          cardSubClass="text-[10px] font-medium text-black/60 block mt-1 leading-tight"
        />
      </div>
    </section>
  );
}

export default function OurStory({ variant = 'classic' }) {
  if (variant === 'glass') return <GlassStory />;
  if (variant === 'editorial') return <EditorialStory />;
  if (variant === 'premium') return <PremiumStory />;
  return <ClassicStory />;
}
