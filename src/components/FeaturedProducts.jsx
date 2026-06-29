import { Link } from 'react-router-dom';
import { featuredProducts, featuredProductsContent as c } from '../data/homePageContent';
import FadeInUp from './FadeInUp';

function ProductCard({ product, cardClass, imageWrapClass, badgeClass, deliveryClass, tagClass, titleClass, priceClass, orderBtnClass, detailsBtnClass }) {
  return (
    <div className={cardClass}>
      <div className={imageWrapClass}>
        <div className={badgeClass}>{product.badge}</div>
        <div className={deliveryClass}>{product.delivery}</div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { e.target.src = `https://placehold.co/400x240?text=${encodeURIComponent(product.name)}`; }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="flex flex-col gap-2">
          <span className={tagClass}>{product.tag}</span>
          <h3 className={titleClass}>{product.name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-tight line-clamp-3">{product.description}</p>
        </div>
        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100/80">
          <div className="flex items-baseline gap-2">
            <span className={priceClass}>{product.price}</span>
            <span className="text-gray-400 line-through text-sm font-medium">{product.originalPrice}</span>
          </div>
          <a href={c.whatsappUrl} target="_blank" rel="noopener noreferrer" className={orderBtnClass}>
            {c.orderLabel}
          </a>
          <Link to={product.slug} className={detailsBtnClass}>{c.detailsLabel}</Link>
        </div>
      </div>
    </div>
  );
}

function ClassicFeatured() {
  return (
    <section id="featured-products-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <span className="text-[#548E0A] text-sm font-medium uppercase tracking-[0.12em] block mb-3">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#214D41] tracking-tight">{c.heading}</h2>
          <div className="w-16 h-1 bg-[#548E0A] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">{c.description}</p>
        </FadeInUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <FadeInUp key={product.id} delay={idx * 0.1}>
              <ProductCard
                product={product}
                cardClass="group h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#548E0A]/30 flex flex-col hover:-translate-y-1.5"
                imageWrapClass="relative overflow-hidden shrink-0 flex items-center justify-center bg-gray-50 aspect-[4/3]"
                badgeClass="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full text-white text-[10px] font-normal uppercase tracking-wider shadow-md bg-[#214D41]"
                deliveryClass="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full text-[10px] font-normal uppercase bg-[#FDF5E6] text-[#214D41] shadow-sm border border-[#214D41]/10"
                tagClass="text-[10px] font-medium uppercase tracking-widest text-[#548E0A]"
                titleClass="text-black font-bold text-lg sm:text-xl leading-snug group-hover:text-[#214D41] transition-colors"
                priceClass="text-black font-bold text-2xl"
                orderBtnClass="w-full text-center bg-[#548E0A] hover:bg-[#214D41] text-white font-medium text-xs py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md uppercase tracking-wider"
                detailsBtnClass="w-full text-center border border-[#214D41] hover:bg-[#214D41]/5 text-[#214D41] font-medium text-xs py-3 rounded-xl transition-all duration-300 uppercase tracking-wider"
              />
            </FadeInUp>
          ))}
        </div>
        <div className="mt-12 bg-[#FDF5E6] border border-[#548E0A]/20 rounded-2xl p-5 text-center text-[18px] text-[#214D41] font-semibold shadow-sm">
          {c.soldOutNote}{' '}
          <a href={c.whatsappUrl} className="text-[#548E0A] font-semibold underline hover:text-[#214D41] transition-colors">{c.soldOutLink}</a>{' '}
          {c.soldOutSuffix}
        </div>
      </div>
    </section>
  );
}

function GlassFeatured() {
  return (
    <section id="featured-products-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a2e22]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#548E0A] text-sm font-medium uppercase tracking-[0.12em] block mb-3">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{c.heading}</h2>
          <p className="text-white/50 mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">{c.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cardClass="group h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#548E0A]/30 transition-all duration-500 flex flex-col"
              imageWrapClass="relative overflow-hidden shrink-0 aspect-[4/3]"
              badgeClass="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider bg-[#548E0A]"
              deliveryClass="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-black/40 text-white backdrop-blur-sm"
              tagClass="text-[10px] font-medium uppercase tracking-widest text-[#548E0A]"
              titleClass="text-white font-bold text-lg leading-snug group-hover:text-[#548E0A] transition-colors"
              priceClass="text-white font-bold text-2xl"
              orderBtnClass="w-full text-center bg-[#548E0A] hover:bg-[#6aad1a] text-white font-medium text-xs py-3.5 rounded-xl transition-all duration-300 uppercase tracking-wider"
              detailsBtnClass="w-full text-center border border-white/20 hover:bg-white/10 text-white font-medium text-xs py-3 rounded-xl transition-all duration-300 uppercase tracking-wider"
            />
          ))}
        </div>
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-5 text-center text-base text-white/80 font-medium">
          {c.soldOutNote}{' '}
          <a href={c.whatsappUrl} className="text-[#548E0A] font-semibold underline hover:text-[#6aad1a] transition-colors">{c.soldOutLink}</a>{' '}
          <span className="text-white/50">{c.soldOutSuffix}</span>
        </div>
      </div>
    </section>
  );
}

