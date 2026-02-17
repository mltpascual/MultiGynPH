/*
  DESIGN: Fluid Wellness — Soft Modernism
  Product Detail Page: Multi-Gyn ActiGel
  Sections: Hero, Overview, How It Works, Ingredients, Usage, Testimonials, Related Products
  Colors: violet-deep, lavender, teal, cream
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
  Clock,
  Heart,
  Baby,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import SEOStructuredData from "@/components/SEOStructuredData";
import SEOHead from "@/components/SEOHead";

/* ─── DATA ─── */
const PRODUCT_IMAGE = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-actigel.jpg";
const HERO_BG = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/actigel-hero-bg.jpg";

const keyBenefits = [
  { icon: Droplets, title: "Reduces Odor & Discharge", description: "Directly targets the symptoms of bacterial vaginosis for fast, noticeable relief." },
  { icon: Sparkles, title: "Direct Soothing Effect", description: "Provides immediate comfort to irritated and sensitive intimate tissue." },
  { icon: FlaskConical, title: "Optimizes pH & Flora", description: "Restores the natural vaginal acidity and stimulates beneficial lactobacilli growth." },
  { icon: Leaf, title: "100% Natural Based", description: "Powered by the patented 2QR Complex derived from Aloe barbadensis plant extracts." },
];

const ingredients = [
  {
    name: "Galactoarabinan Polyglucuronic Acid Crosspolymer",
    aka: "2QR Complex",
    role: "Active Ingredient",
    description: "Patented bio-active polysaccharides derived from Aloe barbadensis. Blocks adhesion of harmful bacteria to the vaginal wall, neutralizing them without disturbing beneficial microflora.",
  },
  {
    name: "Xanthan Gum",
    aka: null,
    role: "Thickening Agent",
    description: "A natural polysaccharide that provides the gel with its smooth, spreadable consistency for comfortable application.",
  },
  {
    name: "Glycerin",
    aka: null,
    role: "Moisturizer",
    description: "A gentle humectant that helps maintain tissue hydration and supports the gel's soothing properties.",
  },
  {
    name: "Caprylyl Glycol",
    aka: null,
    role: "Skin Conditioning Agent",
    description: "Enhances the product's feel on the skin and contributes to its gentle, non-irritating formulation.",
  },
];

const usageInstructions = [
  {
    title: "For BV Treatment",
    icon: ShieldCheck,
    color: "bg-violet-deep",
    steps: [
      "Wash hands thoroughly before application",
      "Attach the applicator to the tube (for internal use)",
      "Apply in the vagina at least twice daily",
      "Continue for a minimum of 5 consecutive days",
      "Use before bedtime for optimal overnight effect",
    ],
    note: "If symptoms persist after 5 days, consult your healthcare provider.",
  },
  {
    title: "For Prevention",
    icon: Heart,
    color: "bg-teal",
    steps: [
      "Apply once every 3 days for ongoing prevention",
      "Best applied before bedtime",
      "Can be used after menstruation to restore balance",
      "Safe for long-term preventive use",
    ],
    note: "Regular use helps maintain optimal vaginal flora and pH balance.",
  },
  {
    title: "For Vaginal Discomfort",
    icon: Sparkles,
    color: "bg-lavender",
    steps: [
      "Apply externally on the vulva with clean fingers",
      "Use at least once daily or whenever relief is needed",
      "Apply in ample quantity for best soothing effect",
      "Can be used both internally and externally",
    ],
    note: "Suitable for itch, irritation, sensitivity, redness, and soreness.",
  },
];

