import FAQSection from './FAQSection';
import { faqs, faqContent as c } from '../data/homePageContent';

export default function HomeFAQ({ variant = 'classic' }) {
  const sectionBg =
    variant === 'premium'
      ? 'bg-[#FFEDD0] py-24 lg:py-32 px-4 sm:px-6 lg:px-8'
      : variant === 'glass'
        ? 'bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8'
        : variant === 'editorial'
          ? 'bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t-2 border-[#214D41]'
          : 'bg-[#FDF5E6] py-24 lg:py-32 px-4 sm:px-6 lg:px-8';

  return (
    <FAQSection
      faqs={faqs}
      label={c.label}
      heading={c.heading}
      sectionClassName={sectionBg}
      footer={{
        note: c.footerNote,
        label: c.footerCta,
        href: c.whatsappUrl,
        external: true,
      }}
    />
  );
}
