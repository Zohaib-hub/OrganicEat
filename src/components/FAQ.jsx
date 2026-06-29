import FAQSection from './FAQSection'

const faqs = [
  {
    q: 'What makes Organic Eat turmeric different from regular turmeric?',
    a: 'Our turmeric is single-origin, cold-processed, and contains 5–7% curcumin — versus the 1–3% in most commercial brands. Every batch is third-party lab tested and USDA Organic certified.',
  },
  {
    q: 'How do I use turmeric powder daily?',
    a: 'Add 1 teaspoon to smoothies, golden milk, curries, soups, or rice dishes. For best absorption of curcumin, combine with black pepper (piperine) and a healthy fat like coconut oil.',
  },
  {
    q: 'Is your turmeric safe for daily use?',
    a: 'Yes! Our turmeric is free of heavy metals, pesticides, and contaminants as verified by independent labs. A daily dose of 1–2 teaspoons is considered safe for most healthy adults.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Absolutely. We ship to 40+ countries worldwide. Orders over $50 qualify for free international shipping. Domestic US orders ship free on all orders.',
  },
  {
    q: 'What is your return policy?',
    a: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, contact our support team for a full, no-questions-asked refund.",
  },
  {
    q: 'Is your packaging eco-friendly?',
    a: 'Yes. We use 100% compostable kraft paper pouches with biodegradable inner liners. No single-use plastics. Our packaging is also resealable to keep your turmeric fresh.',
  },
  {
    q: 'Can I take turmeric if I am on medication?',
    a: 'While turmeric is generally safe, high doses may interact with blood thinners or certain medications. Please consult your healthcare provider before adding new supplements to your routine.',
  },
]

export default function FAQ() {
  return (
    <FAQSection
      faqs={faqs}
      label="FAQs"
      heading="Frequently Asked Questions"
      description="Everything you need to know about our organic turmeric products."
      sectionClassName="bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      footer={{
        note: 'Still have questions?',
        label: 'Contact Our Team',
        href: '/contact',
      }}
    />
  )
}
