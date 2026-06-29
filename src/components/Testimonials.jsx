const reviews = [
  {
    name:'Sarah Johnson',
    role:'Nutritionist',
    img:'https://randomuser.me/api/portraits/women/32.jpg',
    quote:"I've tried dozens of turmeric supplements, but Organic Eat is in a league of its own. The curcumin content is exceptional and I can literally taste the difference in freshness.",
    stars:5,
  },
  {
    name:'Marcus Williams',
    role:'Fitness Coach',
    img:'https://randomuser.me/api/portraits/men/45.jpg',
    quote:"My joints feel amazing since switching to Organic Eat's turmeric. I add it to my post-workout smoothies every day. The quality is unbeatable for the price.",
    stars:5,
  },
  {
    name:'Priya Patel',
    role:'Home Chef',
    img:'https://randomuser.me/api/portraits/women/68.jpg',
    quote:"The color, the aroma, the depth of flavor — this is not your grocery store turmeric. I've been using it for curries and golden milk for 6 months now. Incredible!",
    stars:5,
  },
  {
    name:'Dr. Emily Chen',
    role:'Integrative Medicine',
    img:'https://randomuser.me/api/portraits/women/12.jpg',
    quote:"I recommend Organic Eat to my patients who want to benefit from curcumin's anti-inflammatory properties. The lab reports confirm their purity claims — that's rare.",
    stars:5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#E4A101] text-sm font-semibold uppercase tracking-widest">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#014D40] mt-3" style={{fontFamily:'Playfair Display, serif'}}>
            What Our Customers Stories
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Over 12,000 happy customers across 40+ countries trust Organic Eat for their daily wellness ritual.
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(s => <span key={s} className="text-[#E4A101] text-2xl">★</span>)}
            </div>
            <span className="text-3xl font-extrabold text-[#014D40]">4.9</span>
            <span className="text-gray-400 text-sm">from 12,000+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#F5F5DC]/50 rounded-3xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-[#E4A101]/20">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({length:r.stars}).map((_,j) => (
                  <span key={j} className="text-[#E4A101] text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic">"{r.quote}"</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#E4A101]"
                  onError={e => { e.target.src = `https://placehold.co/48x48/014D40/fff?text=${r.name[0]}` }}
                />
                <div>
                  <p className="font-bold text-sm text-[#014D40]">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 bg-[#014D40] rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {val:'12K+', label:'Happy Customers'},
            {val:'4.9★', label:'Average Rating'},
            {val:'40+', label:'Countries Served'},
            {val:'100%', label:'Satisfaction Rate'},
          ].map(s => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-[#E4A101]">{s.val}</p>
              <p className="text-white/70 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
