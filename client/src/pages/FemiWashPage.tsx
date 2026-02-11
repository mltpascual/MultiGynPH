/*
  DESIGN: Fluid Wellness — Soft Modernism
  Product Detail Page: Multi-Gyn FemiWash
  Colors: teal-based hero, violet-deep headings, aquamarine accents
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

/* ─── DATA ─── */
const PRODUCT_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/EpAjnYmkhRsdcjLR.png";
const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/eeJVGgPUfdsBYsx4CScK6Z/sandbox/zEiosYtqLQJS3ugqFT4M9m-img-1_1770834253000_na1fn_ZmVtaXdhc2gtaGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZWVKVkdnUFVmZHNCWXN4NENTY0s2Wi9zYW5kYm94L3pFaW9zWXRxTFFKUzN1Z3FGVDRNOW0taW1nLTFfMTc3MDgzNDI1MzAwMF9uYTFmbl9abVZ0YVhkaGMyZ3RhR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LKYTEgrK~P0T2MT7UYpcQqO~hWG1gWVQveAstdKpOKWtidFxapPa9PdrlwgL5NQFXOQM8nxGjH0fW7nGTtIf9ajuDetJpoboM0rCKLglCSMgn5XQpbvpwkBz4bU6gB5PbEoJvoOdbCeYQX2pJs04TQVmx92ejDJ-UoRVKZ0QN5KPi3qGeu0CwVy6qBeAH40jeb3n7lD9J0QAcqADdlW~RZp1XIQorhM0sTpmXtOri~f6LjtQj7rgkTR1GFlQN08I~VUTcDKn~sEeHEfB1Nk4JeNtLWxJ~QJNcmI1Ped70rtTO6eHSB1qc1FaVAWI7oeB8m2u~afQ3maNcU01ivfDPg__";

const keyBenefits = [
  { icon: Droplets, title: "Gentle & Non-Irritating", description: "Soap-free, mild formula that cleanses without causing irritation, suitable for even the most sensitive skin." },
  { icon: ShieldCheck, title: "Maintains pH Balance", description: "pH-balanced formula preserves the natural acidity of the intimate area, supporting healthy vaginal flora." },
  { icon: Leaf, title: "Free from Harsh Chemicals", description: "No perfumes, no preservatives — reducing the risk of allergic reactions and skin sensitivities." },
  { icon: FlaskConical, title: "Contains 2QR Complex", description: "Natural, plant-derived ingredient that blocks harmful bacteria and prevents infections." },
];

const ingredients = [
  { name: "Aqua", aka: null, role: "Solvent", description: "Purified water serves as the base for the formula." },
  { name: "Glycerin", aka: null, role: "Humectant", description: "Attracts and retains moisture in the skin, keeping the intimate area hydrated and comfortable." },
  { name: "Aloe Barbadensis Extract", aka: null, role: "Soothing Agent", description: "Known for its soothing and moisturizing properties, helps calm sensitive tissue." },
  { name: "Laureth-10", aka: null, role: "Surfactant", description: "A gentle cleansing agent that helps remove impurities without stripping natural oils." },
  { name: "Sodium Laureth-11 Carboxylate", aka: null, role: "Mild Surfactant", description: "An ultra-mild cleansing agent suitable for sensitive intimate skin." },
  { name: "Glycereth-2 Cocoate", aka: null, role: "Emollient", description: "Helps to mix oil and water while softening the skin for a silky feel." },
  { name: "Sodium Cocoamphoacetate", aka: null, role: "Gentle Cleanser", description: "A coconut-derived surfactant that provides gentle, effective cleansing." },
  { name: "Sodium Lactate", aka: null, role: "pH Regulator", description: "Adjusts the pH of the product and helps to moisturize the skin." },
  { name: "Lactic Acid", aka: null, role: "pH Regulator", description: "Helps maintain the natural pH of the intimate area, supporting healthy flora." },
  { name: "Caprylyl Glycol", aka: null, role: "Skin Conditioner", description: "A skin-conditioning agent with antimicrobial properties for gentle protection." },
  { name: "Panthenol", aka: "Pro-Vitamin B5", role: "Moisturizer", description: "Moisturizes and soothes the skin, promoting tissue repair and softness." },
  { name: "Galactoarabinan Polyglucuronic Acid Crosspolymer", aka: "2QR Complex", role: "Active Ingredient", description: "The patented bio-active polysaccharide that blocks harmful bacteria from adhering to sensitive tissues." },
];

