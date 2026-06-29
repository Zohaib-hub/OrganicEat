import ProductPageTemplate from './ProductPageTemplate'
import SEO from '../components/SEO'
import { BRAND } from '../config/constants'
import HeroImage from '../assets/hero-image.png'
import OilImage from '../assets/oil-image.png'
import Spoon from '../assets/spoon.png'
import Pour from '../assets/pour.png'
import Bowl from '../assets/bowl.png'

const turmericProduct = {
  id: 10871,
  name: '100% Organic Turmeric',
  heroTitle: 'TURMERIC',
  heroSubtitle: 'All 100% more responsibly sourced from Rainforest Alliance Certified Turmeric farms. Find out more at Organic Eat.',
  heroImage: HeroImage,
  price: 'Rs. 1,599',
  originalPrice: 'Rs. 1,800',
  savings: 'Rs. 201',
  rating: 4.2,
  reviewCount: 1378,
  description: 'Indulge in our expertly crafted Turmeric blends, made from high-quality, small-batch spices. Rich in curcumin with 5–7% content — the highest available. USDA Certified Organic and cold-processed to preserve full nutrient profile.',
  features: [
    'Unique cold-process method preserves full curcumin content',
    'USDA Certified Organic — No synthetic pesticides or fertilizers',
    'Exceptional quality with 5–7% curcumin — highest in market',
  ],
  featureBadges: [
    { icon: 'leaf',   title: 'All Natural',      sub: 'Single-origin turmeric' },
    { icon: 'shield', title: 'No Side Effects',   sub: 'Safe for daily use' },
    { icon: 'award',  title: '100% Organic',      sub: 'USDA Certified' },
    { icon: 'truck',  title: 'Fast Delivery',     sub: 'Quick & secure shipping' },
  ],
  whyTitle: 'Our Specialty Turmeric',
  whyDesc: 'Indulge in our expertly crafted Turmeric blends, made from high-quality, small-batch beans. From rich and smooth to bold and adventurous.',
  whyImage: OilImage,
  whyPoints: [
    { title: 'Quality', desc: "We're Obsessed With Serving The Best Turmeric Possible." },
    { title: 'Community', desc: 'We Believe In Fostering Connections And Building Meaningful Relationships.' },
    { title: 'Sustainability', desc: "We're Committed To Environmentally Friendly Practices And Fair Trade Sourcing." },
  ],
  howItWorksLabel: 'HOW TO ORDER',
  howItWorksTitle: 'Get Fresh Food in 3 Easy Steps',
  steps: [
    {
      num: 1,
      label: 'Message on WhatsApp',
      sub: "Check availability and place your order easily.",
      icon: 'whatsapp',
    },
    {
      num: 2,
      label: 'We Confirm Everything',
      sub: 'You get your delivery time confirmed right away.',
      icon: 'check',
    },
    {
      num: 3,
      label: 'Your Order Arrives Fresh',
      sub: 'Packed carefully and delivered to your door.',
      icon: 'truck',
    },
  ],
  howItWorksButton: {
    label: 'Order on WhatsApp',
    href: BRAND.whatsappOrderMessage,
  },
  blendTitle: 'The Perfect Blend',
  recipes: [
    { label: 'Recipe 1', title: 'Garden Fresh Salad', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85' },
    { label: 'Recipe 2', title: 'Golden Turmeric Soup', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85' },
    { label: 'Recipe 3', title: 'Turmeric Spice Blend', img: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=600&q=85' },
  ],
  comparisonTitle: 'We Are Not Like Other Turmeric Alternatives',
  comparisonRows: [
    { label: 'Carbohydrates', us: true, others: true },
    { label: 'Caffeine', us: false, others: true },
    { label: 'Fats', us: false, others: true },
    { label: 'Sodium', us: false, others: true },
    { label: 'Protein', us: false, others: true },
  ],
  accordions: [
    {
      label: 'About This Item',
      content: `1. Organic: Grown Without Synthetic Pesticides Or Fertilizers.\n2. Fair Trade: Ensures Fair Prices And Working Conditions For Farmers.\n3. Rainforest Alliance: Promotes Sustainable Farming And Conservation.\n4. Non-GMO: No Genetically Modified Organisms Used In Production.\n5. USDA Certified Organic with curcumin content of 5–7%.\n6. Cold-processed to preserve full nutrient profile and volatile oils.`,
      defaultOpen: true,
    },
    {
      label: 'Shipping Policy',
      content: `Free standard shipping on all orders over Rs. 1500. Express and overnight options available at checkout. Orders are processed within 1–2 business days. Estimated delivery: 3–7 business days.`,
    },
    {
      label: 'Return Info',
      content: `We offer a 30-day satisfaction guarantee. If you are not completely happy with your purchase, contact us within 30 days for a full refund or exchange.`,
    },
  ],
  thumbnails: [
    'https://images.unsplash.com/photo-1615485500704-8e3b5d9b4a02?w=300&q=80',
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
    'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=300&q=80',
    'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80',
  ],
  faqs: [
    { q: 'What makes Organic Eat turmeric different from regular turmeric?', a: 'Our turmeric is single-origin, cold-processed, and contains 5–7% curcumin — versus the 1–3% in most commercial brands. Every batch is third-party lab tested and USDA Organic certified.' },
    { q: 'How do I use turmeric powder daily?', a: 'Add 1 teaspoon to smoothies, golden milk, curries, soups, or rice dishes. For best absorption, combine with black pepper and a healthy fat like coconut oil.' },
    { q: 'Is your turmeric safe for daily use?', a: 'Yes! Our turmeric is free of heavy metals, pesticides, and contaminants as verified by independent labs. A daily dose of 1–2 teaspoons is considered safe for most healthy adults.' },
    { q: 'Do you ship internationally?', a: 'Absolutely. We ship to 40+ countries worldwide. Orders over Rs. 2000 qualify for free international shipping.' },
    { q: 'What is your return policy?', a: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, contact our support team for a full refund." },
  ],
}

export default function TurmericPage() {
  return (
    <>
      <SEO title="Organic Turmeric" description="Pure, handpicked organic turmeric powder by Organic Eat. No additives. Delivered in Lahore." />
      <ProductPageTemplate product={turmericProduct} />
    </>
  )
}
