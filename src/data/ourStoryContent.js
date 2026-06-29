import StoryImg from '../assets/images/A_hyper-realistic_food_product_photography_202606152256.jpg'
import { BRAND } from '../config/constants'

export const ourStoryContent = {
  label: 'Our Story',
  heading: 'We started because we missed that taste too.',
  paragraphs: [
    "There's a specific kind of food that no restaurant gets right. The kind made at home — the smell when you walk in, the taste that's been the same your whole life. That's what we cook.",
    "Organic Eat started with one simple idea. Real homemade food, made fresh every morning, delivered to people in Lahore who don't have the time to cook it themselves — but still know exactly what good food tastes like.",
  ],
  quote:
    "We don't cook in bulk. We don't reheat. We don't keep frozen stock as a backup. Every morning we start from scratch. That's the only way this works.",
  whatsappUrl: BRAND.whatsappOrderMessage,
  whatsappLabel: 'Order on WhatsApp →',
  aboutLabel: 'Our Full Story',
  aboutPath: '/about',
  image: {
    src: StoryImg,
    alt: 'Organic Sourcing Spices',
    overlayLabel: 'Family Kitchen',
    overlayTitle: 'Cooked fresh, delivered today.',
  },
  floatingCard: {
    title: 'Fresh Only',
    sub: 'Cooked daily. Never frozen. No exceptions.',
  },
};