const usageInstructions = [
  {
    title: "Daily Cleansing",
    icon: Droplets,
    color: "bg-teal",
    steps: [
      "Press the pump-foamer to apply concentrated mousse on your hand",
      "Gently spread the foam over the intimate area",
      "Rinse thoroughly with water",
      "You only need one pump each time",
    ],
    note: "Multi-Gyn FemiWash is a concentrated mousse — a little goes a long way!",
  },
  {
    title: "Sensitive Skin Care",
    icon: Heart,
    color: "bg-violet-deep",
    steps: [
      "Can also be used for other sensitive parts of the body",
      "Apply a small amount of mousse to the desired area",
      "Gently massage and rinse with water",
      "Pat dry with a soft towel",
    ],
    note: "The unique formula leaves your skin feeling as soft as silk.",
  },
  {
    title: "Post-Activity Refresh",
    icon: Sparkles,
    color: "bg-lavender",
    steps: [
      "Use after exercise, swimming, or any physical activity",
      "Apply one pump of mousse to the intimate area",
      "Rinse with water for a fresh, clean feeling",
      "Safe for use multiple times throughout the day",
    ],
    note: "FemiWash can be used in the shower, bath, or at the wash basin.",
  },
];

const testimonials = [
  {
    name: "Jasmine C.",
    location: "Manila",
    rating: 5,
    text: "I've been using FemiWash daily for 6 months now and it's the best intimate wash I've ever tried. It doesn't dry out my skin like other products, and the mousse texture is so luxurious. One pump is really all you need!",
    verified: true,
  },
  {
    name: "Rica M.",
    location: "Cebu City",
    rating: 5,
    text: "As someone with very sensitive skin, finding the right intimate wash was a struggle. FemiWash is so gentle — no irritation, no burning, just clean and fresh. My OB-GYN recommended it and I'm never switching.",
    verified: true,
  },
  {
    name: "Karen D.",
    location: "Davao City",
    rating: 5,
    text: "I love that it's soap-free and preservative-free. The foam is so soft and it rinses off easily. I feel confident and fresh all day. The bottle lasts a long time too since you only need one pump.",
    verified: true,
  },
  {
    name: "Mia L.",
    location: "Quezon City",
    rating: 4,
    text: "Great product for everyday use. The mousse formula is unique and very gentle. I wish the bottle was a bit bigger, but the quality is excellent. Definitely worth the investment for your intimate health.",
    verified: true,
  },
  {
    name: "Sofia A.",
    location: "Makati",
    rating: 5,
    text: "I started using FemiWash during my pregnancy and it was perfect — no harsh chemicals, no fragrance, just pure gentle cleansing. I continued using it postpartum and it's now a permanent part of my routine.",
    verified: true,
  },
];

const safetyBadges = [
  { icon: Leaf, label: "Soap-Free" },
  { icon: ShieldCheck, label: "No Preservatives" },
  { icon: FlaskConical, label: "No Perfume" },
  { icon: Heart, label: "pH Balanced" },
  { icon: Baby, label: "Safe in Pregnancy" },
  { icon: Check, label: "Dermatologist Tested" },
];

