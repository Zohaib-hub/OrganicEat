import ProductPageTemplate from './ProductPageTemplate'
import SEO from '../components/SEO'
import { BRAND } from '../config/constants'
import HeroImage from '../assets/images/A_commercial_product_photography_shot_202606152325.jpg'
import OilImage from '../assets/images/High-end_retail_food_photography_for_202606152328.jpg'

import Palak1 from '../assets/images/A_commercial_product_photography_shot_202606152325.jpg'
import Palak2 from '../assets/images/High-end_retail_food_photography_for_202606152328.jpg'
import Palak3 from '../assets/images/A_hyper-realistic_food_product_photography_202606152256.jpg'
import Biryani from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpg'
import MasalaPowder from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'

const palakMurghProduct = {
  id: 10872,
  name: 'Palak Murgh',
  name1: 'Homemade Palak Murgh with Rice',
  heroTitle: 'PALAK MURGH',
  second: 'Our food is',
  second1: '100% homemade',
  heroSubtitle: "Cooked fresh every morning and delivered to your door. No frozen food. No shortcuts. One batch a day — that's the whole idea.",
  heroImage: HeroImage,
  price: 'Rs. 1,299',
  originalPrice: 'Rs. 1,500',
  savings: 'Rs. 201',
  rating: 4.5,
  reviewCount: 2156,
  description: "Tender chicken in fresh spinach gravy, cooked from scratch every morning with our own homemade masala. Served with fluffy white rice. We make one fresh batch a day — that's it.",
  features: [
    'Fresh spinach, not frozen',
    'Real chicken pieces — whole, not processed',
    'Our own masala — nothing from a packet',
  ],
  featureBadges: [
    { icon: 'pan', title: 'Cooked every morning', sub: 'Fresh, never reheated' },
    { icon: 'leaf', title: 'No frozen food, ever', sub: 'One fresh batch per day' },
    { icon: 'truck', title: 'Lahore delivery', sub: 'Hot and on time' },
    { icon: 'check', title: 'Real ingredients only', sub: 'Nothing artificial' },
  ],
  whyTitle: "We cook once a day. That's the whole idea.",
  whyDesc: "We cook one fresh batch every morning and that's it. No frozen backup, no reheating. If today's stock is gone — the next batch is tomorrow.",
  whyImage: OilImage,
  whyPoints: [
    { title: 'Clean and Hygienic', desc: 'Cooked in a home kitchen every morning. Fresh ingredients, no exceptions.' },
    { title: 'What You See Is What You Get', desc: 'Fresh spinach, real chicken, masala made in-house. No fillers, no substitutes.' },
    { title: "We Don't Freeze Anything", desc: "One fresh batch per day. If it's gone, it's gone. No reheating, ever." },
  ],
  howItWorksLabel: 'HOW TO ORDER',
  howItWorksTitle: 'Get Fresh Food in 3 Easy Steps',
  steps: [
    {
      num: 1,
      label: 'Message on WhatsApp',
      sub: "Check if today's batch is still available and place your order.",
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
      label: 'Your Food Arrives Fresh',
      sub: 'Hot, packed carefully, delivered to your door.',
      icon: 'truck',
    },
  ],
  howItWorksButton: {
    label: 'Order on WhatsApp',
    href: BRAND.whatsappOrderMessage,
  },
  blendTitle: 'Nothing Hidden. Nothing Complicated.',
  recipes: [

    { label: 'Chicken Biryani', title: 'Chicken Biryani', img: Biryani },
    { label: 'Pizza Dough Masala', title: 'Pizza Dough Masala', img: MasalaPowder },
  ],
  comparisonTitle: 'We Are Not Like Other Food Options',
  comparisonRows: [
    { label: 'Cooked same day', us: true, others: false },
    { label: 'No preservatives', us: true, others: false },
    { label: 'Homemade masala', us: true, others: false },
    { label: 'Never frozen', us: true, others: false },
    { label: 'Delivered to door', us: true, others: true },
    { label: 'Fresh chicken only', us: true, others: false },
  ],
  accordions: [
    {
      label: 'About This Dish',
      content: `1. Fresh: Cooked that morning, delivered the same day.\n2. Hygienic: Prepared in a clean home kitchen every day.\n3. Real Ingredients: Fresh spinach, quality chicken, homemade masala.\n4. No Preservatives: No artificial additives, no frozen shortcuts — ever.\n5. Served with Rice: Fluffy white rice cooked fresh with every order.`,
      defaultOpen: true,
    },
    {
      label: 'Delivery Info',
      content: `Same-day delivery across most areas of Lahore. Food is ready by 10–11 AM daily. Order early to secure your portion. Delivery charges vary by distance — we confirm the exact amount when we confirm your order.`,
    },
    {
      label: 'Payment Options',
      content: `Cash on delivery or digital payment — Easypaisa, JazzCash, or bank transfer. Both options are available. We'll confirm the details when we confirm your order.`,
    },
  ],
  thumbnails: [
    Palak1,
    Palak2,
    Palak3,
    new URL('../assets/palak-murgh-hero.png', import.meta.url).href,
  ],
  faqs: [
    { q: 'What time is food ready every day?', a: "Every morning by 10–11 AM. Order early — portions go fast." },
    { q: 'Is the chicken frozen?', a: "No. We buy fresh every morning and cook the same day. Nothing in our kitchen is frozen." },
    { q: 'Which areas in Lahore do you deliver to?', a: "Most areas in Lahore. Message us your address on WhatsApp and we'll confirm within minutes." },
    { q: "What if today's stock runs out before I order?", a: "We'll let you know straight away and send you a reminder the next morning when the fresh batch is ready." },
    { q: 'How do I place an order?', a: "Just message us on WhatsApp. Tell us you want Palak Murgh and your delivery address. We handle the rest." },
  ],
  testimonials: [
    { name: 'Ayesha K.', role: 'Lahore', img: 'https://randomuser.me/api/portraits/women/45.jpg', quote: "Tasted like something my mother would make. Fresh, clean, and filling. Ordered twice already.", stars: 5 },
    { name: 'Saad R.', role: 'Lahore', img: 'https://randomuser.me/api/portraits/men/32.jpg', quote: "Ordered for lunch. It came hot and on time. The palak gravy was really good — not watery, not heavy. That balance is hard to get right.", stars: 5 },
    { name: 'Maha N.', role: 'Lahore', img: 'https://randomuser.me/api/portraits/women/68.jpg', quote: "The Palak Murgh reminded me of my mother's cooking. That's not something I say lightly. I've ordered four times since.", stars: 5 },
    { name: 'Usman T.', role: 'Lahore', img: 'https://randomuser.me/api/portraits/men/55.jpg', quote: "I was skeptical about food delivery tasting homemade. This actually does. The rice was perfect, the gravy was rich. Really impressive.", stars: 5 },
  ],
}

export default function PalakMurghPage() {
  return (
    <>
      <SEO title="Palak Murgh" description="Traditional homemade Palak Murgh by Organic Eat — cooked fresh daily and delivered in Lahore." />
      <ProductPageTemplate product={palakMurghProduct} />
    </>
  )
}
