/*
  DESIGN: Fluid Wellness — Soft Modernism
  Hero: Full-width hero with flowing abstract background,
  split layout with bold headline and lifestyle image.
  Wave SVG divider at bottom.
*/
import { motion } from "framer-motion";

const HERO_BG = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/hero-bg.jpg";

const LIFESTYLE_IMG = "https://raw.githubusercontent.com/mltpascual/MultiGynPH/main/client/public/images/lifestyle-wellness.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A4B]/80 via-[#2D4A5E]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block font-['Figtree'] text-sm font-semibold tracking-[0.15em] uppercase text-teal mb-4 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
              Natural Feminine Care
            </span>
            <h1 className="font-['Figtree'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Your Intimate Health,{" "}
              <span className="text-teal">Naturally</span>{" "}
              Balanced
            </h1>
            <p className="font-['Noto_Sans'] text-lg text-white/85 leading-relaxed mb-8 max-w-lg">
              Clinically-proven, natural-based products that prevent and treat common vaginal discomforts. Trusted by women across the Philippines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center px-7 py-3.5 bg-teal text-white font-['Figtree'] font-semibold rounded-full hover:bg-teal-dark transition-all duration-300 shadow-[0_4px_20px_rgba(42,191,191,0.35)] hover:shadow-[0_6px_28px_rgba(42,191,191,0.5)] hover:translate-y-[-1px]"
              >
                Explore Products
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white font-['Figtree'] font-semibold rounded-full border border-white/25 hover:bg-white/25 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/15">
              <div className="text-center">
                <span className="block font-['Figtree'] text-2xl font-bold text-white">20+</span>
                <span className="font-['Noto_Sans'] text-xs text-white/60">Years Trusted</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <span className="block font-['Figtree'] text-2xl font-bold text-white">100%</span>
                <span className="font-['Noto_Sans'] text-xs text-white/60">Natural Based</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <span className="block font-['Figtree'] text-2xl font-bold text-white">50+</span>
                <span className="font-['Noto_Sans'] text-xs text-white/60">Countries</span>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block relative"
          >
            <div className="relative">
              {/* Decorative blob behind image */}
              <div className="absolute -inset-8 bg-gradient-to-br from-teal/25 to-[#1B3A4B]/15 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl" />
              <img
                src={LIFESTYLE_IMG}
                alt="Confident woman with healthy, radiant skin"
                className="relative w-full max-w-md mx-auto rounded-[32px] shadow-2xl object-cover aspect-[3/4]"
                loading="eager"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ABFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Figtree'] text-sm font-semibold text-[#1B3A4B]">Clinically Proven</p>
                    <p className="font-['Noto_Sans'] text-xs text-muted-foreground">Dermatologist Tested</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: '100px' }}>
          <path
            d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 40C672 52 768 68 864 72C960 76 1056 68 1152 56C1248 44 1344 28 1392 20L1440 12V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="oklch(0.98 0.005 80)"
          />
        </svg>
      </div>
    </section>
  );
}
