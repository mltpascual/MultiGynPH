/*
  DESIGN: Fluid Wellness — Soft Modernism
  Product Detail Page: Multi-Gyn FloraPlus
  Colors: lavender-sage hero, violet-deep headings, botanical green accents
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
const PRODUCT_IMAGE = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-floraplus.png";
const HERO_BG = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/floraplus-hero-bg.jpg";

const keyBenefits = [
  { icon: Sparkles, title: "Relieves Yeast Symptoms", description: "Provides direct relief from itch, irritation, redness, and crumbly white discharge caused by vaginal yeast." },
  { icon: Leaf, title: "Restores Vaginal Flora", description: "Contains prebiotics that stimulate the growth of beneficial lactobacilli, restoring the natural vaginal ecosystem." },
  { icon: ShieldCheck, title: "Prevents Recurrence", description: "Regular use after treatment helps prevent yeast infections from coming back by maintaining healthy flora balance." },
  { icon: FlaskConical, title: "Natural 2QR Complex", description: "Powered by the patented bio-active polysaccharide from Aloe barbadensis for gentle, effective relief." },
];

const ingredients = [
  { name: "Galactoarabinan Polyglucuronic Acid Crosspolymer", aka: "2QR Complex", role: "Active Ingredient", description: "Patented bio-active polysaccharides from Aloe barbadensis. Blocks harmful bacteria and yeast from adhering to vaginal tissue, supporting natural recovery." },
  { name: "Inulin", aka: "Prebiotic", role: "Flora Support", description: "A natural prebiotic fiber that selectively feeds and stimulates the growth of beneficial Lactobacillus bacteria in the vaginal flora." },
  { name: "Xanthan Gum", aka: null, role: "Thickening Agent", description: "Natural polysaccharide that provides the gel with a smooth, comfortable consistency for easy application." },
  { name: "Glycerin", aka: null, role: "Humectant", description: "A gentle moisturizer that helps maintain tissue hydration and supports the soothing properties of the formula." },
  { name: "Caprylyl Glycol", aka: null, role: "Skin Conditioner", description: "Enhances the product's feel on the skin and contributes to its gentle, non-irritating formulation." },
  { name: "Propanediol", aka: null, role: "Moisturizer", description: "A plant-derived moisturizing agent that helps the gel spread evenly and enhances skin comfort." },
];

const usageInstructions = [
  {
    title: "For Yeast Treatment",
    icon: ShieldCheck,
    color: "bg-[#5a7a5a]",
    steps: [
      "Wash hands thoroughly before application",
      "Attach the applicator to the tube",
      "Insert gently and squeeze to apply the gel internally",
      "Apply once daily, preferably before bedtime",
      "Continue for a minimum of 5 consecutive days",
    ],
    note: "If symptoms persist after 5 days, consult your healthcare provider. FloraPlus can also be used alongside antifungal medication.",
  },
  {
    title: "For Prevention",
    icon: Heart,
    color: "bg-violet-deep",
    steps: [
      "Apply once every 3 days for ongoing prevention",
      "Best used after completing antifungal treatment",
      "Apply before bedtime for optimal overnight effect",
      "Safe for long-term preventive use",
    ],
    note: "Regular preventive use helps maintain healthy vaginal flora and reduces the risk of yeast recurrence.",
  },
  {
    title: "After Antibiotics",
    icon: Sparkles,
    color: "bg-teal",
    steps: [
      "Start using FloraPlus immediately after completing antibiotic treatment",
      "Apply once daily for 5 days to restore flora",
      "Continue with preventive use (once every 3 days)",
      "Combine with FemiWash for complete intimate care",
    ],
    note: "Antibiotics can disrupt vaginal flora, making you more susceptible to yeast infections. FloraPlus helps restore the natural balance.",
  },
];

const testimonials = [
  {
    name: "Michelle T.",
    location: "Manila",
    rating: 5,
    text: "After years of recurring yeast infections, FloraPlus finally broke the cycle. I use it preventively now and haven't had a recurrence in over 6 months. The prebiotic formula really makes a difference.",
    verified: true,
  },
  {
    name: "Joy R.",
    location: "Cebu City",
    rating: 5,
    text: "My doctor recommended FloraPlus after my third yeast infection this year. The relief was noticeable within 2 days — the itching stopped and I felt so much more comfortable. Now I use it preventively and feel great.",
    verified: true,
  },
  {
    name: "Camille V.",
    location: "Quezon City",
    rating: 5,
    text: "I always get yeast infections after taking antibiotics. Now I use FloraPlus right after finishing my antibiotics and it prevents the yeast from coming back. Such a simple solution that really works!",
    verified: true,
  },
  {
    name: "Nina S.",
    location: "Davao City",
    rating: 4,
    text: "Effective product for yeast relief. The applicator is easy to use and the gel is comfortable. I appreciate that it contains prebiotics to actually restore the good bacteria, not just treat symptoms.",
    verified: true,
  },
  {
    name: "Bianca L.",
    location: "Makati",
    rating: 5,
    text: "FloraPlus is now a permanent part of my feminine care routine. I use it after every period and after any antibiotic course. The difference in how I feel is remarkable — no more worrying about yeast infections.",
    verified: true,
  },
];

const safetyBadges = [
  { icon: Leaf, label: "No Preservatives" },
  { icon: ShieldCheck, label: "No Hormones" },
  { icon: Baby, label: "Pregnancy Consult" },
  { icon: FlaskConical, label: "No Fragrances" },
  { icon: Heart, label: "Contains Prebiotics" },
  { icon: Check, label: "Condom Compatible" },
];

const relatedProducts = [
  { name: "Multi-Gyn ActiGel", tagline: "BV Treatment", image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-actigel.jpg", href: "/products/actigel" },
  { name: "Multi-Gyn FemiWash", tagline: "Daily Intimate Hygiene", image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-femiwash.png", href: "/products/femiwash" },
  { name: "Multi-Gyn LiquiGel", tagline: "Vaginal Dryness Relief", image: "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/product-liquigel.jpg", href: "/products/liquigel" },
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
export default function FloraPlusPage() {
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
        title="Multi-Gyn FloraPlus — Vaginal Yeast Relief | Multi-Gyn PH"
        description="Natural relief from vaginal yeast symptoms including itch, irritation, and discharge. Restores healthy vaginal flora with the 2QR Complex. Available in the Philippines."
        path="/products/floraplus"
        type="product"
      />
      <SEOStructuredData page="floraplus" />
      <ProductNav />

      {/* ─── HERO ─── */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3a4f3a]/90 via-[#3a4f3a]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a4f3a]/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[420px]">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-['Noto_Sans'] mb-6 transition-colors">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#a8d4a8] mb-4">
                Vaginal Yeast Relief
              </span>
              <h1 className="font-['Figtree'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Multi-Gyn<br /><span className="text-[#a8d4a8]">FloraPlus</span>
              </h1>
              <p className="font-['Noto_Sans'] text-lg text-white/80 leading-relaxed max-w-lg mb-8">
                Direct relief from vaginal yeast symptoms with prebiotic support. Restores and maintains healthy vaginal flora naturally with the 2QR Complex.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><Leaf size={18} className="text-[#a8d4a8]" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">Prebiotic</p><p className="font-['Noto_Sans'] text-xs text-white/60">Flora support</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><ShieldCheck size={18} className="text-[#a8d4a8]" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">Natural Based</p><p className="font-['Noto_Sans'] text-xs text-white/60">Plant-derived</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><Clock size={18} className="text-[#a8d4a8]" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">5 Tubes</p><p className="font-['Noto_Sans'] text-xs text-white/60">Pre-filled applicators</p></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://shopee.ph/list/multi%20gyn%20floraplus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#5a7a5a] text-white font-['Figtree'] font-semibold rounded-full hover:bg-[#4a6a4a] transition-all duration-300 shadow-[0_4px_20px_rgba(90,122,90,0.35)]">
                  Buy on Shopee <ExternalLink size={16} />
                </a>
                <a href="#usage" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20">How to Use</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-[#a8d4a8]/20 rounded-full blur-[80px] scale-75" />
                <img src={PRODUCT_IMAGE} alt="Multi-Gyn FloraPlus" className="relative z-10 h-[340px] sm:h-[400px] lg:h-[440px] w-auto object-contain drop-shadow-2xl" />
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a8d4a8]/30 to-[#a8d4a8]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <b.icon size={22} className="text-[#3a4f3a]" />
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#a8d4a8]/10 via-[#a8d4a8]/5 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div ref={howRef} initial={{ opacity: 0, y: 30 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#5a7a5a] mb-4">The Science</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How FloraPlus Restores Balance</h2>
            <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
              Multi-Gyn FloraPlus combines the 2QR Complex with prebiotics for a dual-action approach to vaginal yeast relief and flora restoration.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Blocks Yeast Adhesion", desc: "The 2QR Complex prevents Candida yeast from adhering to the vaginal wall, neutralizing the infection at its source without harsh antifungals." },
              { step: "02", title: "Feeds Good Bacteria", desc: "The prebiotic Inulin selectively nourishes beneficial Lactobacillus bacteria, helping them multiply and re-establish dominance in the vaginal ecosystem." },
              { step: "03", title: "Restores Natural Defense", desc: "As healthy flora is restored, the vaginal environment returns to its naturally acidic state, creating conditions that prevent future yeast overgrowth." },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)] h-full">
                  <span className="font-['Figtree'] text-5xl font-bold text-[#a8d4a8]/30">{item.step}</span>
                  <h3 className="font-['Figtree'] text-lg font-bold text-violet-deep mt-3 mb-3">{item.title}</h3>
                  <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5a7a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#5a7a5a] mb-4">Full Transparency</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">Complete Ingredient List</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed max-w-xl mx-auto">
                Multi-Gyn FloraPlus contains 6 carefully selected ingredients including prebiotics. No preservatives, no fragrances, no hormones.
              </p>
            </div>
            <div className="space-y-4">
              {ingredients.map((ing, i) => (
                <motion.div key={ing.name} initial={{ opacity: 0, x: -20 }} animate={ingredientsInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] hover:shadow-[0_4px_24px_rgba(74,26,107,0.08)] transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#a8d4a8]/30 to-[#a8d4a8]/10 flex items-center justify-center">
                      <FlaskConical size={20} className="text-[#3a4f3a]" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-['Figtree'] text-base font-bold text-violet-deep">{ing.name}</h3>
                        {ing.aka && <span className="inline-block px-3 py-0.5 bg-[#5a7a5a]/10 text-[#5a7a5a] text-xs font-semibold rounded-full">{ing.aka}</span>}
                        <span className="inline-block px-3 py-0.5 bg-lavender-light text-violet-deep text-xs font-medium rounded-full">{ing.role}</span>
                      </div>
                      <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{ing.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 bg-gradient-to-r from-[#3a4f3a] to-[#5a7a5a] rounded-2xl p-6 md:p-8">
              <h3 className="font-['Figtree'] text-lg font-bold text-white mb-5 text-center">What Multi-Gyn FloraPlus Does NOT Contain</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {safetyBadges.map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center"><badge.icon size={18} className="text-[#a8d4a8]" /></div>
                    <span className="font-['Noto_Sans'] text-xs text-white/80 font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── USAGE ─── */}
      <section id="usage" className="py-16 md:py-24 bg-gradient-to-b from-background via-[#a8d4a8]/8 to-background">
        <div className="container">
          <motion.div ref={usageRef} initial={{ opacity: 0, y: 30 }} animate={usageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#5a7a5a] mb-4">Directions</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How to Use FloraPlus</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
                Multi-Gyn FloraPlus comes in convenient pre-filled applicator tubes. Choose your use case below.
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_2px_16px_rgba(74,26,107,0.08)] border border-lavender-light/50">
                {usageInstructions.map((tab, i) => (
                  <button key={tab.title} onClick={() => setActiveTab(i)}
                    className={`px-5 py-2.5 rounded-full text-sm font-['Figtree'] font-semibold transition-all duration-300 ${activeTab === i ? "bg-[#5a7a5a] text-white shadow-[0_2px_12px_rgba(90,122,90,0.3)]" : "text-violet-deep/60 hover:text-violet-deep"}`}>
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
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a8d4a8]/20 flex items-center justify-center font-['Figtree'] text-xs font-bold text-[#3a4f3a]">{i + 1}</span>
                        <span className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="bg-[#a8d4a8]/10 rounded-xl p-4 border border-[#a8d4a8]/20">
                    <p className="font-['Noto_Sans'] text-sm text-[#3a4f3a] leading-relaxed"><strong className="font-semibold">Note:</strong> {usageInstructions[activeTab].note}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div ref={testimonialsRef} initial={{ opacity: 0, y: 30 }} animate={testimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#5a7a5a] mb-4">Real Stories</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">What Women Are Saying</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">Hear from women who restored their vaginal health with Multi-Gyn FloraPlus.</p>
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#a8d4a8]/8 to-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-[#5a7a5a] mb-4">Questions</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">FloraPlus FAQ</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)]">
            <FAQItem q="Is FloraPlus an antifungal treatment?" a="Multi-Gyn FloraPlus is not a traditional antifungal medication. It works differently — by blocking yeast adhesion with the 2QR Complex and restoring healthy flora with prebiotics. It can be used alongside antifungal treatments or as a standalone natural approach." />
            <FAQItem q="How long until I see results?" a="Many women experience relief from itching and irritation within 1-2 days of use. For full flora restoration, complete the 5-day treatment course. For best results, continue with preventive use afterward." />
            <FAQItem q="Can I use FloraPlus during my period?" a="It's best to use FloraPlus outside of your menstrual period for optimal effectiveness. You can resume use immediately after your period ends to help restore vaginal flora." />
            <FAQItem q="What makes FloraPlus different from ActiGel?" a="While both products contain the 2QR Complex, FloraPlus is specifically formulated for vaginal yeast issues and contains the prebiotic Inulin to restore beneficial bacteria. ActiGel is designed for bacterial vaginosis (BV). They target different types of infections." />
            <FAQItem q="Can I use FloraPlus after antibiotics?" a="Yes! This is one of the most recommended uses. Antibiotics can disrupt vaginal flora and increase the risk of yeast infections. Using FloraPlus after completing antibiotic treatment helps restore the natural bacterial balance and prevent yeast overgrowth." />
            <FAQItem q="Is FloraPlus safe during pregnancy?" a="While Multi-Gyn FloraPlus contains natural ingredients, we recommend consulting your healthcare provider before using any new product during pregnancy, especially for internal application." />
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#3a4f3a] to-[#5a7a5a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">Ready to Try Multi-Gyn FloraPlus?</h2>
          <p className="font-['Noto_Sans'] text-base text-white/75 leading-relaxed max-w-lg mx-auto mb-8">Available at leading pharmacies and online retailers across the Philippines. Restore your natural balance today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://shopee.ph/list/multi%20gyn%20floraplus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3a4f3a] font-['Figtree'] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
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
        <a href="https://shopee.ph/list/multi%20gyn%20floraplus" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5a7a5a] text-white text-sm font-[Figtree] font-semibold rounded-full hover:bg-[#4a6a4a] transition-colors duration-300 shadow-[0_4px_16px_rgba(90,122,90,0.3)]">
          Buy Now
        </a>
      </nav>
    </header>
  );
}
