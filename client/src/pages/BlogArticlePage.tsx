/*
  DESIGN: Fluid Wellness — Soft Modernism
  Page: Individual Blog Article
  Colors: violet-deep headings, teal accents, lavender-light borders
  Fonts: Figtree (headings), Noto Sans (body)
*/
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Tag, ArrowRight, Share2, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";

/* ─── ARTICLE DATA (same as BlogPage) ─── */
const articles = [
  {
    id: "understanding-vaginal-ph",
    title: "Understanding Vaginal pH: Why Balance Matters",
    excerpt: "Your vaginal pH plays a crucial role in preventing infections and maintaining comfort. Learn what affects it and how to keep it in the healthy range of 3.8–4.5.",
    category: "Intimate Health",
    readTime: "5 min read",
    date: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    content: [
      "The vaginal environment is naturally acidic, with a healthy pH typically ranging between 3.8 and 4.5. This acidity is maintained by beneficial Lactobacillus bacteria that produce lactic acid, creating an environment that's inhospitable to harmful pathogens.",
      "When vaginal pH rises above 4.5, it can create conditions favorable for bacterial vaginosis (BV), yeast infections, and other discomforts. Common factors that can disrupt vaginal pH include antibiotics, hormonal changes, sexual activity, douching, and the use of harsh soaps or fragrances in the intimate area.",
      "Several signs may indicate your vaginal pH is off balance. These include unusual discharge (changes in color, consistency, or amount), unpleasant or fishy odor, itching or burning sensation, and discomfort during intercourse. If you experience any of these symptoms persistently, it's important to consult your healthcare provider.",
      "Maintaining a healthy vaginal pH doesn't require complicated routines. The most important step is to avoid disrupting your body's natural balance. This means steering clear of douching, which can wash away beneficial bacteria and alter pH levels. Instead, cleanse the external intimate area with a pH-balanced product like Multi-Gyn FemiWash.",
      "Your diet and lifestyle also play a role in vaginal pH. Probiotic-rich foods like yogurt and fermented vegetables support beneficial bacteria throughout your body, including the vaginal microbiome. Staying hydrated, managing stress, and wearing breathable cotton underwear are simple habits that support intimate health.",
      "If you're prone to recurrent infections, consider using Multi-Gyn ActiGel preventively. Its 2QR Complex helps maintain the natural vaginal environment by blocking harmful bacteria from adhering to vaginal tissue, supporting your body's own defense mechanisms without disrupting beneficial flora.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn FemiWash", desc: "pH-balanced daily intimate wash", href: "/products/femiwash" },
      { name: "Multi-Gyn ActiGel", desc: "BV treatment and prevention", href: "/products/actigel" },
    ],
  },
  {
    id: "bv-vs-yeast-infection",
    title: "BV vs. Yeast Infection: How to Tell the Difference",
    excerpt: "Bacterial vaginosis and yeast infections share some symptoms but require different treatments. Here's how to identify each condition and choose the right care.",
    category: "Intimate Health",
    readTime: "7 min read",
    date: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    content: [
      "Bacterial vaginosis (BV) and vaginal yeast infections are the two most common vaginal conditions, affecting millions of women worldwide. While they share some overlapping symptoms like discomfort and abnormal discharge, they have distinct causes and require different approaches to treatment.",
      "BV occurs when the balance of bacteria in the vagina is disrupted, leading to an overgrowth of anaerobic bacteria. The hallmark symptoms include a thin, grayish-white discharge with a distinctive fishy odor that often worsens after intercourse. BV may also cause mild itching or burning, but the odor and discharge characteristics are the primary identifiers.",
      "Yeast infections, on the other hand, are caused by an overgrowth of Candida fungus, most commonly Candida albicans. The classic symptoms include thick, white, cottage cheese-like discharge, intense itching and irritation of the vulva and vagina, redness and swelling, and burning during urination or intercourse. Unlike BV, yeast infections typically don't produce a strong odor.",
      "Understanding the difference matters because the treatments are fundamentally different. BV requires products that target bacterial overgrowth, while yeast infections need antifungal approaches. Using the wrong treatment can delay relief and potentially worsen the condition.",
      "Multi-Gyn ActiGel is specifically formulated for BV. Its 2QR Complex blocks harmful bacteria from adhering to vaginal tissue, effectively treating the infection while preserving beneficial Lactobacillus bacteria. It can be used both for active BV treatment and as a preventive measure.",
      "For yeast infections, Multi-Gyn FloraPlus is the targeted solution. It combines the 2QR Complex with prebiotics (Inulin) that specifically nourish beneficial Lactobacillus bacteria, helping restore the natural vaginal ecosystem and creating conditions that discourage Candida overgrowth.",
      "If you're unsure whether you're dealing with BV or a yeast infection, it's always best to consult your healthcare provider for a proper diagnosis. Self-diagnosis can be tricky, as some infections can present with atypical symptoms, and occasionally both conditions can occur simultaneously.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn ActiGel", desc: "For bacterial vaginosis", href: "/products/actigel" },
      { name: "Multi-Gyn FloraPlus", desc: "For yeast infections", href: "/products/floraplus" },
    ],
  },
  {
    id: "intimate-care-during-pregnancy",
    title: "Intimate Care During Pregnancy: A Complete Guide",
    excerpt: "Pregnancy brings hormonal changes that affect intimate health. Learn safe, gentle approaches to feminine care throughout each trimester.",
    category: "Expert Advice",
    readTime: "6 min read",
    date: "February 5, 2026",
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&q=80",
    content: [
      "During pregnancy, your body undergoes significant hormonal changes that directly affect your intimate health. Increased estrogen levels lead to greater blood flow to the pelvic area, changes in vaginal discharge, and shifts in vaginal pH — all of which can increase susceptibility to infections.",
      "In the first trimester, many women notice an increase in vaginal discharge. This is completely normal and is your body's way of preventing infections from reaching the uterus. The discharge should be clear or milky white, thin, and mild-smelling. If it becomes colored, thick, or foul-smelling, consult your OB-GYN.",
      "The second trimester often brings relief from early pregnancy symptoms, but vaginal health still requires attention. Yeast infections become more common during this period due to elevated estrogen and glycogen levels in vaginal cells, which create a favorable environment for Candida growth.",
      "In the third trimester, increased pressure on the pelvic floor and continued hormonal changes can lead to increased discharge and occasional discomfort. Maintaining gentle hygiene practices becomes especially important as you approach delivery.",
      "Multi-Gyn products are formulated without hormones, preservatives, or harsh chemicals, making them generally suitable for use during pregnancy. Multi-Gyn FemiWash provides gentle daily cleansing, while ActiGel can help manage BV symptoms. However, always consult your OB-GYN before starting any new product during pregnancy.",
      "Key pregnancy intimate care tips: Use only pH-balanced, fragrance-free products for intimate hygiene. Wear breathable cotton underwear and avoid tight clothing. Stay hydrated and maintain a balanced diet rich in probiotics. Never douche during pregnancy. Report any unusual discharge, odor, or discomfort to your healthcare provider immediately.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn FemiWash", desc: "Gentle daily cleansing", href: "/products/femiwash" },
      { name: "Multi-Gyn ActiGel", desc: "Safe BV treatment", href: "/products/actigel" },
    ],
  },
  {
    id: "2qr-complex-explained",
    title: "The 2QR Complex: Science Behind Multi-Gyn",
    excerpt: "Discover how the patented 2QR Complex works at a molecular level to protect intimate health naturally, without antibiotics or hormones.",
    category: "Product Guides",
    readTime: "4 min read",
    date: "February 8, 2026",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    content: [
      "The 2QR Complex is the cornerstone of all Multi-Gyn products — a patented bio-active polysaccharide derived from Aloe barbadensis (aloe vera). The name '2QR' refers to the molecule's unique ability to provide dual-quality response: blocking harmful pathogens while preserving beneficial microflora.",
      "At a molecular level, the 2QR polysaccharides work through a mechanism called 'competitive exclusion.' Harmful bacteria need to attach to vaginal mucosal tissue to cause infection. The 2QR molecules bind to the surface receptors of these pathogens, physically preventing them from adhering to tissue. Without adhesion, the bacteria cannot colonize and are simply washed away naturally.",
      "What makes this mechanism remarkable is its selectivity. Unlike antibiotics, which kill bacteria indiscriminately (both harmful and beneficial), the 2QR Complex specifically targets pathogenic bacteria. Beneficial Lactobacillus bacteria have different surface structures and are not affected by the 2QR molecules, allowing them to continue their protective role.",
      "The 2QR Complex has been extensively studied in clinical settings. Research has demonstrated its effectiveness against common vaginal pathogens including Gardnerella vaginalis (the primary cause of BV), Candida species (causing yeast infections), and various other opportunistic bacteria.",
      "This natural, non-antibiotic approach offers several advantages: no risk of antibiotic resistance, no disruption of healthy vaginal flora, no systemic side effects, and suitability for long-term preventive use. It represents a paradigm shift in intimate health care — working with your body's natural defenses rather than against them.",
      "Each Multi-Gyn product leverages the 2QR Complex differently. ActiGel delivers it in a bio-adhesive gel for BV treatment. FemiWash incorporates it into a gentle cleansing mousse. LiquiGel combines it with moisturizing agents for dryness relief. FloraPlus pairs it with prebiotics for yeast infection management.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn ActiGel", desc: "2QR Complex for BV", href: "/products/actigel" },
      { name: "Multi-Gyn FloraPlus", desc: "2QR Complex + Prebiotics", href: "/products/floraplus" },
    ],
  },
  {
    id: "menopause-intimate-health",
    title: "Navigating Intimate Health During Menopause",
    excerpt: "Menopause can bring vaginal dryness, discomfort, and increased infection risk. Learn evidence-based strategies for maintaining comfort and confidence.",
    category: "Wellness Tips",
    readTime: "6 min read",
    date: "January 20, 2026",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    content: [
      "Menopause marks a significant transition in a woman's life, typically occurring between ages 45 and 55. As estrogen levels decline, the vaginal tissue undergoes changes collectively known as genitourinary syndrome of menopause (GSM), affecting up to 50% of postmenopausal women.",
      "The most common symptom is vaginal dryness, caused by thinning of the vaginal walls and reduced natural lubrication. This can lead to discomfort during daily activities, pain during intercourse, increased susceptibility to urinary tract infections, and a general decrease in intimate comfort and confidence.",
      "Multi-Gyn LiquiGel offers hormone-free relief for menopausal vaginal dryness. Its bio-adhesive formula provides long-lasting moisture that adheres to vaginal tissue, offering sustained comfort. Unlike hormone-based treatments, it can be used as frequently as needed without concerns about systemic hormonal effects.",
      "Beyond product use, several lifestyle strategies can help manage menopausal intimate health. Regular sexual activity or self-stimulation helps maintain blood flow to vaginal tissue, supporting natural lubrication. Pelvic floor exercises (Kegels) strengthen the muscles that support vaginal health.",
      "Dietary choices also matter. Foods rich in phytoestrogens (soy, flaxseed, legumes) may provide mild estrogenic support. Omega-3 fatty acids from fish, walnuts, and chia seeds support tissue health and may help with vaginal dryness. Staying well-hydrated is fundamental.",
      "It's important to remember that menopausal intimate changes are normal and treatable. Don't hesitate to discuss these concerns with your healthcare provider. They can help you develop a comprehensive management plan that may include products like Multi-Gyn LiquiGel alongside other appropriate interventions.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn LiquiGel", desc: "Vaginal dryness relief", href: "/products/liquigel" },
      { name: "Multi-Gyn FemiWash", desc: "Gentle daily hygiene", href: "/products/femiwash" },
    ],
  },
  {
    id: "daily-intimate-hygiene-guide",
    title: "The Complete Guide to Daily Intimate Hygiene",
    excerpt: "Proper intimate hygiene is simpler than you think. Learn the dos and don'ts of daily feminine care for optimal health and comfort.",
    category: "Wellness Tips",
    readTime: "5 min read",
    date: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    content: [
      "Good intimate hygiene is one of the most important aspects of women's health, yet it's often surrounded by misconceptions. The truth is that proper intimate care is simpler than most people think — and doing less is often better than doing more.",
      "The vagina is a self-cleaning organ. It produces discharge that naturally removes dead cells and bacteria, maintaining a healthy environment. The external intimate area (vulva), however, does benefit from gentle daily cleansing. The key is to clean the outside without disrupting the inside.",
      "Use a pH-balanced, soap-free intimate wash like Multi-Gyn FemiWash for daily external cleansing. Regular soap, shower gel, and body wash are too alkaline for the intimate area and can disrupt the natural acidic environment, leading to irritation and increased infection risk.",
      "Never douche. Despite persistent myths, douching provides no health benefits and can push bacteria further into the reproductive tract, disrupt vaginal flora, and increase the risk of BV, yeast infections, and even pelvic inflammatory disease.",
      "Clothing choices matter more than you might think. Wear breathable cotton underwear during the day. Avoid staying in wet swimwear or sweaty workout clothes for extended periods. At night, consider sleeping without underwear to allow airflow. Choose loose-fitting clothing when possible.",
      "After using the toilet, always wipe from front to back to prevent transferring bacteria from the anal area to the vagina. During menstruation, change pads or tampons regularly (every 4-6 hours) and consider using unscented products to minimize irritation.",
      "If you notice any changes in your discharge, odor, or comfort level, don't ignore them. Early attention to these signs can prevent minor imbalances from developing into full-blown infections. Products like Multi-Gyn ActiGel can be used at the first sign of discomfort for early intervention.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn FemiWash", desc: "Daily intimate hygiene", href: "/products/femiwash" },
      { name: "Multi-Gyn ActiGel", desc: "Early intervention for BV", href: "/products/actigel" },
    ],
  },
  {
    id: "antibiotics-vaginal-health",
    title: "How Antibiotics Affect Your Vaginal Health",
    excerpt: "Antibiotics can disrupt vaginal flora, leading to yeast infections and BV. Learn how to protect your intimate health during and after antibiotic treatment.",
    category: "Expert Advice",
    readTime: "5 min read",
    date: "January 10, 2026",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    content: [
      "Antibiotics are essential medicines that save lives by fighting bacterial infections. However, they work by killing bacteria — and they can't distinguish between the harmful bacteria causing your infection and the beneficial bacteria protecting your vaginal health.",
      "The vaginal microbiome is dominated by Lactobacillus bacteria, which produce lactic acid to maintain the acidic environment that keeps pathogens in check. When antibiotics reduce Lactobacillus populations, the vaginal pH rises, creating conditions favorable for opportunistic organisms like Candida yeast.",
      "Studies show that approximately 25-30% of women develop a vaginal yeast infection during or shortly after antibiotic treatment. The risk is particularly high with broad-spectrum antibiotics (like amoxicillin and ciprofloxacin) and with longer treatment courses.",
      "To minimize the impact of antibiotics on your vaginal health, consider these strategies: Take probiotics during and after your antibiotic course (at least 2 hours apart from the antibiotic). Eat probiotic-rich foods like yogurt, kefir, and sauerkraut. Maintain gentle intimate hygiene with pH-balanced products.",
      "Multi-Gyn FloraPlus is specifically designed for post-antibiotic vaginal care. Its prebiotic formula (containing Inulin) selectively nourishes beneficial Lactobacillus bacteria, helping them recover and re-establish dominance in the vaginal ecosystem. The 2QR Complex simultaneously blocks harmful organisms from taking advantage of the disrupted flora.",
      "If you're prescribed antibiotics and have a history of vaginal infections, discuss preventive strategies with your healthcare provider. They may recommend starting Multi-Gyn FloraPlus immediately after completing your antibiotic course to support vaginal flora recovery.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn FloraPlus", desc: "Post-antibiotic flora support", href: "/products/floraplus" },
      { name: "Multi-Gyn FemiWash", desc: "Gentle daily cleansing", href: "/products/femiwash" },
    ],
  },
  {
    id: "choosing-right-multigyn-product",
    title: "Which Multi-Gyn Product Is Right for You?",
    excerpt: "With four products in the range, choosing the right one depends on your specific concern. This guide helps you match your needs to the perfect solution.",
    category: "Product Guides",
    readTime: "4 min read",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    content: [
      "Multi-Gyn offers four distinct products, each targeting a specific intimate health concern. While they all share the patented 2QR Complex as their foundation, each product is formulated differently to address particular needs. Understanding these differences helps you choose the most effective solution.",
      "Multi-Gyn ActiGel is your choice for bacterial vaginosis (BV). If you're experiencing thin, grayish discharge with a fishy odor, ActiGel's concentrated 2QR Complex in a bio-adhesive gel targets the harmful bacteria causing these symptoms. It can be used both for active treatment and preventive care.",
      "Multi-Gyn FemiWash is designed for daily intimate hygiene. This gentle, soap-free mousse cleanses the external intimate area while maintaining natural pH balance. It's the foundation product that every woman can benefit from, regardless of whether she has specific concerns.",
      "Multi-Gyn LiquiGel addresses vaginal dryness. Whether caused by menopause, medication, stress, or hormonal changes, LiquiGel provides long-lasting moisture with its bio-adhesive formula. It's hormone-free and can be used as often as needed for comfort.",
      "Multi-Gyn FloraPlus targets vaginal yeast infections. Its unique combination of the 2QR Complex with prebiotics (Inulin) not only addresses active yeast symptoms but also helps restore the beneficial bacteria that prevent recurrence. It comes in convenient pre-filled applicator tubes.",
      "Many women benefit from using multiple products together. A common combination is FemiWash for daily hygiene plus a targeted product for specific concerns. For example: FemiWash daily + ActiGel when BV symptoms appear, or FemiWash daily + FloraPlus after antibiotic courses. Visit our product comparison page at the homepage for a detailed side-by-side feature breakdown.",
    ],
    relatedProducts: [
      { name: "Multi-Gyn ActiGel", desc: "BV treatment", href: "/products/actigel" },
      { name: "Multi-Gyn FemiWash", desc: "Daily hygiene", href: "/products/femiwash" },
    ],
  },
];

