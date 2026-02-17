/*
  DESIGN: Fluid Wellness — Soft Modernism
  Section: Product Comparison Table
  Purpose: Side-by-side feature comparison for all 4 Multi-Gyn products
  Colors: violet-deep headings, teal accents, lavender-light borders
  Fonts: Figtree (headings), Noto Sans (body)
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { Check, X, ArrowRight } from "lucide-react";

const products = [
  {
    name: "ActiGel",
    fullName: "Multi-Gyn ActiGel",
    tagline: "BV Treatment",
    color: "#4A1A6B",
    lightColor: "bg-violet-deep/5",
    href: "/products/actigel",
    image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-actigel.jpg",
  },
  {
    name: "FemiWash",
    fullName: "Multi-Gyn FemiWash",
    tagline: "Daily Hygiene",
    color: "#2ABFBF",
    lightColor: "bg-teal/5",
    href: "/products/femiwash",
    image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-femiwash.png",
  },
  {
    name: "LiquiGel",
    fullName: "Multi-Gyn LiquiGel",
    tagline: "Dryness Relief",
    color: "#c47a8e",
    lightColor: "bg-[#c47a8e]/5",
    href: "/products/liquigel",
    image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-liquigel.jpg",
  },
  {
    name: "FloraPlus",
    fullName: "Multi-Gyn FloraPlus",
    tagline: "Yeast Relief",
    color: "#5a7a5a",
    lightColor: "bg-[#5a7a5a]/5",
    href: "/products/floraplus",
    image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-floraplus.png",
  },
];

type FeatureValue = boolean | string;

interface ComparisonRow {
  category: string;
  feature: string;
  values: [FeatureValue, FeatureValue, FeatureValue, FeatureValue];
}

const comparisonData: ComparisonRow[] = [
  { category: "Concern", feature: "Bacterial Vaginosis (BV)", values: [true, false, false, false] },
  { category: "Concern", feature: "Vaginal Dryness", values: [false, false, true, false] },
  { category: "Concern", feature: "Vaginal Yeast / Candida", values: [false, false, false, true] },
  { category: "Concern", feature: "Daily Intimate Hygiene", values: [false, true, false, false] },
  { category: "Concern", feature: "Unpleasant Odor", values: [true, true, false, false] },
  { category: "Concern", feature: "Itch & Irritation", values: [true, false, true, true] },
  { category: "Formula", feature: "Contains 2QR Complex", values: [true, true, true, true] },
  { category: "Formula", feature: "Contains Prebiotics", values: [false, false, false, true] },
  { category: "Formula", feature: "Hormone-Free", values: [true, true, true, true] },
  { category: "Formula", feature: "Preservative-Free", values: [true, true, true, true] },
  { category: "Formula", feature: "Fragrance-Free", values: [true, true, true, true] },
  { category: "Usage", feature: "Application Type", values: ["Internal + External", "External Wash", "Internal + External", "Internal"] },
  { category: "Usage", feature: "Format", values: ["50ml Tube", "100ml Mousse", "50ml Tube", "5 Pre-filled Tubes"] },
  { category: "Usage", feature: "Safe During Pregnancy", values: [true, true, true, "Consult Doctor"] },
  { category: "Usage", feature: "Condom Compatible", values: [true, true, true, true] },
  { category: "Usage", feature: "Daily Use", values: ["As needed", true, "As needed", "5-day course"] },
];

const categories = ["Concern", "Formula", "Usage"];

function CellValue({ value }: { value: FeatureValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center mx-auto">
        <Check size={14} className="text-teal-dark" />
      </div>
    ) : (
      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
        <X size={14} className="text-gray-300" />
      </div>
    );
  }
  return (
    <span className="font-['Noto_Sans'] text-xs text-foreground/70 leading-tight text-center block">
      {value}
    </span>
  );
}

/* ─── MOBILE CARD VIEW ─── */
function MobileComparisonCard({ product, index }: { product: typeof products[0]; index: number }) {
  const rows = comparisonData.map((row) => ({
    feature: row.feature,
    category: row.category,
    value: row.values[index],
  }));

  return (
    <div className="bg-white rounded-2xl border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.05)] overflow-hidden">
      {/* Header */}
      <div className="p-5 flex items-center gap-4 border-b border-lavender-light/30">
        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
          <img src={product.image} alt={product.fullName} className="h-14 w-auto object-contain" />
        </div>
        <div>
          <h3 className="font-['Figtree'] text-base font-bold text-violet-deep">{product.fullName}</h3>
          <p className="font-['Noto_Sans'] text-xs text-foreground/50">{product.tagline}</p>
        </div>
      </div>
      {/* Features */}
      <div className="divide-y divide-lavender-light/20">
        {categories.map((cat) => (
          <div key={cat}>
            <div className="px-5 py-2.5 bg-lavender-light/20">
              <span className="font-['Figtree'] text-[11px] font-bold uppercase tracking-wider text-violet-deep/50">{cat}</span>
            </div>
            {rows
              .filter((r) => r.category === cat)
              .map((r) => (
                <div key={r.feature} className="flex items-center justify-between px-5 py-3">
                  <span className="font-['Noto_Sans'] text-sm text-foreground/70">{r.feature}</span>
                  <CellValue value={r.value} />
                </div>
              ))}
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="p-4 border-t border-lavender-light/30">
        <Link href={product.href} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-['Figtree'] font-semibold text-white transition-colors duration-300" style={{ backgroundColor: product.color }}>
          View Details <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

/* ─── MAIN SECTION ─── */
export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeMobileProduct, setActiveMobileProduct] = useState(0);

  return (
    <section id="compare" className="py-16 md:py-24 bg-gradient-to-b from-background via-lavender-light/15 to-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
              Find Your Match
            </span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">
              Product Comparison
            </h2>
            <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
              Not sure which product is right for you? Compare features side-by-side to find the perfect solution for your intimate health needs.
            </p>
          </div>

          {/* ─── DESKTOP TABLE ─── */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl border border-lavender-light/50 shadow-[0_4px_32px_rgba(74,26,107,0.06)] overflow-hidden">
              {/* Product Headers */}
              <div className="grid grid-cols-[240px_repeat(4,1fr)] border-b border-lavender-light/30">
                <div className="p-6 flex items-end">
                  <span className="font-['Figtree'] text-sm font-bold text-violet-deep/40 uppercase tracking-wider">Feature</span>
                </div>
                {products.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="p-5 text-center border-l border-lavender-light/20"
                  >
                    <div className="h-20 flex items-center justify-center mb-3">
                      <img src={p.image} alt={p.fullName} className="h-16 w-auto object-contain" />
                    </div>
                    <h3 className="font-['Figtree'] text-sm font-bold text-violet-deep">{p.fullName}</h3>
                    <p className="font-['Noto_Sans'] text-[11px] text-foreground/45 mt-0.5">{p.tagline}</p>
                  </motion.div>
                ))}
              </div>

              {/* Comparison Rows */}
              {categories.map((cat) => (
                <div key={cat}>
                  {/* Category Header */}
                  <div className="grid grid-cols-[240px_repeat(4,1fr)] bg-lavender-light/20 border-b border-lavender-light/20">
                    <div className="px-6 py-2.5">
                      <span className="font-['Figtree'] text-[11px] font-bold uppercase tracking-wider text-violet-deep/50">{cat}</span>
                    </div>
                    <div className="col-span-4" />
                  </div>
                  {/* Rows */}
                  {comparisonData
                    .filter((row) => row.category === cat)
                    .map((row, ri) => (
                      <div
                        key={row.feature}
                        className={`grid grid-cols-[240px_repeat(4,1fr)] border-b border-lavender-light/15 hover:bg-lavender-light/10 transition-colors duration-200 ${
                          ri % 2 === 0 ? "" : "bg-lavender-light/5"
                        }`}
                      >
                        <div className="px-6 py-3.5 flex items-center">
                          <span className="font-['Noto_Sans'] text-sm text-foreground/70">{row.feature}</span>
                        </div>
                        {row.values.map((val, vi) => (
                          <div key={vi} className="px-4 py-3.5 flex items-center justify-center border-l border-lavender-light/10">
                            <CellValue value={val} />
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              ))}

              {/* CTA Row */}
              <div className="grid grid-cols-[240px_repeat(4,1fr)] border-t border-lavender-light/30 bg-lavender-light/10">
                <div className="p-5 flex items-center">
                  <span className="font-['Figtree'] text-sm font-bold text-violet-deep/60">View Details</span>
                </div>
                {products.map((p) => (
                  <div key={p.name} className="p-4 flex items-center justify-center border-l border-lavender-light/20">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-['Figtree'] font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                      style={{ backgroundColor: p.color }}
                    >
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── MOBILE VIEW ─── */}
          <div className="lg:hidden">
            {/* Product Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-1 px-1">
              {products.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActiveMobileProduct(i)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-['Figtree'] font-semibold transition-all duration-300 ${
                    activeMobileProduct === i
                      ? "text-white shadow-lg"
                      : "bg-white text-violet-deep/60 border border-lavender-light/50"
                  }`}
                  style={activeMobileProduct === i ? { backgroundColor: p.color } : {}}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <MobileComparisonCard
              product={products[activeMobileProduct]}
              index={activeMobileProduct}
            />
          </div>

          {/* Helper Note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="font-['Noto_Sans'] text-sm text-foreground/45 leading-relaxed mb-4">
              All Multi-Gyn products contain the patented <strong className="text-violet-deep/70">2QR Complex</strong> and are free from hormones, preservatives, and fragrances.
              <br className="hidden sm:block" />
              Consult your healthcare provider for personalized recommendations.
            </p>
            <Link href="/quiz" className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white font-['Figtree'] font-semibold text-sm rounded-full hover:bg-teal-dark transition-colors shadow-[0_2px_12px_rgba(42,191,191,0.25)]">
              Not sure? Take our Product Quiz <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
