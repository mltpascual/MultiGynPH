/*
  DESIGN: Fluid Wellness — Soft Modernism
  Products: Frosted glass product cards on lavender gradient background.
  Each card features product image, name, description, and CTA.
*/
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    name: "Multi-Gyn ActiGel",
    tagline: "Bacterial Vaginosis Treatment",
    description: "Treats and prevents bacterial vaginosis (BV) and its related symptoms like undesired discharge and odor. Provides direct relief using the unique 2QR Complex.",
    features: ["Treats BV symptoms", "Reduces odor & discharge", "Safe during pregnancy"],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=500&fit=crop",
    color: "from-violet-deep/5 to-lavender/20",
    accent: "#4A1A6B",
  },
  {
    name: "Multi-Gyn FemiWash",
    tagline: "Daily Intimate Hygiene",
    description: "A mild, soap-free, and caring intimate hygiene wash. Extremely smooth, safe, and non-irritating even for the most sensitive tissues. Ideal for daily use.",
    features: ["Soap-free formula", "pH balanced", "Daily gentle care"],
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=500&fit=crop",
    color: "from-teal/5 to-teal/15",
    accent: "#2ABFBF",
  },
  {
    name: "Multi-Gyn LiquiGel",
    tagline: "Vaginal Dryness Relief",
    description: "Treats and relieves vaginal dryness with a gentle, moisturizing gel formula. Provides long-lasting comfort and hydration for intimate wellness.",
    features: ["Relieves dryness", "Long-lasting moisture", "Gentle application"],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop",
    color: "from-blush/20 to-lavender/15",
    accent: "#C4A7D7",
  },
  {
    name: "Multi-Gyn FloraPlus",
    tagline: "Vaginal Yeast Relief",
    description: "Direct relief of itch, irritation, and crumbly white discharge caused by vaginal yeast. Restores and maintains healthy vaginal flora naturally.",
    features: ["Relieves itch & irritation", "Restores flora", "Natural ingredients"],
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=500&fit=crop",
    color: "from-violet-deep/5 to-teal/10",
    accent: "#4A1A6B",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div className={`relative bg-gradient-to-br ${product.color} backdrop-blur-sm rounded-3xl border border-white/60 p-6 md:p-8 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(74,26,107,0.12)] hover:translate-y-[-4px]`}>
        {/* Product Icon/Visual */}
        <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: `${product.accent}12` }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={product.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2h8l4 10H4L8 2Z" />
            <path d="M12 12v6" />
            <path d="M8 22h8" />
            <path d="M10 18h4" />
          </svg>
        </div>

        {/* Content */}
        <span className="font-['Noto_Sans'] text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: product.accent }}>
          {product.tagline}
        </span>
        <h3 className="font-['Figtree'] text-xl font-bold text-violet-deep mt-2 mb-3">
          {product.name}
        </h3>
        <p className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-['Noto_Sans'] text-sm text-foreground/65">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://shopee.ph/list/multi%20gyn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-['Figtree'] text-sm font-semibold text-violet-deep hover:text-teal transition-colors duration-300 group/link"
        >
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/link:translate-x-1">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-lavender-light/40 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
            Our Products
          </span>
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-violet-deep leading-tight mb-5">
            Complete Intimate Care Range
          </h2>
          <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
            From daily hygiene to targeted treatment, Multi-Gyn offers clinically-proven solutions for every aspect of feminine intimate health.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
