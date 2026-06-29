import { BRAND } from '../config/constants'
import PalakImg from '../assets/images/A_commercial_product_photography_shot_202606152325.jpg'
import BiryaniImg from '../assets/images/A_creative,_luxury_commercial_food_202606152328.jpg'
import SpiceImg from '../assets/images/High-end_retail_product_display_photography_202606152328.jpg'

export const featuredProducts = [
  {
    id: 10871,
    name: 'Palak Murgh with Rice',
    slug: '/products/palak-murgh',
    price: 'Rs. 1,299',
    originalPrice: 'Rs. 1,500',
    badge: 'Best Seller',
    description: 'Fresh spinach. Real chicken. Homemade masala. Cooked this morning. Served with rice.',
    image: PalakImg,
    tag: 'Fresh Today',
    delivery: 'Same Day',
  },
  {
    id: 10872,
    name: 'Chicken Biryani',
    slug: '/products/chicken-biryani',
    price: 'Rs. 1,399',
    originalPrice: 'Rs. 1,600',
    badge: 'Customer Favourite',
    description: 'Whole spices. Fresh chicken. The kind that tastes exactly like homemade. Because it is.',
    image: BiryaniImg,
    tag: 'Fresh Today',
    delivery: 'Same Day',
  },
  {
    id: 10873,
    name: 'Pizza Dough Masala Powder',
    slug: '/products/pizza-dough-masala-powder',
    price: 'Rs. 999',
    originalPrice: 'Rs. 1,200',
    badge: 'Always Available',
    description: 'Our own spice blend. Mix it into your dough. No artificial additives. Multiple pizza nights from one packet.',
    image: SpiceImg,
    tag: 'Order Anytime',
    delivery: '3 Days',
  },
];

export const featuredProductsContent = {
  label: "What's fresh today",
  heading: "Today's Menu",
  description: "We cook a limited batch of each dish every morning. Once it's gone, it's gone until tomorrow. Here's what's available right now.",
  soldOutNote: "Sold out today?",
  soldOutLink: 'Message us on WhatsApp',
  soldOutSuffix: "— we'll remind you first thing tomorrow morning when the fresh batch is ready.",
  whatsappUrl: BRAND.whatsappOrderMessage,
  orderLabel: 'Order on WhatsApp →',
  detailsLabel: 'View Full Details',
};

export const numberStats = [
  { big: '1', title: 'Fresh batch daily', sub: 'No more, no less. Cooked every single morning.' },
  { big: '0', title: 'Frozen meals sold', sub: "Not once. Not ever. That's not changing." },
  { big: '3', title: 'Homemade products', sub: 'All made with the same care — no shortcuts on any of them.' },
  { big: '10AM', title: 'Ready every morning', sub: 'The time everything is ready. Every day, without fail.' },
];

export const numberStatsContent = {
  label: 'Built on one commitment',
  heading: 'Everything we do comes back to one thing. Fresh.',
};

export const whyPoints = [
  {
    iconKey: 'home',
    title: 'It tastes like it was made at home',
    desc: 'Because it was. Same kitchen, same hands, same care — every morning.',
  },
  {
    iconKey: 'clock',
    title: "It's always fresh",
    desc: "No batch carried over to the next day. No frozen backup. If today's is gone — tomorrow's starts fresh.",
  },
  {
    iconKey: 'leaf',
    title: "You know what's in it",
    desc: 'Real ingredients. No preservatives, no artificial flavouring, no fillers. What we say is in it — is in it.',
  },
  {
    iconKey: 'phone',
    title: 'Ordering takes 30 seconds',
    desc: 'One WhatsApp message. Tell us what you want and where you are. We handle the rest.',
  },
];

export const whyChooseUsContent = {
  label: 'Why people order from us',
  heading: "There are faster options. There are cheaper options. There's nothing quite like this one.",
  description: 'We built Organic Eat for people who know what good food tastes like and refuse to settle for anything less.',
};

export const reviews = [
  {
    name: '[Customer Name]',
    role: 'Lahore',
    initial: 'A',
    stars: 5,
    quote: "I've tried a lot of food delivery in Lahore. This is the only one where it actually tastes like someone cooked it for me. Not for a hundred people. For me.",
  },
  {
    name: '[Customer Name]',
    role: 'Lahore',
    initial: 'S',
    stars: 5,
    quote: "The Palak Murgh reminded me of my mother's cooking. That's not something I say lightly. I've ordered four times since.",
  },
  {
    name: '[Customer Name]',
    role: 'Lahore',
    initial: 'N',
    stars: 5,
    quote: "Ordered the biryani not expecting much. My mother asked who cooked it. When I told her it was delivered she didn't believe me.",
  },
];

export const testimonialsContent = {
  label: 'What people say',
  heading: 'Real customers. Real orders.',
  rating: '4.9★ rating',
  ratingSub: 'from satisfied customers across Lahore',
};

export const faqs = [
  {
    q: 'How do I place an order?',
    a: "WhatsApp us. Tell us what you want and your delivery address. We'll confirm everything within minutes. No app, no account, no checkout needed.",
  },
  {
    q: 'Which areas do you deliver to?',
    a: 'Most areas in Lahore including DHA, Bahria Town, Gulberg, Model Town, Johar Town, Garden Town, Cantt and more. Send us your address on WhatsApp and we will confirm in minutes.',
  },
  {
    q: 'Do you use preservatives or artificial food coloring?',
    a: 'Never. All our products are 100% natural, preservative-free, and organic. What you see is what you get.',
  },
];

export const faqContent = {
  label: 'FAQ',
  heading: 'Frequently Asked Questions',
  footerNote: 'Something else on your mind? Just message us.',
  footerCta: 'Message Us on WhatsApp →',
  whatsappUrl: BRAND.whatsappOrderMessage,
};
