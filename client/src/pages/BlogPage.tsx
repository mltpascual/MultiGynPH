/*
  DESIGN: Fluid Wellness — Soft Modernism
  Page: Blog / Educational Content Hub
  Colors: violet-deep headings, teal accents, lavender-light borders
  Fonts: Figtree (headings), Noto Sans (body)
*/
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Tag, ArrowRight, Search, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/* ─── ARTICLE DATA ─── */
const categories = ["All", "Intimate Health", "Product Guides", "Wellness Tips", "Expert Advice"];

const articles = [
  {
    id: "understanding-vaginal-ph",
    title: "Understanding Vaginal pH: Why Balance Matters",
    excerpt: "Your vaginal pH plays a crucial role in preventing infections and maintaining comfort. Learn what affects it and how to keep it in the healthy range of 3.8–4.5.",
    category: "Intimate Health",
    readTime: "5 min read",
    date: "January 15, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    content: [
      "The vaginal environment is naturally acidic, with a healthy pH typically ranging between 3.8 and 4.5. This acidity is maintained by beneficial Lactobacillus bacteria that produce lactic acid, creating an environment that's inhospitable to harmful pathogens.",
      "When vaginal pH rises above 4.5, it can create conditions favorable for bacterial vaginosis (BV), yeast infections, and other discomforts. Common factors that can disrupt vaginal pH include antibiotics, hormonal changes, sexual activity, douching, and the use of harsh soaps or fragrances in the intimate area.",
      "To maintain a healthy vaginal pH, consider using pH-balanced intimate care products like Multi-Gyn FemiWash, which cleanses gently without disrupting natural acidity. Avoid douching, wear breathable cotton underwear, and consult your healthcare provider if you notice persistent changes in discharge, odor, or comfort.",
    ],
  },
  {
    id: "bv-vs-yeast-infection",
    title: "BV vs. Yeast Infection: How to Tell the Difference",
    excerpt: "Bacterial vaginosis and yeast infections share some symptoms but require different treatments. Here's how to identify each condition and choose the right care.",
    category: "Intimate Health",
    readTime: "7 min read",
    date: "January 28, 2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    content: [
      "Bacterial vaginosis (BV) and vaginal yeast infections are the two most common vaginal conditions, affecting millions of women worldwide. While they share some overlapping symptoms like discomfort and abnormal discharge, they have distinct causes and require different approaches to treatment.",
      "BV is caused by an overgrowth of harmful bacteria, leading to a thin, grayish-white discharge with a fishy odor. Yeast infections, caused by Candida overgrowth, typically produce thick, white, cottage cheese-like discharge with intense itching but usually no strong odor.",
      "Multi-Gyn ActiGel is specifically formulated for BV, using the 2QR Complex to block harmful bacteria. Multi-Gyn FloraPlus targets yeast infections with the same 2QR Complex plus prebiotics to restore beneficial flora. Identifying your condition correctly ensures you choose the most effective treatment.",
    ],
  },
  {
    id: "intimate-care-during-pregnancy",
    title: "Intimate Care During Pregnancy: A Complete Guide",
    excerpt: "Pregnancy brings hormonal changes that affect intimate health. Learn safe, gentle approaches to feminine care throughout each trimester.",
    category: "Expert Advice",
    readTime: "6 min read",
    date: "February 5, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&q=80",
    content: [
      "During pregnancy, increased estrogen levels cause changes in vaginal discharge, pH, and susceptibility to infections. Understanding these changes helps you maintain comfort and health throughout your pregnancy journey.",
      "Multi-Gyn products like ActiGel and FemiWash are generally considered safe during pregnancy, as they contain no hormones, preservatives, or harsh chemicals. However, always consult your OB-GYN before starting any new intimate care product during pregnancy.",
      "Key tips include wearing breathable cotton underwear, avoiding scented products, staying hydrated, and maintaining gentle daily hygiene with pH-balanced products. Report any unusual symptoms to your healthcare provider promptly.",
    ],
  },
  {
    id: "2qr-complex-explained",
    title: "The 2QR Complex: Science Behind Multi-Gyn",
    excerpt: "Discover how the patented 2QR Complex works at a molecular level to protect intimate health naturally, without antibiotics or hormones.",
    category: "Product Guides",
    readTime: "4 min read",
    date: "February 8, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    content: [
      "The 2QR Complex is a patented bio-active polysaccharide derived from Aloe barbadensis (aloe vera). '2QR' stands for the molecule's ability to block pathogen adhesion through a unique mechanism that targets harmful bacteria without affecting beneficial flora.",
      "At a molecular level, the 2QR polysaccharides bind to the surface receptors of harmful bacteria, physically preventing them from attaching to vaginal mucosal tissue. Without adhesion, these pathogens cannot colonize and cause infection — they are simply washed away naturally.",
      "This mechanism is fundamentally different from antibiotics, which kill bacteria indiscriminately. The 2QR Complex is selective, preserving the healthy Lactobacillus bacteria that maintain vaginal health while neutralizing only the harmful pathogens.",
    ],
  },
  {
    id: "menopause-intimate-health",
    title: "Navigating Intimate Health During Menopause",
    excerpt: "Menopause can bring vaginal dryness, discomfort, and increased infection risk. Learn evidence-based strategies for maintaining comfort and confidence.",
    category: "Wellness Tips",
    readTime: "6 min read",
    date: "January 20, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    content: [
      "As estrogen levels decline during menopause, vaginal tissue becomes thinner, drier, and less elastic — a condition known as vaginal atrophy or genitourinary syndrome of menopause (GSM). This affects up to 50% of postmenopausal women.",
      "Multi-Gyn LiquiGel offers hormone-free relief for vaginal dryness with its bio-adhesive formula that provides long-lasting moisture. Unlike hormone-based treatments, it can be used as often as needed without systemic side effects.",
      "Beyond product use, staying sexually active, doing pelvic floor exercises, and maintaining overall hydration can help manage menopausal intimate health changes. Don't hesitate to discuss these concerns with your healthcare provider.",
    ],
  },
  {
    id: "daily-intimate-hygiene-guide",
    title: "The Complete Guide to Daily Intimate Hygiene",
    excerpt: "Proper intimate hygiene is simpler than you think. Learn the dos and don'ts of daily feminine care for optimal health and comfort.",
    category: "Wellness Tips",
    readTime: "5 min read",
    date: "February 1, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    content: [
      "Good intimate hygiene doesn't require complicated routines or expensive products. In fact, over-washing or using harsh products can do more harm than good by disrupting the natural vaginal ecosystem.",
      "The key principles are simple: wash the external intimate area once or twice daily with a pH-balanced, soap-free product like Multi-Gyn FemiWash. Never douche or wash internally. Wear breathable cotton underwear and change out of wet clothing promptly.",
      "Avoid scented products, tight synthetic clothing, and prolonged use of panty liners. After using the toilet, always wipe from front to back. These simple habits form the foundation of healthy intimate care.",
    ],
  },
  {
    id: "antibiotics-vaginal-health",
    title: "How Antibiotics Affect Your Vaginal Health",
    excerpt: "Antibiotics can disrupt vaginal flora, leading to yeast infections and BV. Learn how to protect your intimate health during and after antibiotic treatment.",
    category: "Expert Advice",
    readTime: "5 min read",
    date: "January 10, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    content: [
      "While antibiotics are essential for treating bacterial infections, they don't discriminate between harmful and beneficial bacteria. This collateral damage can significantly disrupt vaginal flora, creating conditions ripe for yeast overgrowth.",
      "Studies show that up to 30% of women develop a yeast infection after taking antibiotics. The risk is higher with broad-spectrum antibiotics and longer treatment courses.",
      "To protect your vaginal health during antibiotic treatment, consider using Multi-Gyn FloraPlus immediately after completing your course. Its prebiotic formula helps restore beneficial Lactobacillus bacteria, reducing the risk of post-antibiotic yeast infections.",
    ],
  },
  {
    id: "choosing-right-multigyn-product",
    title: "Which Multi-Gyn Product Is Right for You?",
    excerpt: "With four products in the range, choosing the right one depends on your specific concern. This guide helps you match your needs to the perfect solution.",
    category: "Product Guides",
    readTime: "4 min read",
    date: "February 10, 2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    content: [
      "Multi-Gyn offers four distinct products, each targeting a specific intimate health concern. Understanding the differences helps you choose the most effective solution for your needs.",
      "For bacterial vaginosis (BV) symptoms like fishy odor and thin discharge, choose ActiGel. For daily gentle cleansing, FemiWash is your go-to. If you're experiencing vaginal dryness, especially during menopause, LiquiGel provides long-lasting moisture. For yeast infection symptoms like itching and white discharge, FloraPlus with its prebiotic formula is the answer.",
      "Many women benefit from using multiple products together — for example, FemiWash for daily hygiene combined with ActiGel for occasional BV symptoms. Visit our product comparison page for a detailed side-by-side feature breakdown.",
    ],
  },
];

