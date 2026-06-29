const posts = [
  {
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80',
    date: 'June 15, 2025',
    category: 'Our Kitchen',
    title: 'Lahori Biryani ka Raaz: Ghar ki Pakwaan ka Fark',
    excerpt: 'Restaurant ki biryani aur ghar ki biryani mein kya farak hota hai? Hamari Ammi ki recipe aur asli Lahori masalon ki kahani.',
  },
  {
    img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=500&q=80',
    date: 'May 28, 2025',
    category: 'Health & Food',
    title: 'Ghar ka Khana Kyun Behtar Hai: 5 Wajoohat',
    excerpt: 'Preservatives, artificial colors, aur reheated food se kya hota hai? Har roz fresh pakwaan khane ke fayde janiye.',
  },
  {
    img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&q=80',
    date: 'April 10, 2025',
    category: 'Spices & Recipes',
    title: 'Palak Murgh ki Perfect Recipe: Step by Step',
    excerpt: 'Humari special Palak Murgh recipe try karo — fresh palak, desi chicken, aur handmade masala blend ka perfect combination.',
  },
];

export default function Blog() {
  return (
    <section className="bg-white">
      {/* ── HERO BANNER ── */}
      <section className="w-full bg-[#214D41] py-20 px-4 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-60px] left-[-60px] w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-[#548E0A]/10" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[#548E0A] text-sm font-semibold uppercase tracking-widest block mb-4">Our Blog</span>
          <h1
            className="text-white font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em' }}
          >
            Our Blogs
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Explore expert insights on organic living, healthy recipes, and the healing power of nature's finest spices.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 pt-12 mb-12">
        <div className="text-center mb-16">
          <span className="text-[#E4A101] text-sm font-semibold uppercase tracking-widest">Knowledge Hub</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#014D40] mt-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Organic Eat Blog
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Stories from our kitchen, traditional recipes, and insights on fresh homemade food in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="group cursor-pointer bg-[#F5F5DC]/30 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-[#E4A101]/20">
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.src = `https://placehold.co/500x280/E4A101/fff?text=Blog+${i + 1}` }}
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-[#014D40]/10 text-[#014D40] px-3 py-1 rounded-full font-semibold">{p.category}</span>
                  <span className="text-xs text-gray-400">{p.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#014D40] transition-colors leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p>
                <a href="#" className="flex items-center gap-2 text-[#E4A101] font-semibold text-sm mt-2 group-hover:gap-3 transition-all duration-300">
                  Read Article
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 border-2 border-[#014D40] text-[#014D40] px-8 py-4 rounded-full font-semibold hover:bg-[#014D40] hover:text-white transition-all duration-300">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}
