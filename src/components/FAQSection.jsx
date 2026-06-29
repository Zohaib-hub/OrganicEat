import { useState } from 'react'
import CTAButton from './CTAButton'
import { BRAND } from '../config/constants'

function FAQToggleIcon({ open }) {
  return (
    <span
      className={`faq-toggle-icon w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white flex items-center justify-center shrink-0 bg-transparent ${open ? 'open' : ''}`}
    >
      <span className="text-white text-xl font-light leading-none select-none block transition-opacity duration-200">
        {open ? '−' : '+'}
      </span>
    </span>
  )
}

export function FAQAccordionList({ faqs, isOpen, onToggle }) {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const itemOpen = isOpen(i)
        return (
          <div
            key={i}
            className={`faq-item bg-[#3D8266] rounded-xl overflow-hidden ${itemOpen ? 'open' : ''}`}
          >
            <button
              type="button"
              onClick={() => onToggle(i)}
              className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 transition-colors duration-200 "
              aria-expanded={itemOpen}
            >
              <span className="font-semibold text-white text-sm sm:text-base leading-snug">{faq.q}</span>
              <FAQToggleIcon open={itemOpen} />
            </button>
            <div className={`faq-answer-grid ${itemOpen ? 'open' : ''}`}>
              <div className="faq-answer-inner">
                <div className="faq-answer-text px-5 sm:px-6 pb-5 text-white text-md leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function FAQSection({
  faqs,
  label = 'FAQs',
  heading = 'Frequently Asked Questions',
  description,
  footer,
  sectionClassName = 'bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8',
  containerClassName = 'max-w-4xl mx-auto flex flex-col items-center justify-center',
}) {
  const [open, setOpen] = useState(null)

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block mb-3">
            {label}
          </span>
          <h2
            className="text-black font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            {heading}
          </h2>
          {description && (
            <p className="text-black/70 mt-4 text-sm sm:text-base">{description}</p>
          )}
        </div>

        <FAQAccordionList
          faqs={faqs}
          isOpen={(i) => open === i}
          onToggle={(i) => setOpen(open === i ? null : i)}
        />

        <CTAButton text="Order on WhatsApp" href={BRAND.whatsappOrderMessage} className="mt-12 mx-auto flex items-center justify-center" />


      </div>
    </section>
  )
}
