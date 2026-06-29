import ProductPageTemplate from './ProductPageTemplate'
import SEO from '../components/SEO'
import { BRAND } from '../config/constants'
import HeroImage from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'
import OilImage from '../assets/oil-image.png'

import Dough1 from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'
import Dough2 from '../assets/images/A_modern,_graphic_food_design_202606152303.jpg'
import Dough3 from '../assets/images/A_creative,_high-end_food_art_202606152259.jpg'
import BaryaniImage from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpg'
import PalakImage from '../assets/images/High-end_retail_food_photography_for_202606152328.jpg'

import Spoon from '../assets/spoon.png'
import Pour from '../assets/pour.png'
import Bowl from '../assets/bowl.png'

const pizzaDoughProduct = {
  id: 10874,
  name: 'Pizza Dough Masala Powder',
  name1: 'Pizza Dough Masala Powder',
  second: 'The secret to real homemade pizza taste.',
  heroTitle: 'PIZZA DOUGH\nMASALA',
  heroSubtitle: 'Most homemade pizza dough is bland. Not because of the technique — because of what\'s missing. This masala goes straight into your dough while you\'re making it. That\'s where the flavour actually starts. No artificial additives. Our own recipe. Delivered to your door in Lahore.',
  heroImage: HeroImage,
  price: 'Rs. 999',
  originalPrice: 'Rs. 1,200',
  savings: 'Rs. 201',
  rating: 4.6,
  reviewCount: 987,
  description: 'Your homemade pizza dough has one problem — it\'s bland. And no amount of toppings fixes that because the flavour needs to start in the dough itself. This masala goes in while you\'re making the dough. By the time your pizza comes out of the oven, the base actually tastes like something. That\'s the whole point of it.',
  features: [
    'Mix it into your dough — that\'s where flavour starts',
    'Our own spice blend — not a store-bought standard mix',
    'No artificial anything — real spices, nothing added',
  ],
  featureBadges: [
    { icon: 'award', title: 'Our own recipe', sub: 'Not a standard mix you\'d find anywhere else.' },
    { icon: 'shield', title: 'No artificial additives', sub: 'Real spices. No fillers, no colour, no chemicals.' },
    { icon: 'truck', title: 'Fast Delivery', sub: 'Lahore delivery available.' },
    { icon: 'bowl', title: 'Goes into the dough', sub: 'That\'s where the flavour actually starts.' },
  ],
  whyTitle: 'Homemade pizza should taste like pizza. This fixes that.',
  whyDesc: 'The dough is where everything starts. A good base makes every topping taste better. A bland base makes the whole thing forgettable. This masala was made for one reason — to fix the dough.',
  whyImage: HeroImage,
  whyPoints: [
    { title: 'It Goes Into the Dough', desc: 'Not on top. Not in the sauce. Into the dough, while you\'re making it. That\'s what gives the base its flavour and smell.' },
    { title: 'Our Own Recipe', desc: 'We didn\'t take a standard pizza spice mix and put it in a packet. This is our own blend, built specifically for dough. The combination is ours.' },
    { title: 'Real Spices Only', desc: 'No artificial flavour, no colour added, no fillers to bulk it up. What\'s in the packet is what\'s in your dough.' },
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
  blendTitle: 'Real Spice, That\'s All',
  recipes: [

    { label: 'Homemade Baryani', title: 'Baryani Masala', img: BaryaniImage },
    { label: 'Homemade Palak Gosht', title: 'Palak Gosht', img: PalakImage },
  ],
  comparisonTitle: 'Our Masala Is Ready For All Strips',
  comparisonRows: [
    { label: 'Real Italian Herbs', us: true, others: false },
    { label: 'No Artificial Flavors', us: true, others: false },
    { label: 'Works on Any Dough', us: true, others: false },
    { label: 'Lab Certified', us: true, others: true },
    { label: 'No Preservatives', us: true, others: false },
    { label: 'Consistent Results', us: true, others: false },
  ],
  accordions: [
    {
      label: 'About This Item',
      content: `1. Italian Herb Blend: Contains oregano, basil, thyme, rosemary, and garlic.\n2. No Artificial Additives: 100% natural ingredients, no MSG or preservatives.\n3. Versatile Use: Perfect for pizza dough, focaccia, breadsticks, and flatbreads.\n4. Easy Integration: Simply add to your dry flour mix before kneading.\n5. Lab Tested: Quality tested for safety and consistency in every batch.`,
      defaultOpen: true,
    },
    {
      label: 'Shipping Policy',
      content: `Free standard shipping on all orders over Rs. 1500. Express options available at checkout. Orders processed within 1–2 business days.`,
    },
    {
      label: 'Return Info',
      content: `We offer a 30-day satisfaction guarantee. Contact us within 30 days for a full refund or exchange if you are not completely satisfied.`,
    },
  ],
  thumbnails: [
    Dough1,
    Dough2,
    new URL('../assets/pizza-dough-hero.png', import.meta.url).href,
    Dough3,
  ],
  faqs: [
    { q: 'What makes this Pizza Dough Masala different?', a: 'Our masala uses genuine Italian herbs and spices — oregano, basil, thyme, rosemary — with no artificial substitutes. The flavor is authentic and consistent every time.' },
    { q: 'How much masala do I use per pizza?', a: 'Add 1–2 teaspoons per cup of flour for standard pizza dough. Adjust to taste for stronger or milder flavor.' },
    { q: 'Can I use this for non-pizza recipes?', a: 'Absolutely! It works great in focaccia, breadsticks, flatbreads, pasta dough, and even herb bread.' },
    { q: 'Is it suitable for vegans?', a: 'Yes! Our Pizza Dough Masala is 100% plant-based with no animal-derived ingredients.' },
    { q: 'What is your return policy?', a: "We offer a 30-day money-back guarantee. If you're not completely satisfied, contact our support team for a full refund." },
  ],
  testimonials: [
    { name: 'Zara Ahmed', role: 'Home Baker', img: 'https://randomuser.me/api/portraits/women/55.jpg', quote: 'My homemade pizza has never tasted this good! The masala adds such an authentic Italian flavor to the dough.', stars: 5 },
    { name: 'Danish Khan', role: 'Pizza Chef', img: 'https://randomuser.me/api/portraits/men/38.jpg', quote: 'I started using this in my pizza shop and customers immediately noticed the difference. Absolutely incredible!', stars: 5 },
    { name: 'Maham Rizvi', role: 'Food Influencer', img: 'https://randomuser.me/api/portraits/women/78.jpg', quote: 'Game changer for homemade pizza! The herbs are so fragrant and the dough comes out perfectly flavored every time.', stars: 5 },
    { name: 'Omar Farooq', role: 'Home Cook', img: 'https://randomuser.me/api/portraits/men/92.jpg', quote: 'Worth every rupee! My kids now prefer my homemade pizza over ordering from outside. That\'s the ultimate compliment!', stars: 5 },
  ],
}

export default function PizzaDoughPage() {
  return (
    <>
      <SEO title="Pizza Dough Masala Powder" description="Organic Eat's handmade pizza dough masala — Italian herbs, 100% natural, delivered in Lahore." />
      <ProductPageTemplate product={pizzaDoughProduct} />
    </>
  )
}
