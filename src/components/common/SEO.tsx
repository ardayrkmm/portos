import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, generatePersonSchema } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalUrl,
  type = 'website',
  image
}) => {
  const siteTitle = title ? title : SEO_CONFIG.defaultTitle;
  const siteDescription = description || SEO_CONFIG.defaultDescription;
  const url = canonicalUrl ? `${SEO_CONFIG.domain}${canonicalUrl}` : SEO_CONFIG.domain;
  const ogImage = image ? `${SEO_CONFIG.domain}${image}` : SEO_CONFIG.defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(generatePersonSchema())}
      </script>
    </Helmet>
  );
};