/* ─── ARTICLE NAV ─── */
function ArticleNav() {
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
        <div className="flex items-center gap-4">
          <Link href="/blog" className={`hidden md:inline-flex items-center gap-1.5 font-['Noto_Sans'] text-sm font-medium transition-colors duration-300 ${scrolled ? "text-violet-deep/70 hover:text-violet-deep" : "text-white/70 hover:text-white"}`}>
            <ArrowLeft size={14} /> All Articles
          </Link>
          <Link href="/#where-to-buy" className="inline-flex items-center px-5 py-2.5 bg-violet-deep text-white text-sm font-[Figtree] font-semibold rounded-full hover:bg-violet-mid transition-colors duration-300 shadow-[0_4px_16px_rgba(74,26,107,0.25)]">
            Shop Now
          </Link>
        </div>
      </nav>
    </header>
  );
}

/* ─── MAIN ARTICLE PAGE ─── */
export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = articles.find((a) => a.id === params.slug);
  useEffect(() => { window.scrollTo(0, 0); }, [params.slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <ArticleNav />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-['Figtree'] text-2xl font-bold text-violet-deep mb-4">Article Not Found</h1>
            <p className="font-['Noto_Sans'] text-foreground/60 mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-deep text-white font-['Figtree'] font-semibold rounded-full">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related articles (same category, different article)
  const relatedArticles = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ArticleNav />

      {/* ─── HERO ─── */}
      <section className="relative pt-20 md:pt-24">
        <div className="relative h-[300px] md:h-[420px] overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-deep via-violet-deep/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-teal text-white rounded-full text-[11px] font-['Figtree'] font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-white/60 text-[12px] font-['Noto_Sans']">
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <span className="text-white/40 text-[12px] font-['Noto_Sans']">{article.date}</span>
                </div>
                <h1 className="font-['Figtree'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                  {article.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE BODY ─── */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-none"
            >
              <div className="space-y-6">
                {article.content.map((paragraph, i) => (
                  <p key={i} className="font-['Noto_Sans'] text-base text-foreground/75 leading-[1.85]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-lavender-light/30 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Tag size={16} className="text-violet-deep/40" />
                  <span className="font-['Noto_Sans'] text-sm text-foreground/50">{article.category}</span>
                </div>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: article.title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-light/30 rounded-full text-sm font-['Figtree'] font-semibold text-violet-deep/70 hover:bg-lavender-light/50 transition-colors duration-200"
                >
                  <Share2 size={14} /> Share Article
                </button>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Related Products */}
              <div className="bg-white rounded-2xl border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] p-6">
                <h3 className="font-['Figtree'] text-base font-bold text-violet-deep mb-4">Related Products</h3>
                <div className="space-y-3">
                  {article.relatedProducts.map((product) => (
                    <Link key={product.href} href={product.href} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-lavender-light/20 transition-colors duration-200">
                      <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} className="text-teal" />
                      </div>
                      <div>
                        <p className="font-['Figtree'] text-sm font-semibold text-violet-deep group-hover:text-teal transition-colors">{product.name}</p>
                        <p className="font-['Noto_Sans'] text-[11px] text-foreground/45">{product.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-2xl border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] p-6">
                  <h3 className="font-['Figtree'] text-base font-bold text-violet-deep mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((ra) => (
                      <Link key={ra.id} href={`/blog/${ra.id}`} className="group block">
                        <div className="flex gap-3">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={ra.image} alt={ra.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div>
                            <p className="font-['Figtree'] text-sm font-semibold text-violet-deep leading-snug group-hover:text-teal transition-colors">{ra.title}</p>
                            <p className="font-['Noto_Sans'] text-[11px] text-foreground/40 mt-1">{ra.readTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-violet-deep to-violet-mid rounded-2xl p-6 text-center">
                <h3 className="font-['Figtree'] text-lg font-bold text-white mb-2">Need Personalized Advice?</h3>
                <p className="font-['Noto_Sans'] text-sm text-white/60 mb-5">Consult your healthcare provider for recommendations tailored to your needs.</p>
                <Link href="/#where-to-buy" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-violet-deep font-['Figtree'] font-semibold text-sm rounded-full hover:bg-white/90 transition-colors">
                  Find a Pharmacy <ArrowRight size={14} />
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ─── BACK TO BLOG ─── */}
      <section className="py-8 border-t border-lavender-light/30">
        <div className="container text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 font-['Figtree'] text-sm font-semibold text-violet-deep hover:text-teal transition-colors">
            <ArrowLeft size={14} /> Back to All Articles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
