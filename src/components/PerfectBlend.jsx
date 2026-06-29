import { useState, useEffect, useRef } from 'react'
import BlendBg from "../assets/blend-bg.png"

/* ─── Recipe Data ─────────────────────────────────────────────── */
const recipes = [
  {
    id: 1,
    label: 'Recipe 1',
    title: 'Garden Fresh Salad',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85',
    alt: 'Fresh garden salad plate',
  },
  {
    id: 2,
    label: 'Recipe 2',
    title: 'Golden Turmeric Soup',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85',
    alt: 'Orange soup in a blue-rimmed bowl',
  },
  {
    id: 3,
    label: 'Recipe 3',
    title: 'Turmeric Spice Blend',
    img: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=600&q=85',
    alt: 'Hand pouring turmeric powder into a glass bowl',
  },
  {
    id: 4,
    label: 'Recipe 4',
    title: 'Herbal Green Bowl',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=85',
    alt: 'Herbal green bowl',
  },
  {
    id: 5,
    label: 'Recipe 5',
    title: 'Spiced Grain Bowl',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=85',
    alt: 'Spiced grain bowl',
  },
]

/* ─── Get visible-count from current window width ─────────────── */
function getVisibleCount() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 768) return 2
  return 1
}

/* ─── Chevron SVGs ────────────────────────────────────────────── */
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#014D40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#014D40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

/* ─── Recipe Card ─────────────────────────────────────────────── */
function RecipeCard({ recipe }) {
  return (
    <article className="flex flex-col items-center gap-4 group select-none">
      {/* Perfect square image */}
      <div className="w-full overflow-hidden rounded-2xl shadow-lg bg-gray-50"
        style={{ aspectRatio: '1 / 1' }}>
        <img
          src={recipe.img}
          alt={recipe.alt}
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          onError={e => {
            e.currentTarget.src =
              `https://placehold.co/500x500/e8f4f1/014D40?text=${encodeURIComponent(recipe.title)}`
          }}
        />
      </div>
      {/* Label */}
      <p className="text-white text-sm sm:text-base font-medium tracking-wide text-center leading-snug"
        style={{ fontFamily: 'Inter, sans-serif' }}>
        {recipe.label}
      </p>
    </article>
  )
}

/* ─── Main Export ─────────────────────────────────────────────── */
export default function PerfectBlend() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  /* Gap in px between cards — must match the Tailwind gap class below */
  const GAP = 28 // gap-7 at lg, but we use this for maths

  /* Update visibleCount on resize */
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Clamp index when visibleCount changes */
  const maxIndex = Math.max(0, recipes.length - visibleCount)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentIndex(i => Math.min(i, maxIndex))
  }, [maxIndex])

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1))
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1))

  /* ── Touch / Mouse swipe ── */
  const dragStart = useRef(null)
  const onDragStart = e => {
    dragStart.current = e.touches ? e.touches[0].clientX : e.clientX
  }
  const onDragEnd = e => {
    if (dragStart.current === null) return
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const delta = dragStart.current - endX
    if (delta > 50) next()
    else if (delta < -50) prev()
    dragStart.current = null
  }

  /* ── Translate string ──
     Each card width = (trackWidth - gaps) / visibleCount
     Shift = currentIndex * (1 card width + 1 gap)
     = currentIndex * ( (100% - gap*(vc-1)) / vc + gap )
     = currentIndex * ( 100%/vc - gap*(vc-1)/vc + gap )
     = currentIndex * ( 100%/vc + gap/vc )
     = currentIndex * (100% + gap) / vc
  */
  const translateX = `calc(${currentIndex} * (100% + ${GAP}px) / ${visibleCount} * -1)`

  return (
    <section className=" py-20 md:py-28 overflow-hidden" style={{ backgroundImage: `url(${BlendBg})` }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our Features
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Perfect Blend
          </h2>
        </div>

        {/* ── Carousel Row ── */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">

          {/* ← Left Arrow */}
          <button
            id="pb-prev"
            onClick={prev}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
            className={[
              'shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white',
              'border border-gray-200 shadow-md',
              'flex items-center justify-center',
              'transition-all duration-200 focus:outline-none',
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:shadow-xl hover:scale-110 cursor-pointer',
            ].join(' ')}
          >
            <ChevronLeft />
          </button>

          {/* Cards viewport (clips overflow) */}
          <div
            className="flex-1 overflow-hidden"
            onMouseDown={onDragStart}
            onMouseUp={onDragEnd}
            onTouchStart={onDragStart}
            onTouchEnd={onDragEnd}
          >
            {/* Moving track */}
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${translateX})`,
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {recipes.map(recipe => (
                <div
                  key={recipe.id}
                  style={{
                    flex: `0 0 calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`,
                    minWidth: 0,
                  }}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          </div>

          {/* → Right Arrow */}
          <button
            id="pb-next"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="Next slide"
            className={[
              'shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white',
              'border border-gray-200 shadow-md',
              'flex items-center justify-center',
              'transition-all duration-200 focus:outline-none',
              currentIndex >= maxIndex
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:shadow-xl hover:scale-110 cursor-pointer',
            ].join(' ')}
          >
            <ChevronRight />
          </button>
        </div>

        {/* ── Pagination Dots ── */}
        <div className="flex items-center justify-center gap-2 mt-10" role="tablist" aria-label="Carousel pagination">
          {recipes.map((_, i) => {
            const active = i === currentIndex
            return (
              <button
                key={i}
                role="tab"
                aria-selected={active}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentIndex(Math.min(i, maxIndex))}
                className="transition-all duration-300 ease-in-out rounded-full focus:outline-none"
                style={{
                  width: active ? '28px' : '8px',
                  height: '8px',
                  minWidth: active ? '28px' : '8px',
                  background: active ? 'white' : '#cbd5e1',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}