const testimonials = [
  {
    name: "Maria S.",
    location: "Manila",
    rating: 5,
    text: "I've struggled with recurring BV for years. After trying Multi-Gyn ActiGel, I finally found something that actually works without harsh chemicals. The relief was noticeable within hours, and I haven't had a recurrence since I started using it preventively.",
    verified: true,
    date: "January 2026",
  },
  {
    name: "Angela R.",
    location: "Cebu City",
    rating: 5,
    text: "My OB-GYN recommended ActiGel and I'm so glad she did. It's gentle, doesn't sting, and the applicator makes it easy to use. I love that it's all natural — no antibiotics needed. This is now a staple in my feminine care routine.",
    verified: true,
    date: "December 2025",
  },
  {
    name: "Patricia L.",
    location: "Davao City",
    rating: 5,
    text: "I was skeptical at first, but ActiGel really delivered. The unpleasant odor was gone within two days of use. I appreciate that it's safe during pregnancy too — I used it during my second trimester with no issues at all.",
    verified: true,
    date: "November 2025",
  },
  {
    name: "Christine M.",
    location: "Quezon City",
    rating: 4,
    text: "Very effective for daily discomfort and irritation. I use it whenever I feel any sensitivity and it provides almost instant relief. The only reason I give 4 stars is the price, but honestly it's worth every peso for the quality.",
    verified: true,
    date: "October 2025",
  },
  {
    name: "Diana T.",
    location: "Makati",
    rating: 5,
    text: "After antibiotics failed me multiple times, I switched to ActiGel for a more natural approach. It not only treated my BV but helped prevent it from coming back. I recommend it to all my friends now.",
    verified: true,
    date: "January 2026",
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
  {
    name: "Multi-Gyn FemiWash",
    tagline: "Daily Intimate Hygiene",
    image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-femiwash.png",
    href: "/",
  },
  {
    name: "Multi-Gyn LiquiGel",
    tagline: "Vaginal Dryness Relief",
    image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-liquigel.jpg",
    href: "/",
  },
  {
    name: "Multi-Gyn FloraPlus",
    tagline: "Vaginal Yeast Relief",
    image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-floraplus.png",
    href: "/",
  },
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

/* ─── STAR RATING ─── */
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
export default function ActiGelPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        title="Multi-Gyn ActiGel — BV Treatment | Multi-Gyn PH"
        description="Treats and prevents bacterial vaginosis (BV) with the patented 2QR Complex. Fast-acting, natural-based relief for odor, discharge, and intimate discomfort."
        path="/products/actigel"
        type="product"
      />
      <SEOStructuredData page="actigel" />
      {/* ─── STICKY NAV BAR ─── */}
      <ProductNav />

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-deep/85 via-violet-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[480px]">
            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              {/* Breadcrumb */}
              <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-['Noto_Sans'] mb-6 transition-colors">
                <ArrowLeft size={16} />
                Back to Home
              </Link>

              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                Bacterial Vaginosis Treatment
              </span>
              <h1 className="font-['Figtree'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Multi-Gyn<br />
                <span className="text-teal">ActiGel</span>
              </h1>
              <p className="font-['Noto_Sans'] text-lg text-white/80 leading-relaxed max-w-lg mb-8">
                Clinically-proven treatment for bacterial vaginosis. Powered by the patented 2QR Complex for natural, effective relief without antibiotics.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Clock size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="font-['Figtree'] text-sm font-bold text-white">Fast Relief</p>
                    <p className="font-['Noto_Sans'] text-xs text-white/60">Within hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Leaf size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="font-['Figtree'] text-sm font-bold text-white">Natural Based</p>
                    <p className="font-['Noto_Sans'] text-xs text-white/60">Plant-derived</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <ShieldCheck size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="font-['Figtree'] text-sm font-bold text-white">50ml Tube</p>
                    <p className="font-['Noto_Sans'] text-xs text-white/60">~25 applications</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://shopee.ph/list/multi%20gyn%20actigel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white font-['Figtree'] font-semibold rounded-full hover:bg-teal-dark transition-all duration-300 shadow-[0_4px_20px_rgba(42,191,191,0.35)]"
                >
                  Buy on Shopee
                  <ExternalLink size={16} />
                </a>
                <a
                  href="#usage"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20"
                >
                  How to Use
                </a>
              </div>
            </motion.div>

            {/* Right: Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-teal/20 rounded-full blur-[80px] scale-75" />
                <img
                  src={PRODUCT_IMAGE}
                  alt="Multi-Gyn ActiGel 50ml"
                  className="relative z-10 h-[340px] sm:h-[400px] lg:h-[440px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
            <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 36C840 44 960 40 1080 32C1200 24 1320 20 1380 18L1440 16V60H0Z" fill="oklch(0.98 0.005 80)" />
          </svg>
        </div>
      </section>

      {/* ─── KEY BENEFITS OVERVIEW ─── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div ref={overviewRef} initial={{ opacity: 0, y: 30 }} animate={overviewInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyBenefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={overviewInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.05)] hover:shadow-[0_8px_32px_rgba(74,26,107,0.1)] hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lavender-light to-lavender/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <b.icon size={22} className="text-violet-deep" />
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-lavender-light/30 via-lavender-light/15 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div ref={howRef} initial={{ opacity: 0, y: 30 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">The Science</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How the 2QR Complex Works</h2>
            <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
              Multi-Gyn ActiGel's patented 2QR Complex is a natural bio-active polysaccharide derived from Aloe barbadensis that works through a unique blocking mechanism.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Blocks Harmful Bacteria", desc: "The 2QR Complex has the unique ability to block the adhesion of harmful bacteria to the vaginal wall, preventing them from causing infection." },
              { step: "02", title: "Restores Natural Balance", desc: "By neutralizing bad bacteria, ActiGel directly installs the optimal vaginal pH and stimulates the growth of beneficial lactobacilli." },
              { step: "03", title: "Supports Tissue Repair", desc: "Beyond blocking microbes, ActiGel supports the natural repair system of intimate tissue, optimizing the condition of the mucosa." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)] h-full">
                  <span className="font-['Figtree'] text-5xl font-bold text-lavender-light">{item.step}</span>
                  <h3 className="font-['Figtree'] text-lg font-bold text-violet-deep mt-3 mb-3">{item.title}</h3>
                  <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
                {/* Connector arrow (desktop only) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4A7D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL INGREDIENTS ─── */}
      <section id="ingredients" className="py-16 md:py-24">
        <div className="container">
          <motion.div ref={ingredientsRef} initial={{ opacity: 0, y: 30 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Full Transparency</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">Complete Ingredient List</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed max-w-xl mx-auto">
                Multi-Gyn ActiGel contains only 4 ingredients. No fragrances, no preservatives, no hormones, no harsh chemicals.
              </p>
            </div>

            {/* Ingredient Cards */}
            <div className="space-y-4">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={ingredientsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] hover:shadow-[0_4px_24px_rgba(74,26,107,0.08)] transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-lavender-light to-lavender/30 flex items-center justify-center">
                      <FlaskConical size={20} className="text-violet-deep" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-['Figtree'] text-base font-bold text-violet-deep">{ing.name}</h3>
                        {ing.aka && (
                          <span className="inline-block px-3 py-0.5 bg-teal/10 text-teal text-xs font-semibold rounded-full">{ing.aka}</span>
                        )}
                        <span className="inline-block px-3 py-0.5 bg-lavender-light text-violet-deep text-xs font-medium rounded-full">{ing.role}</span>
                      </div>
                      <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{ing.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Safety Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ingredientsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 bg-gradient-to-r from-violet-deep to-violet-mid rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-['Figtree'] text-lg font-bold text-white mb-5 text-center">What Multi-Gyn ActiGel Does NOT Contain</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {safetyBadges.map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <badge.icon size={18} className="text-teal" />
                    </div>
                    <span className="font-['Noto_Sans'] text-xs text-white/80 font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── USAGE INSTRUCTIONS ─── */}
      <section id="usage" className="py-16 md:py-24 bg-gradient-to-b from-background via-lavender-light/20 to-background">
        <div className="container">
          <motion.div ref={usageRef} initial={{ opacity: 0, y: 30 }} animate={usageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Directions</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How to Use ActiGel</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
                Multi-Gyn ActiGel can be used as often as needed. Choose your use case below for specific instructions.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_2px_16px_rgba(74,26,107,0.08)] border border-lavender-light/50">
                {usageInstructions.map((tab, i) => (
                  <button
                    key={tab.title}
                    onClick={() => setActiveTab(i)}
                    className={`px-5 py-2.5 rounded-full text-sm font-['Figtree'] font-semibold transition-all duration-300 ${
                      activeTab === i
                        ? "bg-violet-deep text-white shadow-[0_2px_12px_rgba(74,26,107,0.3)]"
                        : "text-violet-deep/60 hover:text-violet-deep"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-lavender-light/50 shadow-[0_4px_24px_rgba(74,26,107,0.06)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${usageInstructions[activeTab].color} flex items-center justify-center`}>
                      {(() => {
                        const Icon = usageInstructions[activeTab].icon;
                        return <Icon size={22} className="text-white" />;
                      })()}
                    </div>
                    <h3 className="font-['Figtree'] text-xl font-bold text-violet-deep">{usageInstructions[activeTab].title}</h3>
                  </div>

                  <ol className="space-y-4 mb-6">
                    {usageInstructions[activeTab].steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-lavender-light flex items-center justify-center font-['Figtree'] text-xs font-bold text-violet-deep">
                          {i + 1}
                        </span>
                        <span className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="bg-teal/8 rounded-xl p-4 border border-teal/15">
                    <p className="font-['Noto_Sans'] text-sm text-teal-dark leading-relaxed">
                      <strong className="font-semibold">Note:</strong> {usageInstructions[activeTab].note}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Application Methods */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={usageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)]"
              >
                <h4 className="font-['Figtree'] text-base font-bold text-violet-deep mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-lavender-light flex items-center justify-center">
                    <span className="text-violet-deep text-sm font-bold">A</span>
                  </div>
                  External Application
                </h4>
                <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">
                  Apply Multi-Gyn ActiGel on the outer intimate area (the vulva) with your finger. Always rinse your hands prior to application. Squeeze a fingertip-sized amount and gently apply to the affected area.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={usageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)]"
              >
                <h4 className="font-['Figtree'] text-base font-bold text-violet-deep mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-lavender-light flex items-center justify-center">
                    <span className="text-violet-deep text-sm font-bold">B</span>
                  </div>
                  Internal Application
                </h4>
                <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">
                  Use the special applicator included in the box. Screw it onto the tube, insert gently, and squeeze to apply. After use, clean the applicator with warm water and replace the cap. You can also apply internally with your finger.
                </p>
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
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Real Stories</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">What Women Are Saying</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
                Hear from real women across the Philippines who have experienced the benefits of Multi-Gyn ActiGel.
              </p>
            </div>

            {/* Testimonial Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.slice(0, 3).map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white rounded-2xl p-6 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.05)] hover:shadow-[0_6px_28px_rgba(74,26,107,0.1)] transition-shadow duration-300"
                >
                  <StarRating rating={t.rating} />
                  <p className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed mt-4 mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Figtree'] text-sm font-bold text-violet-deep">{t.name}</p>
                      <p className="font-['Noto_Sans'] text-xs text-foreground/50">{t.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {t.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-semibold rounded-full">
                          <Check size={10} /> Verified
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Testimonials (smaller) */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
              {testimonials.slice(3).map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="bg-white rounded-2xl p-5 border border-lavender-light/50 shadow-[0_2px_12px_rgba(74,26,107,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <StarRating rating={t.rating} />
                    </div>
                    <div>
                      <p className="font-['Noto_Sans'] text-sm text-foreground/65 leading-relaxed italic mb-3">"{t.text}"</p>
                      <div className="flex items-center gap-2">
                        <p className="font-['Figtree'] text-sm font-bold text-violet-deep">{t.name}</p>
                        <span className="text-foreground/30">·</span>
                        <p className="font-['Noto_Sans'] text-xs text-foreground/50">{t.location}</p>
                        {t.verified && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-semibold rounded-full">
                            <Check size={10} /> Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCT FAQ ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-lavender-light/20 to-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Questions</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">ActiGel FAQ</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)]">
            <FAQItem q="How often do I need to use Multi-Gyn ActiGel?" a="For treatment of BV: at least twice daily for 5 consecutive days. For prevention: once every 3 days. For general discomfort: at least once daily or whenever relief is needed. You can use it as often as you like — there are no restrictions." />
            <FAQItem q="When will I feel the effect?" a="Many women experience noticeable relief within hours of the first application. For full BV treatment, complete the 5-day course for best results. The soothing effect on irritation and discomfort is typically immediate." />
            <FAQItem q="Does Multi-Gyn ActiGel have any side effects?" a="Allergies to the ingredients are very rare. You may experience a mild tingling sensation after application, which is normal and will quickly disappear. If you have concerns, apply a small amount on the inside of your arm first. If an itching red spot appears, do not use the product." />
            <FAQItem q="Can I use ActiGel during pregnancy?" a="Yes, Multi-Gyn ActiGel is safe to use during pregnancy and breastfeeding. It contains no hormones, antibiotics, or harsh chemicals. However, we always recommend consulting your healthcare provider before starting any new product during pregnancy." />
            <FAQItem q="Does ActiGel affect the use of antibiotics?" a="No, Multi-Gyn ActiGel does not interfere with medication, including antibiotics. It can be used alongside prescribed treatments. In fact, many healthcare providers recommend it as a complementary or alternative approach to antibiotic treatment for BV." />
            <FAQItem q="Do I have to use the full tube?" a="No, you do not need to use the full tube in one course. The 50ml tube contains approximately 25 applications. You can use it for treatment and then continue with preventive applications. Store at room temperature (10–25°C) between uses." />
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-violet-deep to-violet-mid relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            Ready to Try Multi-Gyn ActiGel?
          </h2>
          <p className="font-['Noto_Sans'] text-base text-white/75 leading-relaxed max-w-lg mx-auto mb-8">
            Available at leading pharmacies and online retailers across the Philippines. Get natural, effective relief today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://shopee.ph/list/multi%20gyn%20actigel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-['Figtree'] font-semibold rounded-full hover:bg-teal-dark transition-all duration-300 shadow-[0_4px_20px_rgba(42,191,191,0.35)]"
            >
              Shop on Shopee
              <ExternalLink size={16} />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20"
            >
              <ArrowLeft size={16} />
              Back to All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}

/* ─── PRODUCT NAV (Sticky, minimal) ─── */
function ProductNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(74,26,107,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
            <circle cx="18" cy="18" r="17" stroke={scrolled ? "#4A1A6B" : "white"} strokeWidth="2" fill="none" className="transition-colors duration-500" />
            <path d="M12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="18" r="3" fill={scrolled ? "#4A1A6B" : "white"} className="transition-colors duration-500" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className={`font-[Figtree] font-bold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-violet-deep" : "text-white"}`}>
              Multi-Gyn
            </span>
            <span className="font-[Figtree] text-[10px] font-medium tracking-[0.2em] uppercase text-teal">PH</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#ingredients" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>
            Ingredients
          </a>
          <a href="#usage" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>
            How to Use
          </a>
          <Link href="/" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>
            All Products
          </Link>
        </div>

        {/* CTA */}
        <a
          href="https://shopee.ph/list/multi%20gyn%20actigel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white text-sm font-[Figtree] font-semibold rounded-full hover:bg-teal-dark transition-colors duration-300 shadow-[0_4px_16px_rgba(42,191,191,0.3)]"
        >
          Buy Now
        </a>
      </nav>
    </header>
  );
}
