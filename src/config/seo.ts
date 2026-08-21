export const SEO_CONFIG = {
  domain: 'https://your-domain.com', // Placeholder domain
  defaultTitle: 'Arda Yudrik Malana | Software Developer',
  defaultDescription: 'Professional Software Developer specializing in web applications, mobile apps, and innovative technology solutions. Explore my portfolio and projects.',
  author: 'Arda Yudrik Malana',
  role: 'Software Developer',
  socials: {
    github: 'https://github.com/ardayrkmm',
    linkedin: 'https://www.linkedin.com/in/ardayudrik/',
  },
  defaultImage: 'https://your-domain.com/assets/profil.JPG', // Fallback image for Open Graph
  siteName: 'Arda Yudrik Malana Portfolio'
};

export const generatePersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SEO_CONFIG.author,
    "jobTitle": SEO_CONFIG.role,
    "url": SEO_CONFIG.domain,
    "description": SEO_CONFIG.defaultDescription,
    "sameAs": [
      SEO_CONFIG.socials.github,
      SEO_CONFIG.socials.linkedin
    ]
  };
};
