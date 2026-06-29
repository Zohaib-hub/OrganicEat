import ProductPageTemplate from './ProductPageTemplate'
import SEO from '../components/SEO'
import { BRAND } from '../config/constants'
import HeroImage from '../assets/chicken-biryani-hero.png'
import OilImage from '../assets/oil-image.png'

import Biryani1 from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpg'
import Biryani2 from '../assets/images/A_premium_e-commerce_product_photograph_202606152326.jpg'
import Biryani3 from '../assets/images/A_commercial_product_photography_shot_202606152325.jpg'
import Palak1 from '../assets/images/High-end_retail_food_photography_for_202606152328.jpg'
import MasalaPowder from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'


const chickenBiryaniProduct = {
  id: 10873,
  name: 'Chicken Biryani',
  name1: 'Homemade Chicken Biryani',
  heroTitle: 'CHICKEN BIRYANI',
  second: 'It tastes exactly like homemade.',
  heroSubtitle: "Not restaurant-style. Not dhaba-style. The kind of biryani someone's mother makes — the smell when it opens, the rice that isn't mushy, the chicken that actually has flavour. Cooked fresh every morning. One batch. Lahore delivery.",
  heroImage: HeroImage,
  price: 'Rs. 1,399',
  originalPrice: 'Rs. 1,600',
  savings: 'Rs. 201',
  rating: 4.7,
  reviewCount: 3452,
  description: 'This is the biryani people describe as "tastes exactly like my mother makes it." That\'s not an accident. It\'s cooked at home, the same way, every single morning. Fresh chicken. Whole spices. Rice that holds its shape. No shortcuts.',
  features: [
    'Smells and tastes like real homemade biryani',
    'Whole spices — built from scratch, not a packet',
    'Fresh chicken bought that same morning',
  ],
  featureBadges: [
    { icon: 'fire', title: 'Cooked every morning', sub: 'Not reheated. Not yesterday\'s batch.' },
    { icon: 'leaf', title: 'No packet masala, ever', sub: 'Whole spices. Built from scratch daily.' },
    { icon: 'truck', title: 'Lahore delivery', sub: 'Hot and sealed when it reaches you.' },
    { icon: 'shield', title: 'Fresh chicken only', sub: 'Bought that morning. Never frozen.' },
  ],
  whyTitle: 'There\'s no trick to it. It\'s just cooked properly.',
  whyDesc: 'Restaurant biryani is made fast, in bulk, with shortcuts that make sense at scale. Ours isn\'t made at scale. One batch. One kitchen. The same hands, every morning.',
  whyImage: HeroImage,
  whyPoints: [
    { title: 'No Packet Masala', desc: 'We don\'t open a packet and call it done. Whole spices, every time. It takes longer. You can taste the difference.' },
    { title: 'Fresh Chicken, Same Day', desc: 'Bought that morning, cooked that morning, delivered that day. It\'s never spent a night in a freezer.' },
    { title: 'One Batch Only', desc: 'We cook enough for the day — that\'s it. When it\'s gone, it\'s gone. No second batch, no reheating, no "it\'s still fine."' },
  ],
  howItWorksLabel: 'HOW TO ORDER',
  howItWorksTitle: 'Fresh Biryani in 3 Easy Steps',
  steps: [
    {
      num: 1,
      label: 'Message on WhatsApp',
      sub: 'Tell us you want biryani and your delivery address. We\'ll check availability and confirm right away.',
      icon: 'whatsapp',
    },
    {
      num: 2,
      label: 'We Confirm Your Order',
      sub: 'Delivery time locked in. No waiting around, no back and forth.',
      icon: 'check',
    },
    {
      num: 3,
      label: 'It Arrives at Your Door',
      sub: 'Sealed, hot, and smelling exactly like it should when it reaches you.',
      icon: 'truck',
    },
  ],
  howItWorksButton: {
    label: 'Order on WhatsApp',
    href: BRAND.whatsappOrderMessage,
  },
  blendTitle: 'Nothing Hidden. Nothing From A Packet.',
  recipes: [

    { label: 'Homemade Palak Gosht', title: 'Palak Gosht', img: Palak1 },
    { label: 'Pizza Dough Masala', title: 'Pizza Dough Masala', img: MasalaPowder },
  ],
  comparisonTitle: 'Our Biryani vs Everything Else',
  comparisonRows: [
    { label: 'Tastes homemade', us: true, others: false },
    { label: 'Whole spices, no packet', us: true, others: false },
    { label: 'Fresh chicken, not frozen', us: true, others: false },
    { label: 'Cooked same day', us: true, others: false },
    { label: 'No preservatives', us: true, others: false },
    { label: 'Delivered to your door', us: true, others: true },
  ],
  accordions: [
    {
      label: 'About This Dish',
      content: `1. Homemade: Cooked in a home kitchen every morning — not a commercial kitchen, not a restaurant.\n2. Whole Spices: We don't use masala packets. Every spice goes in whole and fresh.\n3. Fresh Chicken: Bought the same morning it's cooked. It's never been frozen.\n4. No Preservatives: Cooked and delivered same day. That's the only way it works.\n5. Spice Levels: Choose Mild, Medium, or Spicy — just mention it when you order.`,
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
    new URL('../assets/chicken-biryani-hero.png', import.meta.url).href,
    Biryani1,
    Biryani2,
    Biryani3,
  ],
  faqs: [
    { q: 'What time is the biryani ready?', a: 'Every morning by 10–11 AM. We start early because it takes time to cook properly. Order before 10 AM to be sure of your portion.' },
    { q: 'Can I choose my spice level?', a: 'Yes. Mild, Medium, or Spicy. Just mention it when you message us and we\'ll make sure it\'s right.' },
    { q: 'Is the chicken fresh or frozen?', a: 'Fresh. Bought that morning, cooked the same day. It has never been frozen. This is something we don\'t compromise on.' },
    { q: 'What if today\'s biryani sells out?', a: 'We\'ll let you know straight away. Message us anyway and we\'ll add you to tomorrow\'s priority list and send a reminder first thing in the morning.' },
    { q: 'How do I place an order?', a: 'WhatsApp us. Tell us you want biryani, your spice level, and your delivery address. We confirm within minutes. No app, no account needed.' },
  ],
  testimonials: [
    { name: 'Hassan Ali', role: 'Lahore', img: 'https://randomuser.me/api/portraits/men/22.jpg', quote: 'I ordered it for the first time not expecting much. It came hot, it smelled incredible when I opened it, and honestly it tasted like something made at home. Not restaurant biryani. Actual homemade. I order every week now.', stars: 5 },
    { name: 'Nadia Qureshi', role: 'Lahore', img: 'https://randomuser.me/api/portraits/women/33.jpg', quote: 'Ordered for a family lunch. My mother asked who cooked it. When I said it was delivered she didn\'t believe me. That\'s the best review I can give.', stars: 5 },
    { name: 'Zubair Malik', role: 'Lahore', img: 'https://randomuser.me/api/portraits/men/44.jpg', quote: 'I\'ve tried a lot of biryani delivery in Lahore. This is the only one where it actually tastes like someone cooked it for me specifically — not for a hundred people.', stars: 5 },
    { name: 'Sara Iqbal', role: 'Lahore', img: 'https://randomuser.me/api/portraits/women/55.jpg', quote: 'Medium spice level was perfect. The rice held its shape, the chicken was tender and fresh. Will be ordering again this week.', stars: 5 },
  ],
}

export default function ChickenBiryaniPage() {
  return (
    <>
      <SEO title="Chicken Biryani" description="Authentic homemade Chicken Biryani with whole spices and saffron — delivered fresh in Lahore." />
      <ProductPageTemplate product={chickenBiryaniProduct} />
    </>
  )
}
