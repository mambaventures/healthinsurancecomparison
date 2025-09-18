import React from 'react';

interface ServiceOffer {
  name: string;
  description: string;
  price?: string;
  category?: string;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  serviceType?: string;
  offers?: ServiceOffer[];
  url?: string;
}

function ServiceSchema({
  name,
  description,
  provider,
  areaServed = "New Zealand",
  serviceType = "Insurance",
  offers = [],
  url
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "areaServed": {
      "@type": "Country",
      "name": areaServed
    },
    ...(url && { "url": url }),
    ...(offers.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${name} Plans`,
        "itemListElement": offers.map(offer => ({
          "@type": "Offer",
          "name": offer.name,
          "description": offer.description,
          ...(offer.price && { "price": offer.price }),
          ...(offer.category && { "category": offer.category })
        }))
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema)
      }}
    />
  );
}

export default ServiceSchema;