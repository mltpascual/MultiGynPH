/*
  DESIGN: Fluid Wellness — Soft Modernism
  FAQ: Accordion-style frequently asked questions about
  intimate care, product usage, and ingredient safety.
*/
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Product Usage",
    questions: [
      {
        q: "How do I use Multi-Gyn ActiGel?",
        a: "Apply Multi-Gyn ActiGel directly using the applicator provided. For treatment, use twice daily for 5 days. For prevention, apply once every 3 days. It can be used internally and externally. Always read the product leaflet for detailed instructions.",
      },
      {
        q: "Can I use Multi-Gyn FemiWash every day?",
        a: "Yes, Multi-Gyn FemiWash is specifically designed for daily intimate hygiene. Its soap-free, pH-balanced formula is gentle enough for everyday use and won't disrupt your natural vaginal flora. Simply apply a small amount during your shower routine.",
      },
      {
        q: "How long does it take for Multi-Gyn products to work?",
        a: "Many women experience noticeable relief within hours of first use. For bacterial vaginosis treatment with ActiGel, a full course of 5 days is recommended. For dryness relief with LiquiGel, comfort is typically felt immediately upon application.",
      },
    ],
  },
  {
    category: "Safety & Ingredients",
    questions: [
      {
        q: "What is the 2QR Complex?",
        a: "The 2QR Complex is Multi-Gyn's patented bio-active polysaccharide derived from natural plant sources. It works by blocking harmful bacteria from attaching to the vaginal wall, effectively neutralizing them without disturbing your beneficial microflora. This mechanism is what makes Multi-Gyn products both effective and gentle.",
      },
      {
        q: "Are Multi-Gyn products safe during pregnancy?",
        a: "Yes, Multi-Gyn products are safe to use during pregnancy and breastfeeding. They contain no hormones, antibiotics, or harsh chemicals. However, we always recommend consulting your healthcare provider before starting any new product during pregnancy.",
      },
      {
        q: "Do Multi-Gyn products contain preservatives or parabens?",
        a: "No. Multi-Gyn products are formulated without preservatives, parabens, fragrances, or other harsh chemicals. All products are based on natural ingredients and are designed to be as gentle as possible on sensitive intimate tissue.",
      },
    ],
  },
  {
    category: "Intimate Health",
    questions: [
      {
        q: "What causes bacterial vaginosis (BV)?",
        a: "Bacterial vaginosis occurs when the natural balance of bacteria in the vagina is disrupted. Common triggers include douching, new sexual partners, antibiotics, hormonal changes, and using scented products in the intimate area. Symptoms include unusual discharge, fishy odor, and irritation.",
      },
      {
        q: "How can I maintain healthy vaginal flora?",
        a: "Maintain healthy vaginal flora by using pH-balanced intimate wash (like Multi-Gyn FemiWash), avoiding douching and scented products, wearing breathable cotton underwear, staying hydrated, and maintaining a balanced diet. Regular use of products with the 2QR Complex can also help support your natural defenses.",
      },
      {
        q: "When should I see a doctor about vaginal discomfort?",
        a: "Consult a healthcare professional if you experience persistent symptoms lasting more than a week, severe pain or swelling, unusual colored discharge (green or yellow), fever alongside vaginal symptoms, or if symptoms recur frequently. Multi-Gyn products are excellent for mild to moderate discomfort, but professional guidance is important for persistent issues.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-lavender/30 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-['Figtree'] text-base font-semibold text-violet-deep pr-4 group-hover:text-teal transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-lavender" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-['Noto_Sans'] text-sm text-foreground/65 leading-relaxed pb-5 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-light/20 via-background to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
            Common Questions
          </span>
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-violet-deep leading-tight mb-5">
            Frequently Asked Questions
          </h2>
          <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
            Everything you need to know about Multi-Gyn products, intimate care, and maintaining your natural balance.
          </p>
        </motion.div>

        {/* FAQ Grid - 3 columns by category */}
        <div className="grid lg:grid-cols-3 gap-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-light to-lavender/40 flex items-center justify-center">
                  {catIndex === 0 && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  )}
                  {catIndex === 1 && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {catIndex === 2 && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A1A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  )}
                </div>
                <h3 className="font-['Figtree'] text-lg font-bold text-violet-deep">
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(74,26,107,0.06)] border border-lavender-light/50">
                {category.questions.map((item) => (
                  <FAQItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-['Noto_Sans'] text-sm text-foreground/55 mb-3">
            Still have questions?
          </p>
          <a
            href="https://www.facebook.com/MultiGynPh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-['Figtree'] text-sm font-semibold text-teal hover:text-violet-deep transition-colors duration-300"
          >
            Reach out to us on Facebook
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
