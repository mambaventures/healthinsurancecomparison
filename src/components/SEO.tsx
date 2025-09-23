import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_META, SITE_URL } from '../config/constants';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  keywords?: string[];
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_META.title,
  description = DEFAULT_META.description,
  canonicalUrl = SITE_URL,
  ogImage = DEFAULT_META.image,
  schema,
  keywords = DEFAULT_META.keywords,
  author = DEFAULT_META.author,
  publishedDate,
  modifiedDate
}) => {
  useEffect(() => {
    // Send page view to Google Analytics when component mounts
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'GT-5R8NKT7B', {
        page_title: title,
        page_location: canonicalUrl
      });

      window.gtag('config', 'G-4TBS1X7D0T', {
        page_title: title,
        page_location: canonicalUrl
      });
    }
  }, [title, canonicalUrl]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Prevent indexing of non-canonical versions */}
      <link rel="alternate" href={canonicalUrl.replace('https://www.', 'https://')} hreflang="en-nz" />

      {/* Schema.org markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#0284c7" />
    </Helmet>
  );
};

export default SEO;