/*
  DESIGN: Fluid Wellness — Soft Modernism
  Product Detail Page: Multi-Gyn LiquiGel
  Colors: rose-pink hero, violet-deep headings, warm blush accents
  Fonts: Figtree (headings), Noto Sans (body)
*/
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ShieldCheck,
  Droplets,
  Leaf,
  FlaskConical,
  ChevronDown,
  Star,
  Check,
  Heart,
  Baby,
  ExternalLink,
  Sparkles,
  Clock,
} from "lucide-react";
import Footer from "@/components/Footer";
import SEOStructuredData from "@/components/SEOStructuredData";
import SEOHead from "@/components/SEOHead";

/* ─── DATA ─── */
const PRODUCT_IMAGE = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-liquigel.jpg";
const HERO_BG = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/liquigel-hero-bg.jpg";

const keyBenefits = [
  { icon: Droplets, title: "Long-Lasting Moisture", description: "Bio-adhesive gel formula provides sustained hydration that lasts, reducing the need for frequent reapplication." },
  { icon: Heart, title: "Immediate Comfort", description: "Provides instant relief from dryness, itching, and irritation for immediate intimate comfort." },
  { icon: Leaf, title: "100% Natural Based", description: "Powered by the patented 2QR Complex from Aloe barbadensis — no hormones, no harsh chemicals." },
  { icon: ShieldCheck, title: "Dual Application", description: "Can be used both internally with the applicator and externally for versatile relief wherever needed." },
];

const ingredients = [
  { name: "Galactoarabinan Polyglucuronic Acid Crosspolymer", aka: "2QR Complex", role: "Active Ingredient", description: "Patented bio-active polysaccharides from Aloe barbadensis. Blocks harmful bacteria and supports natural tissue repair while providing deep moisturization." },
  { name: "Xanthan Gum", aka: null, role: "Thickening Agent", description: "Natural polysaccharide that gives the gel its smooth, bio-adhesive consistency for long-lasting moisture retention." },
  { name: "Glycerin", aka: null, role: "Humectant", description: "A gentle moisturizer that attracts and retains water, providing sustained hydration to intimate tissues." },
  { name: "Caprylyl Glycol", aka: null, role: "Skin Conditioner", description: "Enhances the product's feel on the skin and contributes to its gentle, non-irritating formulation." },
  { name: "Propanediol", aka: null, role: "Moisturizer", description: "A plant-derived moisturizing agent that helps the gel spread evenly and enhances skin hydration." },
];

const usageInstructions = [
  {
    title: "For Vaginal Dryness",
    icon: Droplets,
    color: "bg-[#c47a8e]",
    steps: [
      "Wash hands thoroughly before application",
      "Attach the applicator to the tube for internal use",
      "Insert gently and squeeze to apply the gel",
      "Use at least once daily or as often as needed",
      "Best applied before bedtime for overnight hydration",
    ],
    note: "LiquiGel's bio-adhesive formula provides long-lasting moisture, so you may not need to reapply as frequently as other products.",
  },
  {
    title: "For Intimate Comfort",
    icon: Heart,
    color: "bg-violet-deep",
    steps: [
      "Apply externally on the vulva with clean fingers",
      "Use a fingertip-sized amount for external application",
      "Gently spread over the affected area",
      "Reapply whenever comfort is needed",
    ],
    note: "Can be used before and during intimacy as a natural, hormone-free lubricant.",
  },
  {
    title: "During Menopause",
    icon: Sparkles,
    color: "bg-teal",
    steps: [
      "Use daily to combat hormonal dryness",
      "Apply internally with the applicator before bedtime",
      "Continue regular use for sustained relief",
      "Safe for long-term use without hormonal side effects",
    ],
    note: "Multi-Gyn LiquiGel is a hormone-free alternative for managing menopausal vaginal dryness.",
  },
];