/* ─── ARTICLE CARD ─── */
function ArticleCard({ article, index, isInView }: { article: typeof articles[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/blog/${article.id}`} className="group block h-full">
        <div className="bg-white rounded-2xl border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] hover:shadow-[0_8px_32px_rgba(74,26,107,0.1)] hover:-translate-y-1 transition-all duration-400 overflow-hidden h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-['Figtree'] font-semibold text-violet-deep">
                {article.category}
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-['Noto_Sans'] text-[11px] text-foreground/40">{article.date}</span>
              <span className="text-foreground/20">·</span>
              <span className="flex items-center gap-1 font-['Noto_Sans'] text-[11px] text-foreground/40">
                <Clock size={10} /> {article.readTime}
              </span>
            </div>
            <h3 className="font-['Figtree'] text-base font-bold text-violet-deep leading-snug mb-2 group-hover:text-teal transition-colors duration-200">
              {article.title}
            </h3>
            <p className="font-['Noto_Sans'] text-sm text-foreground/55 leading-relaxed flex-grow">
              {article.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-1.5 font-['Figtree'] text-sm font-semibold text-teal group-hover:gap-3 transition-all duration-300">
              Read Article <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── FEATURED ARTICLE CARD ─── */
function FeaturedArticleCard({ article, isInView }: { article: typeof articles[0]; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/blog/${article.id}`} className="group block">
        <div className="bg-white rounded-3xl border border-lavender-light/50 shadow-[0_4px_24px_rgba(74,26,107,0.06)] hover:shadow-[0_8px_40px_rgba(74,26,107,0.12)] transition-all duration-400 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-teal text-white rounded-full text-[11px] font-['Figtree'] font-semibold">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-lavender-light/50 rounded-full text-[11px] font-['Figtree'] font-semibold text-violet-deep">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 font-['Noto_Sans'] text-[11px] text-foreground/40">
                  <Clock size={10} /> {article.readTime}
                </span>
              </div>
              <h3 className="font-['Figtree'] text-2xl font-bold text-violet-deep leading-tight mb-4 group-hover:text-teal transition-colors duration-200">
                {article.title}
              </h3>
              <p className="font-['Noto_Sans'] text-sm text-foreground/60 leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 font-['Figtree'] text-sm font-semibold text-teal group-hover:gap-3 transition-all duration-300">
                Read Full Article <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── MAIN BLOG PAGE ─── */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-40px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const featuredArticles = articles.filter((a) => a.featured);
  const filteredArticles = articles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = searchQuery === "" || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Intimate Health Blog — Multi-Gyn PH"
        description="Expert articles on feminine intimate health, vaginal care tips, product guides, and wellness advice. Stay informed with Multi-Gyn PH."
        path="/blog"
      />
      <BlogNav />

      {/* ─── HERO ─── */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-violet-deep via-violet-mid to-violet-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal rounded-full blur-[150px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <BookOpen size={16} className="text-teal" />
              <span className="font-['Figtree'] text-sm font-semibold text-white/80">Intimate Health Hub</span>
            </div>
            <h1 className="font-['Figtree'] text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Knowledge for Your<br /><span className="text-teal">Intimate Wellness</span>
            </h1>
            <p className="font-['Noto_Sans'] text-base text-white/65 leading-relaxed mb-8">
              Expert-backed articles on feminine health, product guides, and wellness tips to help you make informed decisions about your intimate care.
            </p>
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white placeholder:text-white/35 font-['Noto_Sans'] text-sm focus:outline-none focus:border-teal/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
            <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 36C840 44 960 40 1080 32C1200 24 1320 20 1380 18L1440 16V60H0Z" fill="oklch(0.98 0.005 80)" />
          </svg>
        </div>
      </section>

      {/* ─── FEATURED ARTICLES ─── */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="space-y-8">
            {featuredArticles.map((article) => (
              <FeaturedArticleCard key={article.id} article={article} isInView={heroInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORY FILTER + GRID ─── */}
      <section className="py-12 md:py-20">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-['Figtree'] font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-violet-deep text-white shadow-[0_2px_12px_rgba(74,26,107,0.25)]"
                    : "bg-white text-violet-deep/60 border border-lavender-light/50 hover:text-violet-deep hover:border-lavender"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} isInView={gridInView} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="font-['Noto_Sans'] text-base text-foreground/45">No articles found matching your search. Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-violet-deep to-violet-mid relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="font-['Figtree'] text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">Stay Informed on Intimate Health</h2>
          <p className="font-['Noto_Sans'] text-sm text-white/65 leading-relaxed mb-8">Follow us on Facebook for the latest articles, product updates, and expert tips on feminine wellness.</p>
          <a
            href="https://www.facebook.com/MultiGynPh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-deep font-['Figtree'] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
          >
            Follow Us on Facebook <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── BLOG NAV ─── */
function BlogNav() {
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
          <Link href="/" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>Home</Link>
          <Link href="/#products" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>Products</Link>
          <Link href="/#where-to-buy" className={`font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>Where to Buy</Link>
        </div>
        <Link href="/#where-to-buy" className="inline-flex items-center px-5 py-2.5 bg-violet-deep text-white text-sm font-[Figtree] font-semibold rounded-full hover:bg-violet-mid transition-colors duration-300 shadow-[0_4px_16px_rgba(74,26,107,0.25)]">
          Shop Now
        </Link>
      </nav>
    </header>
  );
}
