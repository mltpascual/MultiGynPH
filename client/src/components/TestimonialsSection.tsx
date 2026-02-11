/*
  DESIGN: Fluid Wellness — Soft Modernism
  Testimonials: Carousel-style testimonial cards with
  soft backgrounds and star ratings.
*/
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    location: "Manila, Philippines",
    rating: 5,
    text: "I've been using Multi-Gyn FemiWash for six months now and the difference is incredible. It's so gentle yet effective. No more irritation or discomfort. I recommend it to all my friends!",
    product: "Multi-Gyn FemiWash",
    initials: "MS",
  },
  {
    name: "Angela Cruz",
    location: "Cebu City, Philippines",
    rating: 5,
    text: "Multi-Gyn ActiGel was a lifesaver for me. After struggling with recurring BV, this product finally gave me lasting relief. The natural formula makes me feel safe using it regularly.",
    product: "Multi-Gyn ActiGel",
    initials: "AC",
  },
  {
    name: "Patricia Reyes",
    location: "Davao City, Philippines",
    rating: 5,
    text: "As a healthcare professional, I appreciate that Multi-Gyn products are clinically tested and preservative-free. I confidently recommend them to my patients for intimate care.",
    product: "Multi-Gyn Range",
    initials: "PR",
  },
  {
    name: "Christine Lim",
    location: "Quezon City, Philippines",
    rating: 4,
    text: "The LiquiGel has been wonderful for managing dryness. It's comfortable to apply and provides long-lasting moisture. I feel so much more confident and comfortable now.",
    product: "Multi-Gyn LiquiGel",
    initials: "CL",
  },
  {
    name: "Diana Mendoza",
    location: "Makati, Philippines",
    rating: 5,
    text: "I used Multi-Gyn ActiGel during my pregnancy and it was completely safe and effective. It gave me peace of mind knowing I was using natural products during such a sensitive time.",
    product: "Multi-Gyn ActiGel",
    initials: "DM",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section id="reviews" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background to-lavender-light/30">
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
            Testimonials
          </span>
          <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-violet-deep leading-tight mb-5">
            What Women Are Saying
          </h2>
          <p className="font-['Noto_Sans'] text-base text-foreground/65 leading-relaxed">
            Real stories from real women who trust Multi-Gyn for their intimate health and comfort.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]" style={{ minWidth: visibleCount === 3 ? 'calc(33.333% - 16px)' : '100%' }}
                >
                  <div className="h-full bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(74,26,107,0.06)] border border-lavender-light/50 hover:shadow-[0_4px_30px_rgba(74,26,107,0.1)] transition-shadow duration-400">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="font-['Noto_Sans'] text-sm text-foreground/70 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Product tag */}
                    <span className="inline-block px-3 py-1 rounded-full bg-lavender-light/60 text-violet-deep font-['Noto_Sans'] text-xs font-medium mb-5">
                      {testimonial.product}
                    </span>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-lavender-light/50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-deep to-lavender flex items-center justify-center">
                        <span className="font-['Figtree'] text-sm font-bold text-white">{testimonial.initials}</span>
                      </div>
                      <div>
                        <p className="font-['Figtree'] text-sm font-semibold text-violet-deep">{testimonial.name}</p>
                        <p className="font-['Noto_Sans'] text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-white border border-lavender flex items-center justify-center text-violet-deep hover:bg-lavender-light disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-violet-deep w-6" : "bg-lavender"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full bg-white border border-lavender flex items-center justify-center text-violet-deep hover:bg-lavender-light disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
