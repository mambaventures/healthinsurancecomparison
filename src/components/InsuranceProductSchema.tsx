import React from 'react';
import { Helmet } from 'react-helmet-async';
import { InsuranceProduct } from '../types';

interface InsuranceProductSchemaProps {
  product: InsuranceProduct;
  provider?: {
    name: string;
    logo: string;
    address: string;
    telephone: string;
  };
  reviews?: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
  };
}

const InsuranceProductSchema: React.FC<InsuranceProductSchemaProps> = ({ 
  product,
  provider,
  reviews 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceProduct",
    "name": product.name,
    "description": product.description,
    "url": product.url,
    "brand": {
      "@type": "Organization",
      "name": provider?.name || product.provider,
      ...(provider && {
        "logo": provider.logo,
        "address": provider.address,
        "telephone": provider.telephone
      })
    },
    "offers": {
      "@type": "Offer",
      "price": product.monthlyPrice,
      "priceCurrency": "NZD",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "availability": "https://schema.org/InStock"
    },
    "additionalProperty": product.benefits.map(benefit => ({
      "@type": "PropertyValue",
      "name": "benefit",
      "value": benefit
    })),
    ...(reviews && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.ratingValue,
        "reviewCount": reviews.reviewCount,
        "bestRating": reviews.bestRating
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default InsuranceProductSchema;