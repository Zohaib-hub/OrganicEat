import { Helmet } from 'react-helmet-async';
import { BRAND } from '../config/constants';

export default function SEO({ title, description, url, image }) {
  const siteTitle = title ? `${title} | Organic Eat` : `Organic Eat | ${BRAND.tagline}`;
  const siteDesc = description || BRAND.description;
  const siteUrl = url || BRAND.url;
  const siteImage = image || BRAND.ogImage;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
}