function EditorialFeatured() {
  return (
    <section id="featured-products-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 border-b-2 border-[#214D41] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#E4A101]" />
              <span className="text-[#548E0A] text-xs font-bold uppercase tracking-[0.2em]">{c.label}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#214D41] tracking-tight">{c.heading}</h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md lg:text-right">{c.description}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-[#214D41]">
          {featuredProducts.map((product, i) => (
            <div key={product.id} className={`group h-full bg-white hover:bg-[#F7F3EE] transition-colors flex flex-col ${i < featuredProducts.length - 1 ? 'border-b lg:border-b-0 lg:border-r-2 border-[#214D41]' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#214D41] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1">{product.badge}</div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <span className="text-[#E4A101] text-[10px] font-bold uppercase tracking-[0.2em]">{product.tag}</span>
                <h3 className="text-[#214D41] font-bold text-lg uppercase tracking-wide">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.description}</p>
                <div className="flex items-baseline gap-2 pt-2 border-t border-[#214D41]/10">
                  <span className="text-[#214D41] font-black text-xl">{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                </div>
                <a href={c.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#214D41] hover:bg-[#1a3d33] text-white font-medium text-xs py-3 uppercase tracking-wider transition-colors">
                  {c.orderLabel}
                </a>
                <Link to={product.slug} className="w-full text-center border-2 border-[#214D41] hover:bg-[#214D41] hover:text-white text-[#214D41] font-medium text-xs py-2.5 uppercase tracking-wider transition-colors">
                  {c.detailsLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-l-4 border-[#E4A101] bg-white p-5 text-sm text-[#214D41] font-medium">
          {c.soldOutNote}{' '}
          <a href={c.whatsappUrl} className="text-[#548E0A] font-bold underline">{c.soldOutLink}</a>{' '}
          {c.soldOutSuffix}
        </div>
      </div>
    </section>
  );
}

function PremiumFeatured() {
  return (
    <section id="featured-products-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFEDD0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#007859] text-sm font-bold uppercase tracking-[0.12em] block mb-3">{c.label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">{c.heading}</h2>
          <div className="w-16 h-1 bg-[#007859] mx-auto mt-4 rounded-full" />
          <p className="text-black/70 mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">{c.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cardClass="group h-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#007859]/20 hover:border-[#007859]/50 flex flex-col hover:-translate-y-2"
              imageWrapClass="relative overflow-hidden shrink-0 flex items-center justify-center bg-[#FFEDD0]/50 aspect-[4/3]"
              badgeClass="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full text-white text-[10px] font-medium uppercase tracking-wider shadow-md bg-[#007859]"
              deliveryClass="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase bg-[#FFEDD0] text-black shadow-sm border border-[#007859]/30"
              tagClass="text-[10px] font-bold uppercase tracking-widest text-[#007859]"
              titleClass="text-black font-bold text-lg sm:text-xl leading-snug group-hover:text-[#007859] transition-colors"
              priceClass="text-black font-bold text-2xl"
              orderBtnClass="w-full text-center bg-[#007859] hover:bg-[#005a42] text-white font-bold text-xs py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg uppercase tracking-wider"
              detailsBtnClass="w-full text-center border-2 border-[#007859] hover:bg-[#007859]/15 text-black font-bold text-xs py-3 rounded-xl transition-all duration-300 uppercase tracking-wider"
            />
          ))}
        </div>
        <div className="mt-12 bg-white border-2 border-[#007859]/20 rounded-2xl p-5 text-center text-base text-black font-semibold shadow-sm">
          {c.soldOutNote}{' '}
          <a href={c.whatsappUrl} className="text-[#007859] font-bold underline hover:text-[#005a42] transition-colors">{c.soldOutLink}</a>{' '}
          {c.soldOutSuffix}
        </div>
      </div>
    </section>
  );
}

export default function FeaturedProducts({ variant = 'classic' }) {
  if (variant === 'glass') return <GlassFeatured />;
  if (variant === 'editorial') return <EditorialFeatured />;
  if (variant === 'premium') return <PremiumFeatured />;
  return <ClassicFeatured />;
}
