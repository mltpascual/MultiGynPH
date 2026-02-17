/*
  SEO: JSON-LD Structured Data for Multi-Gyn PH
  Includes LocalBusiness, Organization, Product, FAQPage, and BreadcrumbList schemas
  to improve search visibility and rich snippet eligibility.
*/

const GITHUB_IMAGES = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images";

// Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Multi-Gyn PH",
  "url": "https://multigynph.com",
  "logo": `${GITHUB_IMAGES}/product-actigel.jpg`,
  "description": "Multi-Gyn PH specializes in feminine care products addressing intimate health and comfort. With a focus on natural balance, their offerings help prevent and treat common vaginal discomforts.",
  "sameAs": [
    "https://www.facebook.com/multigynph",
    "https://shopee.ph/multigynph"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Filipino"]
  }
};

// LocalBusiness schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Multi-Gyn PH",
  "description": "Multi-Gyn PH specializes in feminine care products addressing intimate health and comfort. Clinically-proven, natural-based products available at leading pharmacies across the Philippines.",
  "url": "https://multigynph.com",
  "image": `${GITHUB_IMAGES}/hero-bg.jpg`,
  "priceRange": "₱₱",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PH",
    "addressRegion": "Metro Manila",
    "addressLocality": "Philippines"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "14.5995",
    "longitude": "120.9842"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Philippines"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Multi-Gyn Feminine Care Products",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Intimate Care Treatments",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Multi-Gyn ActiGel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Multi-Gyn LiquiGel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Multi-Gyn FloraPlus" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Daily Intimate Hygiene",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Multi-Gyn FemiWash" } }
        ]
      }
    ]
  }
};

// Product schemas for each product
const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Multi-Gyn ActiGel",
    "description": "Treats and prevents bacterial vaginosis (BV) and its related symptoms like undesired discharge and odor. Based on the patented 2QR Complex derived from natural sources.",
    "image": `${GITHUB_IMAGES}/product-actigel.jpg`,
    "brand": { "@type": "Brand", "name": "Multi-Gyn" },
    "category": "Feminine Care > BV Treatment",
    "url": "https://multigynph.com/products/actigel",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PHP",
      "seller": { "@type": "Organization", "name": "Multi-Gyn PH" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "156",
      "bestRating": "5"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Multi-Gyn FemiWash",
    "description": "A mild, soap-free, and caring intimate hygiene wash. Extremely smooth, safe, and non-irritating even for the most sensitive tissues. Ideal for daily use.",
    "image": `${GITHUB_IMAGES}/product-femiwash.png`,
    "brand": { "@type": "Brand", "name": "Multi-Gyn" },
    "category": "Feminine Care > Intimate Hygiene",
    "url": "https://multigynph.com/products/femiwash",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PHP",
      "seller": { "@type": "Organization", "name": "Multi-Gyn PH" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "203",
      "bestRating": "5"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Multi-Gyn LiquiGel",
    "description": "Treats and relieves vaginal dryness with a gentle, moisturizing gel formula. Provides long-lasting comfort and hydration for intimate wellness.",
    "image": `${GITHUB_IMAGES}/product-liquigel.jpg`,
    "brand": { "@type": "Brand", "name": "Multi-Gyn" },
    "category": "Feminine Care > Vaginal Dryness Relief",
    "url": "https://multigynph.com/products/liquigel",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PHP",
      "seller": { "@type": "Organization", "name": "Multi-Gyn PH" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "89",
      "bestRating": "5"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Multi-Gyn FloraPlus",
    "description": "Direct relief of itch, irritation, and crumbly white discharge caused by vaginal yeast. Restores and maintains healthy vaginal flora naturally.",
    "image": `${GITHUB_IMAGES}/product-floraplus.png`,
    "brand": { "@type": "Brand", "name": "Multi-Gyn" },
    "category": "Feminine Care > Vaginal Yeast Relief",
    "url": "https://multigynph.com/products/floraplus",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PHP",
      "seller": { "@type": "Organization", "name": "Multi-Gyn PH" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "72",
      "bestRating": "5"
    }
  }
];

// FAQ schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use Multi-Gyn ActiGel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apply ActiGel directly using the applicator provided. For treatment of BV symptoms, use twice daily for 5 days. For prevention, apply once every 3 days. The gel works immediately upon application."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Multi-Gyn FemiWash every day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, FemiWash is specifically designed for daily use. Its soap-free, pH-balanced formula is gentle enough for everyday intimate hygiene without disrupting your natural flora."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 2QR Complex?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2QR Complex is a patented bio-active polysaccharide derived from natural sources. It works by blocking harmful bacteria from attaching to the vaginal wall, while preserving beneficial lactobacilli that maintain healthy vaginal flora."
      }
    },
    {
      "@type": "Question",
      "name": "Are Multi-Gyn products safe during pregnancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Multi-Gyn products are safe to use during pregnancy and breastfeeding. They contain no hormones, antibiotics, or preservatives. However, always consult your healthcare provider before using any new product during pregnancy."
      }
    },
    {
      "@type": "Question",
      "name": "Do Multi-Gyn products contain preservatives or parabens?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All Multi-Gyn products are free from preservatives, parabens, fragrances, and hormones. They are formulated with natural ingredients and the patented 2QR Complex for gentle, effective care."
      }
    },
    {
      "@type": "Question",
      "name": "What causes bacterial vaginosis (BV)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BV occurs when the natural balance of bacteria in the vagina is disrupted. Common triggers include antibiotics, hormonal changes, new sexual partners, douching, and use of scented products. The 2QR Complex in Multi-Gyn ActiGel helps restore this balance naturally."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy Multi-Gyn products in the Philippines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-Gyn products are available at Mercury Drug (1,200+ branches), Watsons (800+ stores), and Rose Pharmacy (400+ branches) across the Philippines. You can also shop online via Shopee and Lazada."
      }
    }
  ]
};

// WebSite schema for sitelinks search
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Multi-Gyn PH",
  "url": "https://multigynph.com",
  "description": "Multi-Gyn PH — Feminine Care You Can Trust. Clinically-proven, natural-based intimate care products available in the Philippines.",
  "inLanguage": "en"
};

interface SEOStructuredDataProps {
  page?: "home" | "actigel" | "femiwash" | "liquigel" | "floraplus" | "blog" | "quiz";
}

export default function SEOStructuredData({ page = "home" }: SEOStructuredDataProps) {
  const schemas: object[] = [organizationSchema, websiteSchema];

  if (page === "home") {
    schemas.push(localBusinessSchema, faqSchema, ...productSchemas);
  } else if (page === "actigel") {
    schemas.push(productSchemas[0]);
  } else if (page === "femiwash") {
    schemas.push(productSchemas[1]);
  } else if (page === "liquigel") {
    schemas.push(productSchemas[2]);
  } else if (page === "floraplus") {
    schemas.push(productSchemas[3]);
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
