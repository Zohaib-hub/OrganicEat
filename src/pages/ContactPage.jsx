import { useState } from 'react'
import SEO from '../components/SEO'
import Logo from '../assets/organic-eat-logo.png'
import CTAButton from '../components/CTAButton'
import { BRAND } from '../config/constants'

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.57a16 16 0 0 0 6.29 6.29l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+92 318 4267192',
    link: BRAND.whatsappUrl,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'info@organiceat.pk',
    link: 'mailto:info@organiceat.pk',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Lahore, Pakistan',
    link: '#',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Orders Ready',
    value: 'Every day by 10–11 AM',
    link: '#',
  },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: BRAND.whatsappOrderMessage,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.message) return;
    
    setLoading(true)
    
    let text = `Naam: ${formData.name}\nMessage: ${formData.message}`;
    if (formData.phone) {
      text += `\nPhone: ${formData.phone}`;
    }
    
    const waUrl = `${BRAND.whatsappUrl}?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setLoading(false)
      window.open(waUrl, '_blank')
      setSubmitted(true)
    }, 500)
  }

  return (
    <div className="w-full bg-white">
      <SEO title="Contact Us" description="Get in touch with Organic Eat. Order via WhatsApp or send us a message." />

      {/* ── HERO ── */}
      <section className="w-full bg-[#214D41] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-[-60px] left-[-60px] w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-[#548E0A]/10" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[#548E0A] text-sm font-semibold uppercase tracking-widest block mb-4">Get In Touch</span>
          <h1
            className="text-white font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em' }}
          >
            CONTACT US
          </h1>
          <p className="text-white/70 text-lg">
            We respond on WhatsApp within minutes during the morning. For food orders, orders, delivery questions and everything else.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="bg-[#FDF5E6] py-12 border-b border-[#E8DCC2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-[#548E0A]/30"
              >
                <div className="w-14 h-14 rounded-full bg-[#214D41]/8 flex items-center justify-center text-[#214D41] mb-4 group-hover:bg-[#214D41] group-hover:text-white transition-all duration-300" style={{ background: 'rgba(1,77,64,0.08)' }}>
                  {item.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#214D41] mb-1">{item.label}</p>
                <p className="text-[#1a1a1a] font-semibold text-sm">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT: Form + Info ── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">

            {/* LEFT: Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-[#548E0A] text-sm font-semibold uppercase tracking-widest block mb-2">Send Message</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#214D41]" style={{ fontFamily: '"Inter", sans-serif' }}>
                  We're Here To Help
                </h2>
                <p className="text-gray-500 mt-3">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="bg-[#214D41] rounded-3xl p-10 text-center text-white">
                  <div className="w-20 h-20 rounded-full bg-[#548E0A] flex items-center justify-center mx-auto mb-6">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-white/70">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', message: '' }) }}
                    className="mt-6 inline-flex items-center gap-2 bg-[#548E0A] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#437208] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2" htmlFor="contact-name">
                        Full Name <span className="text-[#214D41]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1a1a1a] text-sm focus:outline-none focus:border-[#214D41] focus:bg-white transition-all placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2" htmlFor="contact-phone">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0300 0000000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1a1a1a] text-sm focus:outline-none focus:border-[#214D41] focus:bg-white transition-all placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2" htmlFor="contact-message">
                      Message <span className="text-[#214D41]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1a1a1a] text-sm focus:outline-none focus:border-[#214D41] focus:bg-white transition-all resize-none placeholder-gray-400"
                    />
                  </div>

                  {/* Submit */}
                  {loading ? (
                    <button
                      type="submit"
                      disabled
                      className="w-full h-14 bg-gray-400 text-white font-bold text-base rounded-xl flex items-center justify-center gap-3 cursor-not-allowed opacity-70"
                    >
                      <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending...
                    </button>
                  ) : (
                    <CTAButton
                      text="Send Message"
                      type="submit"
                      className="w-full justify-center"
                    />
                  )}
                </form>
              )}
            </div>

            {/* RIGHT: Company Info */}
            <div className="flex flex-col gap-8">

              {/* Brand Card */}
              <div className="bg-[#214D41] rounded-3xl p-8 text-white">
                <img src={Logo} alt="Organic Eat Logo" className="h-12 w-auto object-contain mb-6 brightness-0 invert"
                  onError={e => { e.target.style.display = 'none' }} />
                <h3 className="text-xl font-bold mb-3">Organic Eat</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  We are dedicated to bringing you the finest organic spices and masalas, sourced responsibly and crafted with care. Your satisfaction is our priority.
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#548E0A] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#FDF5E6] rounded-3xl p-8 border border-[#E8DCC2]">
                <h3 className="text-[#214D41] font-bold text-lg mb-5 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  Business Hours
                </h3>
                {[
                  { day: 'Everyday', hours: 'Orders ready by 10–11 AM', open: true },
                  { day: 'Order before 10 AM', hours: 'Best time — portions still available', open: true },
                  { day: 'After sell-out', hours: 'Reminder sent for next morning', open: false },
                ].map(item => (
                  <div key={item.day} className="flex items-center justify-between py-3 border-b border-[#E8DCC2] last:border-0">
                    <span className="text-sm font-medium text-[#1a1a1a]">{item.day}</span>
                    <span className={`text-sm font-semibold ${item.open ? 'text-[#214D41]' : 'text-[#214D41]'}`}>{item.hours}</span>
                  </div>
                ))}
              </div>

              {/* FAQ Quick Link */}
              <div className="bg-[#FDF5E6] rounded-3xl p-8 border border-[#548E0A]/20">
                <h3 className="text-[#1a1a1a] font-bold text-lg mb-3">Have a Question?</h3>
                <p className="text-gray-600 text-sm mb-5">
                  Most questions are answered in our FAQ section — from ordering and delivery to freshness and payment.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  View Full FAQ
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