const testimonials = [
  {
    name: "Elena G.",
    location: "Manila",
    rating: 5,
    text: "After menopause, dryness became a daily struggle. My doctor recommended LiquiGel and it changed everything. The moisture lasts so much longer than other products I've tried, and I love that it's hormone-free.",
    verified: true,
  },
  {
    name: "Grace P.",
    location: "Cebu City",
    rating: 5,
    text: "I was hesitant to try yet another product, but LiquiGel truly delivers. The gel is smooth, non-sticky, and provides immediate relief. It's become an essential part of my daily routine.",
    verified: true,
  },
  {
    name: "Linda S.",
    location: "Quezon City",
    rating: 5,
    text: "The bio-adhesive formula really works — I apply it at night and still feel comfortable in the morning. No more waking up with discomfort. This product has genuinely improved my quality of life.",
    verified: true,
  },
  {
    name: "Anna B.",
    location: "Davao City",
    rating: 4,
    text: "Very effective for dryness relief. The applicator makes internal use easy and comfortable. I appreciate that it doesn't contain hormones — that was important for me. Would recommend to anyone dealing with vaginal dryness.",
    verified: true,
  },
  {
    name: "Teresa R.",
    location: "Makati",
    rating: 5,
    text: "My partner and I both appreciate LiquiGel. It works wonderfully as a natural lubricant during intimacy, and I use it daily for comfort. The fact that it's all-natural gives me peace of mind.",
    verified: true,
  },
];

const safetyBadges = [
  { icon: Leaf, label: "No Preservatives" },
  { icon: ShieldCheck, label: "No Hormones" },
  { icon: Baby, label: "Safe in Pregnancy" },
  { icon: FlaskConical, label: "No Fragrances" },
  { icon: Heart, label: "No Animal Origin" },
  { icon: Check, label: "Condom Compatible" },
];

