/*
  DESIGN: Fluid Wellness — Soft Modernism
  Section: Blog Preview (Homepage)
  Shows 3 latest articles with a link to the full blog
  Colors: violet-deep headings, teal accents, lavender-light borders
  Fonts: Figtree (headings), Noto Sans (body)
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

const previewArticles = [
  {
    id: "understanding-vaginal-ph",
    title: "Understanding Vaginal pH: Why Balance Matters",
    excerpt: "Your vaginal pH plays a crucial role in preventing infections and maintaining comfort. Learn what affects it and how to keep it in the healthy range.",
    category: "Intimate Health",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
  {
    id: "bv-vs-yeast-infection",
    title: "BV vs. Yeast Infection: How to Tell the Difference",
    excerpt: "These two common conditions share symptoms but require different treatments. Here's how to identify each and choose the right care.",
    category: "Intimate Health",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    id: "2qr-complex-explained",
    title: "The 2QR Complex: Science Behind Multi-Gyn",
    excerpt: "Discover how the patented 2QR Complex works at a molecular level to protect intimate health naturally, without antibiotics.",
    category: "Product Guides",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
];

export default function BlogPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-background to-lavender-light/15">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
                <BookOpen size={16} /> Health Hub
              </span>
              <h2 className="font-['Figtree'] text-3xl sm:text-4xl font-bold text-violet-deep leading-tight">
                Intimate Health Insights
              </h2>
              <p className="font-['Noto_Sans'] text-base text-foreground/55 mt-3 max-w-lg">
                Expert-backed articles to help you understand and care for your intimate health with confidence.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-deep text-white font-['Figtree'] font-semibold text-sm rounded-full hover:bg-violet-mid transition-colors duration-300 shadow-[0_4px_16px_rgba(74,26,107,0.2)] self-start sm:self-auto"
            >
              View All Articles <ArrowRight size={14} />
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <Link href={`/blog/${article.id}`} className="group block h-full">
                  <div className="bg-white rounded-2xl border border-lavender-light/50 shadow-[0_2px_16px_rgba(74,26,107,0.04)] hover:shadow-[0_8px_32px_rgba(74,26,107,0.1)] hover:-translate-y-1 transition-all duration-400 overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
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
                      <div className="flex items-center gap-1.5 mb-3">
                        <Clock size={11} className="text-foreground/35" />
                        <span className="font-['Noto_Sans'] text-[11px] text-foreground/40">{article.readTime}</span>
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
