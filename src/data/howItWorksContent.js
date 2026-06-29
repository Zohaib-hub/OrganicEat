import { BRAND } from "../config/constants";

export const howItWorksContent = {
  label: 'How it works',
  heading: "Fresh food at your door — here's how.",
  whatsappUrl: BRAND.whatsappOrderMessage,
  whatsappLabel: 'Order on WhatsApp ',
  steps: [
    {
      iconKey: 'pot',
      num: 1,
      title: 'We Cook Every Morning',
      desc: 'Fresh ingredients in, fresh food out. Ready by 10–11 AM. No batches carried over from the night before.',
    },
    {
      iconKey: 'whatsapp',
      num: 2,
      title: 'You Order on WhatsApp',
      desc: 'Message us, tell us what you want and where to deliver. We confirm right away.',
    },
    {
      iconKey: 'truck',
      num: 3,
      title: 'We Deliver to Your Door',
      desc: 'Same day. Still hot. Lahore delivery available across most areas.',
    },
    {
      iconKey: 'heart',
      num: 4,
      title: 'You Eat Something Real',
      desc: 'Not restaurant food. Not fast food. The kind of meal that actually feels like something.',
    },
  ],
};