const relatedProducts = [
  { name: "Multi-Gyn ActiGel", tagline: "BV Treatment", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/UJOCnRlwdjWmTmdS.jpg", href: "/products/actigel" },
  { name: "Multi-Gyn LiquiGel", tagline: "Vaginal Dryness Relief", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/xXGDXMrDtGeDQnNx.jpg", href: "/products/liquigel" },
  { name: "Multi-Gyn FloraPlus", tagline: "Vaginal Yeast Relief", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/FiMBdTdZrWOParXB.png", href: "/products/floraplus" },
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
export default function FemiWashPage() {
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
      <ProductNav />

      {/* ─── HERO ─── */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a5e5e]/90 via-[#0a5e5e]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a5e5e]/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[420px]">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-['Noto_Sans'] mb-6 transition-colors">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                Daily Intimate Hygiene
              </span>
              <h1 className="font-['Figtree'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Multi-Gyn<br /><span className="text-teal">FemiWash</span>
              </h1>
              <p className="font-['Noto_Sans'] text-lg text-white/80 leading-relaxed max-w-lg mb-8">
                A mild, soap-free intimate hygiene mousse for daily use. Gently cleanses while preserving your natural balance with the patented 2QR Complex.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><Droplets size={18} className="text-teal" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">Mousse Formula</p><p className="font-['Noto_Sans'] text-xs text-white/60">Concentrated foam</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><Leaf size={18} className="text-teal" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">Soap-Free</p><p className="font-['Noto_Sans'] text-xs text-white/60">pH balanced</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"><Clock size={18} className="text-teal" /></div>
                  <div><p className="font-['Figtree'] text-sm font-bold text-white">100ml Bottle</p><p className="font-['Noto_Sans'] text-xs text-white/60">~120 applications</p></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://shopee.ph/list/multi%20gyn%20femiwash" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white font-['Figtree'] font-semibold rounded-full hover:bg-teal-dark transition-all duration-300 shadow-[0_4px_20px_rgba(42,191,191,0.35)]">
                  Buy on Shopee <ExternalLink size={16} />
                </a>
                <a href="#usage" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20">How to Use</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-teal/20 rounded-full blur-[80px] scale-75" />
                <img src={PRODUCT_IMAGE} alt="Multi-Gyn FemiWash 100ml" className="relative z-10 h-[340px] sm:h-[400px] lg:h-[440px] w-auto object-contain drop-shadow-2xl" />
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <b.icon size={22} className="text-teal-dark" />
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal/5 via-teal/3 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div ref={howRef} initial={{ opacity: 0, y: 30 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">The Science</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How FemiWash Protects</h2>
            <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
              Multi-Gyn FemiWash uses the patented 2QR Complex to gently cleanse while actively protecting your intimate health.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Adheres to Harmful Bacteria", desc: "The 2QR Complex polysaccharides adhere to the surface of harmful bacteria, identifying and targeting them specifically." },
              { step: "02", title: "Blocks Bacterial Adhesion", desc: "By binding to pathogens, the 2QR Complex creates a physical barrier preventing bacteria from attaching to sensitive mucosal tissues." },
              { step: "03", title: "Natural Elimination", desc: "Neutralized bacteria are naturally cleared during rinsing, allowing beneficial lactobacilli to flourish and maintain healthy flora." },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)] h-full">
                  <span className="font-['Figtree'] text-5xl font-bold text-teal/20">{item.step}</span>
                  <h3 className="font-['Figtree'] text-lg font-bold text-violet-deep mt-3 mb-3">{item.title}</h3>
                  <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Full Transparency</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">Complete Ingredient List</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed max-w-xl mx-auto">
                Multi-Gyn FemiWash is formulated with 12 carefully selected ingredients. Soap-free, perfume-free, and preservative-free.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {ingredients.map((ing, i) => (
                <motion.div key={ing.name} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={ingredientsInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white rounded-2xl p-5 border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] hover:shadow-[0_4px_24px_rgba(74,26,107,0.08)] transition-shadow duration-300">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-teal/15 to-teal/5 flex items-center justify-center mt-0.5">
                      <FlaskConical size={16} className="text-teal-dark" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-['Figtree'] text-sm font-bold text-violet-deep">{ing.name}</h3>
                        {ing.aka && <span className="inline-block px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-semibold rounded-full">{ing.aka}</span>}
                      </div>
                      <span className="inline-block px-2 py-0.5 bg-lavender-light text-violet-deep text-[10px] font-medium rounded-full mb-1.5">{ing.role}</span>
                      <p className="font-['Noto_Sans'] text-xs text-foreground/55 leading-relaxed">{ing.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 bg-gradient-to-r from-teal-dark to-teal rounded-2xl p-6 md:p-8">
              <h3 className="font-['Figtree'] text-lg font-bold text-white mb-5 text-center">What Multi-Gyn FemiWash Does NOT Contain</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {safetyBadges.map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center"><badge.icon size={18} className="text-white" /></div>
                    <span className="font-['Noto_Sans'] text-xs text-white/80 font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── USAGE ─── */}
      <section id="usage" className="py-16 md:py-24 bg-gradient-to-b from-background via-teal/5 to-background">
        <div className="container">
          <motion.div ref={usageRef} initial={{ opacity: 0, y: 30 }} animate={usageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Directions</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">How to Use FemiWash</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
                Multi-Gyn FemiWash is a concentrated mousse — just one pump is all you need for gentle, effective cleansing.
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_2px_16px_rgba(74,26,107,0.08)] border border-lavender-light/50">
                {usageInstructions.map((tab, i) => (
                  <button key={tab.title} onClick={() => setActiveTab(i)}
                    className={`px-5 py-2.5 rounded-full text-sm font-['Figtree'] font-semibold transition-all duration-300 ${activeTab === i ? "bg-teal text-white shadow-[0_2px_12px_rgba(42,191,191,0.3)]" : "text-violet-deep/60 hover:text-violet-deep"}`}>
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
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center font-['Figtree'] text-xs font-bold text-teal-dark">{i + 1}</span>
                        <span className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="bg-teal/8 rounded-xl p-4 border border-teal/15">
                    <p className="font-['Noto_Sans'] text-sm text-teal-dark leading-relaxed"><strong className="font-semibold">Tip:</strong> {usageInstructions[activeTab].note}</p>
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
              <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Real Stories</span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">What Women Are Saying</h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">Hear from women who trust Multi-Gyn FemiWash for their daily intimate hygiene.</p>
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal/5 to-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">Questions</span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight mb-5">FemiWash FAQ</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-lavender-light/50 shadow-[0_2px_20px_rgba(74,26,107,0.06)]">
            <FAQItem q="Can I use Multi-Gyn FemiWash daily?" a="Yes, Multi-Gyn FemiWash is designed for daily use. Since it's a concentrated mousse, you only need one pump each time. It's gentle enough for everyday cleansing without disrupting your natural flora." />
            <FAQItem q="Isn't it sufficient to wash my intimate area with water?" a="Cleaning with water can be sufficient. However, for a fresh feeling, many women prefer to wash with an emulsion. This emulsion, like Multi-Gyn FemiWash, should be free of any irritating components — otherwise the natural flora can be disturbed." />
            <FAQItem q="How much FemiWash do I need to use?" a="Multi-Gyn FemiWash is a concentrated mousse — you only need one pump at a time. This makes the 100ml bottle last for approximately 120 applications." />
            <FAQItem q="Can I only use FemiWash in the shower?" a="No, you can use Multi-Gyn FemiWash in the shower, bath, or when washing at the wash basin. It's versatile enough for any cleansing routine." />
            <FAQItem q="Is FemiWash safe to use during pregnancy?" a="Multi-Gyn products are generally considered safe during pregnancy. However, we always recommend consulting with your doctor or pharmacist before using any new product during pregnancy." />
            <FAQItem q="What is the 2QR Complex in FemiWash?" a="The 2QR Complex is a patented, natural ingredient derived from the Aloe Barbadensis plant. It has the unique ability to block harmful bacteria from adhering to the sensitive tissues of the intimate area, preventing infections and maintaining healthy vaginal flora." />
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-teal-dark to-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-deep rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">Ready to Try Multi-Gyn FemiWash?</h2>
          <p className="font-['Noto_Sans'] text-base text-white/75 leading-relaxed max-w-lg mx-auto mb-8">Available at leading pharmacies and online retailers across the Philippines. Start your gentle daily care routine today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://shopee.ph/list/multi%20gyn%20femiwash" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-dark font-['Figtree'] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
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
        <a href="https://shopee.ph/list/multi%20gyn%20femiwash" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white text-sm font-[Figtree] font-semibold rounded-full hover:bg-teal-dark transition-colors duration-300 shadow-[0_4px_16px_rgba(42,191,191,0.3)]">
          Buy Now
        </a>
      </nav>
    </header>
  );
}