const relatedProducts = [
  { name: "Multi-Gyn ActiGel", tagline: "BV Treatment", image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-actigel.jpg", href: "/products/actigel" },
  { name: "Multi-Gyn FemiWash", tagline: "Daily Intimate Hygiene", image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-femiwash.png", href: "/products/femiwash" },
  { name: "Multi-Gyn FloraPlus", tagline: "Vaginal Yeast Relief", image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-floraplus.png", href: "/products/floraplus" },
];

/* ─── FAQ ITEM ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-lavender/30 last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="font-['Figtree'] text-base font-semibold text-violet-deep pr-4 group-hover:text-teal transition-colors duration-200">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown size={20} className="text-lavender" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="font-['Noto_Sans'] text-sm text-foreground/65 leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
      ))}
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function LiquiGelPage() {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const overviewRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: "-80px" });
  const howRef = useRef(null);
  const howInView = useInView(howRef, { once: true, margin: "-80px" });
  const ingredientsRef = useRef(null);
  const ingredientsInView = useInView(ingredientsRef, { once: true, margin: "-80px" });
  const usageRef = useRef(null);
  const usageInView = useInView(usageRef, { once: true, margin: "-80px" });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Multi-Gyn LiquiGel — Vaginal Dryness Relief | Multi-Gyn PH"
        description="Gentle moisturizing gel for vaginal dryness relief. Long-lasting hydration and comfort with the natural 2QR Complex. Available at pharmacies in the Philippines."
        path="/products/liquigel"
        type="product"
      />
      <SEOStructuredData page="liquigel" />
      <ProductNav />

      {/* ─── HERO ─── */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6b2a4a]/90 via-[#6b2a4a]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6b2a4a]/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[420px]">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-['Noto_Sans'] mb-6 transition-colors">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#f5b8c8] mb-4">
                Vaginal Dryness Relief
              </span>
              <h1 className="font-['Figtree'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Multi-Gyn<br /><span className="text-[#f5b8c8]">LiquiGel</span>
              </h1>
              <p className="font-['Noto_Sans'] text-lg text-white/80 leading-relaxed max-w-lg mb-8">
                Bio-adhesive moisturizing gel for long-lasting relief from vaginal dryness. Hormone-free, natural formula powered by the 2QR Complex.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><Droplets size={18} className="text-[#f5b8c8]" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">Bio-Adhesive</p><p className="font-['Noto_Sans'] text-xs text-white/60">Long-lasting</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><ShieldCheck size={18} className="text-[#f5b8c8]" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">Hormone-Free</p><p className="font-['Noto_Sans'] text-xs text-white/60">Natural relief</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><Clock size={18} className="text-[#f5b8c8]" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">50ml Tube</p><p className="font-['Noto_Sans'] text-xs text-white/60">With applicator</p></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://shopee.ph/list/multi%20gyn%20liquigel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c47a8e] text-white font-['Figtree'] font-semibold rounded-full hover:bg-[#a8657a] transition-all duration-300 shadow-[0_4px_20px_rgba(196,122,142,0.35)]">
                  Buy on Shopee <ExternalLink size={16} />
                </a>
                <a href="#usage" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20">How to Use</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f5b8c8]/20 rounded-full blur-[80px] scale-75" />
                <img src={PRODUCT_IMAGE} alt="Multi-Gyn LiquiGel 50ml" className="relative z-10 h-[340px] sm:h-[400px] lg:h-[440px] w-auto object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
            <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 36C840 44 960 40 1080 32C1200 24 1320 20 1380 18L1440 16V60H0Z" fill="oklch(0.98 0.005 80)" />
          </svg>
        </div>
      </section>

      {/* ─── KEY BENEFITS ─── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div ref={overviewRef} initial={{ opacity: 0, y: 30 }} animate={overviewInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyBenefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={overviewInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.05)] hover:shadow-[0_8px_32px_rgba(74,26,107,0.1)] hover:-translate-y-1 transition-all duration-400">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f5b8c8]/30 to-[#f5b8c8]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <b.icon size={22} className="text-[#a8657a]" />
                  </div>
                  <h3 className="font-['Figtree'] text-base font-bold text-violet-deep mb-2">{b.title}</h3>
                  <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f5b8c8]/10 via-[#f5b8c8]/5 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div ref={howRef} initial={{ opacity: 0, y: 30 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#c47a8e] mb-4">The Science</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How LiquiGel Hydrates</h2>
            <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
              Multi-Gyn LiquiGel uses a unique bio-adhesive formula that bonds to mucosal tissue for sustained, long-lasting moisture.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Bio-Adhesive Bonding", desc: "The gel's unique bio-adhesive properties allow it to bond gently to the vaginal mucosa, creating a protective moisture layer that stays in place." },
              { step: "02", title: "Sustained Hydration", desc: "Unlike water-based lubricants that evaporate quickly, LiquiGel's formula provides continuous moisture release over an extended period." },
              { step: "03", title: "Tissue Protection", desc: "The 2QR Complex actively blocks harmful bacteria while supporting the natural repair and regeneration of intimate tissue." },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)] h-full">
                  <span className="font-['Figtree'] text-5xl font-bold text-[#f5b8c8]/30">{item.step}</span>
                  <h3 className="font-['Figtree'] text-lg font-bold text-violet-deep mt-3 mb-3">{item.title}</h3>
                  <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c47a8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INGREDIENTS ─── */}
      <section id="ingredients" className="py-16 md:py-24">
        <div className="container">
          <motion.div ref={ingredientsRef} initial={{ opacity: 0, y: 30 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#c47a8e] mb-4">Full Transparency</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">Complete Ingredient List</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed max-w-xl mx-auto">
                Multi-Gyn LiquiGel contains only 5 ingredients. No hormones, no preservatives, no fragrances.
              </p>
            </div>
            <div className="space-y-4">
              {ingredients.map((ing, i) => (
                <motion.div key={ing.name} initial={{ opacity: 0, x: -20 }} animate={ingredientsInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] hover:shadow-[0_4px_24px_rgba(74,26,107,0.08)] transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#f5b8c8]/30 to-[#f5b8c8]/10 flex items-center justify-center">
                      <FlaskConical size={20} className="text-[#a8657a]" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-['Figtree'] text-base font-bold text-violet-deep">{ing.name}</h3>
                        {ing.aka && <span className="inline-block px-3 py-0.5 bg-[#c47a8e]/10 text-[#c47a8e] text-xs font-semibold rounded-full">{ing.aka}</span>}
                        <span className="inline-block px-3 py-0.5 bg-lavender-light text-violet-deep text-xs font-medium rounded-full">{ing.role}</span>
                      </div>
                      <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{ing.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 bg-gradient-to-r from-[#6b2a4a] to-[#a8657a] rounded-2xl p-6 md:p-8">
              <h3 className="font-['Figtree'] text-lg font-bold text-white mb-5 text-center">What Multi-Gyn LiquiGel Does NOT Contain</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {safetyBadges.map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center"><badge.icon size={18} className="text-[#f5b8c8]" /></div>
                    <span className="font-['Noto_Sans'] text-xs text-white/80 font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── USAGE ─── */}
      <section id="usage" className="py-16 md:py-24 bg-gradient-to-b from-background via-[#f5b8c8]/8 to-background">
        <div className="container">
          <motion.div ref={usageRef} initial={{ opacity: 0, y: 30 }} animate={usageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#c47a8e] mb-4">Directions</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How to Use LiquiGel</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
                Multi-Gyn LiquiGel can be used as often as needed. Choose your use case below for specific instructions.
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_2px_16px_rgba(74,26,107,0.08)] border border-lavender-light/50">
                {usageInstructions.map((tab, i) => (
                  <button key={tab.title} onClick={() => setActiveTab(i)}
                    className={`px-5 py-2.5 rounded-full text-sm font-['Figtree'] font-semibold transition-all duration-300 ${activeTab === i ? "bg-[#c47a8e] text-white shadow-[0_2px_12px_rgba(196,122,142,0.3)]" : "text-violet-deep/60 hover:text-violet-deep"}`}>
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.35 }} className="max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-lavender-light/50 shadow-[0_4px_24px_rgba(74,26,107,0.06)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${usageInstructions[activeTab].color} flex items-center justify-center`}>
                      {(() => { const Icon = usageInstructions[activeTab].icon; return <Icon size={22} className="text-white" />; })()}
                    </div>
                    <h3 className="font-['Figtree'] text-xl font-bold text-violet-deep">{usageInstructions[activeTab].title}</h3>
                  </div>
                  <ol className="space-y-4 mb-6">
                    {usageInstructions[activeTab].steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f5b8c8]/20 flex items-center justify-center font-['Figtree'] text-xs font-bold text-[#a8657a]">{i + 1}</span>
                        <span className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="bg-[#f5b8c8]/10 rounded-xl p-4 border border-[#f5b8c8]/20">
                    <p className="font-['Noto_Sans'] text-sm text-[#6b2a4a] leading-relaxed"><strong className="font-semibold">Note:</strong> {usageInstructions[activeTab].note}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={usageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)]">
                <h4 className="font-['Figtree'] text-base font-bold text-violet-deep mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#f5b8c8]/20 flex items-center justify-center"><span className="text-[#a8657a] text-sm font-bold">A</span></div>
                  External Application
                </h4>
                <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">Apply a fingertip-sized amount to the outer intimate area (vulva). Gently spread over the dry or irritated area. Can be reapplied as often as needed throughout the day.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={usageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)]">
                <h4 className="font-['Figtree'] text-base font-bold text-violet-deep mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#f5b8c8]/20 flex items-center justify-center"><span className="text-[#a8657a] text-sm font-bold">B</span></div>
                  Internal Application
                </h4>
                <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">Screw the applicator onto the tube. Insert gently and squeeze to apply the gel internally. Clean the applicator with warm water after each use. Best applied before bedtime.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div ref={testimonialsRef} initial={{ opacity: 0, y: 30 }} animate={testimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#c47a8e] mb-4">Real Stories</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">What Women Are Saying</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">Hear from women who found lasting relief with Multi-Gyn LiquiGel.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.slice(0, 3).map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={testimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.05)] hover:shadow-[0_6px_28px_rgba(74,26,107,0.1)] transition-shadow duration-300">
                  <StarRating rating={t.rating} />
                  <p className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed mt-4 mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div><p className="font-['Figtree'] text-sm font-bold text-violet-deep">{t.name}</p><p className="font-['Noto_Sans'] text-xs text-foreground/50">{t.location}</p></div>
                    {t.verified && <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-semibold rounded-full"><Check size={10} /> Verified</span>}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
              {testimonials.slice(3).map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={testimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="bg-white rounded-2xl p-5 border border-lavender-light/50 shadow-[0_2px_12px_rgba(74,26,107,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0"><StarRating rating={t.rating} /></div>
                    <div>
                      <p className="font-['Noto_Sans'] text-sm text-foreground/65 leading-relaxed italic mb-3">"{t.text}"</p>
                      <div className="flex items-center gap-2">
                        <p className="font-['Figtree'] text-sm font-bold text-violet-deep">{t.name}</p>
                        <span className="text-foreground/30">·</span>
                        <p className="font-['Noto_Sans'] text-xs text-foreground/50">{t.location}</p>
                        {t.verified && <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-semibold rounded-full"><Check size={10} /> Verified</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f5b8c8]/8 to-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#c47a8e] mb-4">Questions</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">LiquiGel FAQ</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)]">
            <FAQItem q="How long does the moisturizing effect last?" a="Multi-Gyn LiquiGel's bio-adhesive formula provides long-lasting moisture. Many women find that one application before bedtime keeps them comfortable throughout the night and into the next day. However, you can reapply as often as needed." />
            <FAQItem q="Can I use LiquiGel as a lubricant during intimacy?" a="Yes, Multi-Gyn LiquiGel can be used as a natural, hormone-free lubricant. It is condom-compatible and provides comfortable moisture during intimate moments." />
            <FAQItem q="Is LiquiGel safe during menopause?" a="Absolutely. Multi-Gyn LiquiGel is specifically designed to help with vaginal dryness, which is a common concern during menopause. It provides hormone-free relief, making it a safe alternative to hormone-based treatments." />
            <FAQItem q="Can I use LiquiGel during pregnancy?" a="Multi-Gyn LiquiGel is generally considered safe during pregnancy as it contains no hormones or harsh chemicals. However, we always recommend consulting your healthcare provider before using any new product during pregnancy." />
            <FAQItem q="Does LiquiGel contain hormones?" a="No, Multi-Gyn LiquiGel is completely hormone-free. It relies on the natural 2QR Complex and bio-adhesive technology to provide moisture and comfort without any hormonal ingredients." />
            <FAQItem q="How is LiquiGel different from regular lubricants?" a="Unlike regular lubricants that provide temporary relief and evaporate quickly, LiquiGel uses bio-adhesive technology that bonds to mucosal tissue for sustained moisture. It also contains the 2QR Complex which actively protects against harmful bacteria." />
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ─── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Complete Your Routine</span>
            <h2 className="font-['Figtree'] text-2xl sm:text-3xl font-bold text-violet-deep leading-tight">Related Products</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {relatedProducts.map((p) => (
              <Link key={p.name} href={p.href} className="group">
                <div className="bg-white rounded-2xl p-5 border border-lavender-light/50 shadow-[0_2px_12px_rgba(74,26,107,0.04)] hover:shadow-[0_6px_24px_rgba(74,26,107,0.1)] hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img src={p.image} alt={p.name} className="h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <h3 className="font-['Figtree'] text-sm font-bold text-violet-deep">{p.name}</h3>
                  <p className="font-['Noto_Sans'] text-xs text-foreground/55 mt-1">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#6b2a4a] to-[#c47a8e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">Ready to Try Multi-Gyn LiquiGel?</h2>
          <p className="font-['Noto_Sans'] text-base text-white/75 leading-relaxed max-w-lg mx-auto mb-8">Available at leading pharmacies and online retailers across the Philippines. Get long-lasting, hormone-free relief today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://shopee.ph/list/multi%20gyn%20liquigel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#6b2a4a] font-['Figtree'] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
              Shop on Shopee <ExternalLink size={16} />
            </a>
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20">
              <ArrowLeft size={16} /> Back to All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── PRODUCT NAV ─── */
function ProductNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(74,26,107,0.08)]" : "bg-transparent"}`}>
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
            <circle cx="18" cy="18" r="17" stroke={scrolled ? "#4A1A6B" : "white"} strokeWidth="2" fill="none" className="transition-colors duration-500" />
            <path d="M12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="18" r="3" fill={scrolled ? "#4A1A6B" : "white"} className="transition-colors duration-500" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className={`font-[Figtree] font-bold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-violet-deep" : "text-white"}`}>Multi-Gyn</span>
            <span className="font-[Figtree] text-[10px] font-medium tracking-[0.2em] uppercase text-teal">PH</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#ingredients" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>Ingredients</a>
          <a href="#usage" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>How to Use</a>
          <Link href="/" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>All Products</Link>
        </div>
        <a href="https://shopee.ph/list/multi%20gyn%20liquigel" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c47a8e] text-white text-sm font-[Figtree] font-semibold rounded-full hover:bg-[#a8657a] transition-colors duration-300 shadow-[0_4px_16px_rgba(196,122,142,0.3)]">
          Buy Now
        </a>
      </nav>
    </header>
  );
}
