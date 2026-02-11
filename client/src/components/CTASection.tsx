/*
  DESIGN: Fluid Wellness — Soft Modernism
  CTA: Bold call-to-action with gradient background,
  encouraging users to explore products or find retailers.
*/
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-deep via-violet-mid to-teal-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(42,191,191,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(196,167,215,0.2),transparent_50%)]" />

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4">
              Take the First Step
            </span>
            <h2 className="font-['Figtree'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
              Start Your Journey to{" "}
              <span className="text-teal">Better Intimate Health</span>{" "}
              Today
            </h2>
            <p className="font-['Noto_Sans'] text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Discover the Multi-Gyn product that's right for you. Available at leading pharmacies and online retailers across the Philippines.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://shopee.ph/list/multi%20gyn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-teal text-white font-['Figtree'] font-semibold rounded-full hover:bg-teal-dark transition-all duration-300 shadow-[0_4px_24px_rgba(42,191,191,0.35)] hover:shadow-[0_6px_32px_rgba(42,191,191,0.5)] hover:translate-y-[-2px] text-base"
              >
                Shop on Shopee
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/MultiGynPh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full border border-white/25 hover:bg-white/20 transition-all duration-300 text-base"
              >
                Follow Us on Facebook
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/15">
              <div className="flex items-center gap-2 text-white/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="font-['Noto_Sans'] text-sm">Clinically Proven</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
                </svg>
                <span className="font-['Noto_Sans'] text-sm">Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="font-['Noto_Sans'] text-sm">Dermatologist Tested</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
