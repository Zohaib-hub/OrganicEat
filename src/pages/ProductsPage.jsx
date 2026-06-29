import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import biryaniImg from '../assets/chicken-biryani-hero.png'
import palakImg from '../assets/palak-gosht-hero.png'
import pizzaImg from '../assets/pizza-dough-hero.png'

const products = [
  // {
  //   id: 10871,
  //   name: '100% Organic Turmeric',
  //   slug: '/products/turmeric',
  //   price: 'Rs. 1,599',
  //   originalPrice: 'Rs. 1,800',
  //   rating: 4.2,
  //   reviewCount: 1378,
  //   badge: 'Best Seller',
  //   description: 'USDA Certified Organic turmeric with 5–7% curcumin content. Cold-processed to preserve maximum nutrients. Single-origin and third-party lab tested.',
  //   image: 'https://images.unsplash.com/photo-1615485500704-8e3b5d9b4a02?w=500&q=80',
  //   tags: ['Organic', 'Anti-inflammatory', 'Lab Tested'],
  //   bgColor: '#FDF5E6',
  //   accentColor: '#548E0A',
  // },
  {
    id: 10872,
    name: 'Palak Murgh',
    slug: '/products/palak-murgh',
    price: 'Rs. 1,299',
    originalPrice: 'Rs. 1,500',
    rating: 4.5,
    reviewCount: 2156,
    badge: 'Top Rated',
    description: 'Traditional Palak Murgh masala made from hand-selected spices. No artificial additives, no preservatives. Authentic taste every time.',
    image: palakImg,
    tags: ['Traditional', 'No MSG', 'Natural'],
    bgColor: '#FDF5E6',
    accentColor: '#214D41',
  },
  {
    id: 10873,
    name: 'Chicken Biryani',
    slug: '/products/chicken-biryani',
    price: 'Rs. 1,399',
    originalPrice: 'Rs. 1,600',
    rating: 4.7,
    reviewCount: 3452,
    badge: 'Fan Favorite',
    description: 'Premium whole spice biryani masala with real saffron. Based on authentic Mughal dum biryani recipes. Restaurant quality at home.',
    image: biryaniImg,
    tags: ['Whole Spices', 'Saffron Blend', 'No Artificial'],
    bgColor: '#FDF5E6',
    accentColor: '#548E0A',
  },
  {
    id: 10874,
    name: 'Pizza Dough Masala Powder',
    slug: '/products/pizza-dough-masala-powder',
    price: 'Rs. 999',
    originalPrice: 'Rs. 1,200',
    rating: 4.6,
    reviewCount: 987,
    badge: 'New Arrival',
    description: 'Italian herb blend masala for the most flavorful pizza dough. Real oregano, basil, thyme, and rosemary. No artificial flavors.',
    image: pizzaImg,
    tags: ['Italian Herbs', 'Vegan', 'Versatile'],
    bgColor: '#FDF5E6',
    accentColor: '#214D41',
  },
]

function StarDisplay({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= Math.round(rating) ? '#548E0A' : '#D1D5DB'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div className="w-full bg-white">
      <SEO title="Our Products" description="Browse Organic Eat's menu — fresh homemade meals and handmade spice blends, delivered in Lahore." />

      {/* ── HERO BANNER ── */}
      <section className="w-full bg-[#214D41] py-20 px-4 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-60px] left-[-60px] w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-[#548E0A]/10" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[#548E0A] text-sm font-semibold uppercase tracking-widest block mb-4">Our Collection</span>
          <h1
            className="text-white font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em' }}
          >
            ALL PRODUCTS
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Discover our premium range of organic spices and masalas. Crafted with care, made with love.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#FDF5E6] border-b border-[#E8DCC2] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-8 sm:gap-16 md:gap-24 flex-wrap">
          {[
            { val: '4', label: 'Products' },
            { val: '12K+', label: 'Happy Customers' },
            { val: '100%', label: 'Organic' },
            { val: '4.9★', label: 'Avg Rating' },
          ].map(item => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-2xl font-black text-[#214D41]">{item.val}</span>
              <span className="text-xs font-medium text-[#214D41] uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#548E0A]/30 hover:-translate-y-1 transform"
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ background: product.bgColor, minHeight: '260px' }}
                >
                  {/* Badge */}
                  <div
                    className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-xs font-bold shadow-md"
                    style={{ background: product.accentColor }}
                  >
                    {product.badge}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={e => { e.target.src = `https://placehold.co/500x260/${product.bgColor.replace('#', '')}/014D40?text=${encodeURIComponent(product.name)}` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {product.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#214D41]/8 text-[#214D41]"
                        style={{ background: 'rgba(1,77,64,0.08)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Name */}
                  <h2
                    className="text-black font-extrabold leading-tight"
                    style={{ fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontFamily: '"Inter", sans-serif' }}
                  >
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <StarDisplay rating={product.rating} />
                    <span className="text-[#214D41] text-sm font-semibold">{product.rating}</span>
                    <span className="text-gray-400 text-sm">({product.reviewCount.toLocaleString()} reviews)</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-[#1a1a1a] font-black text-xl">{product.price}</span>
                      <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                    </div>
                    <Link
                      to={product.slug}
                      className="inline-flex items-center gap-2 bg-[#214D41] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#17362E] transition-all duration-300 hover:shadow-lg hover:gap-3 group/btn"
                    >
                      View Product
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#FDF5E6] py-20 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <span className="text-[#548E0A] text-sm font-semibold uppercase tracking-widest block mb-3">Need Help?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#214D41] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is ready to help you find the perfect product for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#214D41] text-white font-bold px-8 py-4 rounded-full hover:bg-[#17362E] transition-all duration-300 hover:shadow-xl"
          >
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
